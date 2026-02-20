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
