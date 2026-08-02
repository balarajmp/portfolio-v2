/**
 * Purpose: Primary semantic <main> content container for the application shell layout.
 * Used By: AppShell, Global Layout.
 * Accessibility: Semantic <main id="main-content"> landmark targetable by SkipLink.
 * Notes: Flexible max-width container wrapper option (container: true/false).
 */

import * as React from "react";
import { Container, type ContainerSize } from "@/components/ui/layout/Container";
import { cn } from "@/lib/utils";

export interface AppMainProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Wraps main content inside a max-width Container layout primitive
   * @default true
   */
  container?: boolean;
  /**
   * Container width boundary preset when container is enabled
   * @default "default"
   */
  containerSize?: ContainerSize;
  /**
   * Main landmark element ID target matching SkipLink
   * @default "main-content"
   */
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * AppMain Component Primitive
 */
export const AppMain = React.forwardRef<HTMLElement, AppMainProps>(
  (
    {
      container = true,
      containerSize = "default",
      id = "main-content",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <main
        ref={ref}
        id={id}
        tabIndex={-1}
        className={cn("flex-1 w-full outline-none py-6 sm:py-10", className)}
        {...props}
      >
        {container ? (
          <Container size={containerSize}>{children}</Container>
        ) : (
          children
        )}
      </main>
    );
  }
);

AppMain.displayName = "AppMain";
