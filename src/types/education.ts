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
  readonly relevantCoursework: ReadonlyArray<string>;
  readonly honorsAndAwards?: ReadonlyArray<string>;
}
