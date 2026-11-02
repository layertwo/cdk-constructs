import { Duration, Stack } from "aws-cdk-lib";
import {
  Effect,
  OpenIdConnectProvider,
  PolicyStatement,
  Role,
  WebIdentityPrincipal,
} from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export interface GitHubOidcRoleProps {
  readonly owner: string;

  readonly repo: string;

  readonly branch?: string;

  readonly environment?: string;

  readonly description?: string;

  readonly maxSessionDuration?: Duration;

  readonly roleName?: string;
}

export class GitHubOidcRole extends Role {
  constructor(scope: Construct, id: string, props: GitHubOidcRoleProps) {
    const stack = Stack.of(scope);
    let subjectClaim = `repo:${props.owner}/${props.repo}:`;

    if (props.environment) {
      subjectClaim += `environment:${props.environment}`;
    } else if (props.branch) {
      subjectClaim += `ref:refs/heads/${props.branch}`;
    } else {
      subjectClaim += "*";
    }

    let provider = stack.node.tryFindChild("GitHubOidcProvider") as
      OpenIdConnectProvider | undefined;
    if (!provider) {
      provider = new OpenIdConnectProvider(stack, "GitHubOidcProvider", {
        url: "https://token.actions.githubusercontent.com",
        clientIds: ["sts.amazonaws.com"],
      });
    }

    super(scope, id, {
      ...props,
      assumedBy: new WebIdentityPrincipal(provider.openIdConnectProviderArn, {
        StringEquals: {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
        },
        StringLike: {
          "token.actions.githubusercontent.com:sub": subjectClaim,
        },
      }),
    });

    this.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ["sts:AssumeRole"],
        resources: ["*"],
        conditions: {
          StringEquals: {
            "iam:ResourceTag/aws-cdk:bootstrap-role": [
              "deploy",
              "file-publishing",
              "image-publishing",
              "lookup",
            ],
          },
        },
      }),
    );
  }
}
