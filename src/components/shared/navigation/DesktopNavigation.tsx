"use client";

/**
 * Purpose: Desktop navigation bar reading header links from src/content/navigation with active route detection.
 * Used By: Navigation, AppHeader.
 * Accessibility: Semantic <nav aria-label="Primary Desktop Navigation">, active route aria-current, keyboard navigation.
 * Notes: Dynamically tracks current hash (#projects, #experience, #skills, #about) to highlight active route link.
 */

import * as React from "react";
import { navigation } from "@/content/navigation";
import { NavigationItem } from "./NavigationItem";
import { ResumeButton } from "./ResumeButton";
import { SocialLinks } from "./SocialLinks";
import { CommandTrigger } from "@/components/features/command";
import { cn } from "@/lib/utils";

export interface DesktopNavigationProps
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * Shows Resume CTA button inside desktop nav
   * @default true
   */
  showResume?: boolean;
  /**
   * Shows SocialLinks group inside desktop nav
   * @default true
   */
  showSocial?: boolean;
  className?: string;
}

/**
 * DesktopNavigation Component Primitive
 */
export const DesktopNavigation = React.forwardRef<
  HTMLElement,
  DesktopNavigationProps
>(({ showResume = true, showSocial = true, className, ...props }, ref) => {
  const [activeHash, setActiveHash] = React.useState<string>("");

  // Track active window location hash on client
  React.useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "/");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isItemActive = (url: string) => {
    if (url === "/" && (!activeHash || activeHash === "/")) return true;
    if (url.startsWith("/#") && activeHash === url.replace("/", "")) return true;
    return false;
  };

  return (
    <nav
      ref={ref}
      role="navigation"
      aria-label="Primary Desktop Navigation"
      className={cn("hidden md:flex items-center gap-8", className)}
      {...props}
    >
      {/* Navigation Items List */}
      <div className="flex items-center gap-6">
        {navigation.headerNav.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            active={isItemActive(item.url)}
            variant="desktop"
          />
        ))}
      </div>

      {/* Action triggers */}
      <div className="flex items-center gap-3 pl-4 border-l border-border-subtle">
        <CommandTrigger />
        {showSocial && <SocialLinks size="sm" />}
        {showResume && <ResumeButton size="sm" />}
      </div>
    </nav>
  );
});

DesktopNavigation.displayName = "DesktopNavigation";
