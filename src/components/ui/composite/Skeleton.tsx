/**
 * Purpose: Content loading placeholder indicating data fetch and rendering status without layout shift.
 * Used By: Async Feature Cards, Telemetry Cards, Architecture Drawer, Code Block Async Loader.
 * Accessibility: Emits role="status" and aria-label="Loading content..." while hiding visual content with aria-hidden.
 * Notes: Offers text, circle, rectangle, and composite card placeholder variants with configurable animation physics.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const skeletonVariants = cva("bg-bg-surface2 shrink-0 border border-border-subtle/40", {
  variants: {
    variant: {
      text: "h-4 w-full rounded",
      circle: "rounded-full aspect-square",
      rectangle: "h-24 w-full rounded-md",
      card: "w-full rounded-lg p-6 bg-bg-surface1 border border-border-subtle",
    },
    animation: {
      pulse: "animate-pulse",
      shimmer:
        "animate-pulse bg-gradient-to-r from-bg-surface2 via-bg-surface3 to-bg-surface2 bg-[length:200%_100%]",
      none: "",
    },
  },
  defaultVariants: {
    variant: "text",
    animation: "pulse",
  },
});

export type SkeletonVariant = "text" | "circle" | "rectangle" | "card";
export type SkeletonAnimation = "pulse" | "shimmer" | "none";

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /**
   * Placeholder variant style
   * @default "text"
   */
  variant?: SkeletonVariant;
  /**
   * Loading animation effect type
   * @default "pulse"
   */
  animation?: SkeletonAnimation;
  /**
   * Explicit custom width (e.g. "120px", "100%", 48)
   */
  width?: string | number;
  /**
   * Explicit custom height (e.g. "20px", "4rem", 20)
   */
  height?: string | number;
  /**
   * Number of lines to generate when variant is "text"
   * @default 1
   */
  lines?: number;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = "text",
      animation = "pulse",
      width,
      height,
      lines = 1,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const inlineStyle: React.CSSProperties = {
      ...(width !== undefined
        ? { width: typeof width === "number" ? `${width}px` : width }
        : {}),
      ...(height !== undefined
        ? { height: typeof height === "number" ? `${height}px` : height }
        : {}),
      ...style,
    };

    // Render composite Card skeleton layout if variant is "card"
    if (variant === "card") {
      return (
        <div
          ref={ref}
          className={cn(skeletonVariants({ variant: "card", animation, className }))}
          style={inlineStyle}
          role="status"
          aria-label="Loading card content..."
          {...props}
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 w-2/3">
              <div className="h-10 w-10 rounded-md bg-bg-surface3 shrink-0" />
              <div className="flex flex-col gap-2 w-full">
                <div className="h-4 w-3/4 rounded bg-bg-surface3" />
                <div className="h-3 w-1/2 rounded bg-bg-surface3" />
              </div>
            </div>
            <div className="h-6 w-16 rounded-full bg-bg-surface3" />
          </div>

          <div className="space-y-2 my-4">
            <div className="h-3.5 w-full rounded bg-bg-surface3" />
            <div className="h-3.5 w-5/6 rounded bg-bg-surface3" />
            <div className="h-3.5 w-2/3 rounded bg-bg-surface3" />
          </div>

          <div className="flex items-center gap-2 pt-4 border-t border-border-subtle/50">
            <div className="h-6 w-14 rounded-full bg-bg-surface3" />
            <div className="h-6 w-14 rounded-full bg-bg-surface3" />
            <div className="h-6 w-14 rounded-full bg-bg-surface3" />
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    // Render multi-line text skeleton if variant is "text" and lines > 1
    if (variant === "text" && lines > 1) {
      return (
        <div
          className="flex flex-col gap-2 w-full"
          role="status"
          aria-label="Loading text content..."
        >
          {Array.from({ length: lines }).map((_, index) => {
            // Make last line slightly shorter for text natural flow aesthetic
            const lineStyle =
              index === lines - 1 && lines > 1
                ? { ...inlineStyle, width: inlineStyle.width || "70%" }
                : inlineStyle;

            return (
              <div
                key={index}
                className={cn(skeletonVariants({ variant: "text", animation, className }))}
                style={lineStyle}
              />
            );
          })}
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, animation, className }))}
        style={inlineStyle}
        role="status"
        aria-label="Loading..."
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

Skeleton.displayName = "Skeleton";
