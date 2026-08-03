import type { SiteConfig } from "@/types";

/**
 * Global Site Configuration & Candidate Profile Data
 * Strictly verified information for Balaraj M P.
 */
export const siteConfig: SiteConfig = {
  siteName: "Balaraj M P — Engineering Portfolio Platform",
  siteUrl: "https://github.com/balarajmp/portfolio-v2",
  version: "1.0.0",
  author: {
    name: "Balaraj M P",
    roleTitle: "Software Engineer",
    secondaryTitle: "Backend & Full Stack Engineer",
    bio: "Software Engineer specializing in Backend Development, AI Applications, and Full Stack Engineering.",
    location: "Bengaluru, Karnataka, India",
    email: "balarajmp05@gmail.com",
    availabilityStatus: "open-to-offers",
    avatar: {
      src: "/images/profile/balaraj-m-p.jpg",
      alt: "Balaraj M P — Software Engineer",
      width: 400,
      height: 400,
    },
    resumePdfUrl: "/resume.pdf", // TODO: Add resume PDF to public/resume.pdf
  },
  recruiter: {
    noticePeriodDays: 0,
    relocationPreference: "Open for Remote / Hybrid / Relocation",
    preferredRoles: [
      "Software Engineer",
      "Backend Engineer",
      "Full Stack Engineer",
      "AI Applications Engineer",
    ],
    primaryResumeUrl: "/resume.pdf", // TODO: Add resume PDF to public/resume.pdf
    directContactEmail: "balarajmp05@gmail.com",
  },
  telemetry: {
    enabled: true,
    sampleRateMs: 1000,
    displayFPS: true,
    displayLatency: true,
  },
  defaultOgImage: "/images/og/portfolio-og.png", // TODO: Add custom OG image asset at public/images/og/portfolio-og.png
};
