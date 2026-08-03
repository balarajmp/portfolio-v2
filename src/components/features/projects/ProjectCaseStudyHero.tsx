import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FolderCode, Github, ExternalLink } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

export interface ProjectCaseStudyHeroProps {
  readonly project: Project;
  readonly className?: string;
}

/**
 * ProjectCaseStudyHero Component
 * Premium hero section for full case study detail pages with breadcrumbs, action CTAs, and hero media frame.
 */
export const ProjectCaseStudyHero: React.FC<ProjectCaseStudyHeroProps> = ({
  project,
  className = "",
}) => {
  const githubUrl = project.links.githubRepo?.url;
  const liveDemoUrl = project.links.liveDemo?.url;

  return (
    <section className={`space-y-8 pb-8 border-b border-border-subtle ${className}`}>
      {/* Back Navigation Bar */}
      <div>
        <Button variant="ghost" size="sm" asChild className="text-fg-muted hover:text-fg-primary -ml-2">
          <Link href="/#projects">
            <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
            <span>Back to Projects Catalog</span>
          </Link>
        </Button>
      </div>

      {/* Badges & Meta Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" icon={FolderCode} className="font-mono text-xs">
            Case Study #{project.priorityOrder}
          </Badge>
          <Badge variant="default" className="font-mono text-xs">
            {project.status.toUpperCase()}
          </Badge>
          {project.isFeatured && (
            <Badge variant="accent" className="font-mono text-xs">
              FEATURED
            </Badge>
          )}
        </div>

        {/* Main Title & Tagline */}
        <div className="space-y-2">
          <Typography variant="h1" className="text-fg-primary font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl">
            {project.title}
          </Typography>
          <Typography variant="lead" className="text-accent-hover font-medium text-lg sm:text-xl">
            {project.tagline}
          </Typography>
        </div>

        {/* Executive Summary Narrative */}
        <Typography variant="body" className="text-fg-secondary text-base sm:text-lg max-w-3xl leading-relaxed">
          {project.summary}
        </Typography>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {githubUrl && (
            <Button variant="outline" size="md" asChild>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} GitHub Repository (opens in new tab)`}
              >
                <Github className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
                <span>GitHub Repository</span>
              </a>
            </Button>
          )}
          {liveDemoUrl && (
            <Button variant="primary" size="md" asChild>
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Launch ${project.title} Live Demo (opens in new tab)`}
              >
                <ExternalLink className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Hero Media / Screenshot Visual Frame */}
      <div className="relative rounded-2xl bg-bg-surface1 border border-border-glass shadow-glass overflow-hidden">
        <div className="aspect-[16/9] w-full relative bg-bg-surface2/60 flex items-center justify-center">
          {project.heroMedia?.src ? (
            <Image
              src={project.heroMedia.src}
              alt={project.heroMedia.alt || `${project.title} Screenshot`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          ) : (
            <div className="p-8 text-center space-y-3">
              <FolderCode className="h-12 w-12 text-accent-hover/60 mx-auto" />
              <p className="text-sm font-mono text-fg-muted">
                {project.title} Architecture Visual Preview
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
