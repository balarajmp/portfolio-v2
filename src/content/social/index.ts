import type { SocialLink, CodingProfile } from "@/types";

/**
 * Social Links Collection
 * Strictly verified links for Balaraj M P.
 */
export const socialLinks: ReadonlyArray<SocialLink> = [
  {
    id: "soc-github",
    platform: "github",
    username: "balaraj_m_p",
    label: "GitHub",
    url: "https://github.com/balaraj_m_p",
    isExternal: true,
    isPrimary: true,
    ariaLabel: "View GitHub Profile for balaraj_m_p",
    iconName: "Github",
  },
  {
    id: "soc-linkedin",
    platform: "linkedin",
    username: "balaraj-m-p",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/balaraj-m-p/",
    isExternal: true,
    isPrimary: true,
    ariaLabel: "View LinkedIn Profile for Balaraj M P",
    iconName: "Linkedin",
  },
  {
    id: "soc-leetcode",
    platform: "leetcode",
    username: "bapacmr",
    label: "LeetCode",
    url: "https://leetcode.com/u/bapacmr/",
    isExternal: true,
    isPrimary: false,
    ariaLabel: "View LeetCode Profile for bapacmr",
    iconName: "Code2",
  },
  {
    id: "soc-email",
    platform: "email",
    username: "balarajmp05@gmail.com",
    label: "Email",
    url: "mailto:balarajmp05@gmail.com",
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
    username: "balaraj_m_p",
    profileUrl: "https://github.com/balaraj_m_p",
  },
  {
    id: "cp-leetcode",
    platform: "leetcode",
    username: "bapacmr",
    profileUrl: "https://leetcode.com/u/bapacmr/",
  },
];
