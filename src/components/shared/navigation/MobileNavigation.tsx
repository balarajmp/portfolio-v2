"use client";

/**
 * Purpose: Accessible slide-over drawer navigation for mobile viewport sizes.
 * Used By: Navigation, AppHeader.
 * Accessibility: Role="dialog", aria-modal="true", keyboard ESC dismissal, focus containment, backdrop click closure.
 * Notes: Reads mobile links from src/content/navigation and manages focus restoration to trigger button.
 */

import * as React from "react";
import { navigation } from "@/content/navigation";
import { useNavigationContext } from "./NavigationContext";
import { NavigationItem } from "./NavigationItem";
import { Logo } from "./Logo";
import { ResumeButton } from "./ResumeButton";
import { SocialLinks } from "./SocialLinks";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MobileNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * MobileNavigation Component Primitive
 */
export const MobileNavigation = React.forwardRef<
  HTMLDivElement,
  MobileNavigationProps
>(({ className, ...props }, ref) => {
  const { isOpen, close } = useNavigationContext();
  const drawerRef = React.useRef<HTMLDivElement>(null);
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

  // Focus management when drawer opens
  React.useEffect(() => {
    if (isOpen) {
      // Focus drawer container on open for keyboard containment
      drawerRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isItemActive = (url: string) => {
    if (url === "/" && (!activeHash || activeHash === "/")) return true;
    if (url.startsWith("/#") && activeHash === url.replace("/", "")) return true;
    return false;
  };

  return (
    <div className="md:hidden">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 z-modal bg-black/60 backdrop-blur-sm transition-opacity duration-fast"
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div
        ref={ref}
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        tabIndex={-1}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-modal w-[280px] sm:w-[320px] bg-bg-surface1 border-l border-border-subtle p-6 flex flex-col justify-between shadow-2xl overflow-y-auto outline-none transition-transform duration-normal ease-standard",
          className
        )}
        {...props}
      >
        {/* Drawer Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
            <Logo compact onClick={close} />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={close}
              aria-label="Close navigation menu"
              className="p-1 text-fg-muted hover:text-fg-primary"
            >
              <X className="h-5 w-5 shrink-0" aria-hidden="true" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav role="navigation" aria-label="Mobile Drawer Navigation" className="flex flex-col gap-1.5">
            {navigation.mobileNav.map((item) => (
              <NavigationItem
                key={item.id}
                item={item}
                active={isItemActive(item.url)}
                variant="mobile"
                onSelect={close}
              />
            ))}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-border-subtle flex flex-col gap-4">
          <ResumeButton variant="primary" size="md" className="w-full justify-center" onClick={close} />
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider">
              Social Links
            </span>
            <SocialLinks size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
});

MobileNavigation.displayName = "MobileNavigation";
