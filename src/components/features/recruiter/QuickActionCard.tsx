import React from "react";
import { Zap } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Typography } from "@/components/ui/Typography";
import { ContactActions } from "./ContactActions";

export interface QuickActionCardProps {
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * QuickActionCard Component
 * Dashboard card presenting 1-click recruiter actions (Resume, GitHub, LinkedIn, Copy Email) to minimize friction.
 *
 * @accessibility WCAG AA contrast with semantic triggers and aria-labels.
 * @performance Server Component with zero hardcoded URLs.
 */
export const QuickActionCard: React.FC<QuickActionCardProps> = ({ className = "" }) => {
  return (
    <Card glass padding="lg" radius="lg" className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-subtle text-accent-hover">
            <Zap className="h-4 w-4" aria-hidden="true" />
          </div>
          <Typography variant="h4" as="h3" className="font-semibold text-fg-primary">
            Recruiter Quick Actions
          </Typography>
        </div>
        <Typography variant="caption" className="font-mono text-fg-muted">
          1-Click Access
        </Typography>
      </div>

      <Typography variant="small" className="text-fg-secondary">
        Directly download candidate assets or launch external profiles without multi-step navigation.
      </Typography>

      <ContactActions className="pt-2" />
    </Card>
  );
};
