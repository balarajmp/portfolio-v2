/**
 * @file experience.ts
 * @description Strongly typed schema for professional career history, employment milestones, and ADR logs.
 */

import type { ID, Slug, DateRange, Technology, Metric } from "./common";

/**
 * Architecture Decision Record (ADR) embedded within career history.
 * 
 * @purpose Demonstrates senior technical leadership and decision-making rigor.
 * @usage Rendered inside expandable experience timeline items and case studies.
 */
export interface ArchitectureDecisionRecord {
  readonly id: ID;
  readonly title: string;
  readonly status: "accepted" | "proposed" | "deprecated";
  readonly context: string;
  readonly decision: string;
  readonly consequences: ReadonlyArray<string>;
}

/**
 * Company metadata contract.
 */
export interface Company {
  readonly name: string;
  readonly logoUrl?: string;
  readonly websiteUrl?: string;
  readonly location: string;
  readonly industry?: string;
}

/**
 * Complete Professional Experience entity contract.
 * 
 * @purpose Encapsulates career milestones, technical impact metrics, and leadership responsibilities.
 * @whyItExists Ensures type safety when rendering career timelines, resume views, and ADR logs.
 * @howItWillBeUsed Consumed by the Experience section and interactive career timeline components.
 * @futureExpansion Supports dynamic company logo fetching, skill matrix aggregation, and verified credential links.
 */
export interface Experience {
  readonly id: ID;
  readonly slug: Slug;
  readonly roleTitle: string;
  readonly company: Company;
  readonly employmentType: "full-time" | "part-time" | "contract" | "freelance";
  readonly dateRange: DateRange;
  readonly summary: string;
  readonly achievements: ReadonlyArray<string>; // Quantified bullet points
  readonly keyMetrics: ReadonlyArray<Metric>;
  readonly techStack: ReadonlyArray<Technology>;
  readonly adrLogs?: ReadonlyArray<ArchitectureDecisionRecord>;
  readonly isCurrentRole: boolean;
}
