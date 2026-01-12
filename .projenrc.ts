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
  publishToPypi: {
    distName: "layertwo-cdk-constructs",
    module: "layertwo_cdk_constructs",
  },
  mutableBuild: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
