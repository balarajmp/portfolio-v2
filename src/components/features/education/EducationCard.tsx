import React from "react";
import { GraduationCap, MapPin, CheckCircle2, Clock } from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Badge } from "@/components/ui/Badge";
import { Typography } from "@/components/ui/Typography";
import { CourseworkList } from "./CourseworkList";
import type { Education } from "@/types";

export interface EducationCardProps {
  readonly record: Education;
  readonly className?: string;
}

/**
 * EducationCard Component
 * Displays a single academic record with institution, grade, status badge, and coursework.
 *
 * @accessibility Semantic article element with WCAG AA compliant contrast.
 * @performance Server Component with zero JavaScript overhead.
 */
export const EducationCard: React.FC<EducationCardProps> = ({ record, className = "" }) => {
  const isPursuing = record.status === "pursuing";
  const gradeDisplay = record.gradeOrCgpa
    ? `${record.gradeOrCgpa}${record.gradeLabel === "CGPA" ? " CGPA" : record.gradeLabel === "Percentage" ? "%" : ""}`
    : null;

  return (
    <Card
      as="article"
      glass
      padding="md"
      radius="lg"
      outlined
      className={`space-y-4 bg-bg-surface1/80 hover:border-border-strong transition-all duration-normal ${className}`}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        {/* Icon Orb */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-surface2 border border-border-subtle text-accent-hover shrink-0">
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="space-y-1 min-w-0 flex-1">
          {/* Degree + Status */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <Typography variant="h4" as="h3" className="font-bold text-fg-primary text-base leading-snug">
                {record.degree}
              </Typography>
              <p className="text-sm text-accent-hover font-medium">{record.fieldOfStudy}</p>
            </div>
            <Badge
              variant={isPursuing ? "accent" : "default"}
              icon={isPursuing ? Clock : CheckCircle2}
              className="text-[11px] font-mono shrink-0"
            >
              {isPursuing ? "Pursuing" : "Completed"}
            </Badge>
          </div>

          {/* Institution & Location */}
          <div className="flex items-center gap-1.5 text-xs text-fg-secondary">
            <MapPin className="h-3 w-3 text-fg-muted shrink-0" aria-hidden="true" />
            <span className="font-medium">{record.institution.name}</span>
            <span className="text-fg-muted">&bull;</span>
            <span className="text-fg-muted">{record.institution.location}</span>
          </div>

          {/* Date & Grade row */}
          <div className="flex flex-wrap items-center gap-3 pt-0.5">
            <span className="font-mono text-xs text-fg-muted">
              {record.dateRange.formattedDisplay}
            </span>
            {gradeDisplay && (
              <Badge variant="success" className="text-[11px] font-mono font-semibold">
                {gradeDisplay}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Coursework */}
      {record.relevantCoursework && record.relevantCoursework.length > 0 && (
        <CourseworkList coursework={record.relevantCoursework} />
      )}
    </Card>
  );
};
