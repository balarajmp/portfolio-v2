/**
 * Purpose: Accessible wrapper for Lucide React vector icons with size and color token integration.
 * Used By: Button, Badge, Chip, Link, Navbar, Cards, and global interactive components.
 * Accessibility: Renders aria-hidden="true" by default for decorative icons; supports aria-label when meaningful.
 * Notes: Ensures uniform icon scaling across the application without inline sizing or hardcoded color values.
 */

import * as React from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconSize = 16 | 20 | 24 | 32;
export type IconColor =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "inherit";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The Lucide icon component reference
   */
  icon: LucideIcon;
  /**
   * Pixel dimensions preset (16, 20, 24, 32)
   * @default 20
   */
  size?: IconSize;
  /**
   * Design token color variant
   * @default "inherit"
   */
  color?: IconColor;
  className?: string;
  "aria-label"?: string;
}

const colorClasses: Record<IconColor, string> = {
  primary: "text-fg-primary",
  secondary: "text-fg-secondary",
  muted: "text-fg-muted",
  accent: "text-accent-primary",
  success: "text-status-success-fg",
  warning: "text-status-warning-fg",
  error: "text-status-error-fg",
  info: "text-status-info-fg",
  inherit: "text-current",
};

/**
 * Icon Primitive Component
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      icon: IconComponent,
      size = 20,
      color = "inherit",
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDecorative = !ariaLabel;

    return (
      <IconComponent
        ref={ref}
        size={size}
        aria-hidden={isDecorative ? true : undefined}
        aria-label={ariaLabel}
        role={ariaLabel ? "img" : undefined}
        className={cn(
          "shrink-0 transition-colors duration-normal",
          colorClasses[color],
          className
        )}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";
