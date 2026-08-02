import React from "react";
import {
  Server, Cpu, Terminal, Globe, Network, Cloud,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Badge } from "@/components/ui/Badge";
import { Typography } from "@/components/ui/Typography";
import type { RoadmapArea } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Cpu,
  Terminal,
  Globe,
  Network,
  Cloud,
};

export interface LearningRoadmapProps {
  readonly areas: ReadonlyArray<RoadmapArea>;
  readonly className?: string;
}

/**
 * LearningRoadmap Component
 * Presents current growth areas with a clear "learning goal" label — never presented as mastered.
 *
 * @accessibility WCAG AA contrast with "Learning Goal" badges to avoid false expertise signals.
 * @performance Server Component with zero JavaScript overhead.
 */
export const LearningRoadmap: React.FC<LearningRoadmapProps> = ({ areas, className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-xl">
          Learning Roadmap
        </Typography>
        <Badge variant="default" className="text-[11px] font-mono">
          Active growth areas — not yet mastered
        </Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {areas.map((area) => {
          const IconComp = (area.iconName && iconMap[area.iconName]) || Server;
          return (
            <Card
              key={area.id}
              padding="sm"
              radius="lg"
              outlined
              className="space-y-1.5 bg-bg-surface1/60 border-border-subtle hover:border-border-strong transition-all duration-normal"
            >
              <div className="flex items-center gap-2">
                <IconComp className="h-3.5 w-3.5 text-accent-hover shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-fg-primary">{area.title}</span>
              </div>
              <p className="text-xs text-fg-secondary leading-relaxed">{area.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
