/**
 * Purpose: Core interactive action trigger for user events, modal triggers, and primary CTAs.
 * Used By: Navigation Header, Hero CTAs, Project Cards, Command Palette, Contact Forms.
 * Accessibility: WCAG AA contrast, visible focus rings, aria-disabled semantics, loading announcements, and touch target optimization.
 * Notes: Implements Radix Slot pattern (asChild) for seamless link composition and cva variant management.
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm transition-all duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none group",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-primary text-fg-inverse shadow-subtle hover:bg-accent-hover hover:shadow-lg hover:shadow-accent-glow/25 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-bg-surface2 text-fg-primary border border-border-subtle hover:bg-bg-surfaceHover hover:border-border-strong hover:text-fg-primary hover:-translate-y-0.5 active:translate-y-0",
        ghost:
          "bg-transparent text-fg-secondary hover:bg-bg-surfaceHover hover:text-fg-primary",
        outline:
          "bg-transparent text-fg-primary border border-border-default hover:bg-bg-surfaceHover hover:border-border-strong hover:-translate-y-0.5 active:translate-y-0",
        danger:
          "bg-status-error-bg text-status-error-fg border border-status-error-border hover:bg-status-error-fg hover:text-white hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        sm: "h-8 px-3 text-xs gap-1.5 min-w-[32px]",
        md: "h-10 px-4 text-sm gap-2 min-w-[40px]",
        lg: "h-12 px-6 text-base gap-2.5 min-w-[48px]",
        icon: "h-10 w-10 p-0 justify-center shrink-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Optional icon component rendered to the left of button text
   */
  leftIcon?: LucideIcon;
  /**
   * Optional icon component rendered to the right of button text
   */
  rightIcon?: LucideIcon;
  /**
   * Indicates loading state, replacing icons with a spinner and disabling interactions
   */
  loading?: boolean;
  /**
   * Merges component props onto its immediate child element (Radix Slot pattern)
   */
  asChild?: boolean;
}

/**
 * Button Primitive Component
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      loading = false,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    return (
      <Component
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading ? true : undefined}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin shrink-0 text-current" />
            ) : (
              LeftIcon && (
                <LeftIcon className="h-4 w-4 shrink-0 text-current transition-transform duration-fast group-hover:-translate-x-0.5 motion-reduce:transform-none" />
              )
            )}
            {children}
            {!loading && RightIcon && (
              <RightIcon className="h-4 w-4 shrink-0 text-current transition-transform duration-fast group-hover:translate-x-0.5 motion-reduce:transform-none" />
            )}
          </>
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";
