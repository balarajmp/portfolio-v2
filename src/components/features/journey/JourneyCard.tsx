import React from "react";
import { FolderCode, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { projects } from "@/content/projects";
import type { JourneyMilestone } from "@/types";

export interface JourneyCardProps {
  /** Milestone item data */
  readonly milestone: JourneyMilestone;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * JourneyCard Component
 * Obsidian glass card presenting milestone title, date, takeaways, skills, and linked project evidence.
 *
 * @accessibility High-contrast WCAG AA compliant article card.
 * @performance Server Component with zero JavaScript bundle overhead.
 */
export const JourneyCard: React.FC<JourneyCardProps> = ({ milestone, className = "" }) => {
  // Look up related project if milestone specifies a project ID
  const relatedProject = milestone.relatedProjectId
    ? projects.find((p) => p.id === milestone.relatedProjectId)
    : undefined;

  const categoryVariant =
    milestone.category === "project"
      ? "accent"
      : milestone.category === "academic"
      ? "default"
      : milestone.category === "milestone"
      ? "success"
      : "info";

  return (
    <Card
      as="article"
      glass
      padding="md"
      radius="lg"
      outlined
      className={`space-y-4 bg-bg-surface1/80 hover:border-accent-primary/40 hover:-translate-y-0.5 hover:shadow-subtle transition-all duration-normal motion-reduce:transform-none ${className}`}
    >
      {/* Date & Category Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle/50 pb-2">
        <span className="font-mono text-xs font-semibold text-accent-hover">
          {milestone.date}
        </span>

        <Badge variant={categoryVariant} className="text-[11px] font-mono capitalize">
          {milestone.category}
        </Badge>
      </div>

      {/* Milestone Title & Summary */}
      <div className="space-y-1">
        <Typography variant="h4" as="h3" className="font-bold text-fg-primary text-lg">
          {milestone.title}
        </Typography>
        <p className="text-sm text-fg-secondary leading-relaxed">{milestone.summary}</p>
      </div>

      {/* Key Takeaways */}
      {milestone.keyTakeaways && milestone.keyTakeaways.length > 0 && (
        <div className="space-y-1.5 pt-1">
          <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
            Engineering Insights
          </span>
          <ul className="space-y-1">
            {milestone.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-fg-secondary">
                <CheckCircle2 className="h-3.5 w-3.5 text-status-success-fg shrink-0 mt-0.5" aria-hidden="true" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills Acquired & Related Project */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border-subtle/50">
        {milestone.skillsAcquired && milestone.skillsAcquired.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {milestone.skillsAcquired.map((skill) => (
              <Chip key={skill} interactive={false} className="text-[11px] font-mono py-0.5 px-2 bg-bg-surface2">
                {skill}
              </Chip>
            ))}
          </div>
        )}

        {relatedProject && (
          <Badge variant="accent" icon={FolderCode} className="text-[11px] font-mono">
            {relatedProject.title}
          </Badge>
        )}
      </div>
    </Card>
  );
};
