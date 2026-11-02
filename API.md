# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsValidatedCertificate <a name="DnsValidatedCertificate" id="@layertwo/cdk-constructs.DnsValidatedCertificate"></a>

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
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
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

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@layertwo/cdk-constructs.DnsValidatedCertificate.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@layertwo/cdk-constructs.DnsValidatedCertificate.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

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
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.certificateArn">certificateArn</a></code> | <code>string</code> | The certificate's ARN. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificate.property.certificateRef">certificateRef</a></code> | <code>aws-cdk-lib.interfaces.aws_certificatemanager.CertificateReference</code> | A reference to a Certificate resource. |

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

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

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

##### `certificateRef`<sup>Required</sup> <a name="certificateRef" id="@layertwo/cdk-constructs.DnsValidatedCertificate.property.certificateRef"></a>

```typescript
public readonly certificateRef: CertificateReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_certificatemanager.CertificateReference

A reference to a Certificate resource.

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
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
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

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@layertwo/cdk-constructs.GitHubOidcRole.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@layertwo/cdk-constructs.GitHubOidcRole.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

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
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.grants">grants</a></code> | <code>aws-cdk-lib.aws_iam.RoleGrants</code> | Collection of grant methods for a Role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Returns the role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.roleArn">roleArn</a></code> | <code>string</code> | Returns the ARN of this role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.roleId">roleId</a></code> | <code>string</code> | Returns the stable and unique string identifying the role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.roleName">roleName</a></code> | <code>string</code> | Returns the name of the role. |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRole.property.roleRef">roleRef</a></code> | <code>aws-cdk-lib.interfaces.aws_iam.RoleReference</code> | A reference to a Role resource. |
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

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

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

##### `grants`<sup>Required</sup> <a name="grants" id="@layertwo/cdk-constructs.GitHubOidcRole.property.grants"></a>

```typescript
public readonly grants: RoleGrants;
```

- *Type:* aws-cdk-lib.aws_iam.RoleGrants

Collection of grant methods for a Role.

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

##### `roleRef`<sup>Required</sup> <a name="roleRef" id="@layertwo/cdk-constructs.GitHubOidcRole.property.roleRef"></a>

```typescript
public readonly roleRef: RoleReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_iam.RoleReference

A reference to a Role resource.

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

### PythonFunction <a name="PythonFunction" id="@layertwo/cdk-constructs.PythonFunction"></a>

#### Initializers <a name="Initializers" id="@layertwo/cdk-constructs.PythonFunction.Initializer"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

new PythonFunction(scope: Construct, id: string, props: PythonFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps">PythonFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.PythonFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.PythonFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@layertwo/cdk-constructs.PythonFunctionProps">PythonFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.grantInvokeLatestVersion">grantInvokeLatestVersion</a></code> | Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.grantInvokeVersion">grantInvokeVersion</a></code> | Grant the given identity permissions to invoke the given version of this Lambda. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |

---

##### `toString` <a name="toString" id="@layertwo/cdk-constructs.PythonFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@layertwo/cdk-constructs.PythonFunction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@layertwo/cdk-constructs.PythonFunction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@layertwo/cdk-constructs.PythonFunction.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@layertwo/cdk-constructs.PythonFunction.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@layertwo/cdk-constructs.PythonFunction.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@layertwo/cdk-constructs.PythonFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@layertwo/cdk-constructs.PythonFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the aws-cdk-lib/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@layertwo/cdk-constructs.PythonFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@layertwo/cdk-constructs.PythonFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.PythonFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@layertwo/cdk-constructs.PythonFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@layertwo/cdk-constructs.PythonFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.PythonFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@layertwo/cdk-constructs.PythonFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.PythonFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@layertwo/cdk-constructs.PythonFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@layertwo/cdk-constructs.PythonFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@layertwo/cdk-constructs.PythonFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@layertwo/cdk-constructs.PythonFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@layertwo/cdk-constructs.PythonFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@layertwo/cdk-constructs.PythonFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.PythonFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@layertwo/cdk-constructs.PythonFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@layertwo/cdk-constructs.PythonFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.PythonFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

[disable-awslint:no-grants]

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeLatestVersion` <a name="grantInvokeLatestVersion" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeLatestVersion"></a>

```typescript
public grantInvokeLatestVersion(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeLatestVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeVersion` <a name="grantInvokeVersion" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeVersion"></a>

```typescript
public grantInvokeVersion(grantee: IGrantable, version: IVersion): Grant
```

Grant the given identity permissions to invoke the given version of this Lambda.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `version`<sup>Required</sup> <a name="version" id="@layertwo/cdk-constructs.PythonFunction.grantInvokeVersion.parameter.version"></a>

- *Type:* aws-cdk-lib.aws_lambda.IVersion

---

##### `metric` <a name="metric" id="@layertwo/cdk-constructs.PythonFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@layertwo/cdk-constructs.PythonFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@layertwo/cdk-constructs.PythonFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@layertwo/cdk-constructs.PythonFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@layertwo/cdk-constructs.PythonFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@layertwo/cdk-constructs.PythonFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@layertwo/cdk-constructs.PythonFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
  aliasName: 'Live',
  version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@layertwo/cdk-constructs.PythonFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.PythonFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@layertwo/cdk-constructs.PythonFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@layertwo/cdk-constructs.PythonFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@layertwo/cdk-constructs.PythonFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@layertwo/cdk-constructs.PythonFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@layertwo/cdk-constructs.PythonFunction.addLayers"></a>

```typescript
public addLayers(layers: ...ILayerVersion[]): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@layertwo/cdk-constructs.PythonFunction.addLayers.parameter.layers"></a>

- *Type:* ...aws-cdk-lib.aws_lambda.ILayerVersion[]

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="@layertwo/cdk-constructs.PythonFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="@layertwo/cdk-constructs.PythonFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### `isConstruct` <a name="isConstruct" id="@layertwo/cdk-constructs.PythonFunction.isConstruct"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@layertwo/cdk-constructs.PythonFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@layertwo/cdk-constructs.PythonFunction.isOwnedResource"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.PythonFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@layertwo/cdk-constructs.PythonFunction.isResource"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@layertwo/cdk-constructs.PythonFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@layertwo/cdk-constructs.PythonFunction.classifyVersionProperty"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@layertwo/cdk-constructs.PythonFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@layertwo/cdk-constructs.PythonFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionArn"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionAttributes"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionName"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@layertwo/cdk-constructs.PythonFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@layertwo/cdk-constructs.PythonFunction.metricAll"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@layertwo/cdk-constructs.PythonFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@layertwo/cdk-constructs.PythonFunction.metricAllConcurrentExecutions"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@layertwo/cdk-constructs.PythonFunction.metricAllDuration"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@layertwo/cdk-constructs.PythonFunction.metricAllErrors"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@layertwo/cdk-constructs.PythonFunction.metricAllInvocations"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@layertwo/cdk-constructs.PythonFunction.metricAllThrottles"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@layertwo/cdk-constructs.PythonFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { PythonFunction } from '@layertwo/cdk-constructs'

PythonFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@layertwo/cdk-constructs.PythonFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.functionRef">functionRef</a></code> | <code>aws-cdk-lib.interfaces.aws_lambda.FunctionReference</code> | A reference to a Function resource. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.tenancyConfig">tenancyConfig</a></code> | <code>aws-cdk-lib.aws_lambda.TenancyConfig</code> | The tenancy configuration for this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@layertwo/cdk-constructs.PythonFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@layertwo/cdk-constructs.PythonFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@layertwo/cdk-constructs.PythonFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@layertwo/cdk-constructs.PythonFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@layertwo/cdk-constructs.PythonFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@layertwo/cdk-constructs.PythonFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@layertwo/cdk-constructs.PythonFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `functionRef`<sup>Required</sup> <a name="functionRef" id="@layertwo/cdk-constructs.PythonFunction.property.functionRef"></a>

```typescript
public readonly functionRef: FunctionReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_lambda.FunctionReference

A reference to a Function resource.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@layertwo/cdk-constructs.PythonFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@layertwo/cdk-constructs.PythonFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@layertwo/cdk-constructs.PythonFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@layertwo/cdk-constructs.PythonFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@layertwo/cdk-constructs.PythonFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@layertwo/cdk-constructs.PythonFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `tenancyConfig`<sup>Optional</sup> <a name="tenancyConfig" id="@layertwo/cdk-constructs.PythonFunction.property.tenancyConfig"></a>

```typescript
public readonly tenancyConfig: TenancyConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.TenancyConfig

The tenancy configuration for this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@layertwo/cdk-constructs.PythonFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@layertwo/cdk-constructs.PythonFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@layertwo/cdk-constructs.PythonFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@layertwo/cdk-constructs.PythonFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@layertwo/cdk-constructs.PythonFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@layertwo/cdk-constructs.PythonFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.PythonFunction.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="@layertwo/cdk-constructs.PythonFunction.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

### SecureBucket <a name="SecureBucket" id="@layertwo/cdk-constructs.SecureBucket"></a>

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
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy">addReplicationPolicy</a></code> | Adds resource policy statements to this bucket that permit cross-account replication. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantOnKey">grantOnKey</a></code> | Gives permissions to a grantable entity to perform actions on the encryption key. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantPutAcl">grantPutAcl</a></code> | The use of this method is discouraged. Please use `grants.putAcl()` instead. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and its contents to an IAM principal (Role/Group/User). |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantReadWrite">grantReadWrite</a></code> | The use of this method is discouraged. Please use `grants.readWrite()` instead. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantReplicationPermission">grantReplicationPermission</a></code> | Grant replication permission to a principal. This method allows the principal to perform replication operations on this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.grantWrite">grantWrite</a></code> | The use of this method is discouraged. Please use `grants.write()` instead. |
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

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@layertwo/cdk-constructs.SecureBucket.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@layertwo/cdk-constructs.SecureBucket.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

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
   const filter: s3.NotificationKeyFilter = { prefix: 'home/myusername/*' };
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), filter);
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

