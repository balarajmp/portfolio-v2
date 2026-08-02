import type { SocialLink, CodingProfile } from "@/types";

/**
 * Social Links Collection
 * Contains strictly verified GitHub profile link. Unverified handles marked with TODOs.
 */
export const socialLinks: ReadonlyArray<SocialLink> = [
  {
    id: "soc-github",
    platform: "github",
    username: "balarajmp",
    label: "GitHub",
    url: "https://github.com/balarajmp",
    isExternal: true,
    isPrimary: true,
    ariaLabel: "View GitHub Profile for balarajmp",
    iconName: "Github",
  },
  {
    id: "soc-email",
    platform: "email",
    username: "balarajmp@gmail.com", // TODO: Fill with real email address
    label: "Email",
    url: "mailto:balarajmp@gmail.com", // TODO: Fill with real email address
    isExternal: true,
    isPrimary: true,
    ariaLabel: "Send an email to Balaraj M P",
    iconName: "Mail",
  },
  // TODO: Add LinkedIn and Twitter links once verified
];

/**
 * Competitive Programming & Open Source Profiles Collection
 */
export const codingProfiles: ReadonlyArray<CodingProfile> = [
  {
    id: "cp-github",
    platform: "github",
    username: "balarajmp",
    profileUrl: "https://github.com/balarajmp",
  },
  // TODO: Add LeetCode / competitive programming profiles once verified
];
