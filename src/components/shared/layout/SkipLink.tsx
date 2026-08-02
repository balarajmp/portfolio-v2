/**
 * Purpose: Accessible skip-to-content navigation link primitive for keyboard and screen-reader users.
 * Used By: AppShell, Root Layout.
 * Accessibility: WCAG 2.1 AA compliant keyboard focus trigger, bypasses navigation header directly to main landmark (#main-content).
 * Notes: Visually hidden until focused by keyboard Tab navigation, rendering high-contrast focus trigger.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * HTML element ID target for skipping navigation (e.g. "main-content")
   * @default "main-content"
   */
  targetId?: string;
  /**
   * Visual and screen reader link label text
   * @default "Skip to main content"
   */
  label?: string;
  className?: string;
}

/**
 * SkipLink Component Primitive
 */
export const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>(
  (
    {
      targetId = "main-content",
      label = "Skip to main content",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        href={`#${targetId}`}
        className={cn(
          "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-toast focus:px-4 focus:py-2.5 focus:bg-accent-primary focus:text-fg-inverse focus:font-sans focus:font-semibold focus:text-sm focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 focus:ring-offset-bg-canvas transition-all duration-fast",
          className
        )}
        {...props}
      >
        {label}
      </a>
    );
  }
);

SkipLink.displayName = "SkipLink";
