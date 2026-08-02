/**
 * @file achievement.ts
 * @description Strongly typed schema for engineering awards, hackathon victories, open-source milestones, and recognitions.
 */

import type { ID, Link, Media } from "./common";

/**
 * Category classification for achievements.
 */
export type AchievementCategory = "hackathon" | "award" | "open-source" | "publication" | "speaking";

/**
 * Complete Engineering Achievement entity contract.
 * 
 * @purpose Highlights technical distinctions, competitions won, and community contributions.
 * @whyItExists Ensures type safety when rendering honors, badges, and proof-of-work cards.
 * @howItWillBeUsed Consumed by the Achievements section and Hero highlights strip.
 */
export interface Achievement {
  readonly id: ID;
  readonly title: string;
  readonly category: AchievementCategory;
  readonly date: string; // ISO format e.g. "2025-11"
  readonly organization: string;
  readonly description: string;
  readonly proofLink?: Link;
  readonly media?: Media;
  readonly isFeatured: boolean;
}
