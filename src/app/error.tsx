"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorPageProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

/**
 * Error Component
 * Next.js App Router route-level error boundary.
 * Renders user-friendly recovery controls when unhandled exceptions occur.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log unexpected errors to telemetry in production environments
    console.error("[Runtime Error Boundary]:", error);
  }, [error]);

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-bg-canvas text-fg-primary"
      role="alert"
      aria-live="assertive"
    >
      <div className="max-w-lg w-full rounded-2xl bg-bg-surface1 border border-border-default p-8 sm:p-10 shadow-glass text-center space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-status-error-bg border border-status-error-border text-status-error-fg">
          <AlertTriangle className="h-8 w-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-3xl">
            System Exception Encountered
          </h1>
          <p className="text-sm text-fg-secondary leading-relaxed">
            An unexpected error occurred while rendering this page component. You can attempt to reload the component or return to the main dashboard.
          </p>

          {error.message && (
            <div className="mt-4 p-3 rounded-lg bg-bg-surface2 border border-border-subtle text-left text-xs font-mono text-fg-muted overflow-x-auto">
              <code>{error.message}</code>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            leftIcon={RotateCcw}
            onClick={() => reset()}
            className="w-full sm:w-auto"
          >
            Try Again
          </Button>

          <Button
            variant="secondary"
            leftIcon={Home}
            asChild
            className="w-full sm:w-auto"
          >
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
