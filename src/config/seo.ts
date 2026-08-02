import { defaultSEO } from "@/content/seo";
import type { SEOConfig } from "@/types";

/**
 * Global SEO Configuration Facade
 */
export const getSEOConfig = (): SEOConfig => defaultSEO;
