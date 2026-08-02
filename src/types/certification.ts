/**
 * @file certification.ts
 * @description Strongly typed schema for professional certifications, cloud accreditations, and technical credentials.
 */

import type { ID, Link } from "./common";

/**
 * Organization issuing the certification credential.
 */
export interface CertificateIssuer {
  readonly name: string;
  readonly logoUrl?: string;
  readonly websiteUrl?: string;
}

/**
 * Complete Professional Certification entity contract.
 * 
 * @purpose Provides verifiable proof of technical certifications (e.g. AWS, GCP, CKA).
 * @whyItExists Ensures type safety when displaying credentials, badges, and verification links.
 * @howItWillBeUsed Consumed by the Certifications module and resume download view.
 * @futureExpansion Automated credential expiration checking and digital badge API verification.
 */
export interface Certification {
  readonly id: ID;
  readonly title: string;
  readonly issuer: CertificateIssuer;
  readonly issueDate: string; // ISO format e.g. "2025-06"
  readonly expirationDate?: string;
  readonly credentialId?: string;
  readonly verificationLink: Link;
  readonly isFeatured: boolean;
}
