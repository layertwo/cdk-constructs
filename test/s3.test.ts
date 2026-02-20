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
