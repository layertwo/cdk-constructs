# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsValidatedCertificate <a name="DnsValidatedCertificate" id="@layertwo/cdk-constructs.DnsValidatedCertificate"></a>

An ACM Certificate that always uses Route53 DNS validation.

Pass a `hostedZone` instead of a `validation` prop.

#### Initializers <a name="Initializers" id="@layertwo/cdk-constructs.DnsValidatedCertificate.Initializer"></a>

```typescript
import { DnsValidatedCertificate } from '@layertwo/cdk-constructs'

new DnsValidatedCertificate(scope: Construct, id: string, props: DnsValidatedCertificateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.Initializer.parameter.props">props</a></code> | <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps">DnsValidatedCertificateProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.DnsValidatedCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.DnsValidatedCertificate.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.DnsValidatedCertificate.Initializer.parameter.props"></a>

- *Type:* <a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps">DnsValidatedCertificateProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.metricDaysToExpiry">metricDaysToExpiry</a></code> | Return the DaysToExpiry metric for this AWS Certificate Manager Certificate. By default, this is the minimum value over 1 day. |

---

##### `toString` <a name="toString" id="@layertwo/cdk-constructs.DnsValidatedCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@layertwo/cdk-constructs.DnsValidatedCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@layertwo/cdk-constructs.DnsValidatedCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@layertwo/cdk-constructs.DnsValidatedCertificate.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@layertwo/cdk-constructs.DnsValidatedCertificate.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metricDaysToExpiry` <a name="metricDaysToExpiry" id="@layertwo/cdk-constructs.DnsValidatedCertificate.metricDaysToExpiry"></a>

```typescript
public metricDaysToExpiry(props?: MetricOptions): Metric
```

Return the DaysToExpiry metric for this AWS Certificate Manager Certificate. By default, this is the minimum value over 1 day.

This metric is no longer emitted once the certificate has effectively
expired, so alarms configured on this metric should probably treat missing
data as "breaching".

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.DnsValidatedCertificate.metricDaysToExpiry.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.fromCertificateArn">fromCertificateArn</a></code> | Import a certificate. |

---

##### `isConstruct` <a name="isConstruct" id="@layertwo/cdk-constructs.DnsValidatedCertificate.isConstruct"></a>

```typescript
import { DnsValidatedCertificate } from '@layertwo/cdk-constructs'

DnsValidatedCertificate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@layertwo/cdk-constructs.DnsValidatedCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@layertwo/cdk-constructs.DnsValidatedCertificate.isOwnedResource"></a>

```typescript
import { DnsValidatedCertificate } from '@layertwo/cdk-constructs'

DnsValidatedCertificate.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.DnsValidatedCertificate.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@layertwo/cdk-constructs.DnsValidatedCertificate.isResource"></a>

```typescript
import { DnsValidatedCertificate } from '@layertwo/cdk-constructs'

DnsValidatedCertificate.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.DnsValidatedCertificate.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromCertificateArn` <a name="fromCertificateArn" id="@layertwo/cdk-constructs.DnsValidatedCertificate.fromCertificateArn"></a>

```typescript
import { DnsValidatedCertificate } from '@layertwo/cdk-constructs'

DnsValidatedCertificate.fromCertificateArn(scope: Construct, id: string, certificateArn: string)
```

Import a certificate.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.DnsValidatedCertificate.fromCertificateArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.DnsValidatedCertificate.fromCertificateArn.parameter.id"></a>

- *Type:* string

---

###### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@layertwo/cdk-constructs.DnsValidatedCertificate.fromCertificateArn.parameter.certificateArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.certificateArn">certificateArn</a></code> | <code>string</code> | The certificate's ARN. |

---

##### `node`<sup>Required</sup> <a name="node" id="@layertwo/cdk-constructs.DnsValidatedCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@layertwo/cdk-constructs.DnsValidatedCertificate.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@layertwo/cdk-constructs.DnsValidatedCertificate.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@layertwo/cdk-constructs.DnsValidatedCertificate.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The certificate's ARN.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="@layertwo/cdk-constructs.DnsValidatedCertificate.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

### GitHubOidcRole <a name="GitHubOidcRole" id="@layertwo/cdk-constructs.GitHubOidcRole"></a>

#### Initializers <a name="Initializers" id="@layertwo/cdk-constructs.GitHubOidcRole.Initializer"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

