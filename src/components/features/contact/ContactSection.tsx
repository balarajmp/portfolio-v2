import React from "react";
import { MessageSquare } from "lucide-react";
import { Section } from "@/components/ui/layout/Section";
import { Stack } from "@/components/ui/layout/Stack";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/layout/Divider";
import { ContactCard } from "./ContactCard";
import { AvailabilityCard } from "./AvailabilityCard";
import { SocialGrid } from "./SocialGrid";
import { QuickActions } from "./QuickActions";
import { ContactForm } from "./ContactForm";

export interface ContactSectionProps {
  readonly className?: string;
}

/**
 * ContactSection Component
 * Full Contact & Availability section on the homepage.
 * Makes it effortless for recruiters to reach the candidate through multiple verified channels.
 *
 * @accessibility Landmark `<section id="contact">` with WCAG AA semantic heading hierarchy.
 * @performance Server Component shell — only QuickActions and ContactForm hydrate client-side.
 */
export const ContactSection: React.FC<ContactSectionProps> = ({ className = "" }) => {
  return (
    <Section
      id="contact"
      aria-label="Contact and Availability"
      spacing="lg"
      containerSize="default"
      background="surface1"
      className={`border-t border-border-subtle/80 ${className}`}
    >
      <Stack gap={8} align="stretch">
        {/* ── Section Header ───────────────────────────────── */}
        <div className="space-y-2 border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent" icon={MessageSquare} className="text-xs font-mono">
              Open to Opportunities
            </Badge>
          </div>
          <Typography variant="h2" as="h2" className="text-fg-primary font-bold tracking-tight">
            Contact & Availability
          </Typography>
          <Typography variant="lead" className="text-fg-secondary max-w-3xl">
            Available for Software Engineer, Backend Developer, and Full-Stack Developer roles.
            Reach out directly — every recruiter message gets a personal reply.
          </Typography>
        </div>

        {/* ── Quick Actions Bar ────────────────────────────── */}
        <QuickActions />

        <Divider />

        {/* ── Two-column: Info cards (left) / Form (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact + Availability + Social */}
          <Stack gap={5} align="stretch">
            <ContactCard />
            <AvailabilityCard />
            <SocialGrid />
          </Stack>

          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </Stack>
    </Section>
  );
};
