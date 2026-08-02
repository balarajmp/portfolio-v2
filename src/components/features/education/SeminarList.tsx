import React from "react";
import { Presentation } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { seminars } from "@/content/education";

export interface SeminarListProps {
  readonly className?: string;
}

/**
 * SeminarList Component
 * Renders verified seminar and workshop attendance records.
 *
 * @accessibility Semantic list with high-contrast title labels.
 * @performance Server Component with zero JavaScript overhead.
 */
export const SeminarList: React.FC<SeminarListProps> = ({ className = "" }) => {
  if (!seminars || seminars.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2 border-b border-border-subtle/60 pb-2">
        <Presentation className="h-4 w-4 text-accent-hover shrink-0" aria-hidden="true" />
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-lg">
          Seminars & Workshops
        </Typography>
      </div>

      <ul className="space-y-2" aria-label="Seminar attendance list">
        {seminars.map((sem) => (
          <li
            key={sem.id}
            className="flex items-start gap-2.5 p-3 rounded-lg bg-bg-surface1/70 border border-border-subtle hover:border-border-strong transition-all duration-normal"
          >
            <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-accent-primary shrink-0" aria-hidden="true" />
            <div className="space-y-0.5 min-w-0">
              <p className="text-sm font-medium text-fg-primary leading-snug">{sem.title}</p>
              {sem.organizer && (
                <p className="text-xs text-fg-muted font-mono">{sem.organizer}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
