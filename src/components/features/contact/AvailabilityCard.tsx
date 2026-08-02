import React from "react";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Badge } from "@/components/ui/Badge";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";

export interface AvailabilityCardProps {
  readonly className?: string;
}

/**
 * AvailabilityCard Component
 * Displays candidate availability status, location, and target roles.
 * All values sourced from `@/content/site` siteConfig.
 *
 * @accessibility WCAG AA compliant card with semantic status indicators.
 * @performance Server Component with zero JavaScript overhead.
 */
export const AvailabilityCard: React.FC<AvailabilityCardProps> = ({ className = "" }) => {
  const isOpen = siteConfig.author.availabilityStatus === "open-to-offers";

  return (
    <Card
      glass
      padding="md"
      radius="lg"
      outlined
      className={`space-y-4 bg-bg-surface1/80 ${className}`}
    >
      {/* Status Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border-subtle pb-3">
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-base">
          Availability Status
        </Typography>
        <Badge
          variant={isOpen ? "success" : "default"}
          className="text-xs font-mono"
        >
          <span className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${isOpen ? "bg-status-success-fg animate-pulse" : "bg-fg-muted"}`} aria-hidden="true" />
          {isOpen ? "Open to Offers" : siteConfig.author.availabilityStatus}
        </Badge>
      </div>

      {/* Location */}
      <div className="flex items-start gap-2.5">
        <MapPin className="h-4 w-4 text-accent-hover shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="text-xs text-fg-muted font-mono uppercase tracking-wider mb-0.5">Location</p>
          <p className="text-sm font-medium text-fg-primary">Bengaluru, Karnataka, India</p>
        </div>
      </div>

      {/* Notice Period */}
      <div className="flex items-start gap-2.5">
        <Clock className="h-4 w-4 text-accent-hover shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="text-xs text-fg-muted font-mono uppercase tracking-wider mb-0.5">
            Notice Period
          </p>
          <p className="text-sm font-medium text-fg-primary">
            {siteConfig.recruiter.noticePeriodDays} days
          </p>
        </div>
      </div>

      {/* Work Preferences */}
      <div className="flex items-start gap-2.5">
        <Briefcase className="h-4 w-4 text-accent-hover shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="text-xs text-fg-muted font-mono uppercase tracking-wider mb-1.5">
            Target Roles
          </p>
          <div className="flex flex-wrap gap-1.5">
            {siteConfig.recruiter.preferredRoles.map((role) => (
              <Badge key={role} variant="default" className="text-[11px] font-mono">
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Relocation */}
      <div className="pt-2 border-t border-border-subtle/50">
        <p className="text-xs text-fg-secondary font-mono">
          {siteConfig.recruiter.relocationPreference}
        </p>
      </div>
    </Card>
  );
};
