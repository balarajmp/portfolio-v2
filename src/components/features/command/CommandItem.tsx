"use client";

import * as React from "react";
import { Command } from "cmdk";
import { type LucideIcon, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface CommandItemProps {
  id?: string;
  value: string;
  onSelect: (value: string) => void;
  title: string;
  description?: string;
  category?: string;
  icon?: LucideIcon;
  actionText?: string;
  className?: string;
  disabled?: boolean;
}

/**
 * CommandItem Component
 * Individual interactive command item with hover/keyboard focus styling, icon, category, and action indicator.
 */
export const CommandItem: React.FC<CommandItemProps> = ({
  value,
  onSelect,
  title,
  description,
  category,
  icon: Icon,
  actionText = "Execute",
  className,
  disabled = false,
}) => {
  return (
    <Command.Item
      value={value}
      onSelect={onSelect}
      disabled={disabled}
      className={cn(
        "group relative flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-sans cursor-pointer select-none outline-none border border-transparent transition-colors duration-fast",
        "data-[selected=true]:bg-accent-subtle/25 data-[selected=true]:border-accent-primary/30 data-[selected=true]:text-fg-primary",
        "text-fg-secondary hover:text-fg-primary",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div className="flex items-center gap-3 min-w-0 pr-2">
        {Icon && (
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle group-data-[selected=true]:bg-accent-primary/20 group-data-[selected=true]:border-accent-primary/50 group-data-[selected=true]:text-accent-primary text-fg-muted transition-colors">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </div>
        )}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-fg-primary truncate">{title}</span>
            {category && (
              <Badge variant="default" className="text-[10px] py-0 px-1.5 font-normal">
                {category}
              </Badge>
            )}
          </div>
          {description && (
            <span className="text-xs text-fg-muted truncate mt-0.5">{description}</span>
          )}
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-1 text-xs text-fg-muted group-data-[selected=true]:text-accent-primary transition-colors shrink-0">
        <span className="text-[11px] font-mono">{actionText}</span>
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
      </div>
    </Command.Item>
  );
};
