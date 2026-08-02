import type { SiteConfig } from "@/types";

/**
 * Global Site Configuration Placeholder
 */
export const siteConfig: SiteConfig = {
  siteName: "Engineering Portfolio Platform",
  siteUrl: "https://portfolio.local",
  version: "0.1.0",
  author: {
    name: "",
    roleTitle: "",
    secondaryTitle: "",
    bio: "",
    location: "",
    email: "",
    availabilityStatus: "open-to-offers",
    avatar: { src: "", alt: "" },
    resumePdfUrl: "",
  },
  recruiter: {
    noticePeriodDays: 0,
    relocationPreference: "",
    preferredRoles: [],
    primaryResumeUrl: "",
    directContactEmail: "",
  },
  telemetry: {
    enabled: true,
    sampleRateMs: 1000,
    displayFPS: true,
    displayLatency: true,
  },
  defaultOgImage: "/og-default.png",
};
