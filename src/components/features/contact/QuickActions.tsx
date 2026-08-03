import React from "react";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/features/recruiter/CopyEmailButton";
import { siteConfig } from "@/content/site";
import { socialLinks } from "@/content/social";

export interface QuickActionsProps {
  readonly className?: string;
}

/**
 * QuickActions Component
 * Fast-track recruiter action strip: Copy Email, Download Resume, Open GitHub, Open LinkedIn.
 * All URLs resolved from typed content — no hardcoded links.
 * Gracefully handles missing links by omitting the action.
 *
 * @accessibility WCAG AA compliant buttons with explicit aria-labels.
 * @performance Minimal client footprint — only CopyEmailButton needs client state.
 */
export const QuickActions: React.FC<QuickActionsProps> = ({ className = "" }) => {
  const github = socialLinks.find((s) => s.platform === "github");
  const linkedin = socialLinks.find((s) => s.platform === "linkedin");
  const resumeUrl = siteConfig.author.resumePdfUrl;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* Copy Email — client interactive */}
      <CopyEmailButton variant="primary" size="md" className="w-full sm:w-auto" />

      {/* Download Resume */}
      {resumeUrl && (
        <Button variant="outline" size="md" className="w-full sm:w-auto" asChild>
          <a
            href={resumeUrl}
            download
            aria-label="Download Balaraj M P resume PDF"
          >
            <FileText className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
            Download Resume
          </a>
        </Button>
      )}

      {/* Open GitHub */}
      {github && (
        <Button variant="ghost" size="md" className="w-full sm:w-auto" asChild>
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={github.ariaLabel ?? "View GitHub profile"}
          >
            <Github className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
            GitHub
          </a>
        </Button>
      )}

      {/* Open LinkedIn */}
      {linkedin && (
        <Button variant="ghost" size="md" className="w-full sm:w-auto" asChild>
          <a
            href={linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={linkedin.ariaLabel ?? "View LinkedIn profile"}
          >
            <Linkedin className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
            LinkedIn
          </a>
        </Button>
      )}

      {/* Direct email link */}
      <Button variant="ghost" size="md" className="w-full sm:w-auto" asChild>
        <a
          href={`mailto:${siteConfig.author.email}`}
          aria-label={`Send email to ${siteConfig.author.email}`}
        >
          <Mail className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
          Email
        </a>
      </Button>
    </div>
  );
};
