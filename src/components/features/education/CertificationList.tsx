import React from "react";
import { ShieldCheck } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { CertificationCard } from "./CertificationCard";
import { certifications } from "@/content/certifications";

export interface CertificationListProps {
  readonly className?: string;
}

/**
 * CertificationList Component
 * Renders all verified professional certifications from the content collection.
 *
 * @accessibility Semantic section heading with WCAG AA compliant card list.
 * @performance Server Component — consumes static typed content with 0kB JS overhead.
 */
export const CertificationList: React.FC<CertificationListProps> = ({ className = "" }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2 border-b border-border-subtle/60 pb-2">
        <ShieldCheck className="h-4 w-4 text-accent-hover shrink-0" aria-hidden="true" />
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-lg">
          Certifications & Credentials
        </Typography>
      </div>
      <div className="space-y-3">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </div>
  );
};
