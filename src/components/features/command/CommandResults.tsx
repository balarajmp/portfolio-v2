"use client";

import * as React from "react";
import { Command } from "cmdk";
import { SearchX } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CommandResultsProps {
  children: React.ReactNode;
  className?: string;
  emptyText?: string;
}

/**
 * CommandResults Component
 * Encapsulates cmdk scrollable list container and empty search state.
 */
export const CommandResults: React.FC<CommandResultsProps> = ({
  children,
  className,
  emptyText = "No matching commands, projects, or skills found.",
}) => {
  return (
    <Command.List
      className={cn(
        "max-h-[360px] overflow-y-auto overflow-x-hidden p-2 space-y-2",
        className
      )}
    >
      <Command.Empty className="py-12 text-center text-sm text-fg-muted flex flex-col items-center justify-center gap-2">
        <SearchX className="h-8 w-8 text-fg-muted/60" aria-hidden="true" />
        <p className="font-medium text-fg-secondary">{emptyText}</p>
        <p className="text-xs text-fg-muted">
          Try searching for &quot;React&quot;, &quot;Resume&quot;, &quot;FastAPI&quot;, or &quot;GitHub&quot;.
        </p>
      </Command.Empty>
      {children}
    </Command.List>
  );
};
