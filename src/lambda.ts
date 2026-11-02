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

export interface UvCodeProps extends UvBundlingProps {
  readonly rootDir: string;
  readonly hashExcludes?: string[];
}

export function uvCode(props: UvCodeProps): AssetCode {
  const { rootDir, hashExcludes = DEFAULT_HASH_EXCLUDES, ...bundling } = props;

  return Code.fromAsset(rootDir, {
    assetHashType: AssetHashType.SOURCE,
    exclude: hashExcludes,
    bundling: new UvBundling(bundling),
  });
}

export interface PythonFunctionProps extends FunctionOptions {
  readonly rootDir: string;
  readonly runtime?: Runtime;
  readonly index?: string;
  readonly handler?: string;
  readonly hashExcludes?: string[];
  readonly bundling?: UvBundlingProps;
}

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
