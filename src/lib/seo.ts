import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { defaultSEO } from "@/content/seo";
import { socialLinks } from "@/content/social";
import type { Project } from "@/types";

const baseUrl = siteConfig.siteUrl.startsWith("http")
  ? siteConfig.siteUrl
  : "https://github.com/balarajmp/portfolio-v2";

interface ConstructMetadataParams {
  readonly title?: string;
  readonly description?: string;
  readonly keywords?: ReadonlyArray<string>;
  readonly image?: string;
  readonly canonicalUrl?: string;
  readonly noIndex?: boolean;
}

/**
 * Constructs a complete Next.js 14 Metadata object from typed content & defaults.
 */
export function constructMetadata({
  title = defaultSEO.defaultMetadata.title,
  description = defaultSEO.defaultMetadata.description,
  keywords = defaultSEO.defaultMetadata.keywords,
  image = defaultSEO.defaultMetadata.ogImage || siteConfig.defaultOgImage,
  canonicalUrl = "/",
  noIndex = false,
}: ConstructMetadataParams = {}): Metadata {
  const ogImageUrl = image.startsWith("http")
    ? image
    : `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${siteConfig.author.name}`,
    },
    description,
    keywords: keywords ? Array.from(keywords) : [],
    authors: [{ name: siteConfig.author.name, url: baseUrl }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl === "/" ? baseUrl : `${baseUrl}${canonicalUrl.startsWith("/") ? "" : "/"}${canonicalUrl}`,
      siteName: defaultSEO.openGraph.siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: defaultSEO.twitterHandle,
      images: [ogImageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Project-level dynamic metadata generator for individual case studies.
 */
export function generateProjectMetadata(project: Project): Metadata {
  const title = project.seo?.title || `${project.title} — ${project.tagline}`;
  const description = project.seo?.description || project.summary;
  const keywords = project.seo?.keywords || [
    project.title,
    ...project.techStack.map((t) => t.name),
  ];
  const image = project.heroMedia.src;

  return constructMetadata({
    title,
    description,
    keywords,
    image,
    canonicalUrl: `/projects/${project.id}`,
  });
}

/**
 * Generates schema.org Person structured data object.
 */
export function getPersonJsonLd() {
  const sameAs = socialLinks
    .filter((link) => link.platform !== "email")
    .map((link) => link.url);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.roleTitle,
    description: siteConfig.author.bio,
    url: baseUrl,
    email: siteConfig.author.email,
    sameAs,
    knowsAbout: [
      "Software Engineering",
      "TypeScript",
      "React",
      "Next.js",
      "System Architecture",
      "Full-Stack Web Development",
      "Python",
      "FastAPI",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Available for Software Engineering Roles",
    },
  };
}

/**
 * Generates schema.org WebSite structured data object.
 */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: baseUrl,
    description: defaultSEO.defaultMetadata.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };
}

/**
 * Generates schema.org SoftwareApplication structured data object for project case studies.
 */
export function getProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    url: `${baseUrl}/projects/${project.id}`,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}
