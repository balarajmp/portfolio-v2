import React from "react";
import { BookMarked } from "lucide-react";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { Grid } from "@/components/ui/layout/Grid";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/composite";
import { EducationTimeline } from "./EducationTimeline";
import { CertificationList } from "./CertificationList";
import { HackathonList } from "./HackathonList";
import { SeminarList } from "./SeminarList";

export interface EducationSectionProps {
  readonly className?: string;
}

/**
 * EducationSection Component
 * Comprehensive credential showcase: academic timeline, certifications, hackathons, and seminars.
 * Demonstrates continuous technical learning beyond the formal curriculum.
 *
 * @accessibility Landmark `<section id="education">` with WCAG AA semantic heading hierarchy.
 * @performance Server Component — 0kB client JavaScript overhead.
 */
export const EducationSection: React.FC<EducationSectionProps> = ({ className = "" }) => {
  return (
    <Section
      id="education"
      aria-label="Education and Credentials"
      spacing="lg"
      containerSize="default"
      background="surface1"
      className={`border-y border-border-subtle/80 ${className}`}
    >
      <Stack gap={8} align="stretch">
        {/* Section Header */}
        <FadeIn direction="up" className="space-y-2 border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent" icon={BookMarked} className="text-xs font-mono">
              Academic Background
            </Badge>
          </div>
          <Typography variant="h2" as="h2" className="text-fg-primary font-bold tracking-tight">
            Education & Credentials
          </Typography>
          <Typography variant="lead" className="text-fg-secondary max-w-3xl">
            Formal academic qualifications, industry certifications, competitive programming events, and industry seminars — documenting continuous technical development.
          </Typography>
        </FadeIn>

        {/* Two-column layout on md+: Timeline (left) / Credentials (right) */}
        <Grid cols={2} gap={8} className="grid-cols-1 lg:grid-cols-2 items-start">
          {/* Left: Academic Timeline */}
          <FadeIn direction="up" delay={0.1} className="space-y-4">
            <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-xl border-b border-border-subtle pb-2">
              Academic History
            </Typography>
            <EducationTimeline />
          </FadeIn>

          {/* Right: Certifications + Hackathons + Seminars */}
          <FadeIn direction="up" delay={0.2}>
            <Stack gap={8} align="stretch">
              <CertificationList />
              <HackathonList />
              <SeminarList />
            </Stack>
          </FadeIn>
        </Grid>
      </Stack>
    </Section>
  );
};
