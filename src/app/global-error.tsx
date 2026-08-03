"use client";

import React, { useEffect } from "react";
import { AlertOctagon, RotateCcw, Home } from "lucide-react";

interface GlobalErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

/**
 * GlobalError Component
 * Next.js App Router root layout exception boundary.
 * Renders raw HTML/CSS fallback UI when an unhandled exception occurs inside RootLayout.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[Global Layout Exception]:", error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased flex items-center justify-center p-4">
        <div
          className="max-w-lg w-full rounded-2xl bg-[#121215] border border-[#27272a] p-8 sm:p-10 shadow-2xl text-center space-y-6"
          role="alert"
          aria-live="assertive"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400">
            <AlertOctagon className="h-8 w-8" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-[#f4f4f5] sm:text-3xl">
              Critical System Error
            </h1>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              A root layout exception prevented the application from rendering properly. You can attempt recovery or return to the main homepage.
            </p>

            {error.message && (
              <div className="mt-4 p-3 rounded-lg bg-[#1c1c21] border border-[#27272a] text-left text-xs font-mono text-[#71717a] overflow-x-auto">
                <code>{error.message}</code>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#8b5cf6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#a78bfa] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 focus:ring-offset-[#09090b]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Recover Application
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.href = "/";
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#1c1c21] border border-[#27272a] px-5 py-2.5 text-sm font-medium text-[#f4f4f5] hover:bg-[#27272a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 focus:ring-offset-[#09090b]"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Homepage
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
