import type { SEOConfig } from "@/types";

/**
 * Global SEO & Search Graph Metadata Defaults
 */
export const defaultSEO: SEOConfig = {
  defaultMetadata: {
    title: "Balaraj M P — Engineering Portfolio Platform",
    description: "Production-grade developer portfolio and system architecture showcase by Balaraj M P. Built with Next.js 14, TypeScript, and modern web engineering standards.",
    keywords: [
      "Balaraj M P",
      "Software Engineer",
      "TypeScript",
      "Next.js 14",
      "React",
      "Portfolio Platform",
    ],
    canonicalUrl: "https://github.com/balarajmp/portfolio-v2",
    ogImage: "/og-default.png",
  },
  twitterHandle: "@balarajmp", // TODO: Fill with real Twitter handle
  openGraph: {
    title: "Balaraj M P — Engineering Portfolio Platform",
    description: "Production-grade portfolio and system architecture showcase by Balaraj M P.",
    type: "profile",
    url: "https://github.com/balarajmp/portfolio-v2",
    siteName: "Balaraj M P Portfolio",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Balaraj M P — Engineering Portfolio Platform",
      },
    ],
  },
};
