import React from "react";
import { Card } from "@/components/ui/composite/Card";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectArchitecture } from "./ProjectArchitecture";
import { ProjectTechStack } from "./ProjectTechStack";
import { ProjectMetrics } from "./ProjectMetrics";
import { ProjectChallenges } from "./ProjectChallenges";
import { ProjectActions } from "./ProjectActions";
import type { Project } from "@/types";

export interface ProjectCardProps {
  /** Project data entity */
  readonly project: Project;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * ProjectCard Component
 * Comprehensive engineering case study card presenting title, summary, problem/solution, architecture, tech stack, metrics, challenges, and actions.
 *
 * @accessibility WCAG 2.1 AA compliant article structure with semantic headings.
 * @performance Server Component with zero client JavaScript overhead.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  return (
    <Card
      as="article"
      glass
      padding="lg"
      radius="lg"
      outlined
      className={`bg-bg-surface1/80 hover:border-border-strong transition-all duration-normal ${className}`}
    >
      {/* Header, Problem & Solution */}
      <ProjectHeader project={project} />

      {/* Visual System Architecture & Data Flow */}
      {project.architecture && (
        <div className="border-t border-border-subtle/50 pt-4">
          <ProjectArchitecture architecture={project.architecture} />
        </div>
      )}

      {/* Dynamic Technology Stack */}
      <div className="border-t border-border-subtle/50 pt-4">
        <ProjectTechStack techStack={project.techStack} />
      </div>

      {/* Verified Key Performance Telemetry */}
      {project.keyMetrics && project.keyMetrics.length > 0 && (
        <div className="border-t border-border-subtle/50 pt-4">
          <ProjectMetrics metrics={project.keyMetrics} />
        </div>
      )}

      {/* Engineering Challenges & Resolutions */}
      {project.challenges && project.challenges.length > 0 && (
        <div className="border-t border-border-subtle/50 pt-4">
          <ProjectChallenges challenges={project.challenges} />
        </div>
      )}

      {/* Action Bar (GitHub, Live Demo, Case Study) */}
      <div className="border-t border-border-subtle/50 pt-4">
        <ProjectActions project={project} />
      </div>
    </Card>
  );
};
