/**
 * @file common.ts
 * @description Core shared type primitives and common domain models used across the portfolio platform.
 */

/**
 * Unique identifier representation for entities.
 */
export type ID = string;

/**
 * URL-friendly string representation for routing and resource identification.
 */
export type Slug = string;

/**
 * Lifecycle status of content entities.
 */
export type Status = "draft" | "published" | "archived";

/**
 * Represents a standard hyperlink structure with accessibility and target metadata.
 * 
 * @purpose Standardizes all internal and external link references.
 * @usage Used in buttons, navigation bars, project CTA links, and social items.
 * @futureExpansion Supports analytics event triggers and custom link tracking IDs.
 */
export interface Link {
  readonly label: string;
  readonly url: string;
  readonly isExternal?: boolean;
  readonly ariaLabel?: string;
  readonly iconName?: string;
}

/**
 * Represents media assets (images, SVGs, diagrams) with responsive and accessibility metadata.
 * 
 * @purpose Enforces WCAG 2.1 AA accessibility (alt text) and performance optimization metadata.
 * @usage Applied in project thumbnails, architecture diagrams, and blog banners.
 * @futureExpansion Supports video assets and animated WebP previews.
 */
export interface Media {
  readonly src: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
  readonly mimeType?: string;
  readonly blurDataURL?: string;
}

/**
 * Represents a software technology, framework, tool, or runtime specification.
 * 
 * @purpose Provides structured data for skills, project tech stacks, and Tech Radar rendering.
 * @usage Used in project cards, experience timeline items, and skills categories.
 * @futureExpansion Integration with external ecosystem telemetry or package registry metadata.
 */
export interface Technology {
  readonly id: ID;
  readonly name: string;
  readonly category: "frontend" | "backend" | "database" | "devops" | "architecture" | "testing" | "tooling";
  readonly version?: string;
  readonly iconName?: string;
  readonly docUrl?: string;
}

/**
 * Represents a taxonomy tag for content grouping and filtering.
 */
export interface Tag {
  readonly id: ID;
  readonly name: string;
  readonly slug: Slug;
}

/**
 * Represents a temporal period for career milestones, projects, or education.
 * 
 * @purpose Normalizes date displays and ISO formatting across timeline components.
 * @usage Applied in employment records, degree periods, and project execution dates.
 */
export interface DateRange {
  readonly startDate: string; // ISO 8601 string (e.g. "2024-01")
  readonly endDate?: string; // ISO 8601 string or undefined if current
  readonly isCurrent: boolean;
  readonly formattedDisplay: string; // Pre-formatted string e.g. "Jan 2024 — Present"
}

/**
 * Represents a quantitative performance or business metric.
 * 
 * @purpose Drives metric-first engineering storytelling (e.g. "99.99% Uptime", "50ms Latency").
 * @usage Rendered in Hero recruiter bar, project impact matrices, and experience highlights.
 */
export interface Metric {
  readonly id: ID;
  readonly label: string;
  readonly value: string | number;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly description?: string;
}

/**
 * Reusable SEO metadata structure for pages and dynamic routes.
 */
export interface SEOMetadata {
  readonly title: string;
  readonly description: string;
  readonly keywords?: ReadonlyArray<string>;
  readonly canonicalUrl?: string;
  readonly ogImage?: string;
  readonly noIndex?: boolean;
}
