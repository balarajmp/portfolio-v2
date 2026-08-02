import type { SocialLink, CodingProfile } from "@/types";

/**
 * Social Links Collection
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
    id: "soc-linkedin",
    platform: "linkedin",
    username: "balarajmp", // TODO: Fill with real LinkedIn username
    label: "LinkedIn",
    url: "https://linkedin.com/in/balarajmp", // TODO: Fill with real LinkedIn URL
    isExternal: true,
    isPrimary: true,
    ariaLabel: "Connect with Balaraj M P on LinkedIn",
    iconName: "Linkedin",
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
    metrics: {
      totalContributions: 450, // TODO: Fill with exact GitHub contributions count
    },
  },
  {
    id: "cp-leetcode",
    platform: "leetcode",
    username: "balarajmp", // TODO: Fill with real LeetCode handle
    profileUrl: "https://leetcode.com/u/balarajmp", // TODO: Fill with real LeetCode profile link
    metrics: {
      solvedCount: 320, // TODO: Fill with exact LeetCode solved count
      globalRank: "Top 8%", // TODO: Fill with exact rank
    },
  },
];
