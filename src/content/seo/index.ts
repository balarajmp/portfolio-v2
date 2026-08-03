import type { SEOConfig } from "@/types";

/**
 * Global SEO & Search Graph Metadata Defaults for Balaraj M P.
 */
export const defaultSEO: SEOConfig = {
  defaultMetadata: {
    title: "Balaraj M P — Software Engineer",
    description: "Software Engineer specializing in Backend Development, AI Applications, and Full Stack Engineering. View software architecture, project case studies, and engineering philosophy.",
    keywords: [
      "Balaraj M P",
      "Software Engineer",
      "Backend Developer",
      "FastAPI",
      "Python",
      "Node.js",
      "React",
      "Next.js",
      "AI Applications",
      "Bengaluru",
    ],
    canonicalUrl: "https://github.com/balarajmp/portfolio-v2",
    ogImage: "/images/og/portfolio-og.png", // TODO: Add custom OG image asset at public/images/og/portfolio-og.png
  },
  twitterHandle: "@balarajmp",
  openGraph: {
    title: "Balaraj M P — Software Engineer",
    description: "Software Engineer specializing in Backend Development, AI Applications, and Full Stack Engineering.",
    type: "profile",
    url: "https://github.com/balarajmp/portfolio-v2",
    siteName: "Balaraj M P Portfolio",
    images: [
      {
        url: "/images/og/portfolio-og.png", // TODO: Add custom OG image asset at public/images/og/portfolio-og.png
        width: 1200,
        height: 630,
        alt: "Balaraj M P — Software Engineer Portfolio",
      },
    ],
  },
};
