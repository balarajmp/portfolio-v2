/**
 * Purpose: Categorical metadata and status pill indicator primitive.
 * Used By: Tech stack tags, experience role indicators, certification labels, live project status.
 * Accessibility: Preserves WCAG AA contrast against background surfaces and provides text alternatives for status colors.
 * Notes: Offers color token variants (default, success, warning, error, info, accent) and optional status indicator dot.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide border transition-colors shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-bg-surface2 text-fg-secondary border-border-subtle hover:border-border-strong",
        accent:
          "bg-accent-subtle text-accent-hover border-accent-primary/30",
        success:
          "bg-status-success-bg text-status-success-fg border-status-success-border",
        warning:
          "bg-status-warning-bg text-status-warning-fg border-status-warning-border",
        error:
          "bg-status-error-bg text-status-error-fg border-status-error-border",
        info:
          "bg-status-info-bg text-status-info-fg border-status-info-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Optional leading icon reference
   */
  icon?: LucideIcon;
  /**
   * Shows a small colored status dot to the left of the label text
   * @default false
   */
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Badge Primitive Component
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = "default", icon: IconComponent, dot = false, children, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      >
        {dot && (
          <span
            className="h-1.5 w-1.5 rounded-full bg-current shrink-0 animate-pulse"
            aria-hidden="true"
          />
        )}
        {IconComponent && <IconComponent className="h-3 w-3 shrink-0" />}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
