import {
  Certificate,
  CertificateProps,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { IHostedZone } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";

export interface DnsValidatedCertificateProps extends CertificateProps {
  readonly hostedZone: IHostedZone;
}

export class DnsValidatedCertificate extends Certificate {
  constructor(
    scope: Construct,
    id: string,
    props: DnsValidatedCertificateProps,
  ) {
    super(scope, id, {
      ...props,
      validation: CertificateValidation.fromDns(props.hostedZone),
    });
  }
}
