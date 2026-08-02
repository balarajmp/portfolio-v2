/**
 * @file education.ts
 * @description Strongly typed schema for academic background, degrees, coursework, and honors.
 */

import type { ID, DateRange } from "./common";

/**
 * Institution information.
 */
export interface Institution {
  readonly name: string;
  readonly location: string;
  readonly logoUrl?: string;
  readonly websiteUrl?: string;
}

/**
 * Complete Academic Background entity contract.
 *
 * @purpose Encapsulates formal degree history, specialized coursework, and academic honors.
 * @whyItExists Ensures type safety when rendering resume views and background cards.
 * @howItWillBeUsed Exported from static content arrays or database providers.
 * @futureExpansion Supports digital degree verification links and official transcripts.
 */
export interface Education {
  readonly id: ID;
  readonly degree: string;
  readonly fieldOfStudy: string;
  readonly institution: Institution;
  readonly dateRange: DateRange;
  readonly gradeOrCgpa?: string;
  readonly gradeLabel?: string; // e.g. "CGPA" | "Percentage" | "Score"
  readonly status?: "pursuing" | "completed";
  readonly relevantCoursework: ReadonlyArray<string>;
  readonly honorsAndAwards?: ReadonlyArray<string>;
}

/**
 * Hackathon participation record.
 *
 * @purpose Encapsulates competitive engineering event participation and outcomes.
 */
export interface Hackathon {
  readonly id: ID;
  readonly name: string;
  readonly organizer: string;
  readonly date: string; // e.g. "2025" or "2026"
  readonly description?: string;
  readonly result?: string; // e.g. "Finalist", "Winner", "Participant"
  readonly isFeatured?: boolean;
}

/**
 * Academic / Industry seminar or workshop attendance record.
 *
 * @purpose Demonstrates engagement with emerging technologies beyond curriculum.
 */
export interface Seminar {
  readonly id: ID;
  readonly title: string;
  readonly organizer?: string;
  readonly date?: string;
  readonly description?: string;
}
