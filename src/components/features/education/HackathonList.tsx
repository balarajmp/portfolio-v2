import React from "react";
import { Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Typography } from "@/components/ui/Typography";
import { hackathons } from "@/content/education";

export interface HackathonListProps {
  readonly className?: string;
}

/**
 * HackathonList Component
 * Renders verified hackathon & competition participation records.
 *
 * @accessibility Semantic heading hierarchy and WCAG AA contrast badges.
 * @performance Server Component with zero JavaScript overhead.
 */
export const HackathonList: React.FC<HackathonListProps> = ({ className = "" }) => {
  if (!hackathons || hackathons.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2 border-b border-border-subtle/60 pb-2">
        <Zap className="h-4 w-4 text-accent-hover shrink-0" aria-hidden="true" />
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-lg">
          Hackathons & Competitions
        </Typography>
      </div>

      <ul className="space-y-2.5" aria-label="Hackathon participation list">
        {hackathons.map((hack) => (
          <li
            key={hack.id}
            className="flex items-center justify-between gap-3 p-3 rounded-lg bg-bg-surface1/70 border border-border-subtle hover:border-border-strong transition-all duration-normal"
          >
            <div className="space-y-0.5 min-w-0">
              <p className="text-sm font-semibold text-fg-primary">{hack.name}</p>
              <p className="text-xs text-fg-muted font-mono">{hack.organizer}</p>
            </div>
            <Badge variant="default" className="text-[11px] font-mono shrink-0">
              {hack.date}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};
