import React from "react";
import {
  Zap,
  Server,
  Cpu,
  Atom,
  Globe,
  HardDrive,
  Database,
  BrainCircuit,
  TrendingUp,
  GitBranch,
  Container,
  FileCode,
  Code2,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { SkillEvidence } from "./SkillEvidence";
import type { Skill } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Server,
  Cpu,
  Atom,
  Globe,
  HardDrive,
  Database,
  BrainCircuit,
  TrendingUp,
  GitBranch,
  Container,
  FileCode,
  Code2,
  Terminal,
};

export interface SkillCardProps {
  /** Skill entity */
  readonly skill: Skill;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * SkillCard Component
 * Displays individual technical skill with verified project evidence.
 * Prohibits fake proficiency percentage bars or invented metrics.
 *
 * @accessibility High contrast WCAG AA compliant surface card.
 * @performance Server Component with zero hardcoded project strings.
 */
export const SkillCard: React.FC<SkillCardProps> = ({ skill, className = "" }) => {
  const IconComponent = (skill.iconName && iconMap[skill.iconName]) || Code2;

  return (
    <Card
      glass
      padding="md"
      radius="lg"
      outlined
      className={`group flex flex-col justify-between space-y-3 bg-bg-surface1/70 hover:border-accent-primary/40 hover:bg-bg-surface2/60 hover:-translate-y-0.5 hover:shadow-subtle transition-all duration-normal motion-reduce:transform-none ${className}`}
    >
      <div className="space-y-2">
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle text-accent-hover shrink-0 group-hover:border-accent-primary/50 group-hover:bg-accent-subtle/40 transition-colors duration-normal">
              <IconComponent className="h-4 w-4" aria-hidden="true" />
            </div>
            <Typography variant="h4" as="h3" className="font-semibold text-fg-primary text-base">
              {skill.name}
            </Typography>
          </div>

          <Badge variant="default" className="text-[11px] font-mono capitalize">
            {skill.proficiency}
          </Badge>
        </div>
      </div>

      {/* Verified Project Evidence Linkage */}
      <SkillEvidence verifiedProjectIds={skill.verifiedProjectIds} />
    </Card>
  );
};
