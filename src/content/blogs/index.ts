import type { BlogPost } from "@/types";

/**
 * Technical Writing & Architecture Essays Data Collection
 */
export const blogs: ReadonlyArray<BlogPost> = [
  {
    id: "post-rsc-architecture",
    slug: "building-zero-js-overhead-apps-with-rsc",
    title: "Building Zero-JS Overhead Applications with React Server Components",
    summary: "An architectural deep-dive into how React Server Components (RSC) eliminate client-side JavaScript bundle bloat, accelerate Core Web Vitals, and maintain fluid interactivity.",
    publishedAt: "2025-11-15",
    readTimeMinutes: 6,
    status: "published",
    isFeatured: true,
    author: {
      name: "Balaraj M P",
      role: "Senior Software Engineer",
    },
    category: "Architecture",
    tags: [
      { id: "tag-next", name: "Next.js 14", slug: "nextjs" },
      { id: "tag-rsc", name: "React Server Components", slug: "rsc" },
      { id: "tag-perf", name: "Performance", slug: "performance" },
    ],
    seo: {
      title: "Building Zero-JS Overhead Apps with RSC — Balaraj M P",
      description: "Architectural retrospective on React Server Components and bundle optimization.",
    },
  },
];
