/**
 * @file skill.ts
 * @description Strongly typed schema for technical competencies, domain skills, and Tech Radar matrix.
 */

import type { ID, Slug } from "./common";

/**
 * Skill proficiency level indicator.
 */
export type SkillProficiency = "expert" | "proficient" | "competent" | "learning";

/**
 * Technical skill definition linking to projects where the technology was applied.
 * 
 * @purpose Connects technical claims directly to verified project evidence.
 * @usage Consumed by the Tech Radar matrix and interactive skill filter components.
 */
export interface Skill {
  readonly id: ID;
  readonly name: string;
  readonly slug: Slug;
  readonly categoryId: ID;
  readonly proficiency: SkillProficiency;
  readonly yearsOfExperience: number;
  readonly iconName?: string;
  readonly verifiedProjectIds: ReadonlyArray<ID>; // References to Project IDs
  readonly isFeatured: boolean;
}

/**
 * Categorized grouping of technical skills (e.g., Frontend, Systems & Backend, Infrastructure).
 * 
 * @purpose Groups skills logically for high-density recruiter inspection.
 */
export interface SkillCategory {
  readonly id: ID;
  readonly name: string;
  readonly description: string;
  readonly displayOrder: number;
  readonly skills: ReadonlyArray<Skill>;
}
