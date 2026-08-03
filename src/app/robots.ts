import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

/**
 * Next.js App Router dynamic robots.txt generator.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl.startsWith("http")
    ? siteConfig.siteUrl
    : "https://github.com/balarajmp/portfolio-v2";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/playground"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