new GitHubOidcRole(scope: Construct, id: string, props: GitHubOidcRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.Initializer.parameter.props">props</a></code> | <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps">GitHubOidcRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.GitHubOidcRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.GitHubOidcRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.GitHubOidcRole.Initializer.parameter.props"></a>

- *Type:* <a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps">GitHubOidcRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.applyRemovalPolicy">applyRemovalPolicy</a></code> | Skip applyRemovalPolicy if role synthesis is prevented by customizeRoles. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.addManagedPolicy">addManagedPolicy</a></code> | Attaches a managed policy to this role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.addToPolicy">addToPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.addToPrincipalPolicy">addToPrincipalPolicy</a></code> | Adds a permission to the role's default policy document. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.attachInlinePolicy">attachInlinePolicy</a></code> | Attaches a policy to this role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.grant">grant</a></code> | Grant the actions defined in actions to the identity Principal on this resource. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.grantAssumeRole">grantAssumeRole</a></code> | Grant permissions to the given principal to assume this role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.grantPassRole">grantPassRole</a></code> | Grant permissions to the given principal to pass this role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.withoutPolicyUpdates">withoutPolicyUpdates</a></code> | Return a copy of this Role object whose Policies will not be updated. |

---

##### `toString` <a name="toString" id="@layertwo/cdk-constructs.GitHubOidcRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@layertwo/cdk-constructs.GitHubOidcRole.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@layertwo/cdk-constructs.GitHubOidcRole.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@layertwo/cdk-constructs.GitHubOidcRole.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Skip applyRemovalPolicy if role synthesis is prevented by customizeRoles.

Because in this case, this construct does not have a CfnResource in the tree.

###### `policy`<sup>Required</sup> <a name="policy" id="@layertwo/cdk-constructs.GitHubOidcRole.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

RemovalPolicy.

---

##### `addManagedPolicy` <a name="addManagedPolicy" id="@layertwo/cdk-constructs.GitHubOidcRole.addManagedPolicy"></a>

```typescript
public addManagedPolicy(policy: IManagedPolicy): void
```

Attaches a managed policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="@layertwo/cdk-constructs.GitHubOidcRole.addManagedPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The the managed policy to attach.

---

##### `addToPolicy` <a name="addToPolicy" id="@layertwo/cdk-constructs.GitHubOidcRole.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): boolean
```

Add to the policy of this principal.

###### `statement`<sup>Required</sup> <a name="statement" id="@layertwo/cdk-constructs.GitHubOidcRole.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToPrincipalPolicy` <a name="addToPrincipalPolicy" id="@layertwo/cdk-constructs.GitHubOidcRole.addToPrincipalPolicy"></a>

```typescript
public addToPrincipalPolicy(statement: PolicyStatement): AddToPrincipalPolicyResult
```

Adds a permission to the role's default policy document.

If there is no default policy attached to this role, it will be created.

###### `statement`<sup>Required</sup> <a name="statement" id="@layertwo/cdk-constructs.GitHubOidcRole.addToPrincipalPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The permission statement to add to the policy document.

---

##### `attachInlinePolicy` <a name="attachInlinePolicy" id="@layertwo/cdk-constructs.GitHubOidcRole.attachInlinePolicy"></a>

```typescript
public attachInlinePolicy(policy: Policy): void
```

Attaches a policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="@layertwo/cdk-constructs.GitHubOidcRole.attachInlinePolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.Policy

The policy to attach.

---

##### `grant` <a name="grant" id="@layertwo/cdk-constructs.GitHubOidcRole.grant"></a>

```typescript
public grant(grantee: IPrincipal, actions: ...string[]): Grant
```

Grant the actions defined in actions to the identity Principal on this resource.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.GitHubOidcRole.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

###### `actions`<sup>Required</sup> <a name="actions" id="@layertwo/cdk-constructs.GitHubOidcRole.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantAssumeRole` <a name="grantAssumeRole" id="@layertwo/cdk-constructs.GitHubOidcRole.grantAssumeRole"></a>

```typescript
public grantAssumeRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to assume this role.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.GitHubOidcRole.grantAssumeRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `grantPassRole` <a name="grantPassRole" id="@layertwo/cdk-constructs.GitHubOidcRole.grantPassRole"></a>

```typescript
public grantPassRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to pass this role.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.GitHubOidcRole.grantPassRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `withoutPolicyUpdates` <a name="withoutPolicyUpdates" id="@layertwo/cdk-constructs.GitHubOidcRole.withoutPolicyUpdates"></a>

```typescript
public withoutPolicyUpdates(options?: WithoutPolicyUpdatesOptions): IRole
```

Return a copy of this Role object whose Policies will not be updated.

Use the object returned by this method if you want this Role to be used by
a construct without it automatically updating the Role's Policies.

If you do, you are responsible for adding the correct statements to the
Role's policies yourself.

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.GitHubOidcRole.withoutPolicyUpdates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.WithoutPolicyUpdatesOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.customizeRoles">customizeRoles</a></code> | Customize the creation of IAM roles within the given scope. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.fromLookup">fromLookup</a></code> | Lookup an existing Role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.fromRoleArn">fromRoleArn</a></code> | Import an external role by ARN. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.fromRoleName">fromRoleName</a></code> | Import an external role by name. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.isRole">isRole</a></code> | Return whether the given object is a Role. |

---

##### `isConstruct` <a name="isConstruct" id="@layertwo/cdk-constructs.GitHubOidcRole.isConstruct"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

GitHubOidcRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@layertwo/cdk-constructs.GitHubOidcRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@layertwo/cdk-constructs.GitHubOidcRole.isOwnedResource"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

GitHubOidcRole.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.GitHubOidcRole.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@layertwo/cdk-constructs.GitHubOidcRole.isResource"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

GitHubOidcRole.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.GitHubOidcRole.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `customizeRoles` <a name="customizeRoles" id="@layertwo/cdk-constructs.GitHubOidcRole.customizeRoles"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

GitHubOidcRole.customizeRoles(scope: Construct, options?: CustomizeRolesOptions)
```

Customize the creation of IAM roles within the given scope.

It is recommended that you **do not** use this method and instead allow
CDK to manage role creation. This should only be used
in environments where CDK applications are not allowed to created IAM roles.

This can be used to prevent the CDK application from creating roles
within the given scope and instead replace the references to the roles with
precreated role names. A report will be synthesized in the cloud assembly (i.e. cdk.out)
that will contain the list of IAM roles that would have been created along with the
IAM policy statements that the role should contain. This report can then be used
to create the IAM roles outside of CDK and then the created role names can be provided
in `usePrecreatedRoles`.

*Example*

```typescript
declare const app: App;
iam.Role.customizeRoles(app, {
  usePrecreatedRoles: {
    'ConstructPath/To/Role': 'my-precreated-role-name',
  },
});
```


###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.GitHubOidcRole.customizeRoles.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope to customize role creation.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.GitHubOidcRole.customizeRoles.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.CustomizeRolesOptions

options for configuring role creation.

---

##### `fromLookup` <a name="fromLookup" id="@layertwo/cdk-constructs.GitHubOidcRole.fromLookup"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

GitHubOidcRole.fromLookup(scope: Construct, id: string, options: RoleLookupOptions)
```

Lookup an existing Role.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.GitHubOidcRole.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.GitHubOidcRole.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@layertwo/cdk-constructs.GitHubOidcRole.fromLookup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.RoleLookupOptions

---

##### `fromRoleArn` <a name="fromRoleArn" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleArn"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

GitHubOidcRole.fromRoleArn(scope: Construct, id: string, roleArn: string, options?: FromRoleArnOptions)
```

Import an external role by ARN.

If the imported Role ARN is a Token (such as a
`CfnParameter.valueAsString` or a `Fn.importValue()`) *and* the referenced
role has a `path` (like `arn:...:role/AdminRoles/Alice`), the
`roleName` property will not resolve to the correct value. Instead it
will resolve to the first path component. We unfortunately cannot express
the correct calculation of the full path name as a CloudFormation
expression. In this scenario the Role ARN should be supplied without the
`path` in order to resolve the correct role resource.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleArn.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleArn.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleArn.parameter.roleArn"></a>

- *Type:* string

the ARN of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleArn.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleArnOptions

allow customizing the behavior of the returned role.

---

##### `fromRoleName` <a name="fromRoleName" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleName"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

GitHubOidcRole.fromRoleName(scope: Construct, id: string, roleName: string, options?: FromRoleNameOptions)
```

Import an external role by name.

The imported role is assumed to exist in the same account as the account
the scope's containing Stack is being deployed to.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleName.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleName.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleName.parameter.roleName"></a>

- *Type:* string

the name of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.GitHubOidcRole.fromRoleName.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleNameOptions

allow customizing the behavior of the returned role.

---

##### `isRole` <a name="isRole" id="@layertwo/cdk-constructs.GitHubOidcRole.isRole"></a>

```typescript
import { GitHubOidcRole } from '@layertwo/cdk-constructs'

GitHubOidcRole.isRole(x: any)
```

Return whether the given object is a Role.

###### `x`<sup>Required</sup> <a name="x" id="@layertwo/cdk-constructs.GitHubOidcRole.isRole.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Returns the role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.roleArn">roleArn</a></code> | <code>string</code> | Returns the ARN of this role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.roleId">roleId</a></code> | <code>string</code> | Returns the stable and unique string identifying the role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.roleName">roleName</a></code> | <code>string</code> | Returns the name of the role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.assumeRolePolicy">assumeRolePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The assume role policy document associated with this role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | Returns the permissions boundary attached to this role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.principalAccount">principalAccount</a></code> | <code>string</code> | The AWS account ID of this principal. |

---

##### `node`<sup>Required</sup> <a name="node" id="@layertwo/cdk-constructs.GitHubOidcRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@layertwo/cdk-constructs.GitHubOidcRole.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@layertwo/cdk-constructs.GitHubOidcRole.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assumeRoleAction`<sup>Required</sup> <a name="assumeRoleAction" id="@layertwo/cdk-constructs.GitHubOidcRole.property.assumeRoleAction"></a>

```typescript
public readonly assumeRoleAction: string;
```

- *Type:* string

When this Principal is used in an AssumeRole policy, the action to use.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@layertwo/cdk-constructs.GitHubOidcRole.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `policyFragment`<sup>Required</sup> <a name="policyFragment" id="@layertwo/cdk-constructs.GitHubOidcRole.property.policyFragment"></a>

```typescript
public readonly policyFragment: PrincipalPolicyFragment;
```

- *Type:* aws-cdk-lib.aws_iam.PrincipalPolicyFragment

Returns the role.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@layertwo/cdk-constructs.GitHubOidcRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Returns the ARN of this role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@layertwo/cdk-constructs.GitHubOidcRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Returns the stable and unique string identifying the role.

For example,
AIDAJQABLZS4A3QDU576Q.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@layertwo/cdk-constructs.GitHubOidcRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Returns the name of the role.

---

##### `assumeRolePolicy`<sup>Optional</sup> <a name="assumeRolePolicy" id="@layertwo/cdk-constructs.GitHubOidcRole.property.assumeRolePolicy"></a>

```typescript
public readonly assumeRolePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The assume role policy document associated with this role.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@layertwo/cdk-constructs.GitHubOidcRole.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

Returns the permissions boundary attached to this role.

---

##### `principalAccount`<sup>Optional</sup> <a name="principalAccount" id="@layertwo/cdk-constructs.GitHubOidcRole.property.principalAccount"></a>

```typescript
public readonly principalAccount: string;
```

- *Type:* string

The AWS account ID of this principal.

Can be undefined when the account is not known
(for example, for service principals).
Can be a Token - in that case,
it's assumed to be AWS::AccountId.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="@layertwo/cdk-constructs.GitHubOidcRole.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

### SecureBucket <a name="SecureBucket" id="@layertwo/cdk-constructs.SecureBucket"></a>

An S3 Bucket with security defaults enforced: - All public access blocked - S3-managed encryption (AES256) - SSL enforced (HTTP requests denied) - Versioning enabled by default (opt out with `versioned: false`).

#### Initializers <a name="Initializers" id="@layertwo/cdk-constructs.SecureBucket.Initializer"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

new SecureBucket(scope: Construct, id: string, props?: SecureBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.Initializer.parameter.props">props</a></code> | <code><a href="#@layertwo/cdk-constructs.SecureBucketProps">SecureBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.SecureBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#@layertwo/cdk-constructs.SecureBucketProps">SecureBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy">addReplicationPolicy</a></code> | Function to add required permissions to the destination bucket for cross account replication. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantReplicationPermission">grantReplicationPermission</a></code> | Grant replication permission to a principal. This method allows the principal to perform replication operations on this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="@layertwo/cdk-constructs.SecureBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@layertwo/cdk-constructs.SecureBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@layertwo/cdk-constructs.SecureBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@layertwo/cdk-constructs.SecureBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@layertwo/cdk-constructs.SecureBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@layertwo/cdk-constructs.SecureBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="@layertwo/cdk-constructs.SecureBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@layertwo/cdk-constructs.SecureBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@layertwo/cdk-constructs.SecureBucket.addEventNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@layertwo/cdk-constructs.SecureBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@layertwo/cdk-constructs.SecureBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@layertwo/cdk-constructs.SecureBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@layertwo/cdk-constructs.SecureBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@layertwo/cdk-constructs.SecureBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@layertwo/cdk-constructs.SecureBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addReplicationPolicy` <a name="addReplicationPolicy" id="@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy"></a>

```typescript
public addReplicationPolicy(roleArn: string, accessControlTransition?: boolean, account?: string): void
```

Function to add required permissions to the destination bucket for cross account replication.

These permissions will be added as a resource based policy on the bucket

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html)

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy.parameter.roleArn"></a>

- *Type:* string

---

###### `accessControlTransition`<sup>Optional</sup> <a name="accessControlTransition" id="@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy.parameter.accessControlTransition"></a>

- *Type:* boolean

---

###### `account`<sup>Optional</sup> <a name="account" id="@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy.parameter.account"></a>

- *Type:* string

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@layertwo/cdk-constructs.SecureBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@layertwo/cdk-constructs.SecureBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@layertwo/cdk-constructs.SecureBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@layertwo/cdk-constructs.SecureBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="@layertwo/cdk-constructs.SecureBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="@layertwo/cdk-constructs.SecureBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.SecureBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@layertwo/cdk-constructs.SecureBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@layertwo/cdk-constructs.SecureBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: ...string[], keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@layertwo/cdk-constructs.SecureBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* ...string[]

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@layertwo/cdk-constructs.SecureBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@layertwo/cdk-constructs.SecureBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.SecureBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@layertwo/cdk-constructs.SecureBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPutAcl` <a name="grantPutAcl" id="@layertwo/cdk-constructs.SecureBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.SecureBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@layertwo/cdk-constructs.SecureBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@layertwo/cdk-constructs.SecureBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.SecureBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@layertwo/cdk-constructs.SecureBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantReadWrite` <a name="grantReadWrite" id="@layertwo/cdk-constructs.SecureBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.SecureBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@layertwo/cdk-constructs.SecureBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantReplicationPermission` <a name="grantReplicationPermission" id="@layertwo/cdk-constructs.SecureBucket.grantReplicationPermission"></a>

