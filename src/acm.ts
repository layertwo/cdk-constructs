import {
  Certificate,
  CertificateProps,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { IHostedZone } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";

/**
 * Properties for DnsValidatedCertificate.
 *
 * The `validation` prop from CertificateProps is always overridden to use
 * DNS validation via the supplied `hostedZone`. Any value passed for
 * `validation` will be silently ignored.
 */
export interface DnsValidatedCertificateProps extends CertificateProps {
  /**
   * The Route53 hosted zone to use for DNS validation.
   */
  readonly hostedZone: IHostedZone;
}

/**
 * An ACM Certificate that always uses Route53 DNS validation.
 * Pass a `hostedZone` instead of a `validation` prop.
 */
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
