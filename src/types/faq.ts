/**
 * @file faq.ts
 * @description Strongly typed schema for recruiter FAQs, notice period details, and technical inquiries.
 */

import type { ID } from "./common";

/**
 * FAQ target audience category.
 */
export type FAQAudience = "recruiter" | "hiring-manager" | "engineer" | "general";

/**
 * Complete FAQ Item entity contract.
 * 
 * @purpose Answers critical recruiter questions instantly (notice period, location flexibility, tech stack).
 * @whyItExists Ensures type safety when rendering expandable accordion modules.
 * @howItWillBeUsed Consumed by the FAQ accordion module on the homepage and about page.
 */
export interface FAQItem {
  readonly id: ID;
  readonly question: string;
  readonly answer: string;
  readonly audience: FAQAudience;
  readonly displayOrder: number;
  readonly isFeatured: boolean;
}
