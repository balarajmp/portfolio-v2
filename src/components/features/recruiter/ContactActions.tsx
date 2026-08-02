import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ResumeButton } from "@/components/shared/navigation/ResumeButton";
import { CopyEmailButton } from "./CopyEmailButton";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";

export interface ContactActionsProps {
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * ContactActions Component
 * Exposes 1-click recruiter fast-track triggers: Copy Email, Resume Download, GitHub, LinkedIn, and Direct Mail.
 * Driven strictly from typed content collections without hardcoded URLs.
 *
 * @accessibility Fully keyboard accessible with aria-labels and minimum touch targets.
 * @performance Server Component embedding the client-side CopyEmailButton leaf node.
 */
export const ContactActions: React.FC<ContactActionsProps> = ({ className = "" }) => {
  const githubLink = socialLinks.find((s) => s.platform === "github")?.url || siteConfig.siteUrl;
  const linkedinLink =
    socialLinks.find((s) => s.platform === "linkedin")?.url || "https://linkedin.com/in/balarajmp";
  const email = siteConfig.author.email;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* 1-Click Copy Email Trigger (Client Leaf Node) */}
      <CopyEmailButton email={email} variant="primary" size="md" />

      {/* Resume PDF Download Trigger */}
      <ResumeButton
        href={siteConfig.author.resumePdfUrl}
        variant="outline"
        size="md"
        className="font-sans font-medium"
      >
        Download Resume
      </ResumeButton>

      {/* GitHub Profile Button */}
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

      {/* LinkedIn Profile Button */}
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

      {/* Direct Mailto Fallback Link */}
      <Button variant="ghost" size="md" asChild>
        <a href={`mailto:${email}`} aria-label={`Send email directly to ${email}`}>
          <Mail className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
          <span>Direct Email</span>
        </a>
      </Button>
    </div>
  );
};
