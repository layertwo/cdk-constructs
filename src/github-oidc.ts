
import { Duration, Stack } from 'aws-cdk-lib';
import {
  Effect,
  OpenIdConnectProvider,
  PolicyStatement,
  Role,
  WebIdentityPrincipal,
} from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

/**
 * Properties for GitHubOidcRole
 */
export interface GitHubOidcRoleProps {
  /**
   * GitHub repository owner (organization or user)
   */
  readonly owner: string;

  /**
   * GitHub repository name
   */
  readonly repo: string;

  /**
   * Specific branch to allow (optional)
   * If neither branch nor environment is specified, all branches are allowed
   */
  readonly branch?: string;

  /**
   * GitHub environment name (optional)
   * Takes precedence over branch if both are specified
   */
  readonly environment?: string;

  /**
   * A description of the role
   * @default - No description
   */
  readonly description?: string;

  /**
   * The maximum session duration for the role
   * @default Duration.hours(1)
   */
  readonly maxSessionDuration?: Duration;

  /**
   * A name for the IAM role
   * @default - AWS CloudFormation generates a unique physical ID
   */
  readonly roleName?: string;
}

// Reference: https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws
export class GitHubOidcRole extends Role {

  constructor(scope: Construct, id: string, props: GitHubOidcRoleProps) {
    const stack = Stack.of(scope);
    // Build the subject claim for the trust policy
    let subjectClaim = `repo:${props.owner}/${props.repo}:`;

    if (props.environment) {
      subjectClaim += `environment:${props.environment}`;
    } else if (props.branch) {
      subjectClaim += `ref:refs/heads/${props.branch}`;
    } else {
      // Allow any branch/environment
      subjectClaim += '*';
    }

    // Create or reference the GitHub OIDC provider
    let provider = stack.node.tryFindChild('GitHubOidcProvider') as OpenIdConnectProvider | undefined;
    if (!provider) {
      provider = new OpenIdConnectProvider(stack, 'GitHubOidcProvider', {
        url: 'https://token.actions.githubusercontent.com',
        clientIds: ['sts.amazonaws.com'],
      });
    }

    super(scope, id, {
      ...props,
      assumedBy: new WebIdentityPrincipal(provider.openIdConnectProviderArn, {
        StringEquals: {
          'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com',
        },
        StringLike: {
          'token.actions.githubusercontent.com:sub': subjectClaim,
        },
      }),
    });

    this.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['sts:AssumeRole'],
        resources: ['*'],
        conditions: {
          StringEquals: {
            'iam:ResourceTag/aws-cdk:bootstrap-role': [
              'deploy',
              'file-publishing',
              'image-publishing',
              'lookup',
            ],
          },
        },
      }),
    );
  }
}