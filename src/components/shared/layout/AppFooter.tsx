/**
 * Purpose: Application footer shell bar featuring copyright notice, social links placeholder, and version telemetry.
 * Used By: AppShell, Global Layout.
 * Accessibility: Semantic <footer role="contentinfo"> landmark with accessible external links and contrast ratios.
 * Notes: Features Obsidian surface1 background token with top border separation.
 */

import * as React from "react";
import { Container } from "@/components/ui/layout/Container";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AppFooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Copyright notice string or node override
   */
  copyright?: React.ReactNode;
  /**
   * Social links component slot override
   */
  social?: React.ReactNode;
  /**
   * Version telemetry / tech stack indicator override
   */
  version?: React.ReactNode;
  className?: string;
}

/**
 * AppFooter Component Primitive
 */
export const AppFooter = React.forwardRef<HTMLElement, AppFooterProps>(
  (
    {
      copyright,
      social,
      version,
      className,
      ...props
    },
    ref
  ) => {
    const currentYear = new Date().getFullYear();

    return (
      <footer
        ref={ref}
        role="contentinfo"
        className={cn(
          "w-full border-t border-border-subtle bg-bg-surface1 py-8 sm:py-12 mt-auto text-fg-secondary text-sm",
          className
        )}
        {...props}
      >
        <Container size="default" className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            {/* Copyright & Branding */}
            <div className="flex flex-col gap-1">
              <Typography variant="small" className="font-medium text-fg-primary">
                {copyright ? (
                  copyright
                ) : (
                  <>© {currentYear} Engineering Portfolio. All rights reserved.</>
                )}
              </Typography>
              <Typography variant="caption" className="text-fg-muted">
                Architected with Next.js 14, TypeScript & Obsidian Violet Design Tokens.
              </Typography>
            </div>

            {/* Social Links Placeholder */}
            <div className="flex items-center gap-3">
              {social ? (
                social
              ) : (
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-fg-muted hover:text-fg-primary hover:bg-bg-surface2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                    aria-label="GitHub Repository"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-fg-muted hover:text-fg-primary hover:bg-bg-surface2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-fg-muted hover:text-fg-primary hover:bg-bg-surface2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                    aria-label="Twitter/X Profile"
                  >
                    <Twitter className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>

            {/* Version Telemetry Placeholder */}
            <div className="flex items-center gap-2">
              {version ? (
                version
              ) : (
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-status-success-fg animate-pulse" aria-hidden="true" />
                  <Badge variant="default" className="font-mono text-[10px]">
                    v2.0.0-release
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </Container>
      </footer>
    );
  }
);

AppFooter.displayName = "AppFooter";
