"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { useCommand } from "./useCommand";
import { cn } from "@/lib/utils";

export interface CommandTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  showShortcut?: boolean;
}

/**
 * CommandTrigger Component
 * Interactive button primitive that opens the global Command Palette when clicked.
 */
export const CommandTrigger: React.FC<CommandTriggerProps> = ({
  className,
  showShortcut = true,
  ...props
}) => {
  const { openCommandPalette } = useCommand();

  return (
    <button
      type="button"
      onClick={openCommandPalette}
      className={cn(
        "flex items-center gap-2 rounded-lg border border-border-subtle/80 bg-bg-surface2/60 px-3 py-1.5 text-xs font-sans text-fg-muted hover:text-fg-primary hover:bg-bg-surfaceHover hover:border-border-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus cursor-pointer select-none",
        className
      )}
      aria-label="Open Command Palette (Ctrl+K)"
      {...props}
    >
      <Search className="h-3.5 w-3.5 shrink-0 text-accent-primary" aria-hidden="true" />
      <span className="hidden sm:inline font-medium">Search...</span>
      {showShortcut && (
        <kbd className="hidden md:inline-flex items-center gap-0.5 rounded border border-border-subtle bg-bg-surface1 px-1.5 py-0.5 font-mono text-[10px] font-medium text-fg-muted shadow-subtle">
          <span className="text-[9px]">⌘</span>K
        </kbd>
      )}
    </button>
  );
};
