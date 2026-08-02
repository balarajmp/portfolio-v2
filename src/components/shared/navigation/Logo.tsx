/**
 * Purpose: Portfolio brand mark logo link primitive linking to homepage.
 * Used By: AppHeader, Navigation, MobileNavigation, AppFooter.
 * Accessibility: Semantic <a> tag with explicit aria-label, focus ring outline, keyboard operable.
 * Notes: Combines Obsidian Violet accent badge with responsive title/subtitle text typography.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Compact mode hides subtitle text on small screens
   * @default false
   */
  compact?: boolean;
  className?: string;
}

/**
 * Logo Component Primitive
 */
export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ compact = false, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href="/"
        className={cn(
          "flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas rounded-md transition-colors",
          className
        )}
        aria-label="Engineering Portfolio Home"
        {...props}
      >
        <div className="h-8 w-8 rounded-md bg-accent-primary text-fg-inverse flex items-center justify-center font-mono font-bold text-sm shadow-subtle group-hover:scale-105 transition-transform duration-fast shrink-0">
          EP
        </div>
        <div className="flex flex-col select-none">
          <span className="font-sans font-semibold text-sm text-fg-primary tracking-tight group-hover:text-accent-hover transition-colors leading-tight">
            Portfolio
          </span>
          {!compact && (
            <span className="font-mono text-[10px] text-fg-muted uppercase tracking-widest leading-none">
              Engineering
            </span>
          )}
        </div>
      </a>
    );
  }
);

Logo.displayName = "Logo";
