import React from "react";
import { BookOpen } from "lucide-react";
import { Chip } from "@/components/ui/Chip";

export interface CourseworkListProps {
  readonly coursework: ReadonlyArray<string>;
  readonly className?: string;
}

/**
 * CourseworkList Component
 * Renders relevant academic coursework as chip tags.
 *
 * @accessibility High-contrast chip labels with semantic list wrapper.
 * @performance Server Component with zero JavaScript overhead.
 */
export const CourseworkList: React.FC<CourseworkListProps> = ({ coursework, className = "" }) => {
  if (!coursework || coursework.length === 0) return null;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-1.5 text-[10px] font-mono text-fg-muted uppercase tracking-wider">
        <BookOpen className="h-3 w-3 text-accent-hover shrink-0" aria-hidden="true" />
        <span>Relevant Coursework</span>
      </div>
      <ul className="flex flex-wrap gap-1.5" aria-label="Relevant coursework subjects">
        {coursework.map((subject) => (
          <li key={subject}>
            <Chip interactive={false} className="text-[11px] font-mono py-0.5 px-2.5 bg-bg-surface2 border-border-subtle">
              {subject}
            </Chip>
          </li>
        ))}
      </ul>
    </div>
  );
};
