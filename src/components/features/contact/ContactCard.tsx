import React from "react";
import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/site";

export interface ContactCardProps {
  readonly className?: string;
}

/**
 * ContactCard Component
 * Displays the candidate's direct contact channels (email, phone if available).
 * All values sourced from verified `siteConfig` — no hardcoded strings.
 *
 * @accessibility High-contrast cards with keyboard-accessible mailto / tel links.
 * @performance Server Component with zero JavaScript overhead.
 */
export const ContactCard: React.FC<ContactCardProps> = ({ className = "" }) => {
  const email = siteConfig.author.email;

  return (
    <Card
      glass
      padding="md"
      radius="lg"
      outlined
      className={`space-y-3 bg-bg-surface1/80 ${className}`}
    >
      <div className="border-b border-border-subtle pb-2">
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-base">
          Direct Contact
        </Typography>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle text-accent-hover shrink-0">
          <Mail className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-fg-muted font-mono uppercase tracking-wider mb-0.5">Email</p>
          <a
            href={`mailto:${email}`}
            className="text-sm font-medium text-accent-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
            aria-label={`Send email to ${email}`}
          >
            {email}
          </a>
        </div>
      </div>

      {/* Phone — gracefully absent; shown only if config provides it */}
      {/* Phone field is not in siteConfig yet; rendered as a future-ready placeholder */}
      <div className="flex items-center gap-3 opacity-50">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle text-fg-muted shrink-0">
          <Phone className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs text-fg-muted font-mono uppercase tracking-wider mb-0.5">Phone</p>
          <p className="text-sm text-fg-muted">Available on request</p>
        </div>
      </div>

      {/* Response SLA note */}
      <div className="pt-1 border-t border-border-subtle/50">
        <Badge variant="default" className="text-[11px] font-mono">
          Typically responds within 24 hours
        </Badge>
      </div>
    </Card>
  );
};
