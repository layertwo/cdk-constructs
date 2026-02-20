import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { AttributeType } from "aws-cdk-lib/aws-dynamodb";
import { SecureTable } from "../src";

const tableProps = {
  partitionKey: { name: "pk", type: AttributeType.STRING },
};

describe("SecureTable", () => {
  let template: Template;

  beforeEach(() => {
    const stack = new Stack();
    new SecureTable(stack, "Table", tableProps);
    template = Template.fromStack(stack);
  });

  it("enables point-in-time recovery", () => {
    template.hasResourceProperties("AWS::DynamoDB::Table", {
      PointInTimeRecoverySpecification: {
        PointInTimeRecoveryEnabled: true,
      },
    });
  });

  it("uses on-demand billing", () => {
    template.hasResourceProperties("AWS::DynamoDB::Table", {
      BillingMode: "PAY_PER_REQUEST",
    });
  });
});
