import { siteConfig } from "@/content/site";
import type { SiteConfig } from "@/types";

/**
 * Global Site Configuration Facade
 */
export const getSiteConfig = (): SiteConfig => siteConfig;
