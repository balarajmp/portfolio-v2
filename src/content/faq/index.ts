import type { FAQItem } from "@/types";

/**
 * Recruiter & Engineering FAQs Data Collection
 */
export const faqs: ReadonlyArray<FAQItem> = [
  {
    id: "faq-resume",
    question: "Where can I download your official PDF resume?",
    answer: "You can download my latest PDF resume instantly by clicking the 'Download Resume' button in the header, in the Hero recruiter bar, or by pressing Cmd + K and typing 'Download Resume'.",
    audience: "recruiter",
    displayOrder: 1,
    isFeatured: true,
  },
  {
    id: "faq-availability",
    question: "What is your current notice period and availability?",
    answer: "My current notice period is 30 days (negotiable for the right opportunity). I am actively open to Senior Software Engineer, Staff Software Engineer, and Full Stack Tech Lead roles across Remote, Hybrid, and relocate options.",
    audience: "recruiter",
    displayOrder: 2,
    isFeatured: true,
  },
  {
    id: "faq-stack",
    question: "What are your core technical specializations?",
    answer: "My core technical stack includes TypeScript, React 18, Next.js 14 (App Router / RSC), Python (FastAPI), Node.js, PostgreSQL, Redis, Docker, and Tailwind CSS. I specialize in building high-performance web applications and distributed systems microservices.",
    audience: "hiring-manager",
    displayOrder: 3,
    isFeatured: true,
  },
  {
    id: "faq-codebase",
    question: "Where can I inspect your code quality and repository architecture?",
    answer: "All primary codebase repositories are hosted on my public GitHub profile (github.com/balarajmp). You can inspect this portfolio's source code directly at github.com/balarajmp/portfolio-v2.",
    audience: "engineer",
    displayOrder: 4,
    isFeatured: true,
  },
  {
    id: "faq-contact",
    question: "How can I schedule a 15-minute introductory call?",
    answer: "You can reach out directly via email at balarajmp@gmail.com or schedule an intro call using the Calendly trigger in the recruiter actions bar.",
    audience: "recruiter",
    displayOrder: 5,
    isFeatured: true,
  },
];
