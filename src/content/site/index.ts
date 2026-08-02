import type { SiteConfig } from "@/types";

/**
 * Global Site Configuration & Candidate Profile Data
 */
export const siteConfig: SiteConfig = {
  siteName: "Balaraj M P | Senior Software Engineer & Systems Architect",
  siteUrl: "https://github.com/balarajmp/portfolio-v2", // TODO: Fill with real production domain once deployed
  version: "1.0.0",
  author: {
    name: "Balaraj M P",
    roleTitle: "Senior Software Engineer",
    secondaryTitle: "Full-Stack & Systems Architecture Specialist",
    bio: "Senior Software Engineer specializing in high-performance web applications, distributed systems architecture, and product-focused engineering. Experienced in building production-grade SaaS applications with modern React, Next.js, TypeScript, and backend microservices.",
    location: "Bengaluru, India", // TODO: Fill with real city/location if different
    email: "balarajmp@gmail.com", // TODO: Fill with real email address
    availabilityStatus: "open-to-offers",
    avatar: {
      src: "/avatar.jpg", // TODO: Fill with real avatar image path
      alt: "Balaraj M P — Senior Software Engineer",
      width: 400,
      height: 400,
    },
    resumePdfUrl: "/resume.pdf", // TODO: Fill with real resume PDF URL
  },
  recruiter: {
    noticePeriodDays: 30, // TODO: Fill with real notice period days
    relocationPreference: "Open for Remote / Hybrid / Relocation",
    preferredRoles: [
      "Senior Software Engineer",
      "Staff Software Engineer",
      "Full Stack Tech Lead",
      "Systems Architect",
    ],
    primaryResumeUrl: "/resume.pdf", // TODO: Fill with real resume link
    directContactEmail: "balarajmp@gmail.com", // TODO: Fill with real email address
  },
  telemetry: {
    enabled: true,
    sampleRateMs: 1000,
    displayFPS: true,
    displayLatency: true,
  },
  defaultOgImage: "/og-default.png",
};