```typescript
public grantReplicationPermission(identity: IGrantable, props: GrantReplicationPermissionProps): Grant
```

Grant replication permission to a principal. This method allows the principal to perform replication operations on this bucket.

Note that when calling this function for source or destination buckets that support KMS encryption,
you need to specify the KMS key for encryption and the KMS key for decryption, respectively.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.SecureBucket.grantReplicationPermission.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant replication permission to.

---

###### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.SecureBucket.grantReplicationPermission.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_s3.GrantReplicationPermissionProps

The properties of the replication source and destination buckets.

---

##### `grantWrite` <a name="grantWrite" id="@layertwo/cdk-constructs.SecureBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.SecureBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@layertwo/cdk-constructs.SecureBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="@layertwo/cdk-constructs.SecureBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.SecureBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@layertwo/cdk-constructs.SecureBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@layertwo/cdk-constructs.SecureBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@layertwo/cdk-constructs.SecureBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@layertwo/cdk-constructs.SecureBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.SecureBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@layertwo/cdk-constructs.SecureBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@layertwo/cdk-constructs.SecureBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@layertwo/cdk-constructs.SecureBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@layertwo/cdk-constructs.SecureBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.SecureBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@layertwo/cdk-constructs.SecureBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@layertwo/cdk-constructs.SecureBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@layertwo/cdk-constructs.SecureBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@layertwo/cdk-constructs.SecureBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@layertwo/cdk-constructs.SecureBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@layertwo/cdk-constructs.SecureBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@layertwo/cdk-constructs.SecureBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@layertwo/cdk-constructs.SecureBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="@layertwo/cdk-constructs.SecureBucket.isConstruct"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

SecureBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@layertwo/cdk-constructs.SecureBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@layertwo/cdk-constructs.SecureBucket.isOwnedResource"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

SecureBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.SecureBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@layertwo/cdk-constructs.SecureBucket.isResource"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

SecureBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.SecureBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@layertwo/cdk-constructs.SecureBucket.fromBucketArn"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

SecureBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.SecureBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@layertwo/cdk-constructs.SecureBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@layertwo/cdk-constructs.SecureBucket.fromBucketAttributes"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

SecureBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.SecureBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@layertwo/cdk-constructs.SecureBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@layertwo/cdk-constructs.SecureBucket.fromBucketName"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

SecureBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.SecureBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@layertwo/cdk-constructs.SecureBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="@layertwo/cdk-constructs.SecureBucket.fromCfnBucket"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

SecureBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="@layertwo/cdk-constructs.SecureBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="@layertwo/cdk-constructs.SecureBucket.validateBucketName"></a>

```typescript
import { SecureBucket } from '@layertwo/cdk-constructs'

SecureBucket.validateBucketName(physicalName: string, allowLegacyBucketNaming?: boolean)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@layertwo/cdk-constructs.SecureBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

###### `allowLegacyBucketNaming`<sup>Optional</sup> <a name="allowLegacyBucketNaming" id="@layertwo/cdk-constructs.SecureBucket.validateBucketName.parameter.allowLegacyBucketNaming"></a>

- *Type:* boolean

allow legacy bucket naming style, default is false.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.replicationRoleArn">replicationRoleArn</a></code> | <code>string</code> | Role used to set up permissions on this bucket for replication. |

---

##### `node`<sup>Required</sup> <a name="node" id="@layertwo/cdk-constructs.SecureBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@layertwo/cdk-constructs.SecureBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@layertwo/cdk-constructs.SecureBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@layertwo/cdk-constructs.SecureBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@layertwo/cdk-constructs.SecureBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@layertwo/cdk-constructs.SecureBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@layertwo/cdk-constructs.SecureBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@layertwo/cdk-constructs.SecureBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@layertwo/cdk-constructs.SecureBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@layertwo/cdk-constructs.SecureBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@layertwo/cdk-constructs.SecureBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@layertwo/cdk-constructs.SecureBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@layertwo/cdk-constructs.SecureBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---

##### `replicationRoleArn`<sup>Optional</sup> <a name="replicationRoleArn" id="@layertwo/cdk-constructs.SecureBucket.property.replicationRoleArn"></a>

```typescript
public readonly replicationRoleArn: string;
```

- *Type:* string

Role used to set up permissions on this bucket for replication.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="@layertwo/cdk-constructs.SecureBucket.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

### SecureTable <a name="SecureTable" id="@layertwo/cdk-constructs.SecureTable"></a>

A DynamoDB Table with best-practice defaults enforced: - On-demand billing (PAY_PER_REQUEST) - Point-in-time recovery always enabled.

#### Initializers <a name="Initializers" id="@layertwo/cdk-constructs.SecureTable.Initializer"></a>

```typescript
import { SecureTable } from '@layertwo/cdk-constructs'

