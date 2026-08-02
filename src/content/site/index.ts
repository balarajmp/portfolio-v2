import type { SiteConfig } from "@/types";

/**
 * Global Site Configuration & Candidate Profile Data
 * Contains strictly verified information (Candidate Name: Balaraj M P).
 * All unverified fields are marked with TODOs for candidate input.
 */
export const siteConfig: SiteConfig = {
  siteName: "Balaraj M P — Engineering Portfolio Platform",
  siteUrl: "https://github.com/balarajmp/portfolio-v2",
  version: "1.0.0",
  author: {
    name: "Balaraj M P",
    roleTitle: "Software Engineer", // TODO: Fill with real job title
    secondaryTitle: "Full-Stack Developer", // TODO: Fill with real specialization
    bio: "Software Engineer specializing in modern web applications, clean system architecture, and product-focused engineering.", // TODO: Fill with candidate's preferred bio
    location: "India", // TODO: Fill with real city/location
    email: "balarajmp@gmail.com", // TODO: Fill with real email address
    availabilityStatus: "open-to-offers", // TODO: Update availability status
    avatar: {
      src: "/avatar.jpg", // TODO: Add candidate photo to public/avatar.jpg
      alt: "Balaraj M P",
      width: 400,
      height: 400,
    },
    resumePdfUrl: "/resume.pdf", // TODO: Add resume PDF to public/resume.pdf
  },
  recruiter: {
    noticePeriodDays: 30, // TODO: Fill with real notice period
    relocationPreference: "Open for Remote / Hybrid / Relocation", // TODO: Fill with relocation preferences
    preferredRoles: [
      "Software Engineer",
      "Senior Software Engineer",
      "Full Stack Developer",
    ], // TODO: Fill with real target roles
    primaryResumeUrl: "/resume.pdf", // TODO: Add candidate resume PDF
    directContactEmail: "balarajmp@gmail.com", // TODO: Fill with candidate email
  },
  telemetry: {
    enabled: true,
    sampleRateMs: 1000,
    displayFPS: true,
    displayLatency: true,
  },
  defaultOgImage: "/og-default.png",
};
