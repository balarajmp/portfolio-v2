import type { FAQItem } from "@/types";

/**
 * Recruiter & Engineering FAQs Data Collection
 * Refactored to focus on verified platform capabilities and candidate engagement.
 */
export const faqs: ReadonlyArray<FAQItem> = [
  {
    id: "faq-codebase",
    question: "Where can I inspect the source code and repository architecture?",
    answer: "This entire platform is open source and hosted on GitHub at github.com/balarajmp/portfolio-v2. It features strict TypeScript domain contracts, Next.js 14 App Router, and Vercel/Linear design token aesthetics.",
    audience: "engineer",
    displayOrder: 1,
    isFeatured: true,
  },
  {
    id: "faq-resume",
    question: "Where can I download the official PDF resume?",
    answer: "The resume PDF can be downloaded directly from the header, the recruiter bar, or via the Command Palette (Cmd + K).", // TODO: Update link once resume PDF is uploaded to public/resume.pdf
    audience: "recruiter",
    displayOrder: 2,
    isFeatured: true,
  },
  {
    id: "faq-contact",
    question: "How can I contact Balaraj M P directly?",
    answer: "You can reach out via GitHub (github.com/balarajmp) or via email at balarajmp@gmail.com.", // TODO: Fill with real email address
    audience: "recruiter",
    displayOrder: 3,
    isFeatured: true,
  },
];
