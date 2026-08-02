import * as React from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerSize } from "./Container";

export type SectionSpacing = "none" | "sm" | "md" | "lg";
export type SectionBackground = "transparent" | "canvas" | "surface1" | "surface2" | "glass";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Vertical padding spacing preset
   * - `none`: py-0
   * - `sm`: py-8 lg:py-12 (32px / 48px)
   * - `md`: py-16 lg:py-24 (64px / 96px) — Standard section spacing
   * - `lg`: py-24 lg:py-32 (96px / 128px) — Featured landing section spacing
   * @default "md"
   */
  spacing?: SectionSpacing;
  /**
   * Surface background color variant
   * @default "transparent"
   */
  background?: SectionBackground;
  /**
   * Optional automatic Container wrapper size
   * If omitted, children are rendered directly without a Container wrapper.
   */
  containerSize?: ContainerSize;
  /**
   * Unique section ID for anchor scrolling and ARIA compliance
   */
  id?: string;
  /**
   * Accessible label for screen readers
   */
  "aria-label"?: string;
  "aria-labelledby"?: string;
  /**
   * HTML element type to render
   * @default "section"
   */
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: "py-0",
  sm: "py-8 lg:py-12",
  md: "py-16 lg:py-24",
  lg: "py-24 lg:py-32",
};

const backgroundClasses: Record<SectionBackground, string> = {
  transparent: "bg-transparent",
  canvas: "bg-bg-canvas",
  surface1: "bg-bg-surface1",
  surface2: "bg-bg-surface2",
  glass: "bg-bg-glass backdrop-blur-md border-y border-border-glass",
};

/**
 * Section Primitive
 * Provides structural vertical spacing, surface background tokens, and semantic landmark wrapping.
 */
export const Section: React.FC<SectionProps> = ({
  spacing = "md",
  background = "transparent",
  containerSize,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  as: Component = "section",
  className,
  children,
  ...props
}) => {
  const content = containerSize ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative w-full overflow-hidden",
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
};
