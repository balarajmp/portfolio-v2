"use client";

import * as React from "react";
import { Command } from "cmdk";
import { cn } from "@/lib/utils";

export interface CommandGroupProps {
  heading: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * CommandGroup Component
 * Section group container with styled overline group headings.
 */
export const CommandGroup: React.FC<CommandGroupProps> = ({
  heading,
  children,
  className,
}) => {
  return (
    <Command.Group
      heading={heading}
      className={cn(
        "py-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-fg-muted",
        className
      )}
    >
      {children}
    </Command.Group>
  );
};
