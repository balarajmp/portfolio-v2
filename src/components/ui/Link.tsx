/**
 * Purpose: Accessible navigation anchor primitive for internal Next.js client routing and external web links.
 * Used By: Global Header, Footer navigation, Project case study links, Social icons, Inline text citations.
 * Accessibility: Automatically appends rel="noopener noreferrer" to external links and provides screen reader indicators.
 * Notes: Seamlessly wraps Next.js Link for internal routes while providing custom underline and icon variants.
 */

import * as React from "react";
import NextLink from "next/link";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type LinkVariant = "default" | "muted" | "accent";
export type LinkUnderline = "always" | "hover" | "none";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  /**
   * Forces external link behavior (target="_blank", rel="noopener noreferrer")
   * If omitted, external state is automatically detected when href starts with "http" or "//".
   */
  external?: boolean;
  /**
   * Renders a small diagonal external arrow icon next to external links
   * @default true for external links
   */
  showExternalIcon?: boolean;
  /**
   * Color token variant preset
   * @default "default"
   */
  variant?: LinkVariant;
  /**
   * Underline styling behavior
   * @default "hover"
   */
  underline?: LinkUnderline;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<LinkVariant, string> = {
  default: "text-fg-primary hover:text-accent-hover",
  muted: "text-fg-secondary hover:text-fg-primary",
  accent: "text-accent-primary hover:text-accent-hover font-medium",
};

const underlineClasses: Record<LinkUnderline, string> = {
  always: "underline underline-offset-4 decoration-current",
  hover: "hover:underline hover:underline-offset-4 hover:decoration-current",
  none: "no-underline",
};

/**
 * Link Primitive Component
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      external,
      showExternalIcon = true,
      variant = "default",
      underline = "hover",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isExternal =
      external !== undefined
        ? external
        : href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//");

    const commonClasses = cn(
      "inline-flex items-center gap-1 transition-colors duration-normal ease-standard rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-1 focus-visible:ring-offset-bg-canvas",
      variantClasses[variant],
      underlineClasses[underline],
      className
    );

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={commonClasses}
          {...props}
        >
          {children}
          {showExternalIcon && (
            <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden="true" />
          )}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      );
    }

    return (
      <NextLink ref={ref} href={href} className={commonClasses} {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
