# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitHubOidcRole <a name="GitHubOidcRole" id="layertwo-cdk-constructs.GitHubOidcRole"></a>

#### Initializers <a name="Initializers" id="layertwo-cdk-constructs.GitHubOidcRole.Initializer"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

new GitHubOidcRole(scope: Construct, id: string, props: GitHubOidcRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.Initializer.parameter.props">props</a></code> | <code><a href="#layertwo-cdk-constructs.GitHubOidcRoleProps">GitHubOidcRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="layertwo-cdk-constructs.GitHubOidcRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="layertwo-cdk-constructs.GitHubOidcRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="layertwo-cdk-constructs.GitHubOidcRole.Initializer.parameter.props"></a>

- *Type:* <a href="#layertwo-cdk-constructs.GitHubOidcRoleProps">GitHubOidcRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.applyRemovalPolicy">applyRemovalPolicy</a></code> | Skip applyRemovalPolicy if role synthesis is prevented by customizeRoles. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.addManagedPolicy">addManagedPolicy</a></code> | Attaches a managed policy to this role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.addToPolicy">addToPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.addToPrincipalPolicy">addToPrincipalPolicy</a></code> | Adds a permission to the role's default policy document. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.attachInlinePolicy">attachInlinePolicy</a></code> | Attaches a policy to this role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.grant">grant</a></code> | Grant the actions defined in actions to the identity Principal on this resource. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.grantAssumeRole">grantAssumeRole</a></code> | Grant permissions to the given principal to assume this role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.grantPassRole">grantPassRole</a></code> | Grant permissions to the given principal to pass this role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.withoutPolicyUpdates">withoutPolicyUpdates</a></code> | Return a copy of this Role object whose Policies will not be updated. |

---

##### `toString` <a name="toString" id="layertwo-cdk-constructs.GitHubOidcRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="layertwo-cdk-constructs.GitHubOidcRole.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Skip applyRemovalPolicy if role synthesis is prevented by customizeRoles.

Because in this case, this construct does not have a CfnResource in the tree.

###### `policy`<sup>Required</sup> <a name="policy" id="layertwo-cdk-constructs.GitHubOidcRole.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

RemovalPolicy.

---

##### `addManagedPolicy` <a name="addManagedPolicy" id="layertwo-cdk-constructs.GitHubOidcRole.addManagedPolicy"></a>

```typescript
public addManagedPolicy(policy: IManagedPolicy): void
```

Attaches a managed policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="layertwo-cdk-constructs.GitHubOidcRole.addManagedPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The the managed policy to attach.

---

##### `addToPolicy` <a name="addToPolicy" id="layertwo-cdk-constructs.GitHubOidcRole.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): boolean
```

Add to the policy of this principal.

###### `statement`<sup>Required</sup> <a name="statement" id="layertwo-cdk-constructs.GitHubOidcRole.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToPrincipalPolicy` <a name="addToPrincipalPolicy" id="layertwo-cdk-constructs.GitHubOidcRole.addToPrincipalPolicy"></a>

```typescript
public addToPrincipalPolicy(statement: PolicyStatement): AddToPrincipalPolicyResult
```

Adds a permission to the role's default policy document.

If there is no default policy attached to this role, it will be created.

###### `statement`<sup>Required</sup> <a name="statement" id="layertwo-cdk-constructs.GitHubOidcRole.addToPrincipalPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The permission statement to add to the policy document.

---

##### `attachInlinePolicy` <a name="attachInlinePolicy" id="layertwo-cdk-constructs.GitHubOidcRole.attachInlinePolicy"></a>

```typescript
public attachInlinePolicy(policy: Policy): void
```

Attaches a policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="layertwo-cdk-constructs.GitHubOidcRole.attachInlinePolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.Policy

The policy to attach.

---

##### `grant` <a name="grant" id="layertwo-cdk-constructs.GitHubOidcRole.grant"></a>

```typescript
public grant(grantee: IPrincipal, actions: ...string[]): Grant
```

Grant the actions defined in actions to the identity Principal on this resource.

###### `grantee`<sup>Required</sup> <a name="grantee" id="layertwo-cdk-constructs.GitHubOidcRole.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

###### `actions`<sup>Required</sup> <a name="actions" id="layertwo-cdk-constructs.GitHubOidcRole.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantAssumeRole` <a name="grantAssumeRole" id="layertwo-cdk-constructs.GitHubOidcRole.grantAssumeRole"></a>

```typescript
public grantAssumeRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to assume this role.

###### `identity`<sup>Required</sup> <a name="identity" id="layertwo-cdk-constructs.GitHubOidcRole.grantAssumeRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `grantPassRole` <a name="grantPassRole" id="layertwo-cdk-constructs.GitHubOidcRole.grantPassRole"></a>

```typescript
public grantPassRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to pass this role.

###### `identity`<sup>Required</sup> <a name="identity" id="layertwo-cdk-constructs.GitHubOidcRole.grantPassRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `withoutPolicyUpdates` <a name="withoutPolicyUpdates" id="layertwo-cdk-constructs.GitHubOidcRole.withoutPolicyUpdates"></a>

```typescript
public withoutPolicyUpdates(options?: WithoutPolicyUpdatesOptions): IRole
```

Return a copy of this Role object whose Policies will not be updated.

Use the object returned by this method if you want this Role to be used by
a construct without it automatically updating the Role's Policies.

If you do, you are responsible for adding the correct statements to the
Role's policies yourself.

###### `options`<sup>Optional</sup> <a name="options" id="layertwo-cdk-constructs.GitHubOidcRole.withoutPolicyUpdates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.WithoutPolicyUpdatesOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.customizeRoles">customizeRoles</a></code> | Customize the creation of IAM roles within the given scope. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.fromLookup">fromLookup</a></code> | Lookup an existing Role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.fromRoleArn">fromRoleArn</a></code> | Import an external role by ARN. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.fromRoleName">fromRoleName</a></code> | Import an external role by name. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.isRole">isRole</a></code> | Return whether the given object is a Role. |

---

##### `isConstruct` <a name="isConstruct" id="layertwo-cdk-constructs.GitHubOidcRole.isConstruct"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

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

###### `x`<sup>Required</sup> <a name="x" id="layertwo-cdk-constructs.GitHubOidcRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="layertwo-cdk-constructs.GitHubOidcRole.isOwnedResource"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

GitHubOidcRole.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="layertwo-cdk-constructs.GitHubOidcRole.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="layertwo-cdk-constructs.GitHubOidcRole.isResource"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

GitHubOidcRole.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="layertwo-cdk-constructs.GitHubOidcRole.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `customizeRoles` <a name="customizeRoles" id="layertwo-cdk-constructs.GitHubOidcRole.customizeRoles"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

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


###### `scope`<sup>Required</sup> <a name="scope" id="layertwo-cdk-constructs.GitHubOidcRole.customizeRoles.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope to customize role creation.

---

###### `options`<sup>Optional</sup> <a name="options" id="layertwo-cdk-constructs.GitHubOidcRole.customizeRoles.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.CustomizeRolesOptions

options for configuring role creation.

---

##### `fromLookup` <a name="fromLookup" id="layertwo-cdk-constructs.GitHubOidcRole.fromLookup"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

GitHubOidcRole.fromLookup(scope: Construct, id: string, options: RoleLookupOptions)
```

Lookup an existing Role.

###### `scope`<sup>Required</sup> <a name="scope" id="layertwo-cdk-constructs.GitHubOidcRole.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="layertwo-cdk-constructs.GitHubOidcRole.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="layertwo-cdk-constructs.GitHubOidcRole.fromLookup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.RoleLookupOptions

---

##### `fromRoleArn` <a name="fromRoleArn" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleArn"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

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

###### `scope`<sup>Required</sup> <a name="scope" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleArn.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleArn.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleArn.parameter.roleArn"></a>

- *Type:* string

the ARN of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleArn.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleArnOptions

allow customizing the behavior of the returned role.

---

##### `fromRoleName` <a name="fromRoleName" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleName"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

GitHubOidcRole.fromRoleName(scope: Construct, id: string, roleName: string, options?: FromRoleNameOptions)
```

Import an external role by name.

The imported role is assumed to exist in the same account as the account
the scope's containing Stack is being deployed to.

###### `scope`<sup>Required</sup> <a name="scope" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleName.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleName.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleName.parameter.roleName"></a>

- *Type:* string

the name of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="layertwo-cdk-constructs.GitHubOidcRole.fromRoleName.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleNameOptions

allow customizing the behavior of the returned role.

---

##### `isRole` <a name="isRole" id="layertwo-cdk-constructs.GitHubOidcRole.isRole"></a>

```typescript
import { GitHubOidcRole } from 'layertwo-cdk-constructs'

GitHubOidcRole.isRole(x: any)
```

Return whether the given object is a Role.

###### `x`<sup>Required</sup> <a name="x" id="layertwo-cdk-constructs.GitHubOidcRole.isRole.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Returns the role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.roleArn">roleArn</a></code> | <code>string</code> | Returns the ARN of this role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.roleId">roleId</a></code> | <code>string</code> | Returns the stable and unique string identifying the role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.roleName">roleName</a></code> | <code>string</code> | Returns the name of the role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.assumeRolePolicy">assumeRolePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The assume role policy document associated with this role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | Returns the permissions boundary attached to this role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.principalAccount">principalAccount</a></code> | <code>string</code> | The AWS account ID of this principal. |

---

##### `node`<sup>Required</sup> <a name="node" id="layertwo-cdk-constructs.GitHubOidcRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="layertwo-cdk-constructs.GitHubOidcRole.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="layertwo-cdk-constructs.GitHubOidcRole.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assumeRoleAction`<sup>Required</sup> <a name="assumeRoleAction" id="layertwo-cdk-constructs.GitHubOidcRole.property.assumeRoleAction"></a>

```typescript
public readonly assumeRoleAction: string;
```

- *Type:* string

When this Principal is used in an AssumeRole policy, the action to use.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="layertwo-cdk-constructs.GitHubOidcRole.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `policyFragment`<sup>Required</sup> <a name="policyFragment" id="layertwo-cdk-constructs.GitHubOidcRole.property.policyFragment"></a>

```typescript
public readonly policyFragment: PrincipalPolicyFragment;
```

- *Type:* aws-cdk-lib.aws_iam.PrincipalPolicyFragment

Returns the role.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="layertwo-cdk-constructs.GitHubOidcRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Returns the ARN of this role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="layertwo-cdk-constructs.GitHubOidcRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Returns the stable and unique string identifying the role.

For example,
AIDAJQABLZS4A3QDU576Q.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="layertwo-cdk-constructs.GitHubOidcRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Returns the name of the role.

---

##### `assumeRolePolicy`<sup>Optional</sup> <a name="assumeRolePolicy" id="layertwo-cdk-constructs.GitHubOidcRole.property.assumeRolePolicy"></a>

```typescript
public readonly assumeRolePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The assume role policy document associated with this role.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="layertwo-cdk-constructs.GitHubOidcRole.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

Returns the permissions boundary attached to this role.

---

##### `principalAccount`<sup>Optional</sup> <a name="principalAccount" id="layertwo-cdk-constructs.GitHubOidcRole.property.principalAccount"></a>

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
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRole.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="layertwo-cdk-constructs.GitHubOidcRole.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

## Structs <a name="Structs" id="Structs"></a>

### GitHubOidcRoleProps <a name="GitHubOidcRoleProps" id="layertwo-cdk-constructs.GitHubOidcRoleProps"></a>

Properties for GitHubOidcRole.

#### Initializer <a name="Initializer" id="layertwo-cdk-constructs.GitHubOidcRoleProps.Initializer"></a>

```typescript
import { GitHubOidcRoleProps } from 'layertwo-cdk-constructs'

const gitHubOidcRoleProps: GitHubOidcRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRoleProps.property.owner">owner</a></code> | <code>string</code> | GitHub repository owner (organization or user). |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRoleProps.property.repo">repo</a></code> | <code>string</code> | GitHub repository name. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRoleProps.property.branch">branch</a></code> | <code>string</code> | Specific branch to allow (optional) If neither branch nor environment is specified, all branches are allowed. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRoleProps.property.description">description</a></code> | <code>string</code> | A description of the role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRoleProps.property.environment">environment</a></code> | <code>string</code> | GitHub environment name (optional) Takes precedence over branch if both are specified. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRoleProps.property.maxSessionDuration">maxSessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum session duration for the role. |
| <code><a href="#layertwo-cdk-constructs.GitHubOidcRoleProps.property.roleName">roleName</a></code> | <code>string</code> | A name for the IAM role. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="layertwo-cdk-constructs.GitHubOidcRoleProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

GitHub repository owner (organization or user).

---

##### `repo`<sup>Required</sup> <a name="repo" id="layertwo-cdk-constructs.GitHubOidcRoleProps.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

GitHub repository name.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="layertwo-cdk-constructs.GitHubOidcRoleProps.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Specific branch to allow (optional) If neither branch nor environment is specified, all branches are allowed.

---

##### `description`<sup>Optional</sup> <a name="description" id="layertwo-cdk-constructs.GitHubOidcRoleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A description of the role.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="layertwo-cdk-constructs.GitHubOidcRoleProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

GitHub environment name (optional) Takes precedence over branch if both are specified.

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="maxSessionDuration" id="layertwo-cdk-constructs.GitHubOidcRoleProps.property.maxSessionDuration"></a>

```typescript
public readonly maxSessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(1)

The maximum session duration for the role.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="layertwo-cdk-constructs.GitHubOidcRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID

A name for the IAM role.

---



