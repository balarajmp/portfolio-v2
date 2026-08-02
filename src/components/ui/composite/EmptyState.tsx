/**
 * Purpose: Centered visual placeholder container for zero-data states, missing search results, or empty lists.
 * Used By: Filtered Project Catalog, Command Palette Search Fallback, Telemetry Event Log, ADR List.
 * Accessibility: Preserves heading hierarchy (h3/h4), accessible contrast for empty icons, focused action triggers.
 * Notes: Features clean obsidian border enclosure with optional dual primary & secondary CTA button triggers.
 */

import * as React from "react";
import { type LucideIcon, Inbox } from "lucide-react";
import { Button, type ButtonProps } from "../Button";
import { cn } from "@/lib/utils";

export interface EmptyStateAction {
  /**
   * Action button text label
   */
  label: string;
  /**
   * Click handler function
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Optional icon rendered inside the button
   */
  icon?: LucideIcon;
  /**
   * Button variant override
   */
  variant?: ButtonProps["variant"];
  /**
   * Optional disabled state
   */
  disabled?: boolean;
}

export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Icon component or custom ReactNode displayed in header badge
   */
  icon?: LucideIcon | React.ReactNode;
  /**
   * Main heading title for the empty state
   */
  title: React.ReactNode;
  /**
   * Explanatory caption or guidance text for user next steps
   */
  description?: React.ReactNode;
  /**
   * Primary call to action trigger (ReactNode or action object)
   */
  primaryAction?: React.ReactNode | EmptyStateAction;
  /**
   * Secondary call to action trigger (ReactNode or action object)
   */
  secondaryAction?: React.ReactNode | EmptyStateAction;
  /**
   * Border style variant
   * @default "subtle"
   */
  borderStyle?: "subtle" | "dashed" | "none";
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      icon,
      title,
      description,
      primaryAction,
      secondaryAction,
      borderStyle = "subtle",
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Render icon in centered elevated badge
    const renderIcon = () => {
      if (!icon) {
        return (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-surface2 border border-border-subtle text-fg-muted mb-4">
            <Inbox className="h-6 w-6" aria-hidden="true" />
          </div>
        );
      }

      if (typeof icon === "function" || (typeof icon === "object" && "render" in icon)) {
        const IconComponent = icon as LucideIcon;
        return (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-surface2 border border-border-subtle text-accent-primary mb-4 shadow-subtle">
            <IconComponent className="h-6 w-6" aria-hidden="true" />
          </div>
        );
      }

      return <div className="mb-4">{icon}</div>;
    };

    // Helper renderer for action triggers
    const renderAction = (action: React.ReactNode | EmptyStateAction, defaultVariant: ButtonProps["variant"]) => {
      if (!action) return null;

      if (React.isValidElement(action)) {
        return action;
      }

      const actionObj = action as EmptyStateAction;
      const IconComp = actionObj.icon;

      return (
        <Button
          variant={actionObj.variant || defaultVariant}
          onClick={actionObj.onClick}
          disabled={actionObj.disabled}
          leftIcon={IconComp}
        >
          {actionObj.label}
        </Button>
      );
    };

    const borderClassMap = {
      subtle: "border border-border-subtle",
      dashed: "border border-dashed border-border-strong",
      none: "",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-xl bg-bg-surface1 text-fg-primary max-w-md mx-auto my-4 transition-all duration-normal",
          borderClassMap[borderStyle],
          className
        )}
        {...props}
      >
        {renderIcon()}

        <h3 className="font-sans text-lg font-semibold tracking-tight text-fg-primary mb-1.5">
          {title}
        </h3>

        {description && (
          <p className="font-sans text-sm text-fg-secondary leading-relaxed max-w-sm mb-6">
            {description}
          </p>
        )}

        {children}

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {renderAction(primaryAction, "primary")}
            {renderAction(secondaryAction, "secondary")}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
