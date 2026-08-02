import React from "react";
import { FolderCode, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";

export interface SkillEvidenceProps {
  /** Array of verified project IDs supporting this skill */
  readonly verifiedProjectIds?: ReadonlyArray<string>;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * SkillEvidence Component
 * Resolves verified project evidence dynamically from project content arrays.
 * Zero hardcoded project names.
 *
 * @accessibility High-contrast badge tags with semantic project labels.
 * @performance Server Component with zero JavaScript overhead.
 */
export const SkillEvidence: React.FC<SkillEvidenceProps> = ({
  verifiedProjectIds = [],
  className = "",
}) => {
  // Look up matching projects from typed project content collection
  const matchingProjects = projects.filter((p) => verifiedProjectIds.includes(p.id));

  if (matchingProjects.length === 0) {
    return (
      <div className={`space-y-1 ${className}`}>
        <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
          Evidence Context
        </span>
        <Badge variant="default" icon={GraduationCap} className="text-[11px] font-mono py-0.5 px-2">
          Academic / Core CS Foundation
        </Badge>
      </div>
    );
  }

  return (
    <div className={`space-y-1.5 ${className}`}>
      <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
        Project Evidence ({matchingProjects.length})
      </span>
      <div className="flex flex-wrap gap-1.5">
        {matchingProjects.map((proj) => (
          <Badge
            key={proj.id}
            variant="accent"
            icon={FolderCode}
            className="text-[11px] font-mono py-0.5 px-2 bg-accent-subtle/40 border-accent-primary/20"
          >
            {proj.title}
          </Badge>
        ))}
      </div>
    </div>
  );
};
