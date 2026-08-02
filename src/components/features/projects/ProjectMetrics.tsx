import React from "react";
import { TrendingUp } from "lucide-react";
import { StatCard } from "@/components/ui/composite/StatCard";
import type { Metric } from "@/types";

export interface ProjectMetricsProps {
  /** Verified project metrics list */
  readonly metrics?: ReadonlyArray<Metric>;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * ProjectMetrics Component
 * Renders quantitative verified metrics for a project case study.
 * Gracefully handles missing metrics.
 *
 * @accessibility WCAG AA contrast ratios with semantic telemetry formatting.
 * @performance Server Component with strictly verified data.
 */
export const ProjectMetrics: React.FC<ProjectMetricsProps> = ({
  metrics,
  className = "",
}) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted uppercase tracking-wider">
        <TrendingUp className="h-3.5 w-3.5 text-status-success-fg" aria-hidden="true" />
        <span>Verified Engineering Telemetry & Impact</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {metrics.map((metric) => {
          const displayValue = `${metric.prefix || ""}${metric.value}${metric.suffix || ""}`;
          return (
            <StatCard
              key={metric.id || metric.label}
              title={metric.label}
              value={displayValue}
              description={metric.description}
              radius="md"
              padding="sm"
              className="bg-bg-surface1 border-border-subtle"
            />
          );
        })}
      </div>
    </div>
  );
};
