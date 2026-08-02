/**
 * @file seo.ts
 * @description Strongly typed schema for route metadata, OpenGraph protocols, and JSON-LD structured data.
 */

import type { SEOMetadata } from "./common";

/**
 * OpenGraph protocol metadata configuration.
 */
export interface OpenGraphConfig {
  readonly title: string;
  readonly description: string;
  readonly type: "website" | "article" | "profile";
  readonly url: string;
  readonly siteName: string;
  readonly images: ReadonlyArray<{
    readonly url: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  }>;
}

/**
 * JSON-LD Structured Data configuration for Google Knowledge Graph.
 */
export interface JSONLDConfig {
  readonly context: "https://schema.org";
  readonly type: "Person" | "SoftwareApplication" | "WebSite";
  readonly name: string;
  readonly url: string;
  readonly sameAs?: ReadonlyArray<string>;
  readonly jobTitle?: string;
  readonly worksFor?: {
    readonly type: "Organization";
    readonly name: string;
  };
}

/**
 * Complete Global SEO & Metadata Configuration contract.
 * 
 * @purpose Drives dynamic metadata generation and JSON-LD injection across routes.
 * @usage Applied in `generateMetadata()` functions across App Router pages.
 */
export interface SEOConfig {
  readonly defaultMetadata: SEOMetadata;
  readonly twitterHandle: string;
  readonly openGraph: OpenGraphConfig;
}
