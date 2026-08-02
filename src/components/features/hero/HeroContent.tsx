import React from "react";
import { Typography } from "@/components/ui";
import { siteConfig } from "@/content/site";

export interface HeroContentProps {
  /** Candidate name override */
  readonly name?: string;
  /** Professional headline override */
  readonly headline?: string;
  /** Short scannable value proposition override */
  readonly valueProp?: string;
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * HeroContent Component
 * Communicates candidate credibility within 5 seconds using scannable, non-fluff copy.
 *
 * @accessibility Uses semantic <h1> heading hierarchy and high-contrast typography.
 */
export const HeroContent: React.FC<HeroContentProps> = ({
  name = siteConfig.author.name,
  headline = siteConfig.author.roleTitle,
  valueProp = "Building production-grade web applications, microservices, and machine learning pipelines with high performance and clean architecture.",
  className = "",
}) => {
  return (
    <div className={`space-y-4 max-w-3xl ${className}`}>
      {/* Candidate Name & Title Header */}
      <div className="space-y-2">
        <Typography
          variant="caption"
          className="text-accent-hover font-mono uppercase tracking-widest block"
        >
          {name}
        </Typography>
        <Typography variant="display" as="h1" className="text-balance">
          {headline}
        </Typography>
      </div>

      {/* Concise Value Proposition */}
      <Typography variant="lead" className="text-fg-secondary text-balance max-w-2xl">
        {valueProp}
      </Typography>
    </div>
  );
};
