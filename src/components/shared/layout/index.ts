/**
 * Purpose: Central barrel export for all Application Shell layout components.
 * Used By: Root Layout (app/layout.tsx), Page Templates, Feature Layouts.
 * Accessibility: Re-exports accessible, landmark-structured application layout primitives.
 * Notes: Single entry point for shared layout components (@/components/shared/layout).
 */

export { AppShell, type AppShellProps } from "./AppShell";
export { AppHeader, type AppHeaderProps } from "./AppHeader";
export { AppMain, type AppMainProps } from "./AppMain";
export { AppFooter, type AppFooterProps } from "./AppFooter";
export { SkipLink, type SkipLinkProps } from "./SkipLink";
export { PageTransition, type PageTransitionProps } from "./PageTransition";
