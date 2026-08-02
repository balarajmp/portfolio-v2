"use client";

/**
 * Purpose: Specialized search input primitive with magnifier icon, keyboard shortcut badge (⌘K), loading spinner, and 1-click clear button.
 * Used By: Command Palette, Project Search Filters, ADR Search Bar, Skill Radar Query Control.
 * Accessibility: WCAG AA contrast, keyboard shortcut accessibility, aria-busy loading indicator, aria-label clear trigger.
 * Notes: Built on top of the Input primitive with Obsidian dark mode design tokens.
 */

import * as React from "react";
import { Loader2, Search } from "lucide-react";
import { Input, type InputProps } from "./Input";
import { cn } from "@/lib/utils";

export interface SearchInputProps extends Omit<InputProps, "type"> {
  /**
   * Keyboard shortcut key hint displayed when search is empty (e.g. "⌘K", "Ctrl+K", "/")
   * @default "⌘K"
   */
  shortcutKey?: string;
  /**
   * Displays loading spinner in place of the search icon during active queries
   * @default false
   */
  loading?: boolean;
  /**
   * Callback handler fired when search form is submitted or enter is pressed
   */
  onSearch?: (value: string) => void;
}

/**
 * SearchInput Component Primitive
 */
export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      shortcutKey = "⌘K",
      loading = false,
      onSearch,
      clearButton = true,
      onClear,
      placeholder = "Search projects, skills, and architecture...",
      inputSize = "md",
      value,
      defaultValue,
      onChange,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    // Local state for checking value presence (for shortcut badge vs clear button)
    const [query, setQuery] = React.useState<string>(
      (value ?? defaultValue ?? "").toString()
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setQuery(value.toString());
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      if (onChange) onChange(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        e.preventDefault();
        onSearch(query);
      }
      if (onKeyDown) onKeyDown(e);
    };

    const handleClear = () => {
      setQuery("");
      if (onClear) onClear();
    };

    const hasQuery = Boolean(query && query.length > 0);

    // Render leading icon: loading spinner vs search magnifier
    const LeadingIcon = () => {
      if (loading) {
        return (
          <Loader2
            className="h-4 w-4 animate-spin text-accent-primary shrink-0"
            aria-hidden="true"
          />
        );
      }
      return <Search className="h-4 w-4 text-fg-muted shrink-0" aria-hidden="true" />;
    };

    return (
      <div className="relative flex items-center w-full">
        <Input
          ref={ref}
          type="search"
          inputSize={inputSize}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          leadingIcon={LeadingIcon as unknown as InputProps["leadingIcon"]}
          clearButton={clearButton}
          onClear={handleClear}
          className={cn(
            !hasQuery && shortcutKey ? "pr-14" : "",
            className
          )}
          {...props}
        />

        {/* Shortcut Badge overlay displayed when query is empty */}
        {!hasQuery && shortcutKey && (
          <div className="absolute right-3 flex items-center pointer-events-none select-none">
            <kbd className="inline-flex items-center gap-1 rounded border border-border-subtle bg-bg-surface2 px-1.5 py-0.5 font-mono text-[10px] font-medium text-fg-muted shadow-subtle">
              {shortcutKey}
            </kbd>
          </div>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
