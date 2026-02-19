import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Lucas Messenger",
  authorAddress: "1335960+layertwo@users.noreply.github.com",
  cdkVersion: "2.200.0",
  defaultReleaseBranch: "mainline",
  jsiiVersion: "~5.9.0",
  name: "layertwo-cdk-constructs",
  projenrcTs: true,
  repositoryUrl: "https://github.com/layertwo/cdk-constructs",
  renovatebot: true,
  mergify: false,
  vscode: true,
  prettier: true,
mutableBuild: true,
  depsUpgrade: false,
  packageName: "@layertwo/cdk-constructs",
  npmRegistryUrl: "https://npm.pkg.github.com",
});
project.synth();