Adds resource policy statements to this bucket that permit cross-account replication.

Call this method on the destination bucket. If the destination bucket is a referenced bucket,
its policy cannot be modified by CDK and the permissions must be added in the destination
account.

To change replica ownership to the destination bucket owner, set `accessControlTransition` to
true and provide the source bucket owner's account ID.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-change-owner.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-change-owner.html)

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy.parameter.roleArn"></a>

- *Type:* string

The ARN of the source bucket's replication role.

---

###### `accessControlTransition`<sup>Optional</sup> <a name="accessControlTransition" id="@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy.parameter.accessControlTransition"></a>

- *Type:* boolean

Whether to change replica ownership to the destination bucket owner.

---

###### `account`<sup>Optional</sup> <a name="account" id="@layertwo/cdk-constructs.SecureBucket.addReplicationPolicy.parameter.account"></a>

- *Type:* string

The source bucket owner's AWS account ID.

Required when `accessControlTransition` is true.

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

The use of this method is discouraged. Please use `grants.delete()` instead.

[disable-awslint:no-grants]

###### `identity`<sup>Required</sup> <a name="identity" id="@layertwo/cdk-constructs.SecureBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@layertwo/cdk-constructs.SecureBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantOnKey` <a name="grantOnKey" id="@layertwo/cdk-constructs.SecureBucket.grantOnKey"></a>

```typescript
public grantOnKey(grantee: IGrantable, actions: ...string[]): GrantOnKeyResult
```

Gives permissions to a grantable entity to perform actions on the encryption key.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureBucket.grantOnKey.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@layertwo/cdk-constructs.SecureBucket.grantOnKey.parameter.actions"></a>

- *Type:* ...string[]

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


The use of this method is discouraged. Please use `grants.publicAccess()` instead.

[disable-awslint:no-grants]

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


The use of this method is discouraged. Please use `grants.put()` instead.

[disable-awslint:no-grants]

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

The use of this method is discouraged. Please use `grants.putAcl()` instead.

[disable-awslint:no-grants]

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

Grant read permissions for this bucket and its contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.


The use of this method is discouraged. Please use `grants.read()` instead.

[disable-awslint:no-grants]

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

The use of this method is discouraged. Please use `grants.readWrite()` instead.

[disable-awslint:no-grants]

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


The use of this method is discouraged. Please use `grants.replicationPermission()` instead.

[disable-awslint:no-grants]

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

The use of this method is discouraged. Please use `grants.write()` instead.

[disable-awslint:no-grants]

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
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketRef">bucketRef</a></code> | <code>aws-cdk-lib.interfaces.aws_s3.BucketReference</code> | A reference to a Bucket resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.grants">grants</a></code> | <code>aws-cdk-lib.aws_s3.BucketGrants</code> | Collection of grant methods for a Bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucket.property.disallowPublicAccess">disallowPublicAccess</a></code> | <code>boolean</code> | Whether to disallow public access. |
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

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

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

##### `bucketRef`<sup>Required</sup> <a name="bucketRef" id="@layertwo/cdk-constructs.SecureBucket.property.bucketRef"></a>

