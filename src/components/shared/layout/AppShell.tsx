/**
 * Purpose: Top-level application shell layout orchestrator component wrapping SkipLink, Header, Main, and Footer.
 * Used By: Root Layout (app/layout.tsx), Page Templates, Feature Previews.
 * Accessibility: Establishes WCAG AA compliant layout landmarks (<header>, <main>, <footer>) and skip-to-content focus target.
 * Notes: Server Component by default; enforces Obsidian Violet dark canvas theme (#09090b) with flex column sticky footer layout.
 */

import * as React from "react";
import { SkipLink } from "./SkipLink";
import { type AppHeaderProps } from "./AppHeader";
import { Navigation } from "@/components/shared/navigation/Navigation";
import { AppMain } from "./AppMain";
import { AppFooter, type AppFooterProps } from "./AppFooter";
import { PageTransition } from "./PageTransition";
import { type ContainerSize } from "@/components/ui/layout/Container";
import { cn } from "@/lib/utils";

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Header component prop overrides
   */
  headerProps?: AppHeaderProps;
  /**
   * Footer component prop overrides
   */
  footerProps?: AppFooterProps;
  /**
   * Wraps AppMain content inside max-width Container layout primitive
   * @default true
   */
  container?: boolean;
  /**
   * Container width boundary preset when container is enabled
   * @default "default"
   */
  containerSize?: ContainerSize;
  /**
   * Main landmark element ID target for SkipLink
   * @default "main-content"
   */
  skipLinkTargetId?: string;
  /**
   * Controls visual visibility of AppHeader
   * @default true
   */
  showHeader?: boolean;
  /**
   * Controls visual visibility of AppFooter
   * @default true
   */
  showFooter?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * AppShell Layout Component
 */
export const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  (
    {
      headerProps,
      footerProps,
      container = true,
      containerSize = "default",
      skipLinkTargetId = "main-content",
      showHeader = true,
      showFooter = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-h-screen flex flex-col bg-bg-canvas text-fg-primary selection:bg-accent-subtle selection:text-accent-hover font-sans antialiased",
          className
        )}
        {...props}
      >
        {/* Accessible Skip Link */}
        <SkipLink targetId={skipLinkTargetId} />

        {/* Header Bar */}
        {showHeader && <Navigation {...headerProps} />}

        {/* Main Content Area */}
        <AppMain id={skipLinkTargetId} container={container} containerSize={containerSize}>
          <PageTransition>{children}</PageTransition>
        </AppMain>

        {/* Footer Bar */}
        {showFooter && <AppFooter {...footerProps} />}
      </div>
    );
  }
);

AppShell.displayName = "AppShell";