new SecureTable(scope: Construct, id: string, props: SecureTableProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.Initializer.parameter.props">props</a></code> | <code><a href="#@layertwo/cdk-constructs.SecureTableProps">SecureTableProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.SecureTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureTable.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.Initializer.parameter.props"></a>

- *Type:* <a href="#@layertwo/cdk-constructs.SecureTableProps">SecureTableProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy associated with this file system. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grant">grant</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantFullAccess">grantFullAccess</a></code> | Permits all DynamoDB operations ("dynamodb:*") to an IAM principal. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantReadData">grantReadData</a></code> | Permits an IAM principal all data read operations from this table: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, DescribeTable. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantReadWriteData">grantReadWriteData</a></code> | Permits an IAM principal to all data read/write operations to this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantStream">grantStream</a></code> | Adds an IAM policy statement associated with this table's stream to an IAM principal's policy. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantStreamRead">grantStreamRead</a></code> | Permits an IAM principal all stream data read operations for this table's stream: DescribeStream, GetRecords, GetShardIterator, ListStreams. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantTableListStreams">grantTableListStreams</a></code> | Permits an IAM Principal to list streams attached to current dynamodb table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantWriteData">grantWriteData</a></code> | Permits an IAM principal all data write operations to this table: BatchWriteItem, PutItem, UpdateItem, DeleteItem, DescribeTable. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metric">metric</a></code> | Return the given named metric for this Table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricConditionalCheckFailedRequests">metricConditionalCheckFailedRequests</a></code> | Metric for the conditional check failed requests this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricConsumedReadCapacityUnits">metricConsumedReadCapacityUnits</a></code> | Metric for the consumed read capacity units this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricConsumedWriteCapacityUnits">metricConsumedWriteCapacityUnits</a></code> | Metric for the consumed write capacity units this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricSuccessfulRequestLatency">metricSuccessfulRequestLatency</a></code> | Metric for the successful request latency this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricSystemErrors">metricSystemErrors</a></code> | Metric for the system errors this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricSystemErrorsForOperations">metricSystemErrorsForOperations</a></code> | Metric for the system errors this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricThrottledRequests">metricThrottledRequests</a></code> | How many requests are throttled on this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricThrottledRequestsForOperation">metricThrottledRequestsForOperation</a></code> | How many requests are throttled on this table, for the given operation. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricThrottledRequestsForOperations">metricThrottledRequestsForOperations</a></code> | How many requests are throttled on this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.metricUserErrors">metricUserErrors</a></code> | Metric for the user errors. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.addGlobalSecondaryIndex">addGlobalSecondaryIndex</a></code> | Add a global secondary index of table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.addLocalSecondaryIndex">addLocalSecondaryIndex</a></code> | Add a local secondary index of table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.autoScaleGlobalSecondaryIndexReadCapacity">autoScaleGlobalSecondaryIndexReadCapacity</a></code> | Enable read capacity scaling for the given GSI. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.autoScaleGlobalSecondaryIndexWriteCapacity">autoScaleGlobalSecondaryIndexWriteCapacity</a></code> | Enable write capacity scaling for the given GSI. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.autoScaleReadCapacity">autoScaleReadCapacity</a></code> | Enable read capacity scaling for this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.autoScaleWriteCapacity">autoScaleWriteCapacity</a></code> | Enable write capacity scaling for this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.schema">schema</a></code> | Get schema attributes of table or index. |

---

##### `toString` <a name="toString" id="@layertwo/cdk-constructs.SecureTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@layertwo/cdk-constructs.SecureTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@layertwo/cdk-constructs.SecureTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@layertwo/cdk-constructs.SecureTable.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@layertwo/cdk-constructs.SecureTable.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@layertwo/cdk-constructs.SecureTable.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(statement: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy associated with this file system.

A resource policy will be automatically created upon the first call to `addToResourcePolicy`.

Note that this does not work with imported file systems.

###### `statement`<sup>Required</sup> <a name="statement" id="@layertwo/cdk-constructs.SecureTable.addToResourcePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The policy statement to add.

---

##### `grant` <a name="grant" id="@layertwo/cdk-constructs.SecureTable.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: ...string[]): Grant
```

Adds an IAM policy statement associated with this table to an IAM principal's policy.

If `encryptionKey` is present, appropriate grants to the key needs to be added
separately using the `table.encryptionKey.grant*` methods.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="@layertwo/cdk-constructs.SecureTable.grant.parameter.actions"></a>

- *Type:* ...string[]

The set of actions to allow (i.e. "dynamodb:PutItem", "dynamodb:GetItem", ...).

---

##### `grantFullAccess` <a name="grantFullAccess" id="@layertwo/cdk-constructs.SecureTable.grantFullAccess"></a>

```typescript
public grantFullAccess(grantee: IGrantable): Grant
```

Permits all DynamoDB operations ("dynamodb:*") to an IAM principal.

Appropriate grants will also be added to the customer-managed KMS key
if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantFullAccess.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantReadData` <a name="grantReadData" id="@layertwo/cdk-constructs.SecureTable.grantReadData"></a>

```typescript
public grantReadData(grantee: IGrantable): Grant
```

Permits an IAM principal all data read operations from this table: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, DescribeTable.

Appropriate grants will also be added to the customer-managed KMS key
if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantReadData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantReadWriteData` <a name="grantReadWriteData" id="@layertwo/cdk-constructs.SecureTable.grantReadWriteData"></a>

```typescript
public grantReadWriteData(grantee: IGrantable): Grant
```

Permits an IAM principal to all data read/write operations to this table.

BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan,
BatchWriteItem, PutItem, UpdateItem, DeleteItem, DescribeTable

Appropriate grants will also be added to the customer-managed KMS key
if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantReadWriteData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantStream` <a name="grantStream" id="@layertwo/cdk-constructs.SecureTable.grantStream"></a>

```typescript
public grantStream(grantee: IGrantable, actions: ...string[]): Grant
```

Adds an IAM policy statement associated with this table's stream to an IAM principal's policy.

If `encryptionKey` is present, appropriate grants to the key needs to be added
separately using the `table.encryptionKey.grant*` methods.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantStream.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="@layertwo/cdk-constructs.SecureTable.grantStream.parameter.actions"></a>

- *Type:* ...string[]

The set of actions to allow (i.e. "dynamodb:DescribeStream", "dynamodb:GetRecords", ...).

---

##### `grantStreamRead` <a name="grantStreamRead" id="@layertwo/cdk-constructs.SecureTable.grantStreamRead"></a>

```typescript
public grantStreamRead(grantee: IGrantable): Grant
```

Permits an IAM principal all stream data read operations for this table's stream: DescribeStream, GetRecords, GetShardIterator, ListStreams.

Appropriate grants will also be added to the customer-managed KMS key
if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantStreamRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantTableListStreams` <a name="grantTableListStreams" id="@layertwo/cdk-constructs.SecureTable.grantTableListStreams"></a>

```typescript
public grantTableListStreams(grantee: IGrantable): Grant
```

Permits an IAM Principal to list streams attached to current dynamodb table.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantTableListStreams.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal (no-op if undefined).

---

##### `grantWriteData` <a name="grantWriteData" id="@layertwo/cdk-constructs.SecureTable.grantWriteData"></a>

```typescript
public grantWriteData(grantee: IGrantable): Grant
```

Permits an IAM principal all data write operations to this table: BatchWriteItem, PutItem, UpdateItem, DeleteItem, DescribeTable.

Appropriate grants will also be added to the customer-managed KMS key
if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantWriteData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `metric` <a name="metric" id="@layertwo/cdk-constructs.SecureTable.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@layertwo/cdk-constructs.SecureTable.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConditionalCheckFailedRequests` <a name="metricConditionalCheckFailedRequests" id="@layertwo/cdk-constructs.SecureTable.metricConditionalCheckFailedRequests"></a>

```typescript
public metricConditionalCheckFailedRequests(props?: MetricOptions): Metric
```

Metric for the conditional check failed requests this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricConditionalCheckFailedRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumedReadCapacityUnits` <a name="metricConsumedReadCapacityUnits" id="@layertwo/cdk-constructs.SecureTable.metricConsumedReadCapacityUnits"></a>

```typescript
public metricConsumedReadCapacityUnits(props?: MetricOptions): Metric
```

Metric for the consumed read capacity units this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricConsumedReadCapacityUnits.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumedWriteCapacityUnits` <a name="metricConsumedWriteCapacityUnits" id="@layertwo/cdk-constructs.SecureTable.metricConsumedWriteCapacityUnits"></a>

```typescript
public metricConsumedWriteCapacityUnits(props?: MetricOptions): Metric
```

Metric for the consumed write capacity units this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricConsumedWriteCapacityUnits.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSuccessfulRequestLatency` <a name="metricSuccessfulRequestLatency" id="@layertwo/cdk-constructs.SecureTable.metricSuccessfulRequestLatency"></a>

```typescript
public metricSuccessfulRequestLatency(props?: MetricOptions): Metric
```

Metric for the successful request latency this table.

By default, the metric will be calculated as an average over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricSuccessfulRequestLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricSystemErrors`~~ <a name="metricSystemErrors" id="@layertwo/cdk-constructs.SecureTable.metricSystemErrors"></a>

```typescript
public metricSystemErrors(props?: MetricOptions): Metric
```

Metric for the system errors this table.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricSystemErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSystemErrorsForOperations` <a name="metricSystemErrorsForOperations" id="@layertwo/cdk-constructs.SecureTable.metricSystemErrorsForOperations"></a>

```typescript
public metricSystemErrorsForOperations(props?: SystemErrorsForOperationsMetricOptions): IMetric
```

Metric for the system errors this table.

This will sum errors across all possible operations.
Note that by default, each individual metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricSystemErrorsForOperations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.SystemErrorsForOperationsMetricOptions

---

##### ~~`metricThrottledRequests`~~ <a name="metricThrottledRequests" id="@layertwo/cdk-constructs.SecureTable.metricThrottledRequests"></a>

```typescript
public metricThrottledRequests(props?: MetricOptions): Metric
```

How many requests are throttled on this table.

Default: sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricThrottledRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottledRequestsForOperation` <a name="metricThrottledRequestsForOperation" id="@layertwo/cdk-constructs.SecureTable.metricThrottledRequestsForOperation"></a>

```typescript
public metricThrottledRequestsForOperation(operation: string, props?: MetricOptions): Metric
```

How many requests are throttled on this table, for the given operation.

Default: sum over 5 minutes

###### `operation`<sup>Required</sup> <a name="operation" id="@layertwo/cdk-constructs.SecureTable.metricThrottledRequestsForOperation.parameter.operation"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricThrottledRequestsForOperation.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottledRequestsForOperations` <a name="metricThrottledRequestsForOperations" id="@layertwo/cdk-constructs.SecureTable.metricThrottledRequestsForOperations"></a>

```typescript
public metricThrottledRequestsForOperations(props?: OperationsMetricOptions): IMetric
```

How many requests are throttled on this table.

This will sum errors across all possible operations.
Note that by default, each individual metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricThrottledRequestsForOperations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.OperationsMetricOptions

---

##### `metricUserErrors` <a name="metricUserErrors" id="@layertwo/cdk-constructs.SecureTable.metricUserErrors"></a>

```typescript
public metricUserErrors(props?: MetricOptions): Metric
```

Metric for the user errors.

Note that this metric reports user errors across all
the tables in the account and region the table resides in.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.metricUserErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addGlobalSecondaryIndex` <a name="addGlobalSecondaryIndex" id="@layertwo/cdk-constructs.SecureTable.addGlobalSecondaryIndex"></a>

```typescript
public addGlobalSecondaryIndex(props: GlobalSecondaryIndexProps): void
```

Add a global secondary index of table.

###### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.addGlobalSecondaryIndex.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.GlobalSecondaryIndexProps

the property of global secondary index.

---

##### `addLocalSecondaryIndex` <a name="addLocalSecondaryIndex" id="@layertwo/cdk-constructs.SecureTable.addLocalSecondaryIndex"></a>

```typescript
public addLocalSecondaryIndex(props: LocalSecondaryIndexProps): void
```

Add a local secondary index of table.

###### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.addLocalSecondaryIndex.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.LocalSecondaryIndexProps

the property of local secondary index.

---

##### `autoScaleGlobalSecondaryIndexReadCapacity` <a name="autoScaleGlobalSecondaryIndexReadCapacity" id="@layertwo/cdk-constructs.SecureTable.autoScaleGlobalSecondaryIndexReadCapacity"></a>

```typescript
public autoScaleGlobalSecondaryIndexReadCapacity(indexName: string, props: EnableScalingProps): IScalableTableAttribute
```

Enable read capacity scaling for the given GSI.

###### `indexName`<sup>Required</sup> <a name="indexName" id="@layertwo/cdk-constructs.SecureTable.autoScaleGlobalSecondaryIndexReadCapacity.parameter.indexName"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.autoScaleGlobalSecondaryIndexReadCapacity.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.EnableScalingProps

---

##### `autoScaleGlobalSecondaryIndexWriteCapacity` <a name="autoScaleGlobalSecondaryIndexWriteCapacity" id="@layertwo/cdk-constructs.SecureTable.autoScaleGlobalSecondaryIndexWriteCapacity"></a>

```typescript
public autoScaleGlobalSecondaryIndexWriteCapacity(indexName: string, props: EnableScalingProps): IScalableTableAttribute
```

Enable write capacity scaling for the given GSI.

###### `indexName`<sup>Required</sup> <a name="indexName" id="@layertwo/cdk-constructs.SecureTable.autoScaleGlobalSecondaryIndexWriteCapacity.parameter.indexName"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.autoScaleGlobalSecondaryIndexWriteCapacity.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.EnableScalingProps

---

##### `autoScaleReadCapacity` <a name="autoScaleReadCapacity" id="@layertwo/cdk-constructs.SecureTable.autoScaleReadCapacity"></a>

```typescript
public autoScaleReadCapacity(props: EnableScalingProps): IScalableTableAttribute
```

Enable read capacity scaling for this table.

###### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.autoScaleReadCapacity.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.EnableScalingProps

---

##### `autoScaleWriteCapacity` <a name="autoScaleWriteCapacity" id="@layertwo/cdk-constructs.SecureTable.autoScaleWriteCapacity"></a>

```typescript
public autoScaleWriteCapacity(props: EnableScalingProps): IScalableTableAttribute
```

Enable write capacity scaling for this table.

###### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.SecureTable.autoScaleWriteCapacity.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.EnableScalingProps

---

##### `schema` <a name="schema" id="@layertwo/cdk-constructs.SecureTable.schema"></a>

```typescript
public schema(indexName?: string): SchemaOptions
```

Get schema attributes of table or index.

###### `indexName`<sup>Optional</sup> <a name="indexName" id="@layertwo/cdk-constructs.SecureTable.schema.parameter.indexName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.fromTableArn">fromTableArn</a></code> | Creates a Table construct that represents an external table via table arn. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.fromTableAttributes">fromTableAttributes</a></code> | Creates a Table construct that represents an external table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.fromTableName">fromTableName</a></code> | Creates a Table construct that represents an external table via table name. |

---

##### `isConstruct` <a name="isConstruct" id="@layertwo/cdk-constructs.SecureTable.isConstruct"></a>

```typescript
import { SecureTable } from '@layertwo/cdk-constructs'

SecureTable.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@layertwo/cdk-constructs.SecureTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@layertwo/cdk-constructs.SecureTable.isOwnedResource"></a>

```typescript
import { SecureTable } from '@layertwo/cdk-constructs'

SecureTable.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.SecureTable.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@layertwo/cdk-constructs.SecureTable.isResource"></a>

```typescript
import { SecureTable } from '@layertwo/cdk-constructs'

SecureTable.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.SecureTable.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromTableArn` <a name="fromTableArn" id="@layertwo/cdk-constructs.SecureTable.fromTableArn"></a>

```typescript
import { SecureTable } from '@layertwo/cdk-constructs'

SecureTable.fromTableArn(scope: Construct, id: string, tableArn: string)
```

Creates a Table construct that represents an external table via table arn.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.SecureTable.fromTableArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureTable.fromTableArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `tableArn`<sup>Required</sup> <a name="tableArn" id="@layertwo/cdk-constructs.SecureTable.fromTableArn.parameter.tableArn"></a>

- *Type:* string

The table's ARN.

---

##### `fromTableAttributes` <a name="fromTableAttributes" id="@layertwo/cdk-constructs.SecureTable.fromTableAttributes"></a>

```typescript
import { SecureTable } from '@layertwo/cdk-constructs'

SecureTable.fromTableAttributes(scope: Construct, id: string, attrs: TableAttributes)
```

Creates a Table construct that represents an external table.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.SecureTable.fromTableAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureTable.fromTableAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@layertwo/cdk-constructs.SecureTable.fromTableAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.TableAttributes

A `TableAttributes` object.

---

##### `fromTableName` <a name="fromTableName" id="@layertwo/cdk-constructs.SecureTable.fromTableName"></a>

```typescript
import { SecureTable } from '@layertwo/cdk-constructs'

SecureTable.fromTableName(scope: Construct, id: string, tableName: string)
```

Creates a Table construct that represents an external table via table name.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.SecureTable.fromTableName.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.SecureTable.fromTableName.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `tableName`<sup>Required</sup> <a name="tableName" id="@layertwo/cdk-constructs.SecureTable.fromTableName.parameter.tableName"></a>

- *Type:* string

The table's name.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.tableArn">tableArn</a></code> | <code>string</code> | Arn of the dynamodb table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.tableName">tableName</a></code> | <code>string</code> | Table name of the dynamodb table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS encryption key, if this table uses a customer-managed encryption key. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.tableStreamArn">tableStreamArn</a></code> | <code>string</code> | ARN of the table's stream, if there is one. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.resourcePolicy">resourcePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | Resource policy to assign to DynamoDB Table. |

---

##### `node`<sup>Required</sup> <a name="node" id="@layertwo/cdk-constructs.SecureTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@layertwo/cdk-constructs.SecureTable.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@layertwo/cdk-constructs.SecureTable.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@layertwo/cdk-constructs.SecureTable.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

Arn of the dynamodb table.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@layertwo/cdk-constructs.SecureTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Table name of the dynamodb table.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@layertwo/cdk-constructs.SecureTable.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS encryption key, if this table uses a customer-managed encryption key.

---

##### `tableStreamArn`<sup>Optional</sup> <a name="tableStreamArn" id="@layertwo/cdk-constructs.SecureTable.property.tableStreamArn"></a>

```typescript
public readonly tableStreamArn: string;
```

- *Type:* string

ARN of the table's stream, if there is one.

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@layertwo/cdk-constructs.SecureTable.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* No resource policy statements are added to the created table.

Resource policy to assign to DynamoDB Table.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-resourcepolicy.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-resourcepolicy.html)

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="@layertwo/cdk-constructs.SecureTable.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

## Structs <a name="Structs" id="Structs"></a>

### DnsValidatedCertificateProps <a name="DnsValidatedCertificateProps" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps"></a>

Properties for DnsValidatedCertificate.

The `validation` prop from CertificateProps is always overridden to use
DNS validation via the supplied `hostedZone`. Any value passed for
`validation` will be silently ignored.

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.Initializer"></a>

```typescript
import { DnsValidatedCertificateProps } from '@layertwo/cdk-constructs'

const dnsValidatedCertificateProps: DnsValidatedCertificateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.domainName">domainName</a></code> | <code>string</code> | Fully-qualified domain name to request a certificate for. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.certificateName">certificateName</a></code> | <code>string</code> | The Certificate name. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.keyAlgorithm">keyAlgorithm</a></code> | <code>aws-cdk-lib.aws_certificatemanager.KeyAlgorithm</code> | Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | Alternative domain names on your certificate. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.transparencyLoggingEnabled">transparencyLoggingEnabled</a></code> | <code>boolean</code> | Enable or disable transparency logging for this certificate. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.validation">validation</a></code> | <code>aws-cdk-lib.aws_certificatemanager.CertificateValidation</code> | How to validate this certificate. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The Route53 hosted zone to use for DNS validation. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Fully-qualified domain name to request a certificate for.

May contain wildcards, such as ``*.domain.com``.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string
- *Default:* the full, absolute path of this construct

The Certificate name.

Since the Certificate resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: KeyAlgorithm;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.KeyAlgorithm
- *Default:* KeyAlgorithm.RSA_2048

Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data.

> [https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms.title](https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms.title)

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]
- *Default:* No additional FQDNs will be included as alternative domain names.

