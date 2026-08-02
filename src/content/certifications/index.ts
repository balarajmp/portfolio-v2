import type { Certification } from "@/types";

/**
 * Professional Certifications & Verified Credentials Data
 */
export const certifications: ReadonlyArray<Certification> = [
  {
    id: "cert-aws-saa",
    title: "AWS Certified Solutions Architect – Associate", // TODO: Fill with real certification title if different
    issuer: {
      name: "Amazon Web Services (AWS)",
      websiteUrl: "https://aws.amazon.com",
    },
    issueDate: "2023-09", // TODO: Fill with real issue date
    expirationDate: "2026-09", // TODO: Fill with real expiration date
    credentialId: "AWS-SAA-12345678", // TODO: Fill with real credential ID
    verificationLink: {
      label: "Verify Credential",
      url: "https://aws.amazon.com/verification", // TODO: Fill with real verification URL
      isExternal: true,
    },
    isFeatured: true,
  },
];
