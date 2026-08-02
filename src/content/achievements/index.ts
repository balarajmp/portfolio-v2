import type { Achievement } from "@/types";

/**
 * Engineering Achievements, Honors, and Competition Records
 */
export const achievements: ReadonlyArray<Achievement> = [
  {
    id: "ach-hackathon-1",
    title: "1st Place — National AI & Web Innovation Hackathon", // TODO: Fill with real competition title
    category: "hackathon",
    date: "2024-03", // TODO: Fill with real date
    organization: "Tech Innovation Council", // TODO: Fill with real organization
    description: "Architected a real-time collaborative coding sandbox with automated test case evaluation and streaming LLM feedback within 36 hours, securing 1st place out of 120 teams.",
    proofLink: {
      label: "View Award Announcement",
      url: "https://github.com/balarajmp", // TODO: Fill with real announcement link
      isExternal: true,
    },
    isFeatured: true,
  },
];
