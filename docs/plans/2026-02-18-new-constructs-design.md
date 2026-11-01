# New Constructs Design

Date: 2026-02-18

## Context

Three CDK repositories (layertwo/ffsync, layertwo/cortex, layertwo/connections) share repeated
infrastructure patterns. This design extracts those patterns into reusable constructs for this
library, focusing on patterns that appear in two or more repos.

## File Structure

```
src/
  iam.ts         ← renamed from github-oidc.ts, exports GitHubOidcRole
  s3.ts          ← exports SecureBucket
  dynamodb.ts    ← exports SecureTable
  acm.ts         ← exports DnsValidatedCertificate
  index.ts       ← re-exports all four
test/
  s3.test.ts
  dynamodb.test.ts
  acm.test.ts
  iam.test.ts    ← renamed from github-oidc.test.ts
```

## Constructs

### `SecureBucket extends Bucket` (`src/s3.ts`)

Extends `Bucket` with security defaults enforced.

**Props:** `SecureBucketProps extends BucketProps`

**Hardcoded (not overridable):**
- All public access blocked
- Bucket policy denying non-HTTPS requests (TLS 1.2+ enforcement)
- SSE-S3 encryption

**Defaulted (overridable):**
- `versioned: true` — caller can pass `versioned: false` to opt out

**Observed in:** cortex (`service.ts`), connections (`connections.ts`)

---

### `SecureTable extends Table` (`src/dynamodb.ts`)

Extends `Table` with DynamoDB best-practice defaults enforced.

**Props:** `SecureTableProps extends TableProps`

**Hardcoded (not overridable):**
- Point-in-time recovery always enabled
- Billing mode always `PAY_PER_REQUEST` (on-demand)

Caller provides partition key, sort key, GSIs, and other table-specific config as normal.

**Observed in:** ffsync (`service.ts`), cortex (`service.ts`)

---

### `DnsValidatedCertificate extends Certificate` (`src/acm.ts`)

Extends `Certificate`, replacing the generic `validation` prop with a required `hostedZone`.

**Props:** `DnsValidatedCertificateProps` — same as `CertificateProps` but:
- `validation` is removed
- `hostedZone: IHostedZone` is required

Internally wires `CertificateValidation.fromDns(hostedZone)`.

**Observed in:** ffsync (`service.ts`), connections (`connections.ts`)

---

### `GitHubOidcRole extends Role` (`src/iam.ts`)

Already implemented. File renamed from `github-oidc.ts` to `iam.ts` for consistency with the
service-per-file naming convention.

## Testing

One test file per construct using `aws-cdk-lib/assertions` (`Template.fromStack`):

- Verify hardcoded defaults are always present in synthesized CloudFormation
- Verify opt-out props work (e.g. `versioned: false` on `SecureBucket`)
- Verify required props are wired correctly (e.g. `hostedZone` on `DnsValidatedCertificate`)

## What Is Not Included

- `PythonArmFunction` — dropped; Python runtime version varies across repos
- Single-repo patterns (Cognito auth, CodePipeline, monitoring facade)
- Static site pattern — only one repo, excluded per scope decision
