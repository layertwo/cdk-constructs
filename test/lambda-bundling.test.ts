import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { App, Stack } from "aws-cdk-lib";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { PythonFunction } from "../src/lambda";

const dockerAvailable = (() => {
  for (const cmd of ["docker info", "podman info"]) {
    try {
      execSync(cmd, { stdio: "ignore" });
      return true;
    } catch {}
  }
  return false;
})();

const maybe = dockerAvailable ? it : it.skip;

jest.setTimeout(900_000);

function synthAsset(rootDir: string): string {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdk-out-"));
  const app = new App({ outdir });
  const stack = new Stack(app, "S");
  new PythonFunction(stack, "Fn", {
    rootDir,
    architecture: Architecture.X86_64,
  });

  app.synth();

  const assets = fs
    .readdirSync(outdir)
    .filter((entry) => entry.startsWith("asset."))
    .map((entry) => path.join(outdir, entry))
    .filter((entry) => fs.statSync(entry).isDirectory());

  expect(assets).toHaveLength(1);
  return assets[0];
}

maybe("bundles the fixture into a Lambda asset", () => {
  const project = fs.mkdtempSync(path.join(os.tmpdir(), "uv-bundle-"));
  fs.cpSync(path.join(__dirname, "resources/basic_app"), project, {
    recursive: true,
  });
  fs.mkdirSync(path.join(project, "tests"));
  fs.writeFileSync(path.join(project, "tests", "test_thing.py"), "pass\n");
  fs.mkdirSync(path.join(project, "__pycache__"));
  fs.writeFileSync(path.join(project, "__pycache__", "planted.pyc"), "x");

  const assetDir = synthAsset(project);

  expect(fs.existsSync(path.join(assetDir, "index.py"))).toBe(true);
  expect(fs.existsSync(path.join(assetDir, "six.py"))).toBe(true);
  expect(fs.existsSync(path.join(assetDir, ".venv"))).toBe(false);
  expect(fs.existsSync(path.join(assetDir, "tests"))).toBe(false);
  expect(fs.existsSync(path.join(assetDir, "__pycache__", "planted.pyc"))).toBe(
    false,
  );
  expect(fs.readdirSync(assetDir).filter((f) => f.endsWith(".pth"))).toEqual(
    [],
  );
});

maybe("fails loudly when a dependency has no wheel", () => {
  expect(() => synthAsset(path.join(__dirname, "resources/sdist_app"))).toThrow(
    /uv|build|error/i,
  );
});
