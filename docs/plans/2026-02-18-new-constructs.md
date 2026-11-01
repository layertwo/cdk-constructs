# New Constructs Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add `SecureBucket`, `SecureTable`, and `DnsValidatedCertificate` constructs extracted from common patterns across layertwo CDK repos, and reorganize source files by AWS service.

**Architecture:** Each construct extends its underlying CDK class (`Bucket`, `Table`, `Certificate`) and enforces opinionated security defaults that cannot be overridden at runtime. Props interfaces extend the base CDK props; hardcoded fields are silently overridden after the caller's spread and documented in JSDoc. Tests use `aws-cdk-lib/assertions` `Template.fromStack` to assert on synthesized CloudFormation.

**Tech Stack:** TypeScript, AWS CDK 2.200.0, JSII 5.9, Jest 30, ts-jest

---

### Task 1: Rename IAM source and test files

Rename `github-oidc.ts` → `iam.ts` to match the service-per-file convention, and update all references.

**Files:**
- Rename: `src/github-oidc.ts` → `src/iam.ts`
- Rename: `test/github-oidc.test.ts` → `test/iam.test.ts`
- Modify: `src/index.ts`

**Step 1: Rename the source and test files**

```bash
git mv src/github-oidc.ts src/iam.ts
git mv test/github-oidc.test.ts test/iam.test.ts
```

**Step 2: Update the import in `test/iam.test.ts`**

The file currently imports from `../src`. No change needed — it imports `GitHubOidcRole` from the barrel, which still works. Verify the import line:

```typescript
import { GitHubOidcRole } from "../src";
```

No change needed.

**Step 3: Update `src/index.ts` to import from `./iam`**

Replace the existing content:

```typescript
export * from "./iam";
```

**Step 4: Run tests to confirm nothing broke**

```bash
yarn test
```

Expected: all existing tests pass.

**Step 5: Commit**

```bash
git add src/iam.ts src/index.ts test/iam.test.ts
git commit -m "refactor: rename github-oidc files to iam for service-per-file convention"
```

---

### Task 2: Implement `SecureBucket`

**Files:**
- Create: `src/s3.ts`
- Create: `test/s3.test.ts`
- Modify: `src/index.ts`

**Step 1: Write the failing tests in `test/s3.test.ts`**

```typescript
import { Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import { SecureBucket } from "../src";

describe("SecureBucket", () => {
  describe("security defaults", () => {
    let template: Template;

    beforeEach(() => {
      const stack = new Stack();
      new SecureBucket(stack, "Bucket");
      template = Template.fromStack(stack);
    });

    it("blocks all public access", () => {
      template.hasResourceProperties("AWS::S3::Bucket", {
        PublicAccessBlockConfiguration: {
          BlockPublicAcls: true,
          BlockPublicPolicy: true,
          IgnorePublicAcls: true,
          RestrictPublicBuckets: true,
        },
      });
    });

    it("enables S3-managed encryption", () => {
      template.hasResourceProperties("AWS::S3::Bucket", {
        BucketEncryption: {
          ServerSideEncryptionConfiguration: [
            {
              ServerSideEncryptionByDefault: {
                SSEAlgorithm: "AES256",
              },
            },
          ],
        },
      });
    });

    it("enforces SSL by denying non-HTTPS requests", () => {
      template.hasResourceProperties("AWS::S3::BucketPolicy", {
        PolicyDocument: {
          Statement: Match.arrayWith([
            Match.objectLike({
              Effect: "Deny",
              Condition: {
                Bool: { "aws:SecureTransport": "false" },
              },
            }),
          ]),
        },
      });
    });

    it("enables versioning by default", () => {
      template.hasResourceProperties("AWS::S3::Bucket", {
        VersioningConfiguration: { Status: "Enabled" },
      });
    });
  });

  it("allows versioning to be disabled", () => {
    const stack = new Stack();
    new SecureBucket(stack, "Bucket", { versioned: false });
    const template = Template.fromStack(stack);
    template.hasResourceProperties("AWS::S3::Bucket", {
      VersioningConfiguration: Match.absent(),
    });
  });
});
```

