"use client";

import { createContext, useContext } from "react";

export interface CommandContextType {
  /** Whether the global Command Palette dialog is open */
  isOpen: boolean;
  /** Set open state directly */
  setIsOpen: (open: boolean) => void;
  /** Programmatically open the Command Palette */
  openCommandPalette: () => void;
  /** Programmatically close the Command Palette */
  closeCommandPalette: () => void;
  /** Programmatically toggle the Command Palette */
  toggleCommandPalette: () => void;
}

export const CommandContext = createContext<CommandContextType | null>(null);

/**
 * Custom hook to access global Command Palette controls.
 * Throws a descriptive error if called outside a <CommandProvider>.
 */
export function useCommand(): CommandContextType {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error("useCommand must be used within a <CommandProvider>");
  }
  return context;
}
