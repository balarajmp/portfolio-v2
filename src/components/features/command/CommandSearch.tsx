"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CommandSearchProps {
  value?: string;
  onValueChange?: (search: string) => void;
  placeholder?: string;
  className?: string;
  onClose?: () => void;
}

/**
 * CommandSearch Component
 * Encapsulates cmdk search input box with obsidian dark mode styling,
 * clear trigger, and ESC shortcut indicator.
 */
export const CommandSearch: React.FC<CommandSearchProps> = ({
  value,
  onValueChange,
  placeholder = "Type a command or search projects, skills, journey...",
  className,
}) => {
  return (
    <div className="flex items-center border-b border-border-subtle/80 px-4 py-3.5 bg-bg-surface1/60">
      <Search className="h-4 w-4 shrink-0 text-fg-muted mr-3" aria-hidden="true" />
      <Command.Input
        value={value}
        onValueChange={onValueChange}
        placeholder={placeholder}
        className={cn(
          "w-full bg-transparent font-sans text-sm text-fg-primary placeholder:text-fg-muted focus:outline-none focus:ring-0 border-0 p-0",
          className
        )}
      />
      {value ? (
        <button
          type="button"
          onClick={() => onValueChange?.("")}
          className="p-1 rounded hover:bg-bg-surface2 text-fg-muted hover:text-fg-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focus"
          aria-label="Clear search query"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      ) : (
        <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border-subtle bg-bg-surface2 px-1.5 py-0.5 font-mono text-[10px] font-medium text-fg-muted">
          ESC
        </kbd>
      )}
    </div>
  );
};
