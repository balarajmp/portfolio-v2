import React from "react";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { HeroBackground } from "./HeroBackground";
import { HeroAvailability } from "./HeroAvailability";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroTechStack } from "./HeroTechStack";
import { HeroMetrics } from "./HeroMetrics";

export interface HeroProps {
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * Hero Component (Engineering Landing Above-the-Fold Showcase)
 * Communicates technical credibility within 5 seconds using scannable data, verified metrics, and recruiter fast-track actions.
 *
 * @accessibility WCAG 2.1 AA compliant. Landmark `<section id="hero">` with `aria-label`.
 * @performance Server Component by default with zero-JS overhead for static layout and content.
 */
export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <Section
      id="hero"
      aria-label="Engineering Portfolio Hero Overview"
      spacing="lg"
      containerSize="default"
      className={`relative pt-12 pb-16 lg:pt-20 lg:pb-24 ${className}`}
    >
      {/* Layered Subtle Radial Glow & Depth Background */}
      <HeroBackground />

      <Stack gap={8} align="start" className="relative z-10">
        {/* Top Work Availability Status Badge */}
        <HeroAvailability />

        {/* Candidate Name, Headline & Scannable Value Prop */}
        <HeroContent />

        {/* Primary Recruiter Fast-Track Actions (Resume, GitHub, LinkedIn, Contact) */}
        <HeroActions />

        {/* Verified Tech Stack Pills (Rendered dynamically from content) */}
        <HeroTechStack />

        {/* Verified Metrics Grid (3 Major Projects, May 2027 Grad, 8.6 CGPA, Open Status) */}
        <HeroMetrics className="w-full pt-4" />
      </Stack>
    </Section>
  );
};