Alternative domain names on your certificate.

Use this to register alternative domain names that represent the same site.

---

##### `transparencyLoggingEnabled`<sup>Optional</sup> <a name="transparencyLoggingEnabled" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.transparencyLoggingEnabled"></a>

```typescript
public readonly transparencyLoggingEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Enable or disable transparency logging for this certificate.

Once a certificate has been logged, it cannot be removed from the log.
Opting out at that point will have no effect. If you opt out of logging
when you request a certificate and then choose later to opt back in,
your certificate will not be logged until it is renewed.
If you want the certificate to be logged immediately, we recommend that you issue a new one.

> [https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency](https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency)

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.validation"></a>

```typescript
public readonly validation: CertificateValidation;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.CertificateValidation
- *Default:* CertificateValidation.fromEmail()

How to validate this certificate.

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The Route53 hosted zone to use for DNS validation.

---

### GitHubOidcRoleProps <a name="GitHubOidcRoleProps" id="@layertwo/cdk-constructs.GitHubOidcRoleProps"></a>

Properties for GitHubOidcRole.

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.Initializer"></a>

```typescript
import { GitHubOidcRoleProps } from '@layertwo/cdk-constructs'

const gitHubOidcRoleProps: GitHubOidcRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.owner">owner</a></code> | <code>string</code> | GitHub repository owner (organization or user). |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.repo">repo</a></code> | <code>string</code> | GitHub repository name. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.branch">branch</a></code> | <code>string</code> | Specific branch to allow (optional) If neither branch nor environment is specified, all branches are allowed. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.description">description</a></code> | <code>string</code> | A description of the role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.environment">environment</a></code> | <code>string</code> | GitHub environment name (optional) Takes precedence over branch if both are specified. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.maxSessionDuration">maxSessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum session duration for the role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.roleName">roleName</a></code> | <code>string</code> | A name for the IAM role. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

GitHub repository owner (organization or user).

---

##### `repo`<sup>Required</sup> <a name="repo" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

GitHub repository name.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Specific branch to allow (optional) If neither branch nor environment is specified, all branches are allowed.

---

##### `description`<sup>Optional</sup> <a name="description" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A description of the role.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

GitHub environment name (optional) Takes precedence over branch if both are specified.

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="maxSessionDuration" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.maxSessionDuration"></a>

```typescript
public readonly maxSessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(1)

The maximum session duration for the role.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID

A name for the IAM role.

---

### SecureBucketProps <a name="SecureBucketProps" id="@layertwo/cdk-constructs.SecureBucketProps"></a>

Properties for SecureBucket.

Hardcoded (not overridable): blockPublicAccess, encryption, enforceSSL.
These are always applied regardless of what is passed in props.

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.SecureBucketProps.Initializer"></a>

