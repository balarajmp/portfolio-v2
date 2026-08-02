import type { SEOConfig } from "@/types";

/**
 * SEO & Metadata Defaults Collection
 */
export const defaultSEO: SEOConfig = {
  defaultMetadata: {
    title: "Engineering Portfolio Platform",
    description: "Production-grade Engineering Portfolio Platform built with Next.js, TypeScript, and modern web technologies.",
    keywords: ["Software Engineer", "Systems Architecture", "Full Stack", "TypeScript", "Next.js"],
  },
  twitterHandle: "@developer",
  openGraph: {
    title: "Engineering Portfolio Platform",
    description: "Production-grade Engineering Portfolio Platform",
    type: "website",
    url: "https://portfolio.local",
    siteName: "Engineering Portfolio Platform",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Engineering Portfolio Platform",
      },
    ],
  },
};
