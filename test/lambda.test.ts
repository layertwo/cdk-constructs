import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Architecture, AssetCode, Runtime } from "aws-cdk-lib/aws-lambda";
import { PythonFunction, uvCode } from "../src/lambda";

function tempProject(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), "uv-code-"));
}

function stack(): Stack {
  const app = new App({ context: { "aws:cdk:bundling-stacks": [] } });
  return new Stack(app, "S", {
    env: { account: "123456789012", region: "us-east-1" },
  });
}

function handlerOf(fn: PythonFunction): string {
  const template = Template.fromStack(Stack.of(fn) as Stack);
  const fns = template.findResources("AWS::Lambda::Function");
  return Object.values(fns)[0].Properties.Handler;
}

describe("uvCode", () => {
  it("returns an asset code", () => {
    const code = uvCode({ rootDir: tempProject() });
    expect(code).toBeInstanceOf(AssetCode);
  });
});

describe("PythonFunction", () => {
  const rootDir = tempProject();

  it("resolves a plain index file", () => {
    const fn = new PythonFunction(stack(), "Fn", {
      rootDir,
      index: "index.py",
      handler: "handle",
    });
    expect(handlerOf(fn)).toBe("index.handle");
  });

  it("resolves a package __init__ index", () => {
    const fn = new PythonFunction(stack(), "Fn", {
      rootDir,
      index: "src/entrypoint/__init__.py",
      handler: "storage_api_handler",
    });
    expect(handlerOf(fn)).toBe("src.entrypoint.__init__.storage_api_handler");
  });

  it("defaults to Python 3.15", () => {
    const fn = new PythonFunction(stack(), "Fn", { rootDir });
    expect(fn.runtime.name).toBe("python3.15");
  });

  it("rejects a bundling platform that disagrees with the architecture", () => {
    expect(
      () =>
        new PythonFunction(stack(), "Fn", {
          rootDir,
          architecture: Architecture.X86_64,
          bundling: { platform: "linux/arm64" },
        }),
    ).toThrow("bundling.platform must match the function architecture");
  });

  it("does not need a container engine when bundling is disabled", () => {
    const previous = process.env.CDK_DOCKER;
    process.env.CDK_DOCKER = "/nonexistent/container-engine";
    try {
      const fn = new PythonFunction(stack(), "Fn", { rootDir });
      expect(handlerOf(fn)).toBe("index.handler");
    } finally {
      if (previous === undefined) {
        delete process.env.CDK_DOCKER;
      } else {
        process.env.CDK_DOCKER = previous;
      }
    }
  });

  it("defaults to ARM64", () => {
    const fn = new PythonFunction(stack(), "Fn", { rootDir });
    expect(fn.architecture).toBe(Architecture.ARM_64);
  });

  it("rejects a non-Python runtime", () => {
    expect(
      () =>
        new PythonFunction(stack(), "Fn", {
          rootDir,
          runtime: Runtime.NODEJS_22_X,
        }),
    ).toThrow("only supports Python runtimes");
  });

  it("rejects a bundling runtime that disagrees with the function", () => {
    expect(
      () =>
        new PythonFunction(stack(), "Fn", {
          rootDir,
          runtime: Runtime.PYTHON_3_13,
          bundling: { runtime: Runtime.PYTHON_3_12 },
        }),
    ).toThrow("bundling.runtime must match the function runtime");
  });

  it("rejects a bundling architecture that disagrees with the function", () => {
    expect(
      () =>
        new PythonFunction(stack(), "Fn", {
          rootDir,
          architecture: Architecture.ARM_64,
          bundling: { architecture: Architecture.X86_64 },
        }),
    ).toThrow("bundling.architecture must match the function architecture");
  });
});

describe("asset hash", () => {
  const fixture = path.join(__dirname, "resources/basic_app");

  function copyFixture(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "uv-hash-"));
    fs.cpSync(fixture, dir, { recursive: true });
    return dir;
  }

  function lambdaCodes(rootDir: string, count = 1): string[] {
    const app = new App({ context: { "aws:cdk:bundling-stacks": [] } });
    const st = new Stack(app, "S");
    for (let i = 0; i < count; i++) {
      new PythonFunction(st, `Fn${i}`, { rootDir });
    }
    const resources = Template.fromStack(st).toJSON().Resources;
    return Object.values(resources)
      .filter((r: any) => r.Type === "AWS::Lambda::Function")
      .map((r: any) => r.Properties.Code.S3Key);
  }

  it("is stable for an unchanged project", () => {
    const dir = copyFixture();
    expect(lambdaCodes(dir)).toEqual(lambdaCodes(dir));
  });

  it("ignores caches and virtualenvs", () => {
    const dir = copyFixture();
    const before = lambdaCodes(dir);
    fs.mkdirSync(path.join(dir, "__pycache__"), { recursive: true });
    fs.writeFileSync(path.join(dir, "__pycache__", "x.pyc"), "cache");
    fs.mkdirSync(path.join(dir, ".venv", "lib"), { recursive: true });
    fs.writeFileSync(path.join(dir, ".venv", "lib", "junk.py"), "venv");
    expect(lambdaCodes(dir)).toEqual(before);
  });

  it("changes when bundled source changes", () => {
    const dir = copyFixture();
    const before = lambdaCodes(dir);
    fs.appendFileSync(path.join(dir, "index.py"), "\n# changed\n");
    expect(lambdaCodes(dir)).not.toEqual(before);
  });

  it("shares one asset between functions on the same root", () => {
    const [a, b] = lambdaCodes(copyFixture(), 2);
    expect(a).toBe(b);
  });
  it("excludes caller-supplied paths from the asset hash", () => {
    const dir = copyFixture();
    const key = (): string => {
      const app = new App({ context: { "aws:cdk:bundling-stacks": [] } });
      const st = new Stack(app, "S");
      new PythonFunction(st, "Fn", {
        rootDir: dir,
        hashExcludes: ["**/notes/**"],
      });
      const resources = Template.fromStack(st).toJSON().Resources;
      const fn = Object.values(resources).find(
        (r: any) => r.Type === "AWS::Lambda::Function",
      ) as any;
      return fn.Properties.Code.S3Key;
    };
    const before = key();
    fs.mkdirSync(path.join(dir, "notes"));
    fs.writeFileSync(path.join(dir, "notes", "todo.txt"), "changed");
    expect(key()).toBe(before);
  });
});
