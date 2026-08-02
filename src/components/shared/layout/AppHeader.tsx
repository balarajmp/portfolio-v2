/**
 * Purpose: Top application shell header bar featuring brand mark, placeholder navigation slot, and action triggers.
 * Used By: AppShell, Global Layout.
 * Accessibility: Semantic <header role="banner"> landmark, keyboard focusable branding and action triggers.
 * Notes: Features Obsidian Violet glassmorphism (backdrop-blur-md) with 1px border-glass separator.
 */

import * as React from "react";
import { Container } from "@/components/ui/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Brand mark / Logo element override
   */
  logo?: React.ReactNode;
  /**
   * Navigation links slot override
   */
  nav?: React.ReactNode;
  /**
   * Header actions slot override (e.g. Resume button, Theme toggle, Command bar trigger)
   */
  actions?: React.ReactNode;
  className?: string;
}

/**
 * AppHeader Component Primitive
 */
export const AppHeader = React.forwardRef<HTMLElement, AppHeaderProps>(
  (
    {
      logo,
      nav,
      actions,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        role="banner"
        className={cn(
          "sticky top-0 z-sticky w-full border-b border-border-glass bg-bg-glass backdrop-blur-md transition-colors duration-normal",
          className
        )}
        {...props}
      >
        <Container size="default" className="flex h-16 items-center justify-between">
          {/* Logo / Brand Mark Placeholder */}
          <div className="flex items-center gap-3">
            {logo ? (
              logo
            ) : (
              <a
                href="/"
                className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas rounded-md"
                aria-label="Engineering Portfolio Home"
              >
                <div className="h-8 w-8 rounded-md bg-accent-primary text-fg-inverse flex items-center justify-center font-mono font-bold text-sm shadow-subtle group-hover:scale-105 transition-transform duration-fast">
                  EP
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-sm text-fg-primary tracking-tight group-hover:text-accent-hover transition-colors">
                    Portfolio
                  </span>
                  <span className="font-mono text-[10px] text-fg-muted uppercase tracking-widest">
                    Engineering
                  </span>
                </div>
              </a>
            )}
          </div>

          {/* Navigation Placeholder */}
          <nav
            role="navigation"
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-6"
          >
            {nav ? (
              nav
            ) : (
              <div className="flex items-center gap-6 text-xs font-medium text-fg-secondary">
                <span className="text-fg-primary font-semibold border-b border-accent-primary pb-0.5 select-none">
                  Overview
                </span>
                <span className="text-fg-muted hover:text-fg-secondary transition-colors cursor-not-allowed select-none">
                  Projects
                </span>
                <span className="text-fg-muted hover:text-fg-secondary transition-colors cursor-not-allowed select-none">
                  Architecture
                </span>
                <span className="text-fg-muted hover:text-fg-secondary transition-colors cursor-not-allowed select-none">
                  Experience
                </span>
                <Badge variant="default">
                  v2.0
                </Badge>
              </div>
            )}
          </nav>

          {/* Actions / Resume Button Placeholder */}
          <div className="flex items-center gap-3">
            {actions ? (
              actions
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs border-border-subtle hover:border-border-strong"
                onClick={() => {
                  // Structural placeholder trigger
                }}
              >
                Resume
              </Button>
            )}
          </div>
        </Container>
      </header>
    );
  }
);

AppHeader.displayName = "AppHeader";
