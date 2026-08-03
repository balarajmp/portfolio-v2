import React from "react";
import { Zap, CheckCircle } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import type { ProjectOptimization } from "@/types";

export interface ProjectOptimizationsProps {
  readonly optimizations?: ReadonlyArray<ProjectOptimization>;
  readonly lessonsLearned?: ReadonlyArray<string>;
  readonly className?: string;
}

/**
 * ProjectOptimizations Component
 * Displays specific performance optimizations, area tags, metric gains, and lessons learned.
 */
export const ProjectOptimizations: React.FC<ProjectOptimizationsProps> = ({
  optimizations,
  lessonsLearned,
  className = "",
}) => {
  const hasOptimizations = optimizations && optimizations.length > 0;
  const hasLessons = lessonsLearned && lessonsLearned.length > 0;

  if (!hasOptimizations && !hasLessons) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Performance & Architectural Optimizations */}
      {hasOptimizations && (
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5 text-accent-hover" aria-hidden="true" />
            <span>Engineering Optimizations & Trade-Offs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {optimizations.map((opt) => (
              <div
                key={opt.id || opt.strategy}
                className="p-4 rounded-lg bg-bg-surface1 border border-border-subtle space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="accent" className="font-mono text-[10px] uppercase">
                    {opt.area}
                  </Badge>
                  <span className="font-mono text-xs text-status-success-fg font-medium">
                    {opt.metricImprovement}
                  </span>
                </div>
                <p className="text-sm font-medium text-fg-primary leading-relaxed">
                  {opt.strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Lessons & Technical Takeaways */}
      {hasLessons && (
        <div className="space-y-3">
          <Typography variant="h4" as="h4" className="font-semibold text-fg-primary text-base">
            Technical Takeaways & Lessons Learned
          </Typography>

          <div className="p-4 rounded-lg bg-bg-surface2/60 border border-border-subtle space-y-2">
            {lessonsLearned.map((lesson, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-accent-hover shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-fg-secondary leading-relaxed">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
