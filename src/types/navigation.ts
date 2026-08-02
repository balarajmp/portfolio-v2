/**
 * @file navigation.ts
 * @description Strongly typed schema for desktop, mobile, command palette, and footer navigation hierarchies.
 */

import type { ID, Link } from "./common";

/**
 * Single navigation item definition with shortcut keyboard binding.
 */
export interface NavItem extends Link {
  readonly id: ID;
  readonly shortcut?: string; // Keyboard shortcut e.g. "G P" for Go to Projects
  readonly category?: string;
  readonly isPrimaryCTA?: boolean;
}

/**
 * Grouped section of navigation items.
 */
export interface NavSection {
  readonly id: ID;
  readonly title: string;
  readonly items: ReadonlyArray<NavItem>;
}

/**
 * Complete Global Navigation Configuration contract.
 * 
 * @purpose Encapsulates all desktop header links, mobile quick action sheets, and Command Palette shortcuts.
 * @whyItExists Guarantees type safety for navigation components across screen sizes.
 * @howItWillBeUsed Exported from `src/config/navigation.ts` and consumed by Header and `Cmd+K` components.
 */
export interface NavigationConfig {
  readonly headerNav: ReadonlyArray<NavItem>;
  readonly mobileNav: ReadonlyArray<NavItem>;
  readonly commandPalette: ReadonlyArray<NavSection>;
  readonly footerNav: ReadonlyArray<NavSection>;
}
