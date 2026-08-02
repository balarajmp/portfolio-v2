import React from "react";
import { Compass, GraduationCap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Typography } from "@/components/ui/Typography";

export interface JourneySummaryProps {
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * JourneySummary Component
 * Displays the high-level narrative summary of candidate's technical growth trajectory.
 *
 * @accessibility High contrast typography adhering to WCAG AA contrast guidelines.
 * @performance Server Component with zero client JavaScript overhead.
 */
export const JourneySummary: React.FC<JourneySummaryProps> = ({ className = "" }) => {
  return (
    <div
      className={`p-5 rounded-lg bg-bg-surface1/80 border border-border-subtle space-y-3 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Compass className="h-4 w-4 text-accent-hover shrink-0" aria-hidden="true" />
          <Typography variant="h4" as="h3" className="font-semibold text-fg-primary text-sm">
            Technical Growth Narrative
          </Typography>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="default" icon={GraduationCap} className="text-xs font-mono">
            Oct 2023 — May 2027
          </Badge>
          <Badge variant="accent" icon={Trophy} className="text-xs font-mono">
            3 Major Breakthroughs
          </Badge>
        </div>
      </div>

      <p className="text-sm text-fg-secondary leading-relaxed">
        This timeline documents candidate growth from foundational programming concepts in 2023 to building production IoT data ingestion platforms, machine learning forecasting engines, and real-time LLM security microservices.
      </p>
    </div>
  );
};
