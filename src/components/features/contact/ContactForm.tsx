"use client";

import React from "react";
import { Send, Info } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { FormField } from "@/components/ui/forms/FormField";
import { Input } from "@/components/ui/forms/Input";
import { TextArea } from "@/components/ui/forms/TextArea";
import { Button } from "@/components/ui/Button";

export interface ContactFormProps {
  readonly className?: string;
}

/**
 * ContactForm Component
 * Presentational contact form using existing reusable form primitives.
 * No backend submission yet — future-ready with clear labeling.
 *
 * @accessibility Fully labeled form fields with WCAG AA compliant error/hint text patterns.
 * @performance Client Component required for form state; isolated to this component only.
 * @futureReady Wire `onSubmit` to a serverless function (Resend, SendGrid, or App Router Action).
 */
export const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Future: wire to backend action or serverless function
    setSubmitted(true);
  };

  return (
    <Card
      glass
      padding="lg"
      radius="lg"
      outlined
      className={`space-y-5 bg-bg-surface1/70 ${className}`}
    >
      {/* Header */}
      <div className="space-y-1 border-b border-border-subtle pb-3">
        <div className="flex items-center justify-between gap-2">
          <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-lg">
            Send a Message
          </Typography>
          <Badge variant="default" icon={Info} className="text-[10px] font-mono">
            Future Ready
          </Badge>
        </div>
        <p className="text-xs text-fg-muted">
          Backend submission not yet wired — form is presentational. For direct contact, use the email or quick actions above.
        </p>
      </div>

      {submitted ? (
        /* Success state */
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-status-success-bg border border-status-success-border">
            <Send className="h-5 w-5 text-status-success-fg" aria-hidden="true" />
          </div>
          <Typography variant="h4" as="p" className="font-semibold text-fg-primary">
            Message captured!
          </Typography>
          <p className="text-sm text-fg-secondary max-w-xs">
            Once backend submission is wired, this message would be delivered automatically.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSubmitted(false)}
          >
            Send another
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField id="contact-name" label="Full Name" required>
              <Input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                required
                autoComplete="name"
              />
            </FormField>

            <FormField id="contact-email" label="Email Address" required>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
                autoComplete="email"
              />
            </FormField>
          </div>

          {/* Subject */}
          <FormField id="contact-subject" label="Subject" required>
            <Input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Engineering role enquiry — [Company Name]"
              required
            />
          </FormField>

          {/* Message */}
          <FormField id="contact-message" label="Message" required>
            <TextArea
              id="contact-message"
              name="message"
              placeholder="Share details about the role, team, or specific questions..."
              rows={5}
              required
            />
          </FormField>

          {/* Submit */}
          <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
            <Send className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
            Send Message
          </Button>
        </form>
      )}
    </Card>
  );
};
