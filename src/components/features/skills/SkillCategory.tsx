import React from "react";
import { Grid } from "@/components/ui/layout/Grid";
import { Typography } from "@/components/ui/Typography";
import { SkillCard } from "./SkillCard";
import type { SkillCategory as SkillCatType } from "@/types";

export interface SkillCategoryProps {
  /** Category data object */
  readonly category: SkillCatType;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * SkillCategory Component
 * Renders a category grouping block with description and skill cards grid.
 *
 * @accessibility Semantic heading structure (<h3>) and structured grid list.
 * @performance Server Component with zero JavaScript overhead.
 */
export const SkillCategory: React.FC<SkillCategoryProps> = ({ category, className = "" }) => {
  if (!category.skills || category.skills.length === 0) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Category Header */}
      <div className="space-y-1 border-b border-border-subtle/60 pb-2">
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-xl">
          {category.name}
        </Typography>
        {category.description && (
          <Typography variant="small" className="text-fg-secondary">
            {category.description}
          </Typography>
        )}
      </div>

      {/* Skills Grid */}
      <Grid cols={3} gap={4} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.id || skill.slug} skill={skill} />
        ))}
      </Grid>
    </div>
  );
};
