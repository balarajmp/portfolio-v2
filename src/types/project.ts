/**
 * @file project.ts
 * @description Strongly typed schema for software engineering project case studies and architecture showcases.
 */

import type { ID, Slug, Status, Link, Media, Technology, Metric, SEOMetadata } from "./common";

/**
 * Architectural details of a software project.
 * 
 * @purpose Encapsulates system design trade-offs, storage, API paradigms, and security decisions.
 * @usage Consumed by the slide-over Architecture Inspector drawer and full project case study pages.
 */
export interface ProjectArchitecture {
  readonly summary: string;
  readonly database?: string;
  readonly apiDesign?: string;
  readonly authentication?: string;
  readonly cachingStrategy?: string;
  readonly deploymentPlatform?: string;
  readonly architectureDiagramSvg?: string;
}

/**
 * Quantified technical challenge and solution log.
 */
export interface ProjectChallenge {
  readonly id: ID;
  readonly challenge: string;
  readonly resolution: string;
  readonly impact: string;
}

/**
 * Specific optimization technique applied during engineering.
 */
export interface ProjectOptimization {
  readonly id: ID;
  readonly area: "frontend" | "backend" | "database" | "network" | "bundle";
  readonly strategy: string;
  readonly metricImprovement: string;
}

/**
 * Complete Project entity contract representing a software engineering case study.
 * 
 * @purpose Serves as the single source of truth for all flagship and secondary project records.
 * @whyItExists Ensures type safety when rendering project grids, case studies, and architecture drawers.
 * @howItWillBeUsed Exported from static content arrays or fetched from an external API/CMS.
 * @futureExpansion CMS integration, live GitHub star tracking, and automated Lighthouse telemetry feeds.
 */
export interface Project {
  readonly id: ID;
  readonly slug: Slug;
  readonly title: string;
  readonly tagline: string;
  readonly summary: string;
  readonly isFeatured: boolean;
  readonly status: Status;
  readonly priorityOrder: number;
  readonly problemStatement: string;
  readonly solutionStatement: string;
  readonly lessonsLearned: ReadonlyArray<string>;
  readonly architecture: ProjectArchitecture;
  readonly techStack: ReadonlyArray<Technology>;
  readonly keyMetrics: ReadonlyArray<Metric>;
  readonly challenges: ReadonlyArray<ProjectChallenge>;
  readonly optimizations: ReadonlyArray<ProjectOptimization>;
  readonly heroMedia: Media;
  readonly gallery?: ReadonlyArray<Media>;
  readonly links: {
    readonly liveDemo?: Link;
    readonly githubRepo?: Link;
    readonly docsUrl?: Link;
  };
  readonly seo: SEOMetadata;
}