```typescript
public readonly bucketRef: BucketReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_s3.BucketReference

A reference to a Bucket resource.

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

##### `grants`<sup>Required</sup> <a name="grants" id="@layertwo/cdk-constructs.SecureBucket.property.grants"></a>

```typescript
public readonly grants: BucketGrants;
```

- *Type:* aws-cdk-lib.aws_s3.BucketGrants

Collection of grant methods for a Bucket.

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

##### `disallowPublicAccess`<sup>Optional</sup> <a name="disallowPublicAccess" id="@layertwo/cdk-constructs.SecureBucket.property.disallowPublicAccess"></a>

```typescript
public readonly disallowPublicAccess: boolean;
```

- *Type:* boolean

Whether to disallow public access.

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
| <code><a href="#@layertwo/cdk-constructs.SecureTable.applyCrossStackReferenceStrength">applyCrossStackReferenceStrength</a></code> | Override the cross-stack reference strength for this resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy associated with this table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grant">grant</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantFullAccess">grantFullAccess</a></code> | Permits all DynamoDB operations ("dynamodb:*") to an IAM principal. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.grantOnKey">grantOnKey</a></code> | Gives permissions to a grantable entity to perform actions on the encryption key. |
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
| <code><a href="#@layertwo/cdk-constructs.SecureTable.schemaV2">schemaV2</a></code> | Get schema attributes of table or index. |

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

---

##### `applyCrossStackReferenceStrength` <a name="applyCrossStackReferenceStrength" id="@layertwo/cdk-constructs.SecureTable.applyCrossStackReferenceStrength"></a>

```typescript
public applyCrossStackReferenceStrength(strength: ReferenceStrength): void
```

Override the cross-stack reference strength for this resource.

When set, any cross-stack reference to this resource will use the specified
mechanism instead of the global default determined by the
`@aws-cdk/core:defaultCrossStackReferences` context key. This is useful for
selectively weakening specific references to avoid the "deadly embrace" problem
without changing the app-wide default.

###### `strength`<sup>Required</sup> <a name="strength" id="@layertwo/cdk-constructs.SecureTable.applyCrossStackReferenceStrength.parameter.strength"></a>

- *Type:* aws-cdk-lib.ReferenceStrength

The reference strength to use for this resource.

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

Adds a statement to the resource policy associated with this table.

A resource policy will be automatically created upon the first call to `addToResourcePolicy`.

Note that this does not work with imported tables.

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
[disable-awslint:no-grants]

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


The use of this method is discouraged. Please use `grants.fullAccess()` instead.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantFullAccess.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantOnKey` <a name="grantOnKey" id="@layertwo/cdk-constructs.SecureTable.grantOnKey"></a>

```typescript
public grantOnKey(grantee: IGrantable, actions: ...string[]): GrantOnKeyResult
```

Gives permissions to a grantable entity to perform actions on the encryption key.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantOnKey.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@layertwo/cdk-constructs.SecureTable.grantOnKey.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantReadData` <a name="grantReadData" id="@layertwo/cdk-constructs.SecureTable.grantReadData"></a>

```typescript
public grantReadData(grantee: IGrantable): Grant
```

Permits an IAM principal all data read operations from this table: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, DescribeTable.

Appropriate grants will also be added to the customer-managed KMS key
if one was configured.


The use of this method is discouraged. Please use `grants.readData()` instead.

[disable-awslint:no-grants]

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


The use of this method is discouraged. Please use `grants.readWriteData()` instead.

[disable-awslint:no-grants]

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


The use of this method is discouraged. Please use `streamGrants.stream()` instead.

[disable-awslint:no-grants]

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


The use of this method is discouraged. Please use `streamGrants.streamRead()` instead.

[disable-awslint:no-grants]

###### `grantee`<sup>Required</sup> <a name="grantee" id="@layertwo/cdk-constructs.SecureTable.grantStreamRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `grantTableListStreams` <a name="grantTableListStreams" id="@layertwo/cdk-constructs.SecureTable.grantTableListStreams"></a>

```typescript
public grantTableListStreams(grantee: IGrantable): Grant
```

Permits an IAM Principal to list streams attached to current dynamodb table.

The use of this method is discouraged. Please use `streamGrants.tableListStreams()` instead.

[disable-awslint:no-grants]

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


The use of this method is discouraged. Please use `grants.writeData()` instead.

[disable-awslint:no-grants]

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

##### ~~`schema`~~ <a name="schema" id="@layertwo/cdk-constructs.SecureTable.schema"></a>

```typescript
public schema(indexName?: string): SchemaOptions
```

Get schema attributes of table or index.

###### `indexName`<sup>Optional</sup> <a name="indexName" id="@layertwo/cdk-constructs.SecureTable.schema.parameter.indexName"></a>

- *Type:* string

---

##### `schemaV2` <a name="schemaV2" id="@layertwo/cdk-constructs.SecureTable.schemaV2"></a>

```typescript
public schemaV2(indexName?: string): KeySchema
```

Get schema attributes of table or index.

###### `indexName`<sup>Optional</sup> <a name="indexName" id="@layertwo/cdk-constructs.SecureTable.schemaV2.parameter.indexName"></a>

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
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.grants">grants</a></code> | <code>aws-cdk-lib.aws_dynamodb.TableGrants</code> | Grant a predefined set of permissions on this Table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.streamGrants">streamGrants</a></code> | <code>aws-cdk-lib.aws_dynamodb.StreamGrants</code> | Grant a predefined set of permissions on this Table's Stream, if present. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.tableArn">tableArn</a></code> | <code>string</code> | Arn of the dynamodb table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.tableName">tableName</a></code> | <code>string</code> | Table name of the dynamodb table. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.tableRef">tableRef</a></code> | <code>aws-cdk-lib.interfaces.aws_dynamodb.TableReference</code> | A reference to a Table resource. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS encryption key, if this table uses a customer-managed encryption key. |
| <code><a href="#@layertwo/cdk-constructs.SecureTable.property.regions">regions</a></code> | <code>string[]</code> | Additional regions other than the main one that this table is replicated to. |
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

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@layertwo/cdk-constructs.SecureTable.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `grants`<sup>Required</sup> <a name="grants" id="@layertwo/cdk-constructs.SecureTable.property.grants"></a>

```typescript
public readonly grants: TableGrants;
```

- *Type:* aws-cdk-lib.aws_dynamodb.TableGrants

Grant a predefined set of permissions on this Table.

---

##### `streamGrants`<sup>Required</sup> <a name="streamGrants" id="@layertwo/cdk-constructs.SecureTable.property.streamGrants"></a>

```typescript
public readonly streamGrants: StreamGrants;
```

- *Type:* aws-cdk-lib.aws_dynamodb.StreamGrants

Grant a predefined set of permissions on this Table's Stream, if present.

Will throw if the Table has not been configured for streaming.

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

##### `tableRef`<sup>Required</sup> <a name="tableRef" id="@layertwo/cdk-constructs.SecureTable.property.tableRef"></a>

```typescript
public readonly tableRef: TableReference;
```

- *Type:* aws-cdk-lib.interfaces.aws_dynamodb.TableReference

A reference to a Table resource.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@layertwo/cdk-constructs.SecureTable.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS encryption key, if this table uses a customer-managed encryption key.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@layertwo/cdk-constructs.SecureTable.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Additional regions other than the main one that this table is replicated to.

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

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.Initializer"></a>

```typescript
import { DnsValidatedCertificateProps } from '@layertwo/cdk-constructs'

