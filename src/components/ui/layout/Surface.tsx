import * as React from "react";
import { cn } from "@/lib/utils";

export type SurfaceLevel = 0 | 1 | 2 | 3;
export type SurfaceRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface SurfaceProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Surface background elevation level
   * - `0`: Flat canvas background (`#09090b`)
   * - `1`: Card container background (`#121215`)
   * - `2`: Elevated popover background (`#1c1c21`)
   * - `3`: Modal / dialog background (`#27272a`)
   * @default 1
   */
  level?: SurfaceLevel;
  /**
   * Whether to apply a 1px subtle separation border
   * @default true
   */
  outlined?: boolean;
  /**
   * Enables glassmorphism background blur and semi-transparent overlay
   * @default false
   */
  glass?: boolean;
  /**
   * Enables subtle hover elevation lift, border tint change, and cursor pointer
   * @default false
   */
  interactive?: boolean;
  /**
   * Border radius curvature preset
   * @default "lg"
   */
  rounded?: SurfaceRounded;
  /**
   * HTML element type to render
   * @default "div"
   */
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

const levelClasses: Record<SurfaceLevel, string> = {
  0: "bg-bg-canvas text-fg-primary",
  1: "bg-bg-surface1 text-fg-primary",
  2: "bg-bg-surface2 text-fg-primary",
  3: "bg-bg-surface3 text-fg-primary",
};

const roundedClasses: Record<SurfaceRounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

/**
 * Surface Primitive
 * Elevation container defining background tokens, borders, glassmorphism, and hover states.
 */
export const Surface: React.FC<SurfaceProps> = ({
  level = 1,
  outlined = true,
  glass = false,
  interactive = false,
  rounded = "lg",
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "relative transition-all duration-normal ease-standard",
        roundedClasses[rounded],
        glass ? "bg-bg-glass backdrop-blur-md border border-border-glass" : levelClasses[level],
        outlined && !glass && "border border-border-subtle",
        interactive &&
          "cursor-pointer hover:bg-bg-surfaceHover hover:border-border-strong hover:-translate-y-0.5 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
