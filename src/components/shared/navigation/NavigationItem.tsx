/**
 * Purpose: Single navigation item link component with active route highlighting, shortcut indicators, and icon support.
 * Used By: DesktopNavigation, MobileNavigation.
 * Accessibility: Sets aria-current="page" on active route, high contrast text tokens, focus rings, screen reader labels.
 * Notes: Dynamically maps Lucide icons and keyboard shortcut badges.
 */

import * as React from "react";
import type { NavItem } from "@/types";
import { Briefcase, Cpu, FolderGit2, Home, Mail, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Home,
  FolderGit2,
  Briefcase,
  Cpu,
  Mail,
};

export interface NavigationItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Typed NavItem configuration contract
   */
  item: NavItem;
  /**
   * Indicates if this link matches the current active route/hash
   * @default false
   */
  active?: boolean;
  /**
   * Layout variant mode
   * @default "desktop"
   */
  variant?: "desktop" | "mobile";
  /**
   * Displays keyboard shortcut badge next to link label
   * @default false
   */
  showShortcut?: boolean;
  /**
   * Optional click handler (e.g., closing mobile drawer)
   */
  onSelect?: () => void;
  className?: string;
}

/**
 * NavigationItem Component Primitive
 */
export const NavigationItem = React.forwardRef<
  HTMLAnchorElement,
  NavigationItemProps
>(
  (
    {
      item,
      active = false,
      variant = "desktop",
      showShortcut = false,
      onSelect,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const IconComponent = item.iconName ? iconMap[item.iconName] : undefined;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (onSelect) onSelect();
    };

    if (variant === "mobile") {
      return (
        <a
          ref={ref}
          href={item.url}
          onClick={handleClick}
          aria-current={active ? "page" : undefined}
          aria-label={item.ariaLabel || item.label}
          className={cn(
            "flex items-center justify-between px-3 py-2.5 rounded-md font-sans text-sm transition-colors duration-fast select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            active
              ? "bg-accent-subtle/50 text-accent-hover font-semibold border-l-2 border-accent-primary pl-2.5"
              : "text-fg-secondary hover:text-fg-primary hover:bg-bg-surface2",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {IconComponent && (
              <IconComponent
                className={cn(
                  "h-4 w-4 shrink-0",
                  active ? "text-accent-primary" : "text-fg-muted"
                )}
                aria-hidden="true"
              />
            )}
            <span>{item.label}</span>
          </div>

          {showShortcut && item.shortcut && (
            <kbd className="font-mono text-[10px] text-fg-muted bg-bg-surface2 px-1.5 py-0.5 rounded border border-border-subtle">
              {item.shortcut}
            </kbd>
          )}
        </a>
      );
    }

    // Desktop variant
    return (
      <a
        ref={ref}
        href={item.url}
        onClick={handleClick}
        aria-current={active ? "page" : undefined}
        aria-label={item.ariaLabel || item.label}
        className={cn(
          "relative py-1 font-sans text-xs font-medium transition-colors duration-fast select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded-sm",
          active
            ? "text-fg-primary font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-accent-primary after:rounded-full"
            : "text-fg-secondary hover:text-fg-primary",
          className
        )}
        {...props}
      >
        <span>{item.label}</span>
      </a>
    );
  }
);

NavigationItem.displayName = "NavigationItem";
