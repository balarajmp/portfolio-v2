"use client";

/**
 * Purpose: Monospace source code viewer component with syntax highlighting, line numbers, line highlighting, and 1-click clipboard copy.
 * Used By: Project Case Studies, Architecture Decision Records (ADRs), Technical Documentation, API Examples.
 * Accessibility: Focusable copy button with high-contrast feedback, aria-live status confirmation, keyboard operable scrolling.
 * Notes: Features Obsidian near-black surface (#09090b), line index column, line highlight filters, and filename header bar.
 */

import * as React from "react";
import { Check, Copy, FileCode, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Source code string content
   */
  code: string;
  /**
   * Programming language descriptor (e.g., "typescript", "bash", "json", "python")
   * @default "text"
   */
  language?: string;
  /**
   * Optional filename displayed in the code block header (e.g., "src/lib/utils.ts")
   */
  filename?: string;
  /**
   * Displays 1-click copy code button in header bar
   * @default true
   */
  copyButton?: boolean;
  /**
   * Displays line numbers column alongside code lines
   * @default true
   */
  lineNumbers?: boolean;
  /**
   * Array of line numbers to highlight (1-indexed, e.g. [2, 4, 5])
   */
  highlightLines?: number[];
  /**
   * Restricts vertical height and enables smooth overflow scrolling
   * @default true
   */
  scrollable?: boolean;
  /**
   * Maximum height constraint when scrollable (e.g., "400px", "24rem")
   * @default "500px"
   */
  maxHeight?: string;
}

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      code,
      language = "text",
      filename,
      copyButton = true,
      lineNumbers = true,
      highlightLines = [],
      scrollable = true,
      maxHeight = "500px",
      className,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState<boolean>(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    // Split code content into array of individual lines
    const lines = React.useMemo(() => {
      const trimmed = code.replace(/\n$/, "");
      return trimmed.split("\n");
    }, [code]);

    // Handle 1-click clipboard copy
    const handleCopy = React.useCallback(async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        console.error("Failed to copy code snippet to clipboard:", error);
      }
    }, [code]);

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    const hasHeader = Boolean(filename || language || copyButton);

    return (
      <div
        ref={ref}
        className={cn(
          "relative my-4 rounded-lg border border-border-subtle bg-bg-canvas text-fg-primary overflow-hidden shadow-subtle font-mono text-xs sm:text-sm",
          className
        )}
        {...props}
      >
        {/* Header Bar */}
        {hasHeader && (
          <div className="flex items-center justify-between px-4 py-2.5 bg-bg-surface1 border-b border-border-subtle text-fg-secondary text-xs select-none">
            <div className="flex items-center gap-2 overflow-hidden mr-2">
              <div className="flex items-center gap-1.5 mr-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-status-error-fg/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-status-warning-fg/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-status-success-fg/80" />
              </div>

              {filename ? (
                <div className="flex items-center gap-1.5 font-medium text-fg-primary truncate">
                  <FileCode className="h-3.5 w-3.5 text-accent-primary shrink-0" />
                  <span className="truncate">{filename}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 font-mono text-fg-muted uppercase text-[10px] tracking-wider">
                  <Terminal className="h-3.5 w-3.5 text-fg-muted shrink-0" />
                  <span>{language}</span>
                </div>
              )}
            </div>

            {/* Copy Button */}
            {copyButton && (
              <button
                type="button"
                onClick={handleCopy}
                className={cn(
                  "inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-sans font-medium transition-all duration-fast",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                  copied
                    ? "bg-status-success-bg text-status-success-fg border border-status-success-border"
                    : "bg-bg-surface2 text-fg-secondary hover:text-fg-primary hover:bg-bg-surfaceHover border border-border-subtle"
                )}
                aria-label={copied ? "Code copied to clipboard" : "Copy code snippet to clipboard"}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-status-success-fg shrink-0" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-current shrink-0" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Code Content Container */}
        <div
          className={cn("overflow-x-auto p-4 font-mono leading-relaxed", scrollable && "overflow-y-auto")}
          style={scrollable && maxHeight ? { maxHeight } : undefined}
          tabIndex={0}
          aria-label={`${language} code snippet`}
        >
          <pre className="flex">
            {/* Line Numbers Column */}
            {lineNumbers && (
              <div
                className="flex flex-col text-right pr-4 mr-4 border-r border-border-subtle/40 text-fg-muted select-none shrink-0"
                aria-hidden="true"
              >
                {lines.map((_, i) => (
                  <span key={i} className="leading-relaxed">
                    {i + 1}
                  </span>
                ))}
              </div>
            )}

            {/* Code Lines Column */}
            <code className="flex-1 block">
              {lines.map((line, i) => {
                const lineNumber = i + 1;
                const isHighlighted = highlightLines.includes(lineNumber);

                return (
                  <div
                    key={i}
                    className={cn(
                      "px-1.5 -mx-1.5 rounded transition-colors duration-fast leading-relaxed whitespace-pre",
                      isHighlighted &&
                        "bg-accent-subtle/60 text-accent-hover font-semibold border-l-2 border-accent-primary pl-2 -ml-2"
                    )}
                  >
                    {line || " "}
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Accessible live region for screen reader copy feedback */}
        <span aria-live="polite" className="sr-only">
          {copied ? "Code copied to clipboard" : ""}
        </span>
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";
