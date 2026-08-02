import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Typography } from "@/components/ui/Typography";
import { heroTechStackSkills } from "@/content/skills";
import type { Skill } from "@/types";

export interface HeroTechStackProps {
  /** Optional skills list override rendered dynamically */
  readonly skills?: ReadonlyArray<Skill>;
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * HeroTechStack Component
 * Renders the verified engineering tech stack as scannable pills.
 * Driven entirely by static typed content collections from `@/content/skills`.
 *
 * @accessibility WCAG AA contrast against dark obsidian background.
 * @performance Server Component with zero hardcoded tech strings.
 */
export const HeroTechStack: React.FC<HeroTechStackProps> = ({
  skills = heroTechStackSkills,
  className = "",
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <Typography
        variant="caption"
        className="font-mono uppercase tracking-widest text-fg-muted block"
      >
        Verified Engineering Stack
      </Typography>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill.id}
            variant="default"
            className="px-3 py-1 text-xs font-mono bg-bg-surface1 border-border-subtle hover:border-border-strong hover:bg-bg-surface2 transition-colors"
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};
