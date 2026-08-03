import React from "react";
import { FolderCode, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { StatCard } from "@/components/ui/composite/StatCard";
import { Grid } from "@/components/ui/layout/Grid";

export interface HeroMetricsProps {
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * HeroMetrics Component
 * Renders verified candidate metric cards (3 Major Projects, May 2027 Graduation, 8.6 CGPA, Open Status).
 *
 * @accessibility WCAG AA contrast ratios with semantic telemetry formatting.
 * @performance Server Component with strictly verified data. Zero fake statistics.
 */
export const HeroMetrics: React.FC<HeroMetricsProps> = ({ className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <Grid cols={4} gap={4} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Metric 1: Flagship Projects */}
        <StatCard
          title="Flagship Systems"
          value="3 Projects"
          description="Production web apps & ML pipelines"
          icon={FolderCode}
          radius="lg"
          padding="md"
        />

        {/* Metric 2: Graduation Timeline */}
        <StatCard
          title="Graduation"
          value="May 2027"
          description="B.E. Information Science & Eng."
          icon={GraduationCap}
          radius="lg"
          padding="md"
        />

        {/* Metric 3: Academic Score */}
        <StatCard
          title="Academic Score"
          value="8.68 CGPA"
          description="Verified academic performance"
          icon={Award}
          radius="lg"
          padding="md"
        />

        {/* Metric 4: Work Availability Status */}
        <StatCard
          title="Availability"
          value="Open to Offers"
          description="Software Engineer roles"
          icon={CheckCircle2}
          radius="lg"
          padding="md"
        />
      </Grid>
    </div>
  );
};
