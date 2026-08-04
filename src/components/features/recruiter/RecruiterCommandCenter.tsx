import React from "react";
import { Sparkles } from "lucide-react";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { Grid } from "@/components/ui/layout/Grid";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { ProfileSnapshot } from "./ProfileSnapshot";
import { AvailabilityCard } from "./AvailabilityCard";
import { QuickActionCard } from "./QuickActionCard";

export interface RecruiterCommandCenterProps {
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * RecruiterCommandCenter Component
 * Positioned immediately below the Hero to expose key candidate facts and 1-click recruiter actions.
 *
 * @accessibility WCAG 2.1 AA compliant landmark section with semantic headers.
 * @performance Server Component containing isolated interactive leaf nodes.
 */
export const RecruiterCommandCenter: React.FC<RecruiterCommandCenterProps> = ({
  className = "",
}) => {
  return (
    <Section
      id="recruiter"
      aria-label="Recruiter Command Center"
      spacing="md"
      containerSize="default"
      background="surface1"
      className={`border-y border-border-subtle/80 ${className}`}
    >
      <Stack gap={6} align="stretch">
        {/* Section Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="accent" icon={Sparkles} className="text-xs font-mono">
                Recruiter Fast-Track
              </Badge>
            </div>
            <Typography variant="h2" as="h2" className="text-fg-primary font-semibold tracking-tight">
              Recruiter Command Center
            </Typography>
            <Typography variant="small" className="text-fg-secondary">
              Instant verification of candidate location, degree, availability, and fast-track actions.
            </Typography>
          </div>
        </div>

        {/* Dashboard Grid (3-column layout) */}
        <Grid cols={3} gap={6} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Profile Snapshot */}
          <ProfileSnapshot />

          {/* Column 2: Work Availability & Roles */}
          <AvailabilityCard />

          {/* Column 3: Recruiter Quick Actions */}
          <QuickActionCard className="md:col-span-2 lg:col-span-1" />
        </Grid>
      </Stack>
    </Section>
  );
};
