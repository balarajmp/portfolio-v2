"use client";

import * as React from "react";
import { CommandContext, type CommandContextType } from "./useCommand";

const CommandPaletteLazy = React.lazy(() => import("./CommandPalette"));

export interface CommandProviderProps {
  children: React.ReactNode;
}

/**
 * CommandProvider Component
 * Lightweight React Context Provider managing global command palette open/close state.
 * Registers global Ctrl+K / Cmd+K keyboard shortcut listeners.
 * Lazy-loads the heavy CommandPalette dialog UI only when opened to minimize initial bundle hydration size.
 */
export const CommandProvider: React.FC<CommandProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openCommandPalette = React.useCallback(() => setIsOpen(true), []);
  const closeCommandPalette = React.useCallback(() => setIsOpen(false), []);
  const toggleCommandPalette = React.useCallback(() => setIsOpen((prev) => !prev), []);

  // Register global Cmd+K / Ctrl+K keyboard shortcut listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const value: CommandContextType = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      openCommandPalette,
      closeCommandPalette,
      toggleCommandPalette,
    }),
    [isOpen, openCommandPalette, closeCommandPalette, toggleCommandPalette]
  );

  return (
    <CommandContext.Provider value={value}>
      {children}
      {isOpen && (
        <React.Suspense fallback={null}>
          <CommandPaletteLazy isOpen={isOpen} onClose={closeCommandPalette} />
        </React.Suspense>
      )}
    </CommandContext.Provider>
  );
};
