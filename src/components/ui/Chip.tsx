"use client";

/**
 * Purpose: Interactive tag component for filter controls, topic selection, and dismissible pills.
 * Used By: Skill filters, search query parameters, project tag toggles.
 * Accessibility: Keyboard interactive (Space/Enter to select, Backspace/Delete to dismiss), keyboard focus ring, aria-pressed for toggle state.
 * Notes: Offers selectable state toggle and optional dismissible close icon button.
 */

import * as React from "react";
import { X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Indicates whether the chip is currently active/selected
   * @default false
   */
  selected?: boolean;
  /**
   * Optional dismiss removal callback. If provided, renders an interactive 'X' close button.
   */
  onRemove?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * Leading icon reference
   */
  icon?: LucideIcon;
  /**
   * Whether chip responds to hover and click events
   * @default true
   */
  interactive?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Chip Primitive Component
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      selected = false,
      onRemove,
      icon: IconComponent,
      interactive = true,
      disabled = false,
      onClick,
      onKeyDown,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;
      if ((e.key === "Enter" || e.key === " ") && onClick) {
        e.preventDefault();
        onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      } else if ((e.key === "Delete" || e.key === "Backspace") && onRemove) {
        e.preventDefault();
        onRemove(e);
      }
      onKeyDown?.(e);
    };

    return (
      <div
        ref={ref}
        role={interactive ? "button" : undefined}
        tabIndex={interactive && !disabled ? 0 : undefined}
        aria-pressed={interactive ? selected : undefined}
        aria-disabled={disabled ? true : undefined}
        onClick={disabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-normal ease-standard select-none shrink-0 border",
          selected
            ? "bg-accent-primary text-fg-inverse border-accent-primary shadow-subtle"
            : "bg-bg-surface1 text-fg-secondary border-border-subtle hover:bg-bg-surface2 hover:text-fg-primary hover:border-border-strong",
          interactive && !disabled && "cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-1 focus-visible:ring-offset-bg-canvas",
          disabled && "opacity-50 pointer-events-none",
          className
        )}
        {...props}
      >
        {IconComponent && <IconComponent className="h-3.5 w-3.5 shrink-0" />}
        <span>{children}</span>
        {onRemove && (
          <button
            type="button"
            tabIndex={-1}
            aria-label="Remove item"
            onClick={(e) => {
              e.stopPropagation();
              if (!disabled) onRemove(e);
            }}
            className={cn(
              "ml-0.5 rounded-full p-0.5 hover:bg-black/20 focus:outline-none transition-colors",
              selected ? "text-fg-inverse" : "text-fg-muted hover:text-fg-primary"
            )}
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = "Chip";
