import React from "react";
import {
  GraduationCap,
  Code2,
  Server,
  FolderCode,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Award,
  type LucideIcon,
} from "lucide-react";
import { JourneyCard } from "./JourneyCard";
import type { JourneyMilestone as MilestoneType } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Code2,
  Server,
  FolderCode,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Award,
};

export interface JourneyMilestoneProps {
  /** Milestone item data */
  readonly milestone: MilestoneType;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * JourneyMilestone Component
 * Connects a milestone node on the vertical axis to its corresponding JourneyCard.
 *
 * @accessibility High contrast timeline node indicators with semantic HTML markup.
 * @performance Server Component with zero client JavaScript overhead.
 */
export const JourneyMilestone: React.FC<JourneyMilestoneProps> = ({ milestone, className = "" }) => {
  const IconComponent = (milestone.iconName && iconMap[milestone.iconName]) || Code2;

  return (
    <div className={`relative pl-8 ${className}`}>
      {/* Node Axis Icon Circle */}
      <div className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-bg-surface2 border border-accent-primary text-accent-hover ring-4 ring-bg-canvas shrink-0">
        <IconComponent className="h-4 w-4" aria-hidden="true" />
      </div>

      {/* Milestone Card */}
      <JourneyCard milestone={milestone} />
    </div>
  );
};
