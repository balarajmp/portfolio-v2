import type { ID } from "./common";

/**
 * Technical growth category for journey timeline milestones.
 */
export type JourneyCategory = "academic" | "learning" | "project" | "milestone";

/**
 * Single milestone entry in the candidate's engineering growth timeline.
 * 
 * @purpose Captures key engineering achievements, project breakthroughs, and learning milestones.
 * @whyItExists Avoids generic employment history layouts by telling an evidence-backed technical narrative.
 */
export interface JourneyMilestone {
  readonly id: ID;
  readonly date: string;
  readonly title: string;
  readonly category: JourneyCategory;
  readonly summary: string;
  readonly description: string;
  readonly keyTakeaways?: ReadonlyArray<string>;
  readonly skillsAcquired?: ReadonlyArray<string>;
  readonly relatedProjectId?: string;
  readonly iconName?: string;
  readonly isCurrent?: boolean;
}
