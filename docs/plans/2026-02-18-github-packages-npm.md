# GitHub Packages npm Publishing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace registry.npmjs.org npm publishing with GitHub Packages (npm.pkg.github.com) using the built-in GITHUB_TOKEN.

**Architecture:** Update `.projenrc.ts` with four projen options to change the package name to a scoped form, point the registry at GitHub Packages, swap the auth token to GITHUB_TOKEN, and grant the release workflow `packages: write` permission. Run `npx projen` to regenerate all managed files.

**Tech Stack:** projen (`awscdk.AwsCdkConstructLibrary`), GitHub Actions, publib-npm

---

### Task 1: Update `.projenrc.ts` with GitHub Packages options

**Files:**
- Modify: `.projenrc.ts`

**Step 1: Open the file and confirm current state**

Read `.projenrc.ts` and verify it contains:
- `name: "layertwo-cdk-constructs"`
- `publishToPypi: { ... }` block
- `mutableBuild: true`
- `depsUpgrade: false`

**Step 2: Add the four new options**

Edit `.projenrc.ts` so the project constructor looks like this (add the four lines after `depsUpgrade: false`):

```typescript
import { awscdk, github } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Lucas Messenger",
  authorAddress: "1335960+layertwo@users.noreply.github.com",
  cdkVersion: "2.200.0",
  defaultReleaseBranch: "mainline",
  jsiiVersion: "~5.9.0",
  name: "layertwo-cdk-constructs",
  projenrcTs: true,
  repositoryUrl: "https://github.com/layertwo/cdk-constructs",
  renovatebot: true,
  mergify: false,
  vscode: true,
  prettier: true,
  publishToPypi: {
    distName: "layertwo-cdk-constructs",
    module: "layertwo_cdk_constructs",
  },
  mutableBuild: true,
  depsUpgrade: false,
  packageName: "@layertwo/cdk-constructs",
  npmRegistryUrl: "https://npm.pkg.github.com",
  npmTokenSecret: "GITHUB_TOKEN",
  workflowPermissions: {
    packages: github.workflows.JobPermission.WRITE,
  },
});
project.synth();
```

Note the import line changes from `import { awscdk } from "projen"` to `import { awscdk, github } from "projen"` to access `JobPermission`.

**Step 3: Run projen to regenerate managed files**

```bash
npx projen
```

Expected: projen regenerates `.github/workflows/release.yml`, `package.json`, `renovate.json5`, and related files without errors.

**Step 4: Verify the release workflow is correct**

Open `.github/workflows/release.yml` and confirm:

1. The `release_npm` job's `env` block contains:
   ```yaml
   NPM_REGISTRY: npm.pkg.github.com
   NPM_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```
   (and `NPM_CONFIG_PROVENANCE: "true"` is gone)

2. The `release` job (or workflow-level) has `packages: write` permission.

3. `NPM_DIST_TAG: latest` is still present.

**Step 5: Verify package.json has the scoped name**

Open `package.json` and confirm:
```json
"name": "@layertwo/cdk-constructs"
```

**Step 6: Commit**

```bash
git add .projenrc.ts .github/workflows/release.yml package.json
git add .gitattributes .gitignore .projen/files.json .projen/tasks.json renovate.json5
git commit -m "feat: publish npm package to GitHub Packages"
```

---

### Task 2: Push and verify the release workflow

**Files:** none (CI verification)

**Step 1: Push to mainline**

```bash
git push
```

**Step 2: Check the Actions tab**

Go to `https://github.com/layertwo/cdk-constructs/actions` and confirm:
- The `release` workflow triggered on push to `mainline`
- If a new version is released, the `release_npm` job succeeds
- The package appears at `https://github.com/layertwo?tab=packages`

> **Note:** If no version bump is detected, no `release_npm` job will run — that is expected behaviour. To trigger a real publish, a commit with a conventional-commits feat/fix message and a version bump is needed.
