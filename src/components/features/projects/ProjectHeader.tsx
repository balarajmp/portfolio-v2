import React from "react";
import { FolderCode, ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

export interface ProjectHeaderProps {
  /** Project data object */
  readonly project: Project;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * ProjectHeader Component
 * Displays project title, tagline, problem statement, and solution statement.
 *
 * @accessibility High-contrast semantic headings and readable problem/solution callouts.
 * @performance Server Component with 0kB client JS overhead.
 */
export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project, className = "" }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Title & Badge Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="accent" icon={FolderCode} className="font-mono text-xs">
            Case Study #{project.priorityOrder}
          </Badge>
          <Badge variant="default" className="font-mono text-xs">
            {project.status.toUpperCase()}
          </Badge>
        </div>
      </div>

      {/* Main Project Title & Tagline */}
      <div className="space-y-1">
        <Typography variant="h2" as="h3" className="text-fg-primary font-bold tracking-tight">
          {project.title}
        </Typography>
        <Typography variant="lead" className="text-accent-hover font-medium text-lg">
          {project.tagline}
        </Typography>
      </div>

      {/* Short Summary */}
      <Typography variant="body" className="text-fg-secondary leading-relaxed">
        {project.summary}
      </Typography>

      {/* Problem vs Solution Split Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Problem Statement */}
        <div className="p-4 rounded-lg bg-bg-surface2/60 border border-status-warning-border/30 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-mono text-status-warning-fg font-semibold uppercase tracking-wider">
            <span>Problem Statement</span>
          </div>
          <p className="text-sm text-fg-secondary leading-relaxed">{project.problemStatement}</p>
        </div>

        {/* Solution Statement */}
        <div className="p-4 rounded-lg bg-bg-surface2/60 border border-status-success-border/30 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-mono text-status-success-fg font-semibold uppercase tracking-wider">
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Engineered Solution</span>
          </div>
          <p className="text-sm text-fg-secondary leading-relaxed">{project.solutionStatement}</p>
        </div>
      </div>
    </div>
  );
};
