"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/composite";
import { SkillCategory } from "./SkillCategory";
import { SkillFilter } from "./SkillFilter";
import { SkillLegend } from "./SkillLegend";
import { skillCategories } from "@/content/skills";

export interface SkillsMatrixProps {
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * SkillsMatrix Component
 * Interactive technical skills matrix displaying verified engineering competencies categorized into:
 * Backend, Frontend, Databases, Machine Learning, Developer Tools, Languages.
 *
 * @accessibility WCAG 2.1 AA compliant landmark section with keyboard-navigable category filters.
 * @performance Client state isolated strictly to filter selection, with full SSR pre-render.
 */
export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ className = "" }) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<string>("all");

  const filterCategories = skillCategories.map((cat) => ({
    id: cat.id,
    name: cat.name,
  }));

  const displayedCategories =
    selectedCategoryId === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategoryId);

  return (
    <Section
      id="skills-matrix"
      aria-label="Engineering Skills Matrix"
      spacing="lg"
      containerSize="default"
      background="surface1"
      className={`border-y border-border-subtle/80 ${className}`}
    >
      <Stack gap={8} align="stretch">
        {/* Section Header */}
        <FadeIn direction="up" className="space-y-2 border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent" icon={Cpu} className="text-xs font-mono">
              Engineering Matrix
            </Badge>
          </div>
          <Typography variant="h2" as="h2" className="text-fg-primary font-bold tracking-tight">
            Technical Skills Matrix
          </Typography>
          <Typography variant="lead" className="text-fg-secondary max-w-3xl">
            Categorized technical stack supported by verified evidence from production software projects.
          </Typography>
        </FadeIn>

        {/* Evidence Methodology Legend */}
        <FadeIn direction="up" delay={0.1}>
          <SkillLegend />
        </FadeIn>

        {/* Category Filter Bar */}
        <FadeIn direction="up" delay={0.15}>
          <SkillFilter
            categories={filterCategories}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={setSelectedCategoryId}
          />
        </FadeIn>

        {/* Categorized Skills Grid List */}
        <Stack gap={8} align="stretch">
          {displayedCategories.map((category, idx) => (
            <FadeIn key={category.id} direction="up" delay={idx * 0.1}>
              <SkillCategory category={category} />
            </FadeIn>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
};
