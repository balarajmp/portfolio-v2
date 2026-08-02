import React from "react";
import { Briefcase, ShieldCheck, Clock } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/content/site";

export interface AvailabilityCardProps {
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * AvailabilityCard Component
 * Details candidate availability, target job roles, notice period, and relocation preferences.
 *
 * @accessibility WCAG AA contrast with semantic list & badge elements.
 * @performance Server Component with zero client JavaScript overhead.
 */
export const AvailabilityCard: React.FC<AvailabilityCardProps> = ({ className = "" }) => {
  const preferredRoles = siteConfig.recruiter.preferredRoles;
  const relocationPref = siteConfig.recruiter.relocationPreference;

  return (
    <Card glass padding="lg" radius="lg" className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <Typography variant="h4" as="h3" className="font-semibold text-fg-primary">
          Work Availability & Roles
        </Typography>
        <Badge variant="success" dot className="font-mono text-xs">
          Open to Offers
        </Badge>
      </div>

      {/* Target Roles */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-fg-muted">
          <Briefcase className="h-3.5 w-3.5 text-accent-hover" aria-hidden="true" />
          <span>Target Engineering Roles</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {preferredRoles.map((role) => (
            <Badge key={role} variant="accent" className="font-mono text-xs py-1 px-2.5">
              {role}
            </Badge>
          ))}
        </div>
      </div>

      {/* Work Preferences & Notice */}
      <div className="pt-2 border-t border-border-subtle/60 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted">
            <Clock className="h-3.5 w-3.5 text-status-info-fg" aria-hidden="true" />
            <span>Graduation / Start</span>
          </div>
          <p className="text-sm font-medium text-fg-primary">May 2027 (Internships/Full-Time)</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-status-success-fg" aria-hidden="true" />
            <span>Work Location</span>
          </div>
          <p className="text-sm font-medium text-fg-primary truncate">{relocationPref}</p>
        </div>
      </div>
    </Card>
  );
};