const dnsValidatedCertificateProps: DnsValidatedCertificateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.domainName">domainName</a></code> | <code>string</code> | Fully-qualified domain name to request a certificate for. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.allowExport">allowExport</a></code> | <code>boolean</code> | Enable or disable export of this certificate. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.certificateName">certificateName</a></code> | <code>string</code> | The Certificate name. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.keyAlgorithm">keyAlgorithm</a></code> | <code>aws-cdk-lib.aws_certificatemanager.KeyAlgorithm</code> | Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | Alternative domain names on your certificate. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.transparencyLoggingEnabled">transparencyLoggingEnabled</a></code> | <code>boolean</code> | Enable or disable transparency logging for this certificate. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.validation">validation</a></code> | <code>aws-cdk-lib.aws_certificatemanager.CertificateValidation</code> | How to validate this certificate. |
| <code><a href="#@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Fully-qualified domain name to request a certificate for.

May contain wildcards, such as ``*.domain.com``.

---

##### `allowExport`<sup>Optional</sup> <a name="allowExport" id="@layertwo/cdk-constructs.DnsValidatedCertificateProps.property.allowExport"></a>

```typescript
public readonly allowExport: boolean;
```

- *Type:* boolean
- *Default:* false

Enable or disable export of this certificate.

If you issue an exportable public certificate, there is a charge at certificate issuance and again when the certificate renews.
Ref: https://aws.amazon.com/certificate-manager/pricing

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

---

### GitHubOidcRoleProps <a name="GitHubOidcRoleProps" id="@layertwo/cdk-constructs.GitHubOidcRoleProps"></a>

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.Initializer"></a>

```typescript
import { GitHubOidcRoleProps } from '@layertwo/cdk-constructs'

const gitHubOidcRoleProps: GitHubOidcRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.maxSessionDuration">maxSessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.GitHubOidcRoleProps.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="maxSessionDuration" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.maxSessionDuration"></a>

```typescript
public readonly maxSessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@layertwo/cdk-constructs.GitHubOidcRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### PythonFunctionProps <a name="PythonFunctionProps" id="@layertwo/cdk-constructs.PythonFunctionProps"></a>

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.PythonFunctionProps.Initializer"></a>

```typescript
import { PythonFunctionProps } from '@layertwo/cdk-constructs'

const pythonFunctionProps: PythonFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.allowAllIpv6Outbound">allowAllIpv6Outbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all ipv6 network traffic. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic (except ipv6). |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.applicationLogLevelV2">applicationLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.ApplicationLogLevel</code> | Sets the application log level for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.interfaces.aws_lambda.ICodeSigningConfigRef</code> | Code signing config associated with this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.durableConfig">durableConfig</a></code> | <code>aws-cdk-lib.aws_lambda.DurableConfig</code> | The durable configuration for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.interfaces.aws_kms.IKeyRef</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.loggingFormat">loggingFormat</a></code> | <code>aws-cdk-lib.aws_lambda.LoggingFormat</code> | Sets the loggingFormat for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.interfaces.aws_logs.ILogGroupRef</code> | The log group the function sends logs to. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.logRemovalPolicy">logRemovalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine the removal policy of the log group that is auto-created by this construct. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.recursiveLoop">recursiveLoop</a></code> | <code>aws-cdk-lib.aws_lambda.RecursiveLoop</code> | Sets the Recursive Loop Protection for Lambda Function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.systemLogLevelV2">systemLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.SystemLogLevel</code> | Sets the system log level for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.tenancyConfig">tenancyConfig</a></code> | <code>aws-cdk-lib.aws_lambda.TenancyConfig</code> | The tenancy configuration for the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.rootDir">rootDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.bundling">bundling</a></code> | <code><a href="#@layertwo/cdk-constructs.UvBundlingProps">UvBundlingProps</a></code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.hashExcludes">hashExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.PythonFunctionProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@layertwo/cdk-constructs.PythonFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@layertwo/cdk-constructs.PythonFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@layertwo/cdk-constructs.PythonFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@layertwo/cdk-constructs.PythonFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="@layertwo/cdk-constructs.PythonFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllIpv6Outbound`<sup>Optional</sup> <a name="allowAllIpv6Outbound" id="@layertwo/cdk-constructs.PythonFunctionProps.property.allowAllIpv6Outbound"></a>

```typescript
public readonly allowAllIpv6Outbound: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to allow the Lambda to send all ipv6 network traffic.

If set to true, there will only be a single egress rule which allows all
outbound ipv6 traffic. If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets using ipv6.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllIpv6Outbound` directly on the security group.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@layertwo/cdk-constructs.PythonFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic (except ipv6).

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@layertwo/cdk-constructs.PythonFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### ~~`applicationLogLevel`~~<sup>Optional</sup> <a name="applicationLogLevel" id="@layertwo/cdk-constructs.PythonFunctionProps.property.applicationLogLevel"></a>

- *Deprecated:* Use `applicationLogLevelV2` as a property instead.

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the application log level for the function.

---

##### `applicationLogLevelV2`<sup>Optional</sup> <a name="applicationLogLevelV2" id="@layertwo/cdk-constructs.PythonFunctionProps.property.applicationLogLevelV2"></a>

```typescript
public readonly applicationLogLevelV2: ApplicationLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.ApplicationLogLevel
- *Default:* ApplicationLogLevel.INFO

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@layertwo/cdk-constructs.PythonFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@layertwo/cdk-constructs.PythonFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfigRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_lambda.ICodeSigningConfigRef
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@layertwo/cdk-constructs.PythonFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@layertwo/cdk-constructs.PythonFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@layertwo/cdk-constructs.PythonFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@layertwo/cdk-constructs.PythonFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@layertwo/cdk-constructs.PythonFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `durableConfig`<sup>Optional</sup> <a name="durableConfig" id="@layertwo/cdk-constructs.PythonFunctionProps.property.durableConfig"></a>

```typescript
public readonly durableConfig: DurableConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.DurableConfig
- *Default:* No durable configuration

The durable configuration for the function.

If durability is added to an existing function, a resource replacement will be triggered.
See the 'durableConfig' section in the module README for more details.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@layertwo/cdk-constructs.PythonFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@layertwo/cdk-constructs.PythonFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKeyRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_kms.IKeyRef
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@layertwo/cdk-constructs.PythonFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@layertwo/cdk-constructs.PythonFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@layertwo/cdk-constructs.PythonFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@layertwo/cdk-constructs.PythonFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@layertwo/cdk-constructs.PythonFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@layertwo/cdk-constructs.PythonFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="@layertwo/cdk-constructs.PythonFunctionProps.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean;
```

- *Type:* boolean
- *Default:* false

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Only used if 'vpc' is supplied.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@layertwo/cdk-constructs.PythonFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### ~~`logFormat`~~<sup>Optional</sup> <a name="logFormat" id="@layertwo/cdk-constructs.PythonFunctionProps.property.logFormat"></a>

- *Deprecated:* Use `loggingFormat` as a property instead.

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* "Text"

Sets the logFormat for the function.

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="@layertwo/cdk-constructs.PythonFunctionProps.property.loggingFormat"></a>

```typescript
public readonly loggingFormat: LoggingFormat;
```

- *Type:* aws-cdk-lib.aws_lambda.LoggingFormat
- *Default:* LoggingFormat.TEXT

Sets the loggingFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@layertwo/cdk-constructs.PythonFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroupRef;
```

