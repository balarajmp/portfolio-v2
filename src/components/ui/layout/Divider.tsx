import * as React from "react";
import { cn } from "@/lib/utils";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "muted" | "default" | "strong" | "accent";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Layout direction of the divider line
   * @default "horizontal"
   */
  orientation?: DividerOrientation;
  /**
   * Border color intensity variant
   * @default "muted"
   */
  variant?: DividerVariant;
  /**
   * Optional text or node rendered in the center of a horizontal divider
   */
  label?: React.ReactNode;
  className?: string;
}

const variantClasses: Record<DividerVariant, string> = {
  muted: "border-border-subtle",
  default: "border-border-default",
  strong: "border-border-strong",
  accent: "border-accent-primary",
};

/**
 * Divider Primitive
 * Accessible separator component for visual grouping and content demarcation.
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "muted",
  label,
  className,
  ...props
}) => {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "inline-block h-full w-px self-stretch border-l",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn("flex w-full items-center gap-4 my-4", className)}
        {...props}
      >
        <div className={cn("h-px flex-1 border-t", variantClasses[variant])} />
        <span className="text-xs font-mono font-medium text-fg-muted uppercase tracking-wider">
          {label}
        </span>
        <div className={cn("h-px flex-1 border-t", variantClasses[variant])} />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        "my-4 w-full border-t border-b-0 border-x-0",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
};
