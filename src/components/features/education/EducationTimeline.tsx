import React from "react";
import { GraduationCap } from "lucide-react";
import { EducationCard } from "./EducationCard";
import { education } from "@/content/education";

export interface EducationTimelineProps {
  readonly className?: string;
}

/**
 * EducationTimeline Component
 * Renders all academic records as a vertical timeline from most recent to oldest.
 *
 * @accessibility Landmark list with WCAG AA compliant node indicators.
 * @performance Server Component driven entirely from static typed content.
 */
export const EducationTimeline: React.FC<EducationTimelineProps> = ({ className = "" }) => {
  // Sort by priority: pursuing first, then by most recent endDate
  const sorted = [...education].sort((a, b) => {
    if (a.status === "pursuing") return -1;
    if (b.status === "pursuing") return 1;
    return parseInt(b.dateRange.endDate ?? "0") - parseInt(a.dateRange.endDate ?? "0");
  });

  return (
    <div className={`relative border-l-2 border-border-subtle ml-4 space-y-6 py-2 ${className}`}>
      {sorted.map((record) => (
        <div key={record.id} className="relative pl-8">
          {/* Node Icon */}
          <div className="absolute -left-[17px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-bg-surface2 border border-accent-primary text-accent-hover ring-4 ring-bg-canvas shrink-0">
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
          </div>
          <EducationCard record={record} />
        </div>
      ))}
    </div>
  );
};