- *Type:* aws-cdk-lib.interfaces.aws_logs.ILogGroupRef
- *Default:* `/aws/lambda/${this.functionName}` - default log group created by Lambda

The log group the function sends logs to.

By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.

Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### ~~`logRemovalPolicy`~~<sup>Optional</sup> <a name="logRemovalPolicy" id="@layertwo/cdk-constructs.PythonFunctionProps.property.logRemovalPolicy"></a>

- *Deprecated:* use `logGroup` instead

```typescript
public readonly logRemovalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.Retain

Determine the removal policy of the log group that is auto-created by this construct.

Normally you want to retain the log group so you can diagnose issues
from logs even after a deployment that no longer includes the log group.
In that case, use the normal date-based retention policy to age out your
logs.

---

##### ~~`logRetention`~~<sup>Optional</sup> <a name="logRetention" id="@layertwo/cdk-constructs.PythonFunctionProps.property.logRetention"></a>

- *Deprecated:* use `logGroup` instead

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

This is a legacy API and we strongly recommend you move away from it if you can.
Instead create a fully customizable log group with `logs.LogGroup` and use the `logGroup` property
to instruct the Lambda function to send logs to it.
Migrating from `logRetention` to `logGroup` will cause the name of the log group to change.
Users and code and referencing the name verbatim will have to adjust.

In AWS CDK code, you can access the log group name directly from the LogGroup construct:
```ts
import * as logs from 'aws-cdk-lib/aws-logs';

declare const myLogGroup: logs.LogGroup;
myLogGroup.logGroupName;
```

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@layertwo/cdk-constructs.PythonFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@layertwo/cdk-constructs.PythonFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@layertwo/cdk-constructs.PythonFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="@layertwo/cdk-constructs.PythonFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@layertwo/cdk-constructs.PythonFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@layertwo/cdk-constructs.PythonFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `recursiveLoop`<sup>Optional</sup> <a name="recursiveLoop" id="@layertwo/cdk-constructs.PythonFunctionProps.property.recursiveLoop"></a>

```typescript
public readonly recursiveLoop: RecursiveLoop;
```

- *Type:* aws-cdk-lib.aws_lambda.RecursiveLoop
- *Default:* RecursiveLoop.Terminate

Sets the Recursive Loop Protection for Lambda Function.

It lets Lambda detect and terminate unintended recursive loops.

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@layertwo/cdk-constructs.PythonFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@layertwo/cdk-constructs.PythonFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="@layertwo/cdk-constructs.PythonFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@layertwo/cdk-constructs.PythonFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@layertwo/cdk-constructs.PythonFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported for Java 11, Java 17, Python 3.12, Python 3.13, and .NET 8 runtime,
as well as container image (OCI) deployments.

---

##### ~~`systemLogLevel`~~<sup>Optional</sup> <a name="systemLogLevel" id="@layertwo/cdk-constructs.PythonFunctionProps.property.systemLogLevel"></a>

- *Deprecated:* Use `systemLogLevelV2` as a property instead.

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the system log level for the function.

---

##### `systemLogLevelV2`<sup>Optional</sup> <a name="systemLogLevelV2" id="@layertwo/cdk-constructs.PythonFunctionProps.property.systemLogLevelV2"></a>

```typescript
public readonly systemLogLevelV2: SystemLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.SystemLogLevel
- *Default:* SystemLogLevel.INFO

Sets the system log level for the function.

---

##### `tenancyConfig`<sup>Optional</sup> <a name="tenancyConfig" id="@layertwo/cdk-constructs.PythonFunctionProps.property.tenancyConfig"></a>

```typescript
public readonly tenancyConfig: TenancyConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.TenancyConfig
- *Default:* Tenant isolation is not enabled

The tenancy configuration for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@layertwo/cdk-constructs.PythonFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@layertwo/cdk-constructs.PythonFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@layertwo/cdk-constructs.PythonFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@layertwo/cdk-constructs.PythonFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

##### `rootDir`<sup>Required</sup> <a name="rootDir" id="@layertwo/cdk-constructs.PythonFunctionProps.property.rootDir"></a>

```typescript
public readonly rootDir: string;
```

- *Type:* string

---

##### `bundling`<sup>Optional</sup> <a name="bundling" id="@layertwo/cdk-constructs.PythonFunctionProps.property.bundling"></a>

```typescript
public readonly bundling: UvBundlingProps;
```

- *Type:* <a href="#@layertwo/cdk-constructs.UvBundlingProps">UvBundlingProps</a>

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@layertwo/cdk-constructs.PythonFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `hashExcludes`<sup>Optional</sup> <a name="hashExcludes" id="@layertwo/cdk-constructs.PythonFunctionProps.property.hashExcludes"></a>

```typescript
public readonly hashExcludes: string[];
```

- *Type:* string[]

---

##### `index`<sup>Optional</sup> <a name="index" id="@layertwo/cdk-constructs.PythonFunctionProps.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@layertwo/cdk-constructs.PythonFunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

### SecureBucketProps <a name="SecureBucketProps" id="@layertwo/cdk-constructs.SecureBucketProps"></a>

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.SecureBucketProps.Initializer"></a>

```typescript
import { SecureBucketProps } from '@layertwo/cdk-constructs'

const secureBucketProps: SecureBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.abacStatus">abacStatus</a></code> | <code>boolean</code> | Enables Amazon S3 to evaluate the ABAC policy in the request. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.blockedEncryptionTypes">blockedEncryptionTypes</a></code> | <code>aws-cdk-lib.aws_s3.BlockedEncryptionType[]</code> | Encryption types that should be blocked for this bucket. Use `NONE` to allow all encryption types. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Whether Amazon S3 should use its own intermediary key to generate data keys. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | Physical name of this bucket. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.bucketNamePrefix">bucketNamePrefix</a></code> | <code>string</code> | A prefix for the bucket name in the account-regional namespace. |
| <code><a href="#@layertwo/cdk-constructs.SecureBucketProps.property.bucketNamespace">bucketNamespace</a></code> | <code>aws-cdk-lib.aws_s3.BucketNamespace</code> | The namespace for the bucket name. |
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

##### `abacStatus`<sup>Optional</sup> <a name="abacStatus" id="@layertwo/cdk-constructs.SecureBucketProps.property.abacStatus"></a>

```typescript
public readonly abacStatus: boolean;
```

- *Type:* boolean
- *Default:* The ABAC status is not set

Enables Amazon S3 to evaluate the ABAC policy in the request.

Set to true to enable ABAC, false to explicitly disable it.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-abacstatus](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-abacstatus)

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

##### `blockedEncryptionTypes`<sup>Optional</sup> <a name="blockedEncryptionTypes" id="@layertwo/cdk-constructs.SecureBucketProps.property.blockedEncryptionTypes"></a>

```typescript
public readonly blockedEncryptionTypes: BlockedEncryptionType[];
```

- *Type:* aws-cdk-lib.aws_s3.BlockedEncryptionType[]
- *Default:* Amazon S3 determines which encryption types to block.

Encryption types that should be blocked for this bucket. Use `NONE` to allow all encryption types.

