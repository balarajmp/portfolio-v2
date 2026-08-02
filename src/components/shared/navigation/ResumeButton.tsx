/**
 * Purpose: Recruiter-focused Resume PDF download CTA trigger component.
 * Used By: AppHeader, DesktopNavigation, MobileNavigation, Navigation.
 * Accessibility: Explicit aria-label, focusable, screen reader announcement for PDF download.
 * Notes: Uses existing Button primitive with font-mono styling and optional download icon.
 */

import * as React from "react";
import { FileDown } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface ResumeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * PDF Resume URL destination
   * @default "/resume.pdf"
   */
  href?: string;
  /**
   * Button variant style
   * @default "outline"
   */
  variant?: ButtonProps["variant"];
  /**
   * Button size variant
   * @default "sm"
   */
  size?: ButtonProps["size"];
  /**
   * Shows leading download icon
   * @default true
   */
  showIcon?: boolean;
  className?: string;
}

/**
 * ResumeButton Component Primitive
 */
export const ResumeButton = React.forwardRef<HTMLAnchorElement, ResumeButtonProps>(
  (
    {
      href = "/resume.pdf",
      variant = "outline",
      size = "sm",
      showIcon = true,
      className,
      children = "Resume",
      ...props
    },
    ref
  ) => {
    return (
      <Button
        asChild
        variant={variant}
        size={size}
        className={cn(
          "font-mono text-xs border-border-subtle hover:border-border-strong tracking-wide",
          className
        )}
      >
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume PDF document (opens in new tab)"
          {...props}
        >
          {showIcon && <FileDown className="h-3.5 w-3.5 mr-1.5 shrink-0" aria-hidden="true" />}
          <span>{children}</span>
        </a>
      </Button>
    );
  }
);

ResumeButton.displayName = "ResumeButton";
