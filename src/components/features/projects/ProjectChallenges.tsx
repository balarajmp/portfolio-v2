import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import type { ProjectChallenge } from "@/types";

export interface ProjectChallengesProps {
  /** Engineering challenges list */
  readonly challenges?: ReadonlyArray<ProjectChallenge>;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * ProjectChallenges Component
 * Details specific engineering trade-offs, technical bottlenecks, resolutions, and outcomes.
 *
 * @accessibility WCAG AA contrast with semantic callouts.
 * @performance Server Component with 0kB client JS overhead.
 */
export const ProjectChallenges: React.FC<ProjectChallengesProps> = ({
  challenges,
  className = "",
}) => {
  if (!challenges || challenges.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted uppercase tracking-wider">
        <AlertCircle className="h-3.5 w-3.5 text-status-warning-fg" aria-hidden="true" />
        <span>Technical Bottlenecks & Resolutions</span>
      </div>

      <div className="space-y-3">
        {challenges.map((c) => (
          <div
            key={c.id || c.challenge}
            className="p-4 rounded-lg bg-bg-surface1 border border-border-subtle space-y-2"
          >
            {/* Bottleneck Problem */}
            <div className="space-y-1">
              <span className="font-mono text-xs text-status-warning-fg font-medium block">
                Challenge / Bottleneck
              </span>
              <p className="text-sm font-medium text-fg-primary">{c.challenge}</p>
            </div>

            {/* Resolution Strategy */}
            <div className="pt-2 border-t border-border-subtle/50 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-status-success-fg">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Architectural Resolution</span>
              </div>
              <p className="text-sm text-fg-secondary leading-relaxed">{c.resolution}</p>
            </div>

            {/* Impact metric if present */}
            {c.impact && (
              <div className="text-xs font-mono text-accent-hover pt-1">
                <span>Result: {c.impact}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