**Step 2: Run tests to confirm they fail**

```bash
yarn test test/s3.test.ts
```

Expected: FAIL — `Cannot find module '../src'` or `SecureBucket is not exported`.

**Step 3: Implement `src/s3.ts`**

```typescript
import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
  BucketProps,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

/**
 * Properties for SecureBucket.
 *
 * Hardcoded (not overridable): blockPublicAccess, encryption, enforceSSL.
 * These are always applied regardless of what is passed in props.
 */
export interface SecureBucketProps extends BucketProps {}

/**
 * An S3 Bucket with security defaults enforced:
 * - All public access blocked
 * - S3-managed encryption (AES256)
 * - SSL enforced (HTTP requests denied)
 * - Versioning enabled by default (opt out with `versioned: false`)
 */
export class SecureBucket extends Bucket {
  constructor(scope: Construct, id: string, props?: SecureBucketProps) {
    super(scope, id, {
      versioned: true,
      ...props,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
    });
  }
}
```

**Step 4: Export from `src/index.ts`**

```typescript
export * from "./iam";
export * from "./s3";
```

**Step 5: Run tests to confirm they pass**

```bash
yarn test test/s3.test.ts
```

Expected: PASS — all 5 tests green.

**Step 6: Commit**

```bash
git add src/s3.ts test/s3.test.ts src/index.ts
git commit -m "feat: add SecureBucket construct with security defaults"
```

---

### Task 3: Implement `SecureTable`

**Files:**
- Create: `src/dynamodb.ts`
- Create: `test/dynamodb.test.ts`
- Modify: `src/index.ts`

**Step 1: Write the failing tests in `test/dynamodb.test.ts`**

```typescript
import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { AttributeType } from "aws-cdk-lib/aws-dynamodb";
import { SecureTable } from "../src";

const tableProps = {
  partitionKey: { name: "pk", type: AttributeType.STRING },
};

describe("SecureTable", () => {
  let template: Template;

  beforeEach(() => {
    const stack = new Stack();
    new SecureTable(stack, "Table", tableProps);
    template = Template.fromStack(stack);
  });

  it("enables point-in-time recovery", () => {
    template.hasResourceProperties("AWS::DynamoDB::Table", {
      PointInTimeRecoverySpecification: {
        PointInTimeRecoveryEnabled: true,
      },
    });
  });

  it("uses on-demand billing", () => {
    template.hasResourceProperties("AWS::DynamoDB::Table", {
      BillingMode: "PAY_PER_REQUEST",
    });
  });
});
```

**Step 2: Run tests to confirm they fail**

```bash
yarn test test/dynamodb.test.ts
```

Expected: FAIL — `SecureTable is not exported`.

**Step 3: Implement `src/dynamodb.ts`**

```typescript
import { BillingMode, Table, TableProps } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

/**
 * Properties for SecureTable.
 *
 * Hardcoded (not overridable): billingMode, pointInTimeRecovery.
 * These are always applied regardless of what is passed in props.
 */
export interface SecureTableProps extends TableProps {}

/**
 * A DynamoDB Table with best-practice defaults enforced:
 * - On-demand billing (PAY_PER_REQUEST)
 * - Point-in-time recovery always enabled
 */
export class SecureTable extends Table {
  constructor(scope: Construct, id: string, props: SecureTableProps) {
    super(scope, id, {
      ...props,
      billingMode: BillingMode.PAY_PER_REQUEST,
      pointInTimeRecovery: true,
    });
  }
}
```

**Step 4: Export from `src/index.ts`**

```typescript
export * from "./iam";
export * from "./s3";
export * from "./dynamodb";
```

**Step 5: Run tests to confirm they pass**

```bash
yarn test test/dynamodb.test.ts
```

Expected: PASS — both tests green.

**Step 6: Commit**

```bash
git add src/dynamodb.ts test/dynamodb.test.ts src/index.ts
git commit -m "feat: add SecureTable construct with PITR and on-demand billing"
```

---

### Task 4: Implement `DnsValidatedCertificate`

**Files:**
- Create: `src/acm.ts`
- Create: `test/acm.test.ts`
- Modify: `src/index.ts`