```typescript
import { SecureBucketProps } from '@layertwo/cdk-constructs'

const secureBucketProps: SecureBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Whether Amazon S3 should use its own intermediary key to generate data keys. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | Physical name of this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.cors">cors</a></code> | <code>aws-cdk-lib.aws_s3.CorsRule[]</code> | The CORS configuration of this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_s3.BucketEncryption</code> | The kind of server-side encryption to apply to this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for bucket encryption. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.enforceSSL">enforceSSL</a></code> | <code>boolean</code> | Enforces SSL for requests. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.eventBridgeEnabled">eventBridgeEnabled</a></code> | <code>boolean</code> | Whether this bucket should send notifications to Amazon EventBridge or not. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.intelligentTieringConfigurations">intelligentTieringConfigurations</a></code> | <code>aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]</code> | Intelligent Tiering Configurations. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.inventories">inventories</a></code> | <code>aws-cdk-lib.aws_s3.Inventory[]</code> | The inventory configuration of the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_s3.BucketMetrics[]</code> | The metrics configuration of this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.minimumTLSVersion">minimumTLSVersion</a></code> | <code>number</code> | Enforces minimum TLS version for requests. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.notificationsHandlerRole">notificationsHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role to be used by the notifications handler. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.notificationsSkipDestinationValidation">notificationsSkipDestinationValidation</a></code> | <code>boolean</code> | Skips notification validation of Amazon SQS, Amazon SNS, and Lambda destinations. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.objectLockDefaultRetention">objectLockDefaultRetention</a></code> | <code>aws-cdk-lib.aws_s3.ObjectLockRetention</code> | The default retention mode and rules for S3 Object Lock. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean</code> | Enable object lock on the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.objectOwnership">objectOwnership</a></code> | <code>aws-cdk-lib.aws_s3.ObjectOwnership</code> | The objectOwnership of the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.publicReadAccess">publicReadAccess</a></code> | <code>boolean</code> | Grants public read access to all objects in the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.replicationRole">replicationRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role to be used by the replication. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.replicationRules">replicationRules</a></code> | <code>aws-cdk-lib.aws_s3.ReplicationRule[]</code> | A container for one or more replication rules. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.serverAccessLogsBucket">serverAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Destination bucket for the server access logs. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.serverAccessLogsPrefix">serverAccessLogsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the bucket's access logs. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.targetObjectKeyFormat">targetObjectKeyFormat</a></code> | <code>aws-cdk-lib.aws_s3.TargetObjectKeyFormat</code> | Optional key format for log objects. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.transferAcceleration">transferAcceleration</a></code> | <code>boolean</code> | Whether this bucket should have transfer acceleration turned on or not. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.transitionDefaultMinimumObjectSize">transitionDefaultMinimumObjectSize</a></code> | <code>aws-cdk-lib.aws_s3.TransitionDefaultMinimumObjectSize</code> | Indicates which default minimum object size behavior is applied to the lifecycle configuration. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.versioned">versioned</a></code> | <code>boolean</code> | Whether this bucket should have versioning turned on or not. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.websiteErrorDocument">websiteErrorDocument</a></code> | <code>string</code> | The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.websiteIndexDocument">websiteIndexDocument</a></code> | <code>string</code> | The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.websiteRedirect">websiteRedirect</a></code> | <code>aws-cdk-lib.aws_s3.RedirectTarget</code> | Specifies the redirect behavior of all requests to a website endpoint of a bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.websiteRoutingRules">websiteRoutingRules</a></code> | <code>aws-cdk-lib.aws_s3.RoutingRule[]</code> | Rules that define when a redirect is applied and the redirect behavior. |

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@layertwo/cdk-constructs.SecureBucketProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* aws-cdk-lib.aws_s3.BucketAccessControl
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="autoDeleteObjects" id="@layertwo/cdk-constructs.SecureBucketProps.property.autoDeleteObjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* boolean
- *Default:* false

Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

**Warning** if you have deployed a bucket with `autoDeleteObjects: true`,
switching this to `false` in a CDK version *before* `1.126.0` will lead to
all objects in the bucket being deleted. Be sure to update your bucket resources
by deploying with CDK version `1.126.0` or later **before** switching this value to `false`.

Setting `autoDeleteObjects` to true on a bucket will add `s3:PutBucketPolicy` to the
bucket policy. This is because during bucket deletion, the custom resource provider
needs to update the bucket policy by adding a deny policy for `s3:PutObject` to
prevent race conditions with external bucket writers.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="blockPublicAccess" id="@layertwo/cdk-constructs.SecureBucketProps.property.blockPublicAccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* aws-cdk-lib.aws_s3.BlockPublicAccess
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@layertwo/cdk-constructs.SecureBucketProps.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether Amazon S3 should use its own intermediary key to generate data keys.

Only relevant when using KMS for encryption.

- If not enabled, every object GET and PUT will cause an API call to KMS (with the
  attendant cost implications of that).
- If enabled, S3 will use its own time-limited key instead.

Only relevant, when Encryption is not set to `BucketEncryption.UNENCRYPTED`.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@layertwo/cdk-constructs.SecureBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* Assigned by CloudFormation (recommended).

Physical name of this bucket.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@layertwo/cdk-constructs.SecureBucketProps.property.cors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* aws-cdk-lib.aws_s3.CorsRule[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html)

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@layertwo/cdk-constructs.SecureBucketProps.property.encryption"></a>

```typescript
public readonly encryption: BucketEncryption;
```

- *Type:* aws-cdk-lib.aws_s3.BucketEncryption
- *Default:* `KMS` if `encryptionKey` is specified, or `S3_MANAGED` otherwise.

The kind of server-side encryption to apply to this bucket.

If you choose KMS, you can specify a KMS key via `encryptionKey`. If
encryption key is not specified, a key will automatically be created.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@layertwo/cdk-constructs.SecureBucketProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If `encryption` is set to `KMS` and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS key to use for bucket encryption.

The `encryption` property must be either not specified or set to `KMS` or `DSSE`.
An error will be emitted if `encryption` is set to `UNENCRYPTED` or `S3_MANAGED`.

---

##### `enforceSSL`<sup>Optional</sup> <a name="enforceSSL" id="@layertwo/cdk-constructs.SecureBucketProps.property.enforceSSL"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* boolean
- *Default:* false

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

> [https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html)

---

##### `eventBridgeEnabled`<sup>Optional</sup> <a name="eventBridgeEnabled" id="@layertwo/cdk-constructs.SecureBucketProps.property.eventBridgeEnabled"></a>

```typescript
public readonly eventBridgeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should send notifications to Amazon EventBridge or not.

---

##### `intelligentTieringConfigurations`<sup>Optional</sup> <a name="intelligentTieringConfigurations" id="@layertwo/cdk-constructs.SecureBucketProps.property.intelligentTieringConfigurations"></a>

```typescript
public readonly intelligentTieringConfigurations: IntelligentTieringConfiguration[];
```

- *Type:* aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]
- *Default:* No Intelligent Tiiering Configurations.

Intelligent Tiering Configurations.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html)

---

##### `inventories`<sup>Optional</sup> <a name="inventories" id="@layertwo/cdk-constructs.SecureBucketProps.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* aws-cdk-lib.aws_s3.Inventory[]
- *Default:* No inventory configuration

The inventory configuration of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html)

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="@layertwo/cdk-constructs.SecureBucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@layertwo/cdk-constructs.SecureBucketProps.property.metrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html)

---

##### `minimumTLSVersion`<sup>Optional</sup> <a name="minimumTLSVersion" id="@layertwo/cdk-constructs.SecureBucketProps.property.minimumTLSVersion"></a>

```typescript
public readonly minimumTLSVersion: number;
```

- *Type:* number
- *Default:* No minimum TLS version is enforced.

Enforces minimum TLS version for requests.

Requires `enforceSSL` to be enabled.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-tls-version](https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-tls-version)

---

##### `notificationsHandlerRole`<sup>Optional</sup> <a name="notificationsHandlerRole" id="@layertwo/cdk-constructs.SecureBucketProps.property.notificationsHandlerRole"></a>

```typescript
public readonly notificationsHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created.

The role to be used by the notifications handler.

---

##### `notificationsSkipDestinationValidation`<sup>Optional</sup> <a name="notificationsSkipDestinationValidation" id="@layertwo/cdk-constructs.SecureBucketProps.property.notificationsSkipDestinationValidation"></a>

```typescript
public readonly notificationsSkipDestinationValidation: boolean;
```

- *Type:* boolean
- *Default:* false

Skips notification validation of Amazon SQS, Amazon SNS, and Lambda destinations.

---

##### `objectLockDefaultRetention`<sup>Optional</sup> <a name="objectLockDefaultRetention" id="@layertwo/cdk-constructs.SecureBucketProps.property.objectLockDefaultRetention"></a>

```typescript
public readonly objectLockDefaultRetention: ObjectLockRetention;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectLockRetention
- *Default:* no default retention period

The default retention mode and rules for S3 Object Lock.

Default retention can be configured after a bucket is created if the bucket already
has object lock enabled. Enabling object lock for existing buckets is not supported.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@layertwo/cdk-constructs.SecureBucketProps.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean;
```

- *Type:* boolean
- *Default:* false, unless objectLockDefaultRetention is set (then, true)

Enable object lock on the bucket.

Enabling object lock for existing buckets is not supported. Object lock must be
enabled when the bucket is created.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectOwnership`<sup>Optional</sup> <a name="objectOwnership" id="@layertwo/cdk-constructs.SecureBucketProps.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectOwnership
- *Default:* No ObjectOwnership configuration. By default, Amazon S3 sets Object Ownership to `Bucket owner enforced`. This means ACLs are disabled and the bucket owner will own every object.

The objectOwnership of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html)

---

##### `publicReadAccess`<sup>Optional</sup> <a name="publicReadAccess" id="@layertwo/cdk-constructs.SecureBucketProps.property.publicReadAccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* boolean
- *Default:* false

