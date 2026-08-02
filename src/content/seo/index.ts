import type { SEOConfig } from "@/types";

/**
 * Global SEO & Search Graph Metadata Defaults
 */
export const defaultSEO: SEOConfig = {
  defaultMetadata: {
    title: "Balaraj M P — Senior Software Engineer & Systems Architect",
    description: "Production-grade portfolio and system architecture case study showcase by Balaraj M P. Senior Software Engineer specializing in Next.js 14, TypeScript, Python FastAPI, and high-performance web applications.",
    keywords: [
      "Balaraj M P",
      "Senior Software Engineer",
      "Full Stack Engineer",
      "Systems Architect",
      "TypeScript",
      "Next.js 14",
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Bengaluru Engineer",
    ],
    canonicalUrl: "https://github.com/balarajmp/portfolio-v2", // TODO: Update to real domain once deployed
    ogImage: "/og-default.png",
  },
  twitterHandle: "@balarajmp", // TODO: Fill with real Twitter handle
  openGraph: {
    title: "Balaraj M P — Senior Software Engineer & Systems Architect",
    description: "Production-grade portfolio and technical case study showcase by Balaraj M P.",
    type: "profile",
    url: "https://github.com/balarajmp/portfolio-v2",
    siteName: "Balaraj M P Portfolio",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Balaraj M P — Senior Software Engineer Portfolio",
      },
    ],
  },
};
