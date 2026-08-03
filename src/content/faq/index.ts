import type { FAQItem } from "@/types";

/**
 * Recruiter & Engineering FAQs Data Collection
 * Verified platform capabilities and candidate engagement details.
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
    answer: "The resume PDF can be downloaded directly from the header, recruiter bar, or via the Command Palette (Ctrl+K / Cmd+K).", // TODO: Add resume PDF asset to public/resume.pdf
    audience: "recruiter",
    displayOrder: 2,
    isFeatured: true,
  },
  {
    id: "faq-contact",
    question: "How can I contact Balaraj M P directly?",
    answer: "You can reach out via email at balarajmp05@gmail.com, LinkedIn (linkedin.com/in/balaraj-m-p), or GitHub (github.com/balarajmp).",
    audience: "recruiter",
    displayOrder: 3,
    isFeatured: true,
  },
];
