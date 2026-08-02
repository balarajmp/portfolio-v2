import React from "react";
import { GitCommit } from "lucide-react";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { JourneySummary } from "./JourneySummary";
import { JourneyTimeline } from "./JourneyTimeline";

export interface EngineeringJourneyProps {
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * EngineeringJourney Component
 * Renders the candidate's technical growth timeline from degree commencement to project breakthroughs and expected graduation.
 *
 * @accessibility Landmark `<section id="engineering-journey">` with semantic WCAG AA structure.
 * @performance Server Component with 0kB client JavaScript overhead.
 */
export const EngineeringJourney: React.FC<EngineeringJourneyProps> = ({ className = "" }) => {
  return (
    <Section
      id="engineering-journey"
      aria-label="Engineering Growth Timeline"
      spacing="lg"
      containerSize="default"
      className={className}
    >
      <Stack gap={8} align="stretch">
        {/* Section Header */}
        <div className="space-y-2 border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent" icon={GitCommit} className="text-xs font-mono">
              Growth Trajectory
            </Badge>
          </div>
          <Typography variant="h2" as="h2" className="text-fg-primary font-bold tracking-tight">
            Engineering Journey & Technical Growth
          </Typography>
          <Typography variant="lead" className="text-fg-secondary max-w-3xl">
            Chronological story of candidate learning progression, key computer science milestones, and project breakthroughs.
          </Typography>
        </div>

        {/* Narrative Summary Callout */}
        <JourneySummary />

        {/* Vertical Timeline Axis */}
        <JourneyTimeline />
      </Stack>
    </Section>
  );
};
