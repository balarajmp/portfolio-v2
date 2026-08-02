import React from "react";
import { JourneyMilestone } from "./JourneyMilestone";
import { journeyMilestones } from "@/content/journey";

export interface JourneyTimelineProps {
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * JourneyTimeline Component
 * Renders the vertical timeline line and maps through journey milestone data.
 *
 * @accessibility High contrast timeline axis with WCAG AA compliance.
 * @performance Server Component driven entirely from static typed content collections.
 */
export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ className = "" }) => {
  return (
    <div className={`relative border-l-2 border-border-subtle ml-4 space-y-8 py-2 ${className}`}>
      {journeyMilestones.map((milestone) => (
        <JourneyMilestone key={milestone.id} milestone={milestone} />
      ))}
    </div>
  );
};