At least one `BlockedEncryptionType` must be given. If `NONE` is given, it must be
the only `BlockedEncryptionType` in the list.

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

Cannot be used together with `bucketNamePrefix` or `bucketNamespace`.

---

##### `bucketNamePrefix`<sup>Optional</sup> <a name="bucketNamePrefix" id="@layertwo/cdk-constructs.SecureBucketProps.property.bucketNamePrefix"></a>

```typescript
public readonly bucketNamePrefix: string;
```

- *Type:* string
- *Default:* No prefix.

A prefix for the bucket name in the account-regional namespace.

Requires `bucketNamespace` to be set to `ACCOUNT_REGIONAL`.
Cannot be used together with `bucketName`.

CloudFormation appends `-<accountId>-<region>-an` to form the full name.
For example, `my-app` becomes `my-app-123456789012-us-east-1-an`.

Must contain only lowercase letters, numbers, and hyphens.
Must start and end with a lowercase letter or number.

---

##### `bucketNamespace`<sup>Optional</sup> <a name="bucketNamespace" id="@layertwo/cdk-constructs.SecureBucketProps.property.bucketNamespace"></a>

```typescript
public readonly bucketNamespace: BucketNamespace;
```

- *Type:* aws-cdk-lib.aws_s3.BucketNamespace
- *Default:* Global namespace.

The namespace for the bucket name.

AWS recommends `ACCOUNT_REGIONAL` for improved security, as bucket names
are scoped to your account and cannot be claimed by other accounts.
When set to `ACCOUNT_REGIONAL`, `bucketNamePrefix` is required.
When set to `GLOBAL`, it can be used standalone to explicitly specify the default namespace.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/gpbucketnamespaces.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/gpbucketnamespaces.html)

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
- *Default:* No Intelligent Tiering Configurations.

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
| <code><a href="#@layertwo/cdk-constructs.SecureTableProps.property.contributorInsightsSpecification">contributorInsightsSpecification</a></code> | <code>aws-cdk-lib.aws_dynamodb.ContributorInsightsSpecification</code> | Whether CloudWatch contributor insights is enabled and what mode is selected. |
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

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@layertwo/cdk-constructs.SecureTableProps.property.partitionKey"></a>

```typescript
public readonly partitionKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute
- *Default:* exactly one of `partitionKey` and `partitionKeys` must be specified.

Partition key attribute definition.

If a single field forms the partition key, you can use this field.  Use the
`partitionKeys` field if the partition key is a multi-attribute key (consists of
multiple fields).

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@layertwo/cdk-constructs.SecureTableProps.property.sortKey"></a>

```typescript
public readonly sortKey: Attribute;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Attribute
- *Default:* no sort key

Sort key attribute definition.

If a single field forms the sort key, you can use this field.  Use the
`sortKeys` field if the sort key is a multi-attribute key (consists of multiple
fields).

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@layertwo/cdk-constructs.SecureTableProps.property.billingMode"></a>

```typescript
public readonly billingMode: BillingMode;
```

- *Type:* aws-cdk-lib.aws_dynamodb.BillingMode
- *Default:* PROVISIONED if `replicationRegions` is not specified, PAY_PER_REQUEST otherwise

Specify how you are charged for read and write throughput and how you manage capacity.

---

##### ~~`contributorInsightsEnabled`~~<sup>Optional</sup> <a name="contributorInsightsEnabled" id="@layertwo/cdk-constructs.SecureTableProps.property.contributorInsightsEnabled"></a>

- *Deprecated:* use `contributorInsightsSpecification instead

```typescript
public readonly contributorInsightsEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether CloudWatch contributor insights is enabled.

---

##### `contributorInsightsSpecification`<sup>Optional</sup> <a name="contributorInsightsSpecification" id="@layertwo/cdk-constructs.SecureTableProps.property.contributorInsightsSpecification"></a>

```typescript
public readonly contributorInsightsSpecification: ContributorInsightsSpecification;
```

- *Type:* aws-cdk-lib.aws_dynamodb.ContributorInsightsSpecification
- *Default:* contributor insights is not enabled

Whether CloudWatch contributor insights is enabled and what mode is selected.

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

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-warmthroughput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-warmthroughput)

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

### UvBundlingProps <a name="UvBundlingProps" id="@layertwo/cdk-constructs.UvBundlingProps"></a>

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.UvBundlingProps.Initializer"></a>

