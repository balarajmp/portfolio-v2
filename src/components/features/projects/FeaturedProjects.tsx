import React from "react";
import { Code2 } from "lucide-react";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/composite";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/content/projects";

export interface FeaturedProjectsProps {
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * FeaturedProjects Component
 * Renders the flagship engineering case studies list (CognitoShield AI, Smart Agriculture Portal, Gaslytics).
 *
 * @accessibility Landmark `<section id="featured-projects">` with WCAG AA compliance.
 * @performance Server Component with zero hardcoded project data.
 */
export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ className = "" }) => {
  return (
    <Section
      id="featured-projects"
      aria-label="Featured Engineering Projects"
      spacing="lg"
      containerSize="default"
      className={className}
    >
      <Stack gap={8} align="stretch">
        {/* Section Header */}
        <FadeIn direction="up" className="space-y-2 border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent" icon={Code2} className="text-xs font-mono">
              Production Case Studies
            </Badge>
          </div>
          <Typography variant="h2" as="h2" className="text-fg-primary font-bold tracking-tight">
            Featured Engineering Projects
          </Typography>
          <Typography variant="lead" className="text-fg-secondary max-w-3xl">
            In-depth architectural breakdowns, technical trade-offs, and verified impact metrics for flagship software systems.
          </Typography>
        </FadeIn>

        {/* Project Cards List */}
        <Stack gap={8} align="stretch">
          {projects.map((project, index) => (
            <FadeIn key={project.id || project.slug} direction="up" delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
};
