import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import {
  DEFAULT_ASSET_EXCLUDES,
  DEFAULT_HASH_EXCLUDES,
  UvBundling,
} from "../src/uv-bundling";

describe("UvBundling", () => {
  it("defaults to Python 3.15 and ARM64", () => {
    const bundling = new UvBundling({});
    expect(bundling.pythonVersion).toBe("3.15");
    expect(bundling.platform).toBe("linux/arm64");
  });

  it("derives platform and python version from props", () => {
    const bundling = new UvBundling({
      runtime: Runtime.PYTHON_3_12,
      architecture: Architecture.X86_64,
    });
    expect(bundling.pythonVersion).toBe("3.12");
    expect(bundling.platform).toBe("linux/amd64");
  });

  it("rejects non-Python runtimes", () => {
    expect(() => new UvBundling({ runtime: Runtime.NODEJS_22_X })).toThrow(
      "only supports Python runtimes",
    );
  });

  it("caps uv concurrency", () => {
    const bundling = new UvBundling({});
    expect(bundling.environment).toEqual({
      UV_CONCURRENT_DOWNLOADERS: "4",
      UV_CONCURRENT_BUILDS: "2",
    });
  });

  it("keeps caller environment alongside the concurrency caps", () => {
    const bundling = new UvBundling({
      environment: { UV_INDEX_URL: "https://example.test/simple" },
    });
    expect(bundling.environment).toEqual({
      UV_INDEX_URL: "https://example.test/simple",
      UV_CONCURRENT_DOWNLOADERS: "4",
      UV_CONCURRENT_BUILDS: "2",
    });
  });

  it("fails the bundle when the copy fails", () => {
    const script = new UvBundling({}).command[2];
    expect(script.startsWith("set -o pipefail")).toBe(true);
  });

  it("excludes build tooling and tests from the copy and the hash", () => {
    expect(DEFAULT_ASSET_EXCLUDES).toContain("tests");
    expect(DEFAULT_HASH_EXCLUDES).toContain("**/tests/**");
    expect(DEFAULT_HASH_EXCLUDES).toContain("**/node_modules/**");
  });

  it("removes the uv install lock with the virtualenv", () => {
    expect(new UvBundling({}).command[2]).toContain(
      "rm -rf /asset-output/.venv /asset-output/.lock",
    );
  });

  it("ignores macOS metadata and bytecode at any depth", () => {
    expect(DEFAULT_HASH_EXCLUDES).toContain("**/.DS_Store");
    expect(DEFAULT_HASH_EXCLUDES).toContain("**/*.pyc");
  });

  it("honours an explicit platform over the architecture", () => {
    const bundling = new UvBundling({
      architecture: Architecture.X86_64,
      platform: "linux/arm64",
    });
    expect(bundling.platform).toBe("linux/arm64");
  });

  it("changes the image identity when build options change", () => {
    const base = new UvBundling({}).image.toJSON();
    expect(new UvBundling({}).image.toJSON()).toBe(base);
    expect(
      new UvBundling({
        cacheTo: { type: "gha", params: { mode: "max" } },
      }).image.toJSON(),
    ).not.toBe(base);
    expect(
      new UvBundling({ buildArgs: { UV_VERSION: "0.13.5" } }).image.toJSON(),
    ).not.toBe(base);
  });

  it("copies source with excludes, then installs with uv, then drops .venv", () => {
    const bundling = new UvBundling({
      assetExcludes: ["tests/", ".git/"],
      commandHooks: {
        beforeBundling: () => ["test -f generated.py"],
        afterBundling: () => ["echo done"],
      },
    });
    const script = bundling.command[2];
    expect(script).toContain("tar");
    expect(script).toContain("--exclude=tests");
    expect(script).toContain("--exclude=.git");
    expect(script).not.toContain("--exclude=tests/");
    expect(script.indexOf("test -f generated.py")).toBeLessThan(
      script.indexOf("tar"),
    );
    expect(script.indexOf("echo done")).toBeGreaterThan(
      script.indexOf(".venv"),
    );
    expect(script).toContain("uv sync --no-dev --frozen");
    expect(script).toContain("uv export --no-dev --frozen");
    expect(script).toContain(
      "uv pip install -r /tmp/requirements.txt --target .",
    );
    expect(script).toContain("rm -rf /asset-output/.venv");
  });
});
