import { Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import { GitHubOidcRole } from "../src";

describe("GitHubOidcRole", () => {
  const stack = new Stack();
  new GitHubOidcRole(stack, "RoleWithOwnerRepo", {
    roleName: "GitHubRoleWithOwnerRepo",
    owner: "owner",
    repo: "repo",
  });
  new GitHubOidcRole(stack, "RoleWithBranch", {
    roleName: "GitHubRoleWithBranch",
    owner: "owner",
    repo: "repo",
    branch: "mainline",
  });
  new GitHubOidcRole(stack, "RoleWithEnvironment", {
    roleName: "GitHubRoleWithEnvironment",
    owner: "owner",
    repo: "repo",
    environment: "production",
  });
  const template = Template.fromStack(stack);
  const baseStatementProps = {
    Action: "sts:AssumeRoleWithWebIdentity",
    Effect: "Allow",
    Principal: {
      Federated: { Ref: Match.stringLikeRegexp("GitHubOidcProvider.*") },
    },
  };

  it("should create a role for scoped repo", () => {
    template.hasResourceProperties("AWS::IAM::Role", {
      RoleName: "GitHubRoleWithOwnerRepo",
      AssumeRolePolicyDocument: {
        Statement: [
          {
            ...baseStatementProps,
            Condition: {
              StringEquals: {
                "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
              },
              StringLike: {
                "token.actions.githubusercontent.com:sub": "repo:owner/repo:*",
              },
            },
          },
        ],
      },
    });
  });

  it("should create a role for branch", () => {
    template.hasResourceProperties("AWS::IAM::Role", {
      RoleName: "GitHubRoleWithBranch",
      AssumeRolePolicyDocument: {
        Statement: [
          {
            ...baseStatementProps,
            Condition: {
              StringEquals: {
                "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
              },
              StringLike: {
                "token.actions.githubusercontent.com:sub":
                  "repo:owner/repo:ref:refs/heads/mainline",
              },
            },
          },
        ],
      },
    });
  });

  it("should create a role for environment", () => {
    template.hasResourceProperties("AWS::IAM::Role", {
      RoleName: "GitHubRoleWithEnvironment",
      AssumeRolePolicyDocument: {
        Statement: [
          {
            ...baseStatementProps,
            Condition: {
              StringEquals: {
                "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
              },
              StringLike: {
                "token.actions.githubusercontent.com:sub":
                  "repo:owner/repo:environment:production",
              },
            },
          },
        ],
      },
    });
  });
});
