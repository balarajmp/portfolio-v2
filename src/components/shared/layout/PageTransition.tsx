/**
 * Purpose: Architectural layout wrapper for page and route transitions.
 * Used By: AppShell, AppMain, Next.js Layouts.
 * Accessibility: Preserves DOM tree accessibility and focus management across page transitions.
 * Notes: Architectural stub prepared for future Framer Motion animation hooks without introducing heavy runtime animation overhead now.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

/**
 * PageTransition Architectural Wrapper Primitive
 */
export const PageTransition = React.forwardRef<HTMLDivElement, PageTransitionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full flex-1 min-h-0 transition-opacity duration-normal ease-standard", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PageTransition.displayName = "PageTransition";
