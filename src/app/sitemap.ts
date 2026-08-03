import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";

/**
 * Next.js App Router dynamic sitemap.xml generator.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.startsWith("http")
    ? siteConfig.siteUrl
    : "https://github.com/balarajmp/portfolio-v2";

  const lastModified = new Date();

  // Root & Section level routes
  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}#projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#skills`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}#journey`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic project routes infrastructure
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...mainRoutes, ...projectRoutes];
}
