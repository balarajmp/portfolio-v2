import React from "react";
import { MapPin, GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";
import { education } from "@/content/education";

export interface ProfileSnapshotProps {
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * ProfileSnapshot Component
 * Executive summary card detailing verified candidate metrics: Location, Degree, CGPA, Graduation, Availability.
 *
 * @accessibility WCAG AA contrast with semantic list items and aria-labels.
 * @performance Server Component with zero client JavaScript overhead.
 */
export const ProfileSnapshot: React.FC<ProfileSnapshotProps> = ({ className = "" }) => {
  const edu = education[0];
  const location = siteConfig.author.location;
  const relocationPref = siteConfig.recruiter.relocationPreference;

  const snapshotItems = [
    {
      id: "snap-location",
      label: "Location",
      value: `${location} — ${relocationPref}`,
      icon: MapPin,
    },
    {
      id: "snap-degree",
      label: "Degree",
      value: edu ? `${edu.degree} in ${edu.fieldOfStudy}` : "B.E. Computer Science & Engineering",
      icon: GraduationCap,
    },
    {
      id: "snap-cgpa",
      label: "CGPA",
      value: edu?.gradeOrCgpa ? `${edu.gradeOrCgpa} ${edu.gradeLabel ?? ""}`.trim() : "8.68 CGPA",
      icon: Award,
    },
    {
      id: "snap-graduation",
      label: "Graduation Date",
      value: edu?.dateRange.endDate || "May 2027",
      icon: Calendar,
    },
    {
      id: "snap-availability",
      label: "Status",
      value: "Open to Software Engineer Opportunities",
      icon: CheckCircle2,
    },
  ];

  return (
    <Card glass padding="lg" radius="lg" className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <Typography variant="h4" as="h3" className="font-semibold text-fg-primary">
          Profile Snapshot
        </Typography>
        <Typography variant="caption" className="font-mono text-accent-hover uppercase tracking-wider">
          Verified Credentials
        </Typography>
      </div>

      <ul className="space-y-3" aria-label="Candidate Profile Credentials Summary">
        {snapshotItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.id} className="flex items-start gap-3 text-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle text-accent-hover shrink-0 mt-0.5">
                <IconComponent className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="space-y-0.5 min-w-0 flex-1">
                <span className="font-mono text-xs text-fg-muted block">{item.label}</span>
                <span className="font-sans font-medium text-fg-primary block truncate">
                  {item.value}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
