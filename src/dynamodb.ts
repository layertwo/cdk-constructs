import { BillingMode, Table, TableProps } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

/**
 * Properties for SecureTable.
 *
 * Hardcoded (not overridable): billingMode, pointInTimeRecoverySpecification.
 * These are always applied regardless of what is passed in props.
 */
export interface SecureTableProps extends TableProps {}

/**
 * A DynamoDB Table with best-practice defaults enforced:
 * - On-demand billing (PAY_PER_REQUEST)
 * - Point-in-time recovery always enabled
 */
export class SecureTable extends Table {
  constructor(scope: Construct, id: string, props: SecureTableProps) {
    super(scope, id, {
      ...props,
      billingMode: BillingMode.PAY_PER_REQUEST,
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true },
    });
  }
}
