import React from "react";
import { Github, Linkedin, Mail, Code2, ExternalLink, type LucideIcon } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { socialLinks } from "@/content/social";

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
  Code2,
};

export interface SocialGridProps {
  readonly className?: string;
}

/**
 * SocialGrid Component
 * Renders all verified social links (GitHub, LinkedIn, LeetCode, Email) as premium link cards.
 * Data sourced entirely from `@/content/social` — no hardcoded URLs.
 *
 * @accessibility WCAG AA compliant with explicit aria-labels on all external links.
 * @performance Server Component with zero JavaScript overhead.
 */
export const SocialGrid: React.FC<SocialGridProps> = ({ className = "" }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-xl border-b border-border-subtle pb-2">
        Social & Developer Profiles
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {socialLinks.map((link) => {
          const IconComp = (link.iconName && iconMap[link.iconName]) || ExternalLink;
          return (
            <a
              key={link.id}
              href={link.url}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              aria-label={link.ariaLabel ?? `Visit ${link.label} profile`}
              className="flex items-center justify-between gap-3 p-4 rounded-lg bg-bg-surface1/70 border border-border-subtle hover:border-accent-primary/60 hover:bg-bg-surface2/60 transition-all duration-normal group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle text-accent-hover shrink-0 group-hover:border-accent-primary/40 transition-colors duration-normal">
                  <IconComp className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg-primary">{link.label}</p>
                  <p className="text-xs text-fg-muted font-mono">
                    {link.platform === "email" ? link.username : `@${link.username}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {link.isPrimary && (
                  <Badge variant="accent" className="text-[10px] font-mono">Primary</Badge>
                )}
                <ExternalLink className="h-3.5 w-3.5 text-fg-muted group-hover:text-accent-hover transition-colors duration-normal" aria-hidden="true" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