Grants public read access to all objects in the bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@layertwo/cdk-constructs.SecureBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be orphaned.

Policy to apply when the bucket is removed from this stack.

---

##### `replicationRole`<sup>Optional</sup> <a name="replicationRole" id="@layertwo/cdk-constructs.SecureBucketProps.property.replicationRole"></a>

```typescript
public readonly replicationRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created.

The role to be used by the replication.

When setting this property, you must also set `replicationRules`.

---

##### `replicationRules`<sup>Optional</sup> <a name="replicationRules" id="@layertwo/cdk-constructs.SecureBucketProps.property.replicationRules"></a>

```typescript
public readonly replicationRules: ReplicationRule[];
```

- *Type:* aws-cdk-lib.aws_s3.ReplicationRule[]
- *Default:* No replication

A container for one or more replication rules.

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="serverAccessLogsBucket" id="@layertwo/cdk-constructs.SecureBucketProps.property.serverAccessLogsBucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

Destination bucket for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="serverAccessLogsPrefix" id="@layertwo/cdk-constructs.SecureBucketProps.property.serverAccessLogsPrefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* string
- *Default:* No log file prefix

Optional log file prefix to use for the bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current bucket with this prefix.

---

##### `targetObjectKeyFormat`<sup>Optional</sup> <a name="targetObjectKeyFormat" id="@layertwo/cdk-constructs.SecureBucketProps.property.targetObjectKeyFormat"></a>

```typescript
public readonly targetObjectKeyFormat: TargetObjectKeyFormat;
```

- *Type:* aws-cdk-lib.aws_s3.TargetObjectKeyFormat
- *Default:* the default key format is: [DestinationPrefix][YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]

Optional key format for log objects.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="transferAcceleration" id="@layertwo/cdk-constructs.SecureBucketProps.property.transferAcceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should have transfer acceleration turned on or not.

---

##### `transitionDefaultMinimumObjectSize`<sup>Optional</sup> <a name="transitionDefaultMinimumObjectSize" id="@layertwo/cdk-constructs.SecureBucketProps.property.transitionDefaultMinimumObjectSize"></a>

```typescript
public readonly transitionDefaultMinimumObjectSize: TransitionDefaultMinimumObjectSize;
```

- *Type:* aws-cdk-lib.aws_s3.TransitionDefaultMinimumObjectSize
- *Default:* TransitionDefaultMinimumObjectSize.VARIES_BY_STORAGE_CLASS before September 2024, otherwise TransitionDefaultMinimumObjectSize.ALL_STORAGE_CLASSES_128_K.

Indicates which default minimum object size behavior is applied to the lifecycle configuration.

To customize the minimum object size for any transition you can add a filter that specifies a custom
`objectSizeGreaterThan` or `objectSizeLessThan` for `lifecycleRules` property. Custom filters always
take precedence over the default transition behavior.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@layertwo/cdk-constructs.SecureBucketProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* false (unless object lock is enabled, then true)

Whether this bucket should have versioning turned on or not.

---

##### `websiteErrorDocument`<sup>Optional</sup> <a name="websiteErrorDocument" id="@layertwo/cdk-constructs.SecureBucketProps.property.websiteErrorDocument"></a>

```typescript
public readonly websiteErrorDocument: string;
```

- *Type:* string
- *Default:* No error document.

The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set.

---

##### `websiteIndexDocument`<sup>Optional</sup> <a name="websiteIndexDocument" id="@layertwo/cdk-constructs.SecureBucketProps.property.websiteIndexDocument"></a>

```typescript
public readonly websiteIndexDocument: string;
```

- *Type:* string
- *Default:* No index document.

The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@layertwo/cdk-constructs.SecureBucketProps.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: RedirectTarget;
```

- *Type:* aws-cdk-lib.aws_s3.RedirectTarget
- *Default:* No redirection.

Specifies the redirect behavior of all requests to a website endpoint of a bucket.

If you specify this property, you can't specify "websiteIndexDocument", "websiteErrorDocument" nor , "websiteRoutingRules".

---

##### `websiteRoutingRules`<sup>Optional</sup> <a name="websiteRoutingRules" id="@layertwo/cdk-constructs.SecureBucketProps.property.websiteRoutingRules"></a>

```typescript
public readonly websiteRoutingRules: RoutingRule[];
```

- *Type:* aws-cdk-lib.aws_s3.RoutingRule[]
- *Default:* No redirection rules.

Rules that define when a redirect is applied and the redirect behavior.

---

### SecureTableProps <a name="SecureTableProps" id="@layertwo/cdk-constructs.SecureTableProps"></a>

Properties for SecureTable.

Hardcoded (not overridable): billingMode, pointInTimeRecoverySpecification.
These are always applied regardless of what is passed in props.

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.SecureTableProps.Initializer"></a>

```typescript
import { SecureTableProps } from '@layertwo/cdk-constructs'

const secureTableProps: SecureTableProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.partitionKey">partitionKey</a></code> | <code>aws-cdk-lib.aws_dynamodb.Attribute</code> | Partition key attribute definition. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.sortKey">sortKey</a></code> | <code>aws-cdk-lib.aws_dynamodb.Attribute</code> | Sort key attribute definition. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.billingMode">billingMode</a></code> | <code>aws-cdk-lib.aws_dynamodb.BillingMode</code> | Specify how you are charged for read and write throughput and how you manage capacity. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.contributorInsightsEnabled">contributorInsightsEnabled</a></code> | <code>boolean</code> | Whether CloudWatch contributor insights is enabled. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | Enables deletion protection for the table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_dynamodb.TableEncryption</code> | Whether server-side encryption with an AWS managed customer master key is enabled. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for table encryption. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.importSource">importSource</a></code> | <code>aws-cdk-lib.aws_dynamodb.ImportSourceSpecification</code> | The properties of data being imported from the S3 bucket source to the table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.maxReadRequestUnits">maxReadRequestUnits</a></code> | <code>number</code> | The maximum read request units for the table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.maxWriteRequestUnits">maxWriteRequestUnits</a></code> | <code>number</code> | The write request units for the table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code>boolean</code> | Whether point-in-time recovery is enabled. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.pointInTimeRecoverySpecification">pointInTimeRecoverySpecification</a></code> | <code>aws-cdk-lib.aws_dynamodb.PointInTimeRecoverySpecification</code> | Whether point-in-time recovery is enabled and recoveryPeriodInDays is set. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.readCapacity">readCapacity</a></code> | <code>number</code> | The read capacity for the table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the DynamoDB Table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.replicaRemovalPolicy">replicaRemovalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the DynamoDB replica tables. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.replicationRegions">replicationRegions</a></code> | <code>string[]</code> | Regions where replica tables will be created. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.replicationTimeout">replicationTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout for a table replication operation in a single region. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.resourcePolicy">resourcePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | Resource policy to assign to table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.stream">stream</a></code> | <code>aws-cdk-lib.aws_dynamodb.StreamViewType</code> | When an item in the table is modified, StreamViewType determines what information is written to the stream for this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.tableClass">tableClass</a></code> | <code>aws-cdk-lib.aws_dynamodb.TableClass</code> | Specify the table class. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.timeToLiveAttribute">timeToLiveAttribute</a></code> | <code>string</code> | The name of TTL attribute. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.waitForReplicationToFinish">waitForReplicationToFinish</a></code> | <code>boolean</code> | [WARNING: Use this flag with caution, misusing this flag may cause deleting existing replicas, refer to the detailed documentation for more information] Indicates whether CloudFormation stack waits for replication to finish. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.warmThroughput">warmThroughput</a></code> | <code>aws-cdk-lib.aws_dynamodb.WarmThroughput</code> | Specify values to pre-warm you DynamoDB Table Warm Throughput feature is not available for Global Table replicas using the `Table` construct. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.writeCapacity">writeCapacity</a></code> | <code>number</code> | The write capacity for the table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.kinesisPrecisionTimestamp">kinesisPrecisionTimestamp</a></code> | <code>aws-cdk-lib.aws_dynamodb.ApproximateCreationDateTimePrecision</code> | Kinesis Data Stream approximate creation timestamp precision. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.kinesisStream">kinesisStream</a></code> | <code>aws-cdk-lib.aws_kinesis.IStream</code> | Kinesis Data Stream to capture item-level changes for the table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.tableName">tableName</a></code> | <code>string</code> | Enforces a particular physical table name. |

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@layertwo/cdk-constructs.SecureTableProps.property.partitionKey"></a>

```typescript
public readonly partitionKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute

Partition key attribute definition.

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@layertwo/cdk-constructs.SecureTableProps.property.sortKey"></a>

```typescript
public readonly sortKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute
- *Default:* no sort key

Sort key attribute definition.

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@layertwo/cdk-constructs.SecureTableProps.property.billingMode"></a>

```typescript
public readonly billingMode: BillingMode;
```

- *Type:* aws-cdk-lib.aws_dynamodb.BillingMode
- *Default:* PROVISIONED if `replicationRegions` is not specified, PAY_PER_REQUEST otherwise

Specify how you are charged for read and write throughput and how you manage capacity.

---

##### `contributorInsightsEnabled`<sup>Optional</sup> <a name="contributorInsightsEnabled" id="@layertwo/cdk-constructs.SecureTableProps.property.contributorInsightsEnabled"></a>

```typescript
public readonly contributorInsightsEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether CloudWatch contributor insights is enabled.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@layertwo/cdk-constructs.SecureTableProps.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Enables deletion protection for the table.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@layertwo/cdk-constructs.SecureTableProps.property.encryption"></a>

