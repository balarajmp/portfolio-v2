/**
 * @file social.ts
 * @description Strongly typed schema for social platform presence, developer profiles, and contact triggers.
 */

import type { ID, Link } from "./common";

/**
 * Recognized social and competitive coding platforms.
 */
export type SocialPlatform = 
  | "github" 
  | "linkedin" 
  | "twitter" 
  | "email" 
  | "leetcode" 
  | "codechef" 
  | "codeforces" 
  | "geeksforgeeks" 
  | "hackerrank" 
  | "stackoverflow";

/**
 * Social media connection item.
 */
export interface SocialLink extends Link {
  readonly id: ID;
  readonly platform: SocialPlatform;
  readonly username: string;
  readonly isPrimary: boolean;
}

/**
 * Competitive programming and developer platform telemetry profile.
 * 
 * @purpose Displays verified problem-solving metrics (e.g., LeetCode solved counts, GitHub commit stats).
 * @usage Rendered in the Tech Radar and Coding Profiles section.
 */
export interface CodingProfile {
  readonly id: ID;
  readonly platform: SocialPlatform;
  readonly username: string;
  readonly profileUrl: string;
  readonly metrics?: {
    readonly solvedCount?: number;
    readonly rating?: number;
    readonly globalRank?: string | number;
    readonly totalContributions?: number;
  };
}
