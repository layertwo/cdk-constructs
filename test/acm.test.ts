import { Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import { CertificateValidation } from "aws-cdk-lib/aws-certificatemanager";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { DnsValidatedCertificate } from "../src";

describe("DnsValidatedCertificate", () => {
  let template: Template;

  beforeEach(() => {
    const stack = new Stack();
    const hostedZone = HostedZone.fromHostedZoneAttributes(stack, "Zone", {
      hostedZoneId: "Z123456789",
      zoneName: "example.com",
    });
    new DnsValidatedCertificate(stack, "Cert", {
      domainName: "example.com",
      hostedZone,
    });
    template = Template.fromStack(stack);
  });

  it("uses DNS validation", () => {
    template.hasResourceProperties("AWS::CertificateManager::Certificate", {
      ValidationMethod: "DNS",
    });
  });

  it("sets the correct domain name", () => {
    template.hasResourceProperties("AWS::CertificateManager::Certificate", {
      DomainName: "example.com",
    });
  });

  it("includes domain validation options for the hosted zone", () => {
    template.hasResourceProperties("AWS::CertificateManager::Certificate", {
      DomainValidationOptions: Match.arrayWith([
        Match.objectLike({
          DomainName: "example.com",
          HostedZoneId: "Z123456789",
        }),
      ]),
    });
  });

  it("overrides caller-supplied validation and always uses DNS", () => {
    const stack = new Stack();
    const hostedZone = HostedZone.fromHostedZoneAttributes(stack, "Zone2", {
      hostedZoneId: "Z999999999",
      zoneName: "other.com",
    });
    new DnsValidatedCertificate(stack, "Cert2", {
      domainName: "other.com",
      hostedZone,
      validation: CertificateValidation.fromEmail(),
    });
    Template.fromStack(stack).hasResourceProperties(
      "AWS::CertificateManager::Certificate",
      { ValidationMethod: "DNS" },
    );
  });
});