```typescript
public readonly encryption: TableEncryption;
```

- *Type:* aws-cdk-lib.aws_dynamodb.TableEncryption
- *Default:* The table is encrypted with an encryption key managed by DynamoDB, and you are not charged any fee for using it.

Whether server-side encryption with an AWS managed customer master key is enabled.

This property cannot be set if `serverSideEncryption` is set.

> **NOTE**: if you set this to `CUSTOMER_MANAGED` and `encryptionKey` is not
> specified, the key that the Tablet generates for you will be created with
> default permissions. If you are using CDKv2, these permissions will be
> sufficient to enable the key for use with DynamoDB tables.  If you are
> using CDKv1, make sure the feature flag
> `@aws-cdk/aws-kms:defaultKeyPolicies` is set to `true` in your `cdk.json`.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@layertwo/cdk-constructs.SecureTableProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If `encryption` is set to `TableEncryption.CUSTOMER_MANAGED` and this property is undefined, a new KMS key will be created and associated with this table. If `encryption` and this property are both undefined, then the table is encrypted with an encryption key managed by DynamoDB, and you are not charged any fee for using it.

External KMS key to use for table encryption.

This property can only be set if `encryption` is set to `TableEncryption.CUSTOMER_MANAGED`.

---

##### `importSource`<sup>Optional</sup> <a name="importSource" id="@layertwo/cdk-constructs.SecureTableProps.property.importSource"></a>

```typescript
public readonly importSource: ImportSourceSpecification;
```

- *Type:* aws-cdk-lib.aws_dynamodb.ImportSourceSpecification
- *Default:* no data import from the S3 bucket

The properties of data being imported from the S3 bucket source to the table.

---

##### `maxReadRequestUnits`<sup>Optional</sup> <a name="maxReadRequestUnits" id="@layertwo/cdk-constructs.SecureTableProps.property.maxReadRequestUnits"></a>

```typescript
public readonly maxReadRequestUnits: number;
```

- *Type:* number
- *Default:* on-demand throughput is disabled

The maximum read request units for the table.

Careful if you add Global Secondary Indexes, as
those will share the table's maximum on-demand throughput.

Can only be provided if billingMode is PAY_PER_REQUEST.

---

##### `maxWriteRequestUnits`<sup>Optional</sup> <a name="maxWriteRequestUnits" id="@layertwo/cdk-constructs.SecureTableProps.property.maxWriteRequestUnits"></a>

```typescript
public readonly maxWriteRequestUnits: number;
```

- *Type:* number
- *Default:* on-demand throughput is disabled

The write request units for the table.

Careful if you add Global Secondary Indexes, as
those will share the table's maximum on-demand throughput.

Can only be provided if billingMode is PAY_PER_REQUEST.

---

##### ~~`pointInTimeRecovery`~~<sup>Optional</sup> <a name="pointInTimeRecovery" id="@layertwo/cdk-constructs.SecureTableProps.property.pointInTimeRecovery"></a>

- *Deprecated:* use `pointInTimeRecoverySpecification` instead

```typescript
public readonly pointInTimeRecovery: boolean;
```

- *Type:* boolean
- *Default:* false - point in time recovery is not enabled.

Whether point-in-time recovery is enabled.

---

##### `pointInTimeRecoverySpecification`<sup>Optional</sup> <a name="pointInTimeRecoverySpecification" id="@layertwo/cdk-constructs.SecureTableProps.property.pointInTimeRecoverySpecification"></a>

```typescript
public readonly pointInTimeRecoverySpecification: PointInTimeRecoverySpecification;
```

- *Type:* aws-cdk-lib.aws_dynamodb.PointInTimeRecoverySpecification
- *Default:* point in time recovery is not enabled.

Whether point-in-time recovery is enabled and recoveryPeriodInDays is set.

---

##### `readCapacity`<sup>Optional</sup> <a name="readCapacity" id="@layertwo/cdk-constructs.SecureTableProps.property.readCapacity"></a>

```typescript
public readonly readCapacity: number;
```

- *Type:* number
- *Default:* 5

The read capacity for the table.

Careful if you add Global Secondary Indexes, as
those will share the table's provisioned throughput.

Can only be provided if billingMode is Provisioned.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@layertwo/cdk-constructs.SecureTableProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply to the DynamoDB Table.

---

##### `replicaRemovalPolicy`<sup>Optional</sup> <a name="replicaRemovalPolicy" id="@layertwo/cdk-constructs.SecureTableProps.property.replicaRemovalPolicy"></a>

```typescript
public readonly replicaRemovalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* undefined - use DynamoDB Table's removal policy

The removal policy to apply to the DynamoDB replica tables.

---

##### `replicationRegions`<sup>Optional</sup> <a name="replicationRegions" id="@layertwo/cdk-constructs.SecureTableProps.property.replicationRegions"></a>

```typescript
public readonly replicationRegions: string[];
```

- *Type:* string[]
- *Default:* no replica tables are created

Regions where replica tables will be created.

---

##### `replicationTimeout`<sup>Optional</sup> <a name="replicationTimeout" id="@layertwo/cdk-constructs.SecureTableProps.property.replicationTimeout"></a>

```typescript
public readonly replicationTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(30)

The timeout for a table replication operation in a single region.

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@layertwo/cdk-constructs.SecureTableProps.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* No resource policy statement

Resource policy to assign to table.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-resourcepolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-resourcepolicy)

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@layertwo/cdk-constructs.SecureTableProps.property.stream"></a>

```typescript
public readonly stream: StreamViewType;
```

- *Type:* aws-cdk-lib.aws_dynamodb.StreamViewType
- *Default:* streams are disabled unless `replicationRegions` is specified

When an item in the table is modified, StreamViewType determines what information is written to the stream for this table.

---

##### `tableClass`<sup>Optional</sup> <a name="tableClass" id="@layertwo/cdk-constructs.SecureTableProps.property.tableClass"></a>

```typescript
public readonly tableClass: TableClass;
```

- *Type:* aws-cdk-lib.aws_dynamodb.TableClass
- *Default:* STANDARD

Specify the table class.

---

##### `timeToLiveAttribute`<sup>Optional</sup> <a name="timeToLiveAttribute" id="@layertwo/cdk-constructs.SecureTableProps.property.timeToLiveAttribute"></a>

```typescript
public readonly timeToLiveAttribute: string;
```

- *Type:* string
- *Default:* TTL is disabled

The name of TTL attribute.

---

##### `waitForReplicationToFinish`<sup>Optional</sup> <a name="waitForReplicationToFinish" id="@layertwo/cdk-constructs.SecureTableProps.property.waitForReplicationToFinish"></a>

```typescript
public readonly waitForReplicationToFinish: boolean;
```

- *Type:* boolean
- *Default:* true

[WARNING: Use this flag with caution, misusing this flag may cause deleting existing replicas, refer to the detailed documentation for more information] Indicates whether CloudFormation stack waits for replication to finish.

If set to false, the CloudFormation resource will mark the resource as
created and replication will be completed asynchronously. This property is
ignored if replicationRegions property is not set.

WARNING:
DO NOT UNSET this property if adding/removing multiple replicationRegions
in one deployment, as CloudFormation only supports one region replication
at a time. CDK overcomes this limitation by waiting for replication to
finish before starting new replicationRegion.

If the custom resource which handles replication has a physical resource
ID with the format `region` instead of `tablename-region` (this would happen
if the custom resource hasn't received an event since v1.91.0), DO NOT SET
this property to false without making a change to the table name.
This will cause the existing replicas to be deleted.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicas)

---

##### `warmThroughput`<sup>Optional</sup> <a name="warmThroughput" id="@layertwo/cdk-constructs.SecureTableProps.property.warmThroughput"></a>

```typescript
public readonly warmThroughput: WarmThroughput;
```

- *Type:* aws-cdk-lib.aws_dynamodb.WarmThroughput
- *Default:* warm throughput is not configured

Specify values to pre-warm you DynamoDB Table Warm Throughput feature is not available for Global Table replicas using the `Table` construct.

To enable Warm Throughput, use the `TableV2` construct instead.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-warmthroughput](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-warmthroughput)

---

##### `writeCapacity`<sup>Optional</sup> <a name="writeCapacity" id="@layertwo/cdk-constructs.SecureTableProps.property.writeCapacity"></a>

```typescript
public readonly writeCapacity: number;
```

- *Type:* number
- *Default:* 5

The write capacity for the table.

Careful if you add Global Secondary Indexes, as
those will share the table's provisioned throughput.

Can only be provided if billingMode is Provisioned.

---

##### `kinesisPrecisionTimestamp`<sup>Optional</sup> <a name="kinesisPrecisionTimestamp" id="@layertwo/cdk-constructs.SecureTableProps.property.kinesisPrecisionTimestamp"></a>

```typescript
public readonly kinesisPrecisionTimestamp: ApproximateCreationDateTimePrecision;
```

- *Type:* aws-cdk-lib.aws_dynamodb.ApproximateCreationDateTimePrecision
- *Default:* ApproximateCreationDateTimePrecision.MICROSECOND

Kinesis Data Stream approximate creation timestamp precision.

---

##### `kinesisStream`<sup>Optional</sup> <a name="kinesisStream" id="@layertwo/cdk-constructs.SecureTableProps.property.kinesisStream"></a>

```typescript
public readonly kinesisStream: IStream;
```

- *Type:* aws-cdk-lib.aws_kinesis.IStream
- *Default:* no Kinesis Data Stream

Kinesis Data Stream to capture item-level changes for the table.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@layertwo/cdk-constructs.SecureTableProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string
- *Default:* <generated>

Enforces a particular physical table name.

---



