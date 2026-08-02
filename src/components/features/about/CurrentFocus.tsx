import React from "react";
import { Zap } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Chip } from "@/components/ui/Chip";
import type { CurrentFocusTech } from "@/types";

export interface CurrentFocusProps {
  readonly techs: ReadonlyArray<CurrentFocusTech>;
  readonly className?: string;
}

/**
 * CurrentFocus Component
 * Displays the candidate's active technology stack derived from verified skills content.
 * No fabricated technologies — every item maps to a real skill in the skills matrix.
 *
 * @accessibility Semantic section heading with chip list.
 * @performance Server Component with zero JavaScript overhead.
 */
export const CurrentFocus: React.FC<CurrentFocusProps> = ({ techs, className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-accent-hover shrink-0" aria-hidden="true" />
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-xl">
          Current Focus
        </Typography>
      </div>
      <p className="text-sm text-fg-secondary">
        Technologies actively applied across ongoing coursework, projects, and engineering practice.
      </p>
      <div className="flex flex-wrap gap-2" role="list" aria-label="Current focus technologies">
        {techs.map((t) => (
          <div key={t.id} role="listitem">
            <Chip
              interactive={false}
              className="text-xs font-mono py-1 px-3 bg-bg-surface2 border-border-subtle text-fg-primary"
            >
              {t.name}
            </Chip>
          </div>
        ))}
      </div>
    </div>
  );
};
