import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import * as path from "node:path";
import {
  BundlingFileAccess,
  DockerBuildOptions,
  DockerCacheOption,
  DockerImage,
  DockerRunOptions,
  DockerVolume,
} from "aws-cdk-lib";
import { Architecture, Runtime, RuntimeFamily } from "aws-cdk-lib/aws-lambda";

export const DEFAULT_RUNTIME = new Runtime("python3.15", RuntimeFamily.PYTHON);

export const DEFAULT_ASSET_EXCLUDES = [
  ".venv",
  "node_modules",
  "cdk.out",
  ".git",
  "__pycache__",
  "tests",
  ".cache",
];

export const DEFAULT_HASH_EXCLUDES = [
  ...DEFAULT_ASSET_EXCLUDES.map((name) => `**/${name}/**`),
  "**/*.pyc",
  "**/.DS_Store",
];

export interface ICommandHooks {
  beforeBundling(inputDir: string, outputDir: string): string[];
  afterBundling(inputDir: string, outputDir: string): string[];
}

export interface UvBundlingProps extends DockerRunOptions {
  readonly runtime?: Runtime;
  readonly architecture?: Architecture;
  readonly image?: DockerImage;
  readonly buildArgs?: { [key: string]: string };
  readonly cacheFrom?: DockerCacheOption[];
  readonly cacheTo?: DockerCacheOption;
  readonly assetExcludes?: string[];
  readonly commandHooks?: ICommandHooks;
  readonly bundlingFileAccess?: BundlingFileAccess;
}

export class UvBundling {
  public readonly runtime: Runtime;
  public readonly pythonVersion: string;
  public readonly platform: string;

  public readonly command: string[];
  public readonly entrypoint?: string[];
  public readonly environment?: { [key: string]: string };
  public readonly volumes?: DockerVolume[];
  public readonly volumesFrom?: string[];
  public readonly workingDirectory?: string;
  public readonly user?: string;
  public readonly securityOpt?: string;
  public readonly network?: string;
  public readonly bundlingFileAccess?: BundlingFileAccess;

  private readonly props: UvBundlingProps;
  private _image?: DockerImage;

  declare public readonly image: DockerImage;

  constructor(props: UvBundlingProps) {
    this.props = props;
    this.runtime = props.runtime ?? DEFAULT_RUNTIME;

    if (this.runtime.family !== RuntimeFamily.PYTHON) {
      throw new Error("UvBundling only supports Python runtimes");
    }

    this.pythonVersion = this.runtime.name.replace("python", "");
    this.platform =
      props.platform ??
      (props.architecture ?? Architecture.ARM_64).dockerPlatform;

    this.command = props.command ?? this.createCommand();
    this.entrypoint = props.entrypoint;
    this.environment = {
      ...props.environment,
      UV_CONCURRENT_DOWNLOADERS: "4",
      UV_CONCURRENT_BUILDS: "2",
    };
    this.volumes = props.volumes;
    this.volumesFrom = props.volumesFrom;
    this.workingDirectory = props.workingDirectory;
    this.user = props.user;
    this.securityOpt = props.securityOpt;
    this.network = props.network;
    this.bundlingFileAccess = props.bundlingFileAccess;

    Object.defineProperty(this, "image", {
      enumerable: true,
      configurable: true,
      get: () => (this._image ??= this.createImage()),
    });
  }

  private createCommand(): string[] {
    const inputDir = "/asset-input";
    const outputDir = "/asset-output";
    const assetExcludes = this.props.assetExcludes ?? DEFAULT_ASSET_EXCLUDES;
    const hooks = this.props.commandHooks;

    const excludes = assetExcludes
      .map((exclude) => `--exclude=${exclude.replace(/\/+$/, "")}`)
      .join(" ");

    const steps = [
      "set -o pipefail",
      ...(hooks?.beforeBundling(inputDir, outputDir) ?? []),
      `tar -C ${inputDir} -cf - ${excludes} . | tar -C ${outputDir} -xf -`,
      `cd ${outputDir}`,
      "uv sync --no-dev --frozen --no-editable --link-mode=copy",
      "uv export --no-dev --frozen --no-editable --format requirements-txt > /tmp/requirements.txt",
      "uv pip install -r /tmp/requirements.txt --target . --reinstall --compile-bytecode --link-mode=copy",
      `rm -rf ${outputDir}/.venv ${outputDir}/.lock`,
      ...(hooks?.afterBundling(inputDir, outputDir) ?? []),
    ];

    return ["bash", "-c", steps.join(" && ")];
  }

  private createImage(): DockerImage {
    if (this.props.image) {
      return this.props.image;
    }

    return new LazyBuildImage(path.join(__dirname, "..", "resources"), {
      platform: this.platform,
      buildArgs: {
        UV_VERSION: "0.13.6",
        ...this.props.buildArgs,
        PYTHON_VERSION: this.pythonVersion,
      },
      cacheFrom: this.props.cacheFrom,
      cacheTo: this.props.cacheTo,
    });
  }
}

class LazyBuildImage extends DockerImage {
  private built?: DockerImage;

  constructor(
    private readonly buildDir: string,
    private readonly buildOptions: DockerBuildOptions,
  ) {
    super(`cdk-uv-${tagFor(buildDir, buildOptions)}`);
  }

  public run(options: DockerRunOptions = {}): void {
    this.build().run(options);
  }

  private build(): DockerImage {
    return (this.built ??= DockerImage.fromBuild(
      this.buildDir,
      this.buildOptions,
    ));
  }
}

function tagFor(buildDir: string, options: DockerBuildOptions): string {
  return createHash("sha256")
    .update(readFileSync(path.join(buildDir, "Dockerfile")))
    .update(JSON.stringify(options))
    .digest("hex");
}
