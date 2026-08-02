import React from "react";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

export interface ProjectActionsProps {
  /** Project entity */
  readonly project: Project;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * ProjectActions Component
 * Action bar providing 1-click access to GitHub repository, Live Demo (if available), and full Case Study.
 * Gracefully handles missing links without inventing demo URLs.
 *
 * @accessibility WCAG AA contrast with explicit aria-labels for external links.
 * @performance Server Component with zero JavaScript bundle overhead.
 */
export const ProjectActions: React.FC<ProjectActionsProps> = ({ project, className = "" }) => {
  const githubUrl = project.links.githubRepo?.url;
  const liveDemoUrl = project.links.liveDemo?.url;
  const caseStudyUrl = `/projects/${project.slug}`;

  return (
    <div className={`flex flex-wrap items-center gap-3 pt-2 border-t border-border-subtle ${className}`}>
      {/* GitHub Repository CTA */}
      {githubUrl && (
        <Button variant="outline" size="sm" asChild>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View GitHub repository for ${project.title} (opens in new tab)`}
          >
            <Github className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
            <span>GitHub Repository</span>
          </a>
        </Button>
      )}

      {/* Live Demo CTA (Only rendered if liveDemoUrl exists) */}
      {liveDemoUrl && (
        <Button variant="primary" size="sm" asChild>
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Launch live demo for ${project.title} (opens in new tab)`}
          >
            <ExternalLink className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
            <span>Live Demo</span>
          </a>
        </Button>
      )}

      {/* Case Study Read CTA */}
      <Button variant="ghost" size="sm" asChild>
        <a href={caseStudyUrl} aria-label={`Read full architectural case study for ${project.title}`}>
          <BookOpen className="h-4 w-4 mr-2 shrink-0 text-accent-hover" aria-hidden="true" />
          <span>Case Study</span>
        </a>
      </Button>
    </div>
  );
};
