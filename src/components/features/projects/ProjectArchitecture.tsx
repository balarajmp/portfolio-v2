import React from "react";
import { Cpu, Database, Server, Cloud, Layers } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import type { ProjectArchitecture as ProjectArchType } from "@/types";

export interface ProjectArchitectureProps {
  /** Architecture specification object */
  readonly architecture: ProjectArchType;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * ProjectArchitecture Component
 * Displays system architecture overview in a clean, structured flow format without heavy SVGs.
 *
 * @accessibility High contrast textual flow annotations with clear visual semantic hierarchy.
 * @performance Server Component with zero JavaScript bundle overhead.
 */
export const ProjectArchitecture: React.FC<ProjectArchitectureProps> = ({
  architecture,
  className = "",
}) => {
  const specs = [
    { label: "API Design", value: architecture.apiDesign, icon: Server },
    { label: "Database", value: architecture.database, icon: Database },
    { label: "Caching Strategy", value: architecture.cachingStrategy, icon: Layers },
    { label: "Deployment", value: architecture.deploymentPlatform, icon: Cloud },
  ].filter((spec) => Boolean(spec.value));

  return (
    <div className={`space-y-3 p-4 rounded-lg bg-bg-surface1 border border-border-subtle ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border-subtle pb-2">
        <Cpu className="h-4 w-4 text-accent-hover shrink-0" aria-hidden="true" />
        <Typography variant="h4" as="h4" className="font-semibold text-fg-primary text-sm">
          System Architecture & Data Flow
        </Typography>
      </div>

      {/* Summary Narrative */}
      <p className="text-sm text-fg-secondary leading-relaxed">{architecture.summary}</p>

      {/* Architecture Specs Grid */}
      {specs.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          {specs.map((spec) => {
            const IconComp = spec.icon;
            return (
              <div key={spec.label} className="p-2.5 rounded bg-bg-surface2/70 border border-border-subtle/50 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted">
                  <IconComp className="h-3 w-3 text-accent-hover shrink-0" aria-hidden="true" />
                  <span className="truncate">{spec.label}</span>
                </div>
                <span className="font-sans text-xs font-medium text-fg-primary block truncate">
                  {spec.value}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
