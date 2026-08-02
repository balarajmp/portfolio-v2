/**
 * Purpose: Social profile and direct email link group component driven by typed social content.
 * Used By: AppFooter, MobileNavigation, Navigation, Contact Modules.
 * Accessibility: WCAG AA contrast, explicit aria-label per platform link, target="_blank" safety.
 * Notes: Dynamically maps social content entries from src/content/social using Lucide icons.
 */

import * as React from "react";
import { socialLinks } from "@/content/social";
import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Github,
  Mail,
  Linkedin,
  Twitter,
};

export interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Compact icon-only layout size
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * SocialLinks Component Primitive
 */
export const SocialLinks = React.forwardRef<HTMLDivElement, SocialLinksProps>(
  ({ size = "md", className, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-3.5 w-3.5",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    };

    const containerPadding = {
      sm: "p-1.5",
      md: "p-2",
      lg: "p-2.5",
    };

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1.5", className)}
        {...props}
      >
        {socialLinks.map((item) => {
          const IconComponent = iconMap[item.iconName || ""] || Mail;

          return (
            <a
              key={item.id}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "rounded-md text-fg-muted hover:text-fg-primary hover:bg-bg-surface2 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas",
                containerPadding[size]
              )}
              aria-label={item.ariaLabel || `View ${item.label}`}
              title={item.label}
            >
              <IconComponent className={cn(sizeClasses[size], "shrink-0")} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    );
  }
);

SocialLinks.displayName = "SocialLinks";
