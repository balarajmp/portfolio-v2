"use client";

/**
 * Purpose: Accessible hamburger and close toggle button trigger for mobile drawer navigation.
 * Used By: Navigation, AppHeader.
 * Accessibility: Sets aria-expanded, aria-controls="mobile-navigation-drawer", aria-label, keyboard focus ring.
 * Notes: Integrates with NavigationContext and stores trigger element reference for focus restoration.
 */

import * as React from "react";
import { Menu, X } from "lucide-react";
import { useNavigationContext } from "./NavigationContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface MobileMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

/**
 * MobileMenuButton Component Primitive
 */
export const MobileMenuButton = React.forwardRef<
  HTMLButtonElement,
  MobileMenuButtonProps
>(({ className, ...props }, ref) => {
  const { isOpen, toggle, triggerRef } = useNavigationContext();

  // Combine external ref with context triggerRef
  const setRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      (triggerRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      }
    },
    [ref, triggerRef]
  );

  return (
    <Button
      ref={setRef}
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation-drawer"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className={cn(
        "md:hidden p-2 text-fg-secondary hover:text-fg-primary focus-visible:ring-border-focus",
        className
      )}
      {...props}
    >
      {isOpen ? (
        <X className="h-5 w-5 shrink-0" aria-hidden="true" />
      ) : (
        <Menu className="h-5 w-5 shrink-0" aria-hidden="true" />
      )}
    </Button>
  );
});

MobileMenuButton.displayName = "MobileMenuButton";
