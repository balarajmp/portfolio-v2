import React from "react";
import { ShieldCheck, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Typography } from "@/components/ui/Typography";

export interface SkillLegendProps {
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * SkillLegend Component
 * Explains the engineering proof methodology behind the skills matrix.
 *
 * @accessibility High contrast annotation badge and explanation text.
 * @performance Server Component with 0kB JS bundle overhead.
 */
export const SkillLegend: React.FC<SkillLegendProps> = ({ className = "" }) => {
  return (
    <div
      className={`p-4 rounded-lg bg-bg-surface1/60 border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-fg-secondary ${className}`}
    >
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-status-success-fg shrink-0" aria-hidden="true" />
        <Typography variant="small" className="text-fg-secondary font-medium">
          <strong className="text-fg-primary">Evidence-Based Matrix:</strong> All technical competencies are cross-referenced directly with production case studies.
        </Typography>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Badge variant="accent" icon={Info} className="text-[11px] font-mono">
          Strict Zero-Fluff Standard
        </Badge>
      </div>
    </div>
  );
};