```typescript
import { UvBundlingProps } from '@layertwo/cdk-constructs'

const uvBundlingProps: UvBundlingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.command">command</a></code> | <code>string[]</code> | The command to run in the container. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | The entrypoint to run in the container. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to pass to the container. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.network">network</a></code> | <code>string</code> | Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network). |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.platform">platform</a></code> | <code>string</code> | Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.securityOpt">securityOpt</a></code> | <code>string</code> | [Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration) when running the docker container. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.user">user</a></code> | <code>string</code> | The user to use when running the container. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.volumes">volumes</a></code> | <code>aws-cdk-lib.DockerVolume[]</code> | Docker volumes to mount. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.volumesFrom">volumesFrom</a></code> | <code>string[]</code> | Where to mount the specified volumes from. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Working directory inside the container. |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.assetExcludes">assetExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.buildArgs">buildArgs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.bundlingFileAccess">bundlingFileAccess</a></code> | <code>aws-cdk-lib.BundlingFileAccess</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.cacheFrom">cacheFrom</a></code> | <code>aws-cdk-lib.DockerCacheOption[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.cacheTo">cacheTo</a></code> | <code>aws-cdk-lib.DockerCacheOption</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.commandHooks">commandHooks</a></code> | <code><a href="#@layertwo/cdk-constructs.ICommandHooks">ICommandHooks</a></code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.image">image</a></code> | <code>aws-cdk-lib.DockerImage</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundlingProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |

---

##### `command`<sup>Optional</sup> <a name="command" id="@layertwo/cdk-constructs.UvBundlingProps.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]
- *Default:* run the command defined in the image

The command to run in the container.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@layertwo/cdk-constructs.UvBundlingProps.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]
- *Default:* run the entrypoint defined in the image

The entrypoint to run in the container.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@layertwo/cdk-constructs.UvBundlingProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no environment variables.

The environment variables to pass to the container.

---

##### `network`<sup>Optional</sup> <a name="network" id="@layertwo/cdk-constructs.UvBundlingProps.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string
- *Default:* no networking options

Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network).

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@layertwo/cdk-constructs.UvBundlingProps.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string
- *Default:* no platform specified

Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_.

Example value: `linux/amd64`

---

##### `securityOpt`<sup>Optional</sup> <a name="securityOpt" id="@layertwo/cdk-constructs.UvBundlingProps.property.securityOpt"></a>

```typescript
public readonly securityOpt: string;
```

- *Type:* string
- *Default:* no security options

[Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration) when running the docker container.

---

##### `user`<sup>Optional</sup> <a name="user" id="@layertwo/cdk-constructs.UvBundlingProps.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string
- *Default:* root or image default

The user to use when running the container.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@layertwo/cdk-constructs.UvBundlingProps.property.volumes"></a>

```typescript
public readonly volumes: DockerVolume[];
```

- *Type:* aws-cdk-lib.DockerVolume[]
- *Default:* no volumes are mounted

Docker volumes to mount.

---

##### `volumesFrom`<sup>Optional</sup> <a name="volumesFrom" id="@layertwo/cdk-constructs.UvBundlingProps.property.volumesFrom"></a>

```typescript
public readonly volumesFrom: string[];
```

- *Type:* string[]
- *Default:* no containers are specified to mount volumes from

Where to mount the specified volumes from.

> [https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from](https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from)

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@layertwo/cdk-constructs.UvBundlingProps.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string
- *Default:* image default

Working directory inside the container.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@layertwo/cdk-constructs.UvBundlingProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

---

##### `assetExcludes`<sup>Optional</sup> <a name="assetExcludes" id="@layertwo/cdk-constructs.UvBundlingProps.property.assetExcludes"></a>

```typescript
public readonly assetExcludes: string[];
```

- *Type:* string[]

---

##### `buildArgs`<sup>Optional</sup> <a name="buildArgs" id="@layertwo/cdk-constructs.UvBundlingProps.property.buildArgs"></a>

```typescript
public readonly buildArgs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bundlingFileAccess`<sup>Optional</sup> <a name="bundlingFileAccess" id="@layertwo/cdk-constructs.UvBundlingProps.property.bundlingFileAccess"></a>

```typescript
public readonly bundlingFileAccess: BundlingFileAccess;
```

- *Type:* aws-cdk-lib.BundlingFileAccess

---

##### `cacheFrom`<sup>Optional</sup> <a name="cacheFrom" id="@layertwo/cdk-constructs.UvBundlingProps.property.cacheFrom"></a>

```typescript
public readonly cacheFrom: DockerCacheOption[];
```

- *Type:* aws-cdk-lib.DockerCacheOption[]

---

##### `cacheTo`<sup>Optional</sup> <a name="cacheTo" id="@layertwo/cdk-constructs.UvBundlingProps.property.cacheTo"></a>

```typescript
public readonly cacheTo: DockerCacheOption;
```

- *Type:* aws-cdk-lib.DockerCacheOption

---

##### `commandHooks`<sup>Optional</sup> <a name="commandHooks" id="@layertwo/cdk-constructs.UvBundlingProps.property.commandHooks"></a>

```typescript
public readonly commandHooks: ICommandHooks;
```

- *Type:* <a href="#@layertwo/cdk-constructs.ICommandHooks">ICommandHooks</a>

---

##### `image`<sup>Optional</sup> <a name="image" id="@layertwo/cdk-constructs.UvBundlingProps.property.image"></a>

```typescript
public readonly image: DockerImage;
```

- *Type:* aws-cdk-lib.DockerImage

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@layertwo/cdk-constructs.UvBundlingProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

### UvCodeProps <a name="UvCodeProps" id="@layertwo/cdk-constructs.UvCodeProps"></a>

#### Initializer <a name="Initializer" id="@layertwo/cdk-constructs.UvCodeProps.Initializer"></a>

```typescript
import { UvCodeProps } from '@layertwo/cdk-constructs'

const uvCodeProps: UvCodeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.command">command</a></code> | <code>string[]</code> | The command to run in the container. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | The entrypoint to run in the container. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to pass to the container. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.network">network</a></code> | <code>string</code> | Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network). |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.platform">platform</a></code> | <code>string</code> | Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.securityOpt">securityOpt</a></code> | <code>string</code> | [Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration) when running the docker container. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.user">user</a></code> | <code>string</code> | The user to use when running the container. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.volumes">volumes</a></code> | <code>aws-cdk-lib.DockerVolume[]</code> | Docker volumes to mount. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.volumesFrom">volumesFrom</a></code> | <code>string[]</code> | Where to mount the specified volumes from. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Working directory inside the container. |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.assetExcludes">assetExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.buildArgs">buildArgs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.bundlingFileAccess">bundlingFileAccess</a></code> | <code>aws-cdk-lib.BundlingFileAccess</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.cacheFrom">cacheFrom</a></code> | <code>aws-cdk-lib.DockerCacheOption[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.cacheTo">cacheTo</a></code> | <code>aws-cdk-lib.DockerCacheOption</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.commandHooks">commandHooks</a></code> | <code><a href="#@layertwo/cdk-constructs.ICommandHooks">ICommandHooks</a></code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.image">image</a></code> | <code>aws-cdk-lib.DockerImage</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.rootDir">rootDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvCodeProps.property.hashExcludes">hashExcludes</a></code> | <code>string[]</code> | *No description.* |

---

##### `command`<sup>Optional</sup> <a name="command" id="@layertwo/cdk-constructs.UvCodeProps.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]
- *Default:* run the command defined in the image

The command to run in the container.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@layertwo/cdk-constructs.UvCodeProps.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]
- *Default:* run the entrypoint defined in the image

The entrypoint to run in the container.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@layertwo/cdk-constructs.UvCodeProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no environment variables.

The environment variables to pass to the container.

---

##### `network`<sup>Optional</sup> <a name="network" id="@layertwo/cdk-constructs.UvCodeProps.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string
- *Default:* no networking options

Docker [Networking options](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network).

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@layertwo/cdk-constructs.UvCodeProps.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string
- *Default:* no platform specified

Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_.

Example value: `linux/amd64`

---

##### `securityOpt`<sup>Optional</sup> <a name="securityOpt" id="@layertwo/cdk-constructs.UvCodeProps.property.securityOpt"></a>

```typescript
public readonly securityOpt: string;
```

- *Type:* string
- *Default:* no security options

