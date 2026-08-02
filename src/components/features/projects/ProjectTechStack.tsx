import React from "react";
import { Wrench } from "lucide-react";
import { Chip } from "@/components/ui/Chip";
import type { Technology } from "@/types";

export interface ProjectTechStackProps {
  /** Technology stack list */
  readonly techStack: ReadonlyArray<Technology>;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * ProjectTechStack Component
 * Renders technology stack pills dynamically from project content using the Chip primitive.
 *
 * @accessibility High contrast badges with technology names and categories.
 * @performance Server Component with zero hardcoded tech labels.
 */
export const ProjectTechStack: React.FC<ProjectTechStackProps> = ({
  techStack,
  className = "",
}) => {
  if (!techStack || techStack.length === 0) return null;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted uppercase tracking-wider">
        <Wrench className="h-3.5 w-3.5 text-accent-hover" aria-hidden="true" />
        <span>Technologies & Frameworks</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Chip
            key={tech.id || tech.name}
            interactive={false}
            className="text-xs font-mono py-1 px-3 bg-bg-surface2 border-border-subtle text-fg-primary"
          >
            {tech.name}
            {tech.version ? ` v${tech.version}` : ""}
          </Chip>
        ))}
      </div>
    </div>
  );
};
