/**
 * Purpose: Global navigation master component composing Logo, DesktopNavigation, MobileMenuButton, and MobileNavigation.
 * Used By: AppShell, Root Layout.
 * Accessibility: WCAG AA landmark hierarchy, responsive mobile navigation drawer, aria-current active route highlighting.
 * Notes: Reads all navigation links directly from src/content/navigation and wraps state in NavigationProvider.
 */

import * as React from "react";
import { AppHeader } from "@/components/shared/layout/AppHeader";
import { NavigationProvider } from "./NavigationContext";
import { Logo } from "./Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileNavigation } from "./MobileNavigation";
import { ResumeButton } from "./ResumeButton";
import { cn } from "@/lib/utils";

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

/**
 * Navigation Component Primitive
 */
export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, ...props }, ref) => {
    return (
      <NavigationProvider>
        <AppHeader
          ref={ref}
          logo={<Logo />}
          nav={<DesktopNavigation />}
          actions={
            <div className="flex items-center gap-2 sm:gap-3">
              <ResumeButton size="sm" className="hidden sm:inline-flex" />
              <MobileMenuButton />
            </div>
          }
          className={cn("w-full", className)}
          {...props}
        />
        <MobileNavigation />
      </NavigationProvider>
    );
  }
);

Navigation.displayName = "Navigation";
