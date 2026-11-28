import { AssetHashType } from "aws-cdk-lib";
import {
  Architecture,
  AssetCode,
  Code,
  Function,
  FunctionOptions,
  Runtime,
  RuntimeFamily,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import {
  DEFAULT_HASH_EXCLUDES,
  DEFAULT_RUNTIME,
  UvBundling,
  UvBundlingProps,
} from "./uv-bundling";

/** Options for `uvCode`. */
export interface UvCodeProps extends UvBundlingProps {
  /** Directory containing the uv project. */
  readonly rootDir: string;
  /** Extra glob patterns to leave out of the asset hash; added to `DEFAULT_HASH_EXCLUDES`. */
  readonly hashExcludes?: string[];
}

/** Returns Lambda code for a uv project bundled in Docker. */
export function uvCode(props: UvCodeProps): AssetCode {
  const { rootDir, hashExcludes, ...bundling } = props;

  return Code.fromAsset(rootDir, {
    assetHashType: AssetHashType.SOURCE,
    exclude: [...DEFAULT_HASH_EXCLUDES, ...(hashExcludes ?? [])],
    bundling: new UvBundling(bundling),
  });
}

/** Options for `PythonFunction`. */
export interface PythonFunctionProps extends FunctionOptions {
  /** Directory containing the uv project; it needs a `uv.lock`. */
  readonly rootDir: string;
  /** Python runtime; must belong to the Python family. @default Runtime.PYTHON_3_15 */
  readonly runtime?: Runtime;
  /** Entry file, relative to `rootDir`. @default "index.py" */
  readonly index?: string;
  /** Function name inside `index`. @default "handler" */
  readonly handler?: string;
  /** Extra glob patterns to leave out of the asset hash; added to `DEFAULT_HASH_EXCLUDES`. */
  readonly hashExcludes?: string[];
  /** Bundling options; the runtime and architecture come from the function. */
  readonly bundling?: UvBundlingProps;
}

/** A Lambda Function that packages a uv project built in Docker. */
export class PythonFunction extends Function {
  constructor(scope: Construct, id: string, props: PythonFunctionProps) {
    const {
      rootDir,
      index = "index.py",
      handler = "handler",
      runtime = DEFAULT_RUNTIME,
      hashExcludes,
      bundling,
      ...rest
    } = props;

    if (runtime.family !== RuntimeFamily.PYTHON) {
      throw new Error("PythonFunction only supports Python runtimes");
    }

    const architecture = rest.architecture ?? Architecture.ARM_64;

    if (bundling?.runtime && bundling.runtime.name !== runtime.name) {
      throw new Error("bundling.runtime must match the function runtime");
    }

    if (bundling?.architecture && bundling.architecture !== architecture) {
      throw new Error(
        "bundling.architecture must match the function architecture",
      );
    }

    if (
      bundling?.platform &&
      bundling.platform !== architecture.dockerPlatform
    ) {
      throw new Error("bundling.platform must match the function architecture");
    }

    super(scope, id, {
      ...rest,
      runtime,
      architecture,
      handler: `${index.replace(/\.py$/, "").replace(/\//g, ".")}.${handler}`,
      code: uvCode({
        ...bundling,
        rootDir,
        runtime,
        architecture,
        hashExcludes,
      }),
    });
  }
}
