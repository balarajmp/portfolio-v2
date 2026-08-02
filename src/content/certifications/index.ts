import type { Certification } from "@/types";

/**
 * Professional Certifications & Verified Credentials Data
 * Strictly verified candidate certifications — IBM and Infosys Springboard.
 */
export const certifications: ReadonlyArray<Certification> = [
  {
    id: "cert-ibm-python-ds",
    title: "Python for Data Science",
    issuer: {
      name: "IBM",
    },
    issueDate: "2025",
    verificationLink: {
      label: "View Certificate",
      url: "#",
      isExternal: true,
    },
    isFeatured: true,
  },
  {
    id: "cert-infosys-python",
    title: "Python Foundation Certification",
    issuer: {
      name: "Infosys Springboard",
    },
    issueDate: "2025",
    verificationLink: {
      label: "View Certificate",
      url: "#",
      isExternal: true,
    },
    isFeatured: true,
  },
  {
    id: "cert-infosys-sql",
    title: "SQL Server Important Concepts",
    issuer: {
      name: "Infosys Springboard",
    },
    issueDate: "2025",
    verificationLink: {
      label: "View Certificate",
      url: "#",
      isExternal: true,
    },
    isFeatured: true,
  },
];
