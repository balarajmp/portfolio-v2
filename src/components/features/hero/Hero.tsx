import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { FadeIn } from "@/components/ui/composite";
import { siteConfig } from "@/content/site";
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
 * Communicates technical credibility within 5 seconds using scannable data, candidate photo, verified metrics, and recruiter fast-track actions.
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
        {/* Main Grid: Left (Headline & Actions) + Right (Candidate Profile Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Text Content & Recruiter Actions */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <HeroAvailability />
            <HeroContent />
            <HeroActions />
            <HeroTechStack />
          </div>

          {/* Right Column: Candidate Profile Image Card */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <FadeIn direction="left" delay={0.2} className="relative group">
              {/* Outer Ambient Radial Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/40 to-accent-hover/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

              {/* Profile Card Frame */}
              <div className="relative rounded-2xl bg-bg-surface1/90 border border-border-glass p-2 sm:p-3 shadow-glass backdrop-blur-md overflow-hidden">
                <div className="relative aspect-square w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden border border-border-subtle/60">
                  <Image
                    src={siteConfig.author.avatar.src}
                    alt={siteConfig.author.avatar.alt}
                    width={siteConfig.author.avatar.width}
                    height={siteConfig.author.avatar.height}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  {/* Status Badge Tag inside Profile Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-bg-surface1/85 border border-border-glass backdrop-blur-md">
                    <span className="text-xs font-mono text-fg-primary font-medium flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      {siteConfig.author.name}
                    </span>
                    <span className="text-[10px] font-mono text-accent-primary uppercase tracking-wider font-semibold">
                      Software Eng.
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Verified Metrics Grid (3 Major Projects, May 2027 Grad, 8.68 CGPA, Open Status) */}
        <HeroMetrics className="w-full pt-4" />
      </Stack>
    </Section>
  );
};

