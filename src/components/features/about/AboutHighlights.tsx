import React from "react";
import { Lightbulb, TrendingUp, GraduationCap, FolderCode, Calendar, Terminal,
  type LucideIcon } from "lucide-react";
import { StatCard } from "@/components/ui/composite/StatCard";
import type { EngHighlight } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  FolderCode,
  GraduationCap,
  TrendingUp,
  Calendar,
  Terminal,
  Lightbulb,
};

export interface AboutHighlightsProps {
  readonly highlights: ReadonlyArray<EngHighlight>;
  readonly className?: string;
}

/**
 * AboutHighlights Component
 * Renders concise engineering fact cards (projects, CGPA, graduation, focus area).
 * All values sourced from typed content — zero hardcoded strings.
 *
 * @accessibility WCAG AA compliant StatCard grid with semantic labels.
 * @performance Server Component.
 */
export const AboutHighlights: React.FC<AboutHighlightsProps> = ({ highlights, className = "" }) => {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 ${className}`}>
      {highlights.map((h) => {
        const IconComp = (h.iconName && iconMap[h.iconName]) || Lightbulb;
        return (
          <StatCard
            key={h.id}
            title={h.label}
            value={h.value}
            icon={IconComp}
            radius="lg"
            padding="sm"
            className="bg-bg-surface1 border-border-subtle text-center"
          />
        );
      })}
    </div>
  );
};
