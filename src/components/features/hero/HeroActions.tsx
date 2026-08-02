import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ResumeButton } from "@/components/shared/navigation/ResumeButton";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";

export interface HeroActionsProps {
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * HeroActions Component
 * Recruiter fast-track action bar providing 1-click access to Resume, GitHub, LinkedIn, and Email contact.
 *
 * @accessibility Fully keyboard accessible interactive elements with explicit aria-labels and touch targets >= 44px.
 * @performance Server Component with 0kB client JavaScript bundle overhead.
 */
export const HeroActions: React.FC<HeroActionsProps> = ({ className = "" }) => {
  const githubLink = socialLinks.find((s) => s.platform === "github")?.url || siteConfig.siteUrl;
  const linkedinLink =
    socialLinks.find((s) => s.platform === "linkedin")?.url || "https://linkedin.com/in/balarajmp";
  const emailLink = `mailto:${siteConfig.author.email}`;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Primary CTA: Resume Download */}
      <ResumeButton
        href={siteConfig.author.resumePdfUrl}
        variant="primary"
        size="md"
        className="font-sans font-medium"
      >
        Download Resume
      </ResumeButton>

      {/* GitHub Profile */}
      <Button variant="outline" size="md" asChild>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub profile (opens in new tab)"
        >
          <Github className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
          <span>GitHub</span>
        </a>
      </Button>

      {/* LinkedIn Profile */}
      <Button variant="outline" size="md" asChild>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View LinkedIn profile (opens in new tab)"
        >
          <Linkedin className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
      </Button>

      {/* Contact / Direct Email */}
      <Button variant="ghost" size="md" asChild>
        <a href={emailLink} aria-label="Send direct email to candidate">
          <Mail className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
          <span>Contact</span>
        </a>
      </Button>
    </div>
  );
};
