import React from "react";
import { User } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Chip } from "@/components/ui/Chip";

export interface CoreValuesProps {
  readonly interests: ReadonlyArray<string>;
  readonly className?: string;
}

/**
 * CoreValues Component
 * Displays the candidate's engineering interest domains as scannable tags.
 * Kept separate from the philosophy section to avoid repetition.
 *
 * @accessibility Semantic chip list with accessible aria-label.
 * @performance Server Component with zero JavaScript overhead.
 */
export const CoreValues: React.FC<CoreValuesProps> = ({ interests, className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-accent-hover shrink-0" aria-hidden="true" />
        <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-xl">
          Engineering Interests
        </Typography>
      </div>
      <div className="flex flex-wrap gap-2" role="list" aria-label="Engineering interest areas">
        {interests.map((interest) => (
          <div key={interest} role="listitem">
            <Chip
              interactive={false}
              className="text-xs font-mono py-1 px-3 bg-accent-subtle/30 border-accent-primary/20 text-accent-hover"
            >
              {interest}
            </Chip>
          </div>
        ))}
      </div>
    </div>
  );
};
