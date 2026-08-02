import React from "react";
import { Badge } from "@/components/ui";

export interface HeroAvailabilityProps {
  /** Optional custom text override for candidate availability status */
  readonly statusText?: string;
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * HeroAvailability Component
 * Renders the top availability status badge to signal candidate work readiness immediately above the fold.
 *
 * @accessibility High contrast status pill with WCAG AA compliant green indicator dot.
 */
export const HeroAvailability: React.FC<HeroAvailabilityProps> = ({
  statusText = "Open to Software Engineer opportunities",
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Badge variant="success" dot className="px-3 py-1 text-xs sm:text-sm">
        {statusText}
      </Badge>
    </div>
  );
};