**Step 1: Write the failing tests in `test/acm.test.ts`**

```typescript
import { Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { DnsValidatedCertificate } from "../src";

describe("DnsValidatedCertificate", () => {
  let template: Template;

  beforeEach(() => {
    const stack = new Stack();
    const hostedZone = HostedZone.fromHostedZoneAttributes(stack, "Zone", {
      hostedZoneId: "Z123456789",
      zoneName: "example.com",
    });
    new DnsValidatedCertificate(stack, "Cert", {
      domainName: "example.com",
      hostedZone,
    });
    template = Template.fromStack(stack);
  });

  it("uses DNS validation", () => {
    template.hasResourceProperties("AWS::CertificateManager::Certificate", {
      ValidationMethod: "DNS",
    });
  });

  it("sets the correct domain name", () => {
    template.hasResourceProperties("AWS::CertificateManager::Certificate", {
      DomainName: "example.com",
    });
  });

  it("includes domain validation options for the hosted zone", () => {
    template.hasResourceProperties("AWS::CertificateManager::Certificate", {
      DomainValidationOptions: Match.arrayWith([
        Match.objectLike({
          DomainName: "example.com",
          HostedZoneId: "Z123456789",
        }),
      ]),
    });
  });
});
```

**Step 2: Run tests to confirm they fail**

```bash
yarn test test/acm.test.ts
```

Expected: FAIL — `DnsValidatedCertificate is not exported`.

**Step 3: Implement `src/acm.ts`**

```typescript
import {
  Certificate,
  CertificateProps,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { IHostedZone } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";

/**
 * Properties for DnsValidatedCertificate.
 *
 * Replaces the generic `validation` prop with a required `hostedZone`.
 * DNS validation is always used; do not pass `validation` directly.
 */
export interface DnsValidatedCertificateProps extends CertificateProps {
  /**
   * The Route53 hosted zone to use for DNS validation.
   */
  readonly hostedZone: IHostedZone;
}

/**
 * An ACM Certificate that always uses Route53 DNS validation.
 * Pass a `hostedZone` instead of a `validation` prop.
 */
export class DnsValidatedCertificate extends Certificate {
  constructor(
    scope: Construct,
    id: string,
    props: DnsValidatedCertificateProps,
  ) {
    const { hostedZone, ...rest } = props;
    super(scope, id, {
      ...rest,
      validation: CertificateValidation.fromDns(hostedZone),
    });
  }
}
```

**Step 4: Export from `src/index.ts`**

```typescript
export * from "./iam";
export * from "./s3";
export * from "./dynamodb";
export * from "./acm";
```

**Step 5: Run tests to confirm they pass**

```bash
yarn test test/acm.test.ts
```

Expected: PASS — all three tests green.

**Step 6: Commit**

```bash
git add src/acm.ts test/acm.test.ts src/index.ts
git commit -m "feat: add DnsValidatedCertificate construct"
```

---

### Task 5: Full build and verify

Run the full build to confirm compilation, all tests, and JSII packaging succeed together.

**Step 1: Run the full build**

```bash
yarn build
```

Expected: compiles without errors, all tests pass, JSII packaging succeeds.

**Step 2: If build fails due to JSII complaints about `Omit` or destructuring**

JSII is strict about TypeScript features in public APIs. If you see errors like `"Omit<>" is not supported` or errors about rest destructuring in constructors, apply these fixes:

- For `DnsValidatedCertificate`: instead of destructuring `hostedZone` out of `props`, access it directly:

  ```typescript
  super(scope, id, {
    ...props,
    validation: CertificateValidation.fromDns(props.hostedZone),
  });
  ```

- For any interface using `Omit`: replace with a plain `extends` (as already written in this plan — `Omit` is not used above, but note the `validation` field is still present in `DnsValidatedCertificateProps` via `CertificateProps`. If JSII complains, remove the `extends CertificateProps` and list individual props explicitly.

**Step 3: Commit final build artifacts if needed**

If `API.md` is auto-regenerated by the build:

```bash
git add API.md
git commit -m "chore: regenerate API.md with new constructs"
```
