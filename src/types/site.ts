/**
 * @file site.ts
 * @description Strongly typed schema for global site configuration, candidate profile, and recruiter settings.
 */

import type { Media } from "./common";

/**
 * Author / Candidate personal details contract.
 */
export interface AuthorConfig {
  readonly name: string;
  readonly roleTitle: string;
  readonly secondaryTitle: string;
  readonly bio: string;
  readonly location: string;
  readonly email: string;
  readonly availabilityStatus: "open-to-offers" | "actively-interviewing" | "unavailable";
  readonly avatar: Media;
  readonly resumePdfUrl: string;
}

/**
 * Recruiter-first quick actions configuration.
 */
export interface RecruiterConfig {
  readonly noticePeriodDays: number;
  readonly relocationPreference: string;
  readonly preferredRoles: ReadonlyArray<string>;
  readonly primaryResumeUrl: string;
  readonly directContactEmail: string;
}

/**
 * Telemetry and client performance sampler configuration.
 */
export interface TelemetryConfig {
  readonly enabled: boolean;
  readonly sampleRateMs: number;
  readonly displayFPS: boolean;
  readonly displayLatency: boolean;
}

/**
 * Complete Global Site Configuration entity contract.
 * 
 * @purpose Serves as the central manifest for global metadata, author details, and platform defaults.
 * @whyItExists Prevents hardcoded candidate data across UI components.
 * @howItWillBeUsed Exported from `src/config/site.ts` and consumed globally across pages and layouts.
 */
export interface SiteConfig {
  readonly siteName: string;
  readonly siteUrl: string;
  readonly version: string;
  readonly author: AuthorConfig;
  readonly recruiter: RecruiterConfig;
  readonly telemetry: TelemetryConfig;
  readonly defaultOgImage: string;
}
