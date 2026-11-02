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

/** Runtime used when no runtime is passed. */
export const DEFAULT_RUNTIME = Runtime.PYTHON_3_15;

/** Paths left out of the bundled asset. */
export const DEFAULT_ASSET_EXCLUDES = [
  ".venv",
  "node_modules",
  "cdk.out",
  ".git",
  "__pycache__",
  "tests",
  ".cache",
];

/** Glob patterns that do not affect the asset hash. */
export const DEFAULT_HASH_EXCLUDES = [
  ...DEFAULT_ASSET_EXCLUDES.map((name) => `**/${name}/**`),
  "**/*.pyc",
  "**/.DS_Store",
];

/** Shell commands to run around bundling. */
export interface ICommandHooks {
  /** Runs after the source is copied, before dependencies are installed. */
  beforeBundling(inputDir: string, outputDir: string): string[];
  /** Runs after dependencies are installed. */
  afterBundling(inputDir: string, outputDir: string): string[];
}

/** Options for `UvBundling`. */
export interface UvBundlingProps extends DockerRunOptions {
  /** Python runtime to bundle; must belong to the Python family. @default Runtime.PYTHON_3_15 */
  readonly runtime?: Runtime;
  /** Target architecture. @default Architecture.ARM_64 */
  readonly architecture?: Architecture;
  /** Use this image instead of the built-in SAM build image. */
  readonly image?: DockerImage;
  /** Extra `docker build` arguments. */
  readonly buildArgs?: { [key: string]: string };
  /** Docker build cache sources. */
  readonly cacheFrom?: DockerCacheOption[];
  /** Docker build cache destination. */
  readonly cacheTo?: DockerCacheOption;
  /** Extra paths to leave out of the bundle; added to `DEFAULT_ASSET_EXCLUDES`. */
  readonly assetExcludes?: string[];
  /** Commands to run around bundling. */
  readonly commandHooks?: ICommandHooks;
  /** How the container shares the input and output directories. */
  readonly bundlingFileAccess?: BundlingFileAccess;
}

/** Bundling options that install a uv project into a Lambda asset. */
export class UvBundling {
  /** Python runtime used for the bundle. */
  public readonly runtime: Runtime;
  /** Python version derived from the runtime. */
  public readonly pythonVersion: string;
  /** Docker platform derived from the architecture. */
  public readonly platform: string;

  /** Command run in the bundling container. */
  public readonly command: string[];
  /** Container entrypoint override. */
  public readonly entrypoint?: string[];
  /** Environment variables for the bundling container. */
  public readonly environment?: { [key: string]: string };
  /** Extra volumes for the bundling container. */
  public readonly volumes?: DockerVolume[];
  /** Volumes mounted from other containers. */
  public readonly volumesFrom?: string[];
  /** Working directory inside the container. */
  public readonly workingDirectory?: string;
  /** User to run the container as. */
  public readonly user?: string;
  /** Security options for the container. */
  public readonly securityOpt?: string;
  /** Docker network for the container. */
  public readonly network?: string;
  /** How the container shares the input and output directories. */
  public readonly bundlingFileAccess?: BundlingFileAccess;

  private readonly props: UvBundlingProps;
  private readonly cacheFrom?: DockerCacheOption[];
  private readonly cacheTo?: DockerCacheOption;
  private _image?: DockerImage;

  /** Docker image that runs the bundling command. */
  declare public readonly image: DockerImage;

  constructor(props: UvBundlingProps) {
    const { cacheFrom, cacheTo, ...rest } = props;
    this.props = rest;
    this.cacheFrom = cacheFrom;
    this.cacheTo = cacheTo;
    // Cache options only speed up the build, so keep them out of the asset hash.
    Object.defineProperty(this, "cacheFrom", { enumerable: false });
    Object.defineProperty(this, "cacheTo", { enumerable: false });

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
    const assetExcludes = [
      ...DEFAULT_ASSET_EXCLUDES,
      ...(this.props.assetExcludes ?? []),
    ];
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
      `rm -rf ${outputDir}/.venv ${outputDir}/uv.lock`,
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
        ...this.props.buildArgs,
        PYTHON_VERSION: this.pythonVersion,
      },
      cacheFrom: this.cacheFrom,
      cacheTo: this.cacheTo,
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
  const identity = { ...options, cacheFrom: undefined, cacheTo: undefined };
  return createHash("sha256")
    .update(readFileSync(path.join(buildDir, "Dockerfile")))
    .update(JSON.stringify(identity))
    .digest("hex");
}