[Security configuration](https://docs.docker.com/engine/reference/run/#security-configuration) when running the docker container.

---

##### `user`<sup>Optional</sup> <a name="user" id="@layertwo/cdk-constructs.UvCodeProps.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string
- *Default:* root or image default

The user to use when running the container.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@layertwo/cdk-constructs.UvCodeProps.property.volumes"></a>

```typescript
public readonly volumes: DockerVolume[];
```

- *Type:* aws-cdk-lib.DockerVolume[]
- *Default:* no volumes are mounted

Docker volumes to mount.

---

##### `volumesFrom`<sup>Optional</sup> <a name="volumesFrom" id="@layertwo/cdk-constructs.UvCodeProps.property.volumesFrom"></a>

```typescript
public readonly volumesFrom: string[];
```

- *Type:* string[]
- *Default:* no containers are specified to mount volumes from

Where to mount the specified volumes from.

> [https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from](https://docs.docker.com/engine/reference/commandline/run/#mount-volumes-from-container---volumes-from)

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@layertwo/cdk-constructs.UvCodeProps.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string
- *Default:* image default

Working directory inside the container.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@layertwo/cdk-constructs.UvCodeProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

---

##### `assetExcludes`<sup>Optional</sup> <a name="assetExcludes" id="@layertwo/cdk-constructs.UvCodeProps.property.assetExcludes"></a>

```typescript
public readonly assetExcludes: string[];
```

- *Type:* string[]

---

##### `buildArgs`<sup>Optional</sup> <a name="buildArgs" id="@layertwo/cdk-constructs.UvCodeProps.property.buildArgs"></a>

```typescript
public readonly buildArgs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bundlingFileAccess`<sup>Optional</sup> <a name="bundlingFileAccess" id="@layertwo/cdk-constructs.UvCodeProps.property.bundlingFileAccess"></a>

```typescript
public readonly bundlingFileAccess: BundlingFileAccess;
```

- *Type:* aws-cdk-lib.BundlingFileAccess

---

##### `cacheFrom`<sup>Optional</sup> <a name="cacheFrom" id="@layertwo/cdk-constructs.UvCodeProps.property.cacheFrom"></a>

```typescript
public readonly cacheFrom: DockerCacheOption[];
```

- *Type:* aws-cdk-lib.DockerCacheOption[]

---

##### `cacheTo`<sup>Optional</sup> <a name="cacheTo" id="@layertwo/cdk-constructs.UvCodeProps.property.cacheTo"></a>

```typescript
public readonly cacheTo: DockerCacheOption;
```

- *Type:* aws-cdk-lib.DockerCacheOption

---

##### `commandHooks`<sup>Optional</sup> <a name="commandHooks" id="@layertwo/cdk-constructs.UvCodeProps.property.commandHooks"></a>

```typescript
public readonly commandHooks: ICommandHooks;
```

- *Type:* <a href="#@layertwo/cdk-constructs.ICommandHooks">ICommandHooks</a>

---

##### `image`<sup>Optional</sup> <a name="image" id="@layertwo/cdk-constructs.UvCodeProps.property.image"></a>

```typescript
public readonly image: DockerImage;
```

- *Type:* aws-cdk-lib.DockerImage

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@layertwo/cdk-constructs.UvCodeProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

##### `rootDir`<sup>Required</sup> <a name="rootDir" id="@layertwo/cdk-constructs.UvCodeProps.property.rootDir"></a>

```typescript
public readonly rootDir: string;
```

- *Type:* string

---

##### `hashExcludes`<sup>Optional</sup> <a name="hashExcludes" id="@layertwo/cdk-constructs.UvCodeProps.property.hashExcludes"></a>

```typescript
public readonly hashExcludes: string[];
```

- *Type:* string[]

---

## Classes <a name="Classes" id="Classes"></a>

### UvBundling <a name="UvBundling" id="@layertwo/cdk-constructs.UvBundling"></a>

#### Initializers <a name="Initializers" id="@layertwo/cdk-constructs.UvBundling.Initializer"></a>

```typescript
import { UvBundling } from '@layertwo/cdk-constructs'

new UvBundling(props: UvBundlingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.Initializer.parameter.props">props</a></code> | <code><a href="#@layertwo/cdk-constructs.UvBundlingProps">UvBundlingProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@layertwo/cdk-constructs.UvBundling.Initializer.parameter.props"></a>

- *Type:* <a href="#@layertwo/cdk-constructs.UvBundlingProps">UvBundlingProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.image">image</a></code> | <code>aws-cdk-lib.DockerImage</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.bundlingFileAccess">bundlingFileAccess</a></code> | <code>aws-cdk-lib.BundlingFileAccess</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.securityOpt">securityOpt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.volumes">volumes</a></code> | <code>aws-cdk-lib.DockerVolume[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.volumesFrom">volumesFrom</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.UvBundling.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `command`<sup>Required</sup> <a name="command" id="@layertwo/cdk-constructs.UvBundling.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@layertwo/cdk-constructs.UvBundling.property.image"></a>

```typescript
public readonly image: DockerImage;
```

- *Type:* aws-cdk-lib.DockerImage

---

##### `platform`<sup>Required</sup> <a name="platform" id="@layertwo/cdk-constructs.UvBundling.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@layertwo/cdk-constructs.UvBundling.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@layertwo/cdk-constructs.UvBundling.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

##### `bundlingFileAccess`<sup>Optional</sup> <a name="bundlingFileAccess" id="@layertwo/cdk-constructs.UvBundling.property.bundlingFileAccess"></a>

```typescript
public readonly bundlingFileAccess: BundlingFileAccess;
```

- *Type:* aws-cdk-lib.BundlingFileAccess

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@layertwo/cdk-constructs.UvBundling.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@layertwo/cdk-constructs.UvBundling.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `network`<sup>Optional</sup> <a name="network" id="@layertwo/cdk-constructs.UvBundling.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `securityOpt`<sup>Optional</sup> <a name="securityOpt" id="@layertwo/cdk-constructs.UvBundling.property.securityOpt"></a>

```typescript
public readonly securityOpt: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="@layertwo/cdk-constructs.UvBundling.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@layertwo/cdk-constructs.UvBundling.property.volumes"></a>

```typescript
public readonly volumes: DockerVolume[];
```

- *Type:* aws-cdk-lib.DockerVolume[]

---

##### `volumesFrom`<sup>Optional</sup> <a name="volumesFrom" id="@layertwo/cdk-constructs.UvBundling.property.volumesFrom"></a>

```typescript
public readonly volumesFrom: string[];
```

- *Type:* string[]

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@layertwo/cdk-constructs.UvBundling.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ICommandHooks <a name="ICommandHooks" id="@layertwo/cdk-constructs.ICommandHooks"></a>

- *Implemented By:* <a href="#@layertwo/cdk-constructs.ICommandHooks">ICommandHooks</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@layertwo/cdk-constructs.ICommandHooks.afterBundling">afterBundling</a></code> | *No description.* |
| <code><a href="#@layertwo/cdk-constructs.ICommandHooks.beforeBundling">beforeBundling</a></code> | *No description.* |

---

##### `afterBundling` <a name="afterBundling" id="@layertwo/cdk-constructs.ICommandHooks.afterBundling"></a>

```typescript
public afterBundling(inputDir: string, outputDir: string): string[]
```

###### `inputDir`<sup>Required</sup> <a name="inputDir" id="@layertwo/cdk-constructs.ICommandHooks.afterBundling.parameter.inputDir"></a>

- *Type:* string

---

###### `outputDir`<sup>Required</sup> <a name="outputDir" id="@layertwo/cdk-constructs.ICommandHooks.afterBundling.parameter.outputDir"></a>

- *Type:* string

---

##### `beforeBundling` <a name="beforeBundling" id="@layertwo/cdk-constructs.ICommandHooks.beforeBundling"></a>

```typescript
public beforeBundling(inputDir: string, outputDir: string): string[]
```

###### `inputDir`<sup>Required</sup> <a name="inputDir" id="@layertwo/cdk-constructs.ICommandHooks.beforeBundling.parameter.inputDir"></a>

- *Type:* string

---

###### `outputDir`<sup>Required</sup> <a name="outputDir" id="@layertwo/cdk-constructs.ICommandHooks.beforeBundling.parameter.outputDir"></a>

- *Type:* string

---


