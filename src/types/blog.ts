/**
 * @file blog.ts
 * @description Strongly typed schema for technical articles, engineering essays, and architecture deep dives.
 */

import type { ID, Slug, Status, Tag, Media, SEOMetadata } from "./common";

/**
 * Author record for engineering publications.
 */
export interface BlogAuthor {
  readonly name: string;
  readonly role: string;
  readonly avatarUrl?: string;
}

/**
 * Complete Technical Article entity contract.
 * 
 * @purpose Defines technical blog posts, system design essays, and post-mortems.
 * @whyItExists Ensures type safety when rendering blog grids, MDX readers, and RSS feeds.
 * @howItWillBeUsed Consumed by the Blog hub and dynamic article routes (`/blog/[slug]`).
 * @futureExpansion Integration with headless MDX content layer or remote Contentful/Dev.to endpoints.
 */
export interface BlogPost {
  readonly id: ID;
  readonly slug: Slug;
  readonly title: string;
  readonly summary: string;
  readonly content?: string; // Markdown or HTML body content
  readonly publishedAt: string; // ISO 8601 date string
  readonly updatedAt?: string;
  readonly readTimeMinutes: number;
  readonly status: Status;
  readonly isFeatured: boolean;
  readonly author: BlogAuthor;
  readonly category: string;
  readonly tags: ReadonlyArray<Tag>;
  readonly coverImage?: Media;
  readonly canonicalUrl?: string;
  readonly seo: SEOMetadata;
}
