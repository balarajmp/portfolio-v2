import { navigation } from "@/content/navigation";
import type { NavigationConfig } from "@/types";

/**
 * Global Navigation Configuration Facade
 */
export const getNavigationConfig = (): NavigationConfig => navigation;
