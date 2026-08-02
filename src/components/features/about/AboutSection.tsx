import React from "react";
import { UserRound } from "lucide-react";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/layout/Divider";
import { AboutHighlights } from "./AboutHighlights";
import { EngineeringPhilosophy } from "./EngineeringPhilosophy";
import { CurrentFocus } from "./CurrentFocus";
import { CoreValues } from "./CoreValues";
import { LearningRoadmap } from "./LearningRoadmap";
import { aboutContent } from "@/content/about";

export interface AboutSectionProps {
  readonly className?: string;
}

/**
 * AboutSection Component
 * Full "About Me & Engineering Philosophy" section on the homepage.
 * All content is driven from `@/content/about` — strictly verified, zero fabrications.
 *
 * @accessibility Landmark `<section id="about">` with semantic heading hierarchy (h2 → h3 → h4).
 * @performance 100% Server Component — 0kB client JavaScript.
 */
export const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  return (
    <Section
      id="about"
      aria-label="About Me and Engineering Philosophy"
      spacing="lg"
      containerSize="default"
      className={className}
    >
      <Stack gap={10} align="stretch">
        {/* ── Section Header ───────────────────────────────── */}
        <div className="space-y-2 border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent" icon={UserRound} className="text-xs font-mono">
              Engineering Mindset
            </Badge>
          </div>
          <Typography variant="h2" as="h2" className="text-fg-primary font-bold tracking-tight">
            About & Engineering Philosophy
          </Typography>
        </div>

        {/* ── Highlights Bar ──────────────────────────────── */}
        <AboutHighlights highlights={aboutContent.highlights} />

        <Divider />

        {/* ── Two-column: Bio (left) + Interests + Focus (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Bio Paragraphs — 3 columns wide */}
          <div className="lg:col-span-3 space-y-4">
            {aboutContent.paragraphs.map((para, idx) => (
              <Typography key={idx} variant="body" className="text-fg-secondary leading-relaxed">
                {para}
              </Typography>
            ))}
          </div>

          {/* Interests + Current Focus — 2 columns wide */}
          <div className="lg:col-span-2 space-y-6">
            <CoreValues interests={aboutContent.interests} />
            <CurrentFocus techs={aboutContent.currentFocusTechs} />
          </div>
        </div>

        <Divider />

        {/* ── Engineering Philosophy ──────────────────────── */}
        <EngineeringPhilosophy principles={aboutContent.philosophyPrinciples} />

        <Divider />

        {/* ── Learning Roadmap ────────────────────────────── */}
        <LearningRoadmap areas={aboutContent.roadmapAreas} />
      </Stack>
    </Section>
  );
};
