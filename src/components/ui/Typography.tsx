/**
 * Purpose: Universal text hierarchy primitive enforcing the Obsidian Violet typographic scale.
 * Used By: Page headers, project titles, metric callouts, body copy, code blocks, section descriptions.
 * Accessibility: Maps variants to semantic HTML tags (h1-h4, p, code, span) maintaining WCAG AAA contrast ratios.
 * Notes: Offers fully configurable tag override (as prop) and font-family selection.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-fg-primary tracking-normal", {
  variants: {
    variant: {
      display:
        "font-sans text-4xl sm:text-5xl font-bold tracking-tighter leading-tight text-fg-primary",
      h1: "font-sans text-3xl sm:text-4xl font-bold tracking-tighter leading-tight text-fg-primary",
      h2: "font-sans text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-fg-primary",
      h3: "font-sans text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-fg-primary",
      h4: "font-sans text-base sm:text-lg font-medium leading-normal text-fg-primary",
      body: "font-sans text-base leading-relaxed text-fg-primary",
      lead: "font-sans text-lg sm:text-xl leading-relaxed text-fg-secondary font-normal",
      small: "font-sans text-sm leading-normal text-fg-secondary",
      caption: "font-sans text-xs leading-normal text-fg-muted tracking-wide",
      code: "font-mono text-xs sm:text-sm bg-bg-surface2 px-1.5 py-0.5 rounded text-accent-hover border border-border-subtle",
      muted: "font-sans text-sm leading-normal text-fg-muted",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type VariantType = NonNullable<VariantProps<typeof typographyVariants>["variant"]>;

const defaultTagMap: Record<VariantType, React.ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  lead: "p",
  small: "p",
  caption: "span",
  code: "code",
  muted: "span",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  /**
   * Typographic hierarchy variant preset
   * @default "body"
   */
  variant?: VariantType;
  /**
   * HTML element tag override
   */
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

/**
 * Typography Primitive Component
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "body", as, children, ...props }, ref) => {
    const Component = as || defaultTagMap[variant] || "p";

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";
