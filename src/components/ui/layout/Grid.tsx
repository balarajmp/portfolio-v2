import * as React from "react";
import { cn } from "@/lib/utils";

export type GridCols =
  | 1
  | 2
  | 3
  | 4
  | 6
  | 12
  | "1-mobile-2-tablet-3-desktop"
  | "1-mobile-2-desktop"
  | "1-mobile-3-desktop"
  | "1-mobile-4-desktop";

export type GridGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
export type GridAlign = "start" | "center" | "end" | "stretch";

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Column layout distribution preset
   * @default 1
   */
  cols?: GridCols;
  /**
   * Grid gap spacing preset
   * @default 6
   */
  gap?: GridGap;
  /**
   * Vertical item alignment inside grid cells
   * @default "stretch"
   */
  align?: GridAlign;
  /**
   * HTML element type to render
   * @default "div"
   */
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const colsClasses: Record<GridCols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-12",
  "1-mobile-2-tablet-3-desktop": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  "1-mobile-2-desktop": "grid-cols-1 lg:grid-cols-2",
  "1-mobile-3-desktop": "grid-cols-1 lg:grid-cols-3",
  "1-mobile-4-desktop": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const gapClasses: Record<GridGap, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
};

const alignClasses: Record<GridAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

/**
 * Grid Primitive
 * Responsive CSS Grid abstraction for structured multi-column layouts.
 */
export const Grid: React.FC<GridProps> = ({
  cols = 1,
  gap = 6,
  align = "stretch",
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "grid",
        colsClasses[cols],
        gapClasses[gap],
        alignClasses[align],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
