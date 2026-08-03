import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Badge } from "@/components/ui/Badge";
import { Typography } from "@/components/ui/Typography";
import type { Certification } from "@/types";

export interface CertificationCardProps {
  readonly certification: Certification;
  readonly className?: string;
}

/**
 * CertificationCard Component
 * Displays a single professional certification with issuer, title, date, and verification CTA.
 *
 * @accessibility High-contrast card with aria-label on external verification link.
 * @performance Server Component with zero JavaScript overhead.
 */
export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  className = "",
}) => {
  return (
    <Card
      glass
      padding="md"
      radius="lg"
      outlined
      className={`group flex flex-wrap items-start justify-between gap-3 bg-bg-surface1/70 hover:border-accent-primary/40 hover:-translate-y-0.5 hover:shadow-subtle transition-all duration-normal motion-reduce:transform-none ${className}`}
    >
      <div className="flex items-start gap-3 min-w-0">
        {/* Icon Orb */}
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle text-accent-hover shrink-0 group-hover:border-accent-primary/50 group-hover:bg-accent-subtle/40 transition-colors duration-normal">
          <Award className="h-4 w-4" aria-hidden="true" />
        </div>

        {/* Title & Issuer */}
        <div className="space-y-0.5 min-w-0">
          <Typography variant="h4" as="h4" className="font-semibold text-fg-primary text-sm leading-snug">
            {certification.title}
          </Typography>
          <p className="text-xs text-fg-muted font-mono">
            {certification.issuer.name} &bull; {certification.issueDate}
          </p>
        </div>
      </div>

      {/* Verify Badge */}
      {certification.verificationLink.url !== "#" && (
        <a
          href={certification.verificationLink.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${certification.title} certification from ${certification.issuer.name} (opens in new tab)`}
          className="shrink-0"
        >
          <Badge variant="accent" icon={ExternalLink} className="text-[11px] font-mono cursor-pointer hover:opacity-80 transition-opacity">
            Verify
          </Badge>
        </a>
      )}
    </Card>
  );
};
