import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";

export interface ProjectNavProps {
  readonly currentSlug: string;
  readonly className?: string;
}

/**
 * ProjectNav Component
 * Provides bottom page pagination between sequential engineering case studies.
 */
export const ProjectNav: React.FC<ProjectNavProps> = ({ currentSlug, className = "" }) => {
  const currentIndex = projects.findIndex(
    (p) => p.slug === currentSlug || p.id === currentSlug
  );

  if (currentIndex === -1) return null;

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!prevProject && !nextProject) return null;

  return (
    <nav
      aria-label="Project case study pagination"
      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border-subtle ${className}`}
    >
      {/* Previous Project Link */}
      {prevProject ? (
        <Link
          href={`/projects/${prevProject.slug}`}
          className="group p-4 rounded-xl bg-bg-surface1 border border-border-subtle hover:border-accent-primary/50 transition-all flex flex-col justify-between space-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted group-hover:text-accent-hover transition-colors">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span>Previous Case Study</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-fg-primary group-hover:text-accent-hover transition-colors">
              {prevProject.title}
            </p>
            <p className="text-xs text-fg-muted line-clamp-1">{prevProject.tagline}</p>
          </div>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}

      {/* Next Project Link */}
      {nextProject ? (
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group p-4 rounded-xl bg-bg-surface1 border border-border-subtle hover:border-accent-primary/50 transition-all flex flex-col justify-between items-end text-right space-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted group-hover:text-accent-hover transition-colors">
            <span>Next Case Study</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-fg-primary group-hover:text-accent-hover transition-colors">
              {nextProject.title}
            </p>
            <p className="text-xs text-fg-muted line-clamp-1">{nextProject.tagline}</p>
          </div>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}
    </nav>
  );
};
