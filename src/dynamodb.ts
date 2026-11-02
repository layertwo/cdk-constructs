import { BillingMode, Table, TableProps } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export interface SecureTableProps extends TableProps {}

export class SecureTable extends Table {
  constructor(scope: Construct, id: string, props: SecureTableProps) {
    super(scope, id, {
      ...props,
      billingMode: BillingMode.PAY_PER_REQUEST,
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true },
    });
  }
}
