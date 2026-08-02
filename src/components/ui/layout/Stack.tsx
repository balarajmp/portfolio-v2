import * as React from "react";
import { cn } from "@/lib/utils";

export type StackDirection = "col" | "row" | "col-mobile-row-desktop" | "row-mobile-col-desktop";
export type StackGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Flex direction layout
   * @default "col"
   */
  direction?: StackDirection;
  /**
   * Gap spacing between children (maps to 8pt spatial scale)
   * @default 4
   */
  gap?: StackGap;
  /**
   * Cross-axis alignment (`align-items`)
   * @default "stretch"
   */
  align?: StackAlign;
  /**
   * Main-axis distribution (`justify-content`)
   * @default "start"
   */
  justify?: StackJustify;
  /**
   * Whether flex items should wrap when overflowing
   * @default false
   */
  wrap?: boolean;
  /**
   * HTML element type to render
   * @default "div"
   */
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const directionClasses: Record<StackDirection, string> = {
  col: "flex-col",
  row: "flex-row",
  "col-mobile-row-desktop": "flex-col md:flex-row",
  "row-mobile-col-desktop": "flex-row md:flex-col",
};

const gapClasses: Record<StackGap, string> = {
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

const alignClasses: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyClasses: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

/**
 * Stack Primitive
 * Flexbox container abstraction for consistent vertical and horizontal item positioning.
 */
export const Stack: React.FC<StackProps> = ({
  direction = "col",
  gap = 4,
  align = "stretch",
  justify = "start",
  wrap = false,
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "flex",
        directionClasses[direction],
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
