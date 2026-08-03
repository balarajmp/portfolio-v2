import React from "react";
import { Skeleton } from "@/components/ui/composite/Skeleton";

/**
 * Loading Component
 * Next.js App Router root Suspense streaming fallback.
 * Renders layout-preserving skeleton structures to eliminate Cumulative Layout Shift (CLS).
 * Respects prefers-reduced-motion via CSS design tokens.
 */
export default function Loading() {
  return (
    <div
      className="min-h-screen bg-bg-canvas text-fg-primary flex flex-col justify-between"
      role="status"
      aria-label="Loading page content..."
    >
      {/* Skeleton Top Navbar */}
      <header className="h-16 border-b border-border-subtle bg-bg-surface1/80 backdrop-blur-md px-6 flex items-center justify-between">
        <Skeleton variant="rectangle" width={160} height={28} className="rounded-md" />
        <div className="hidden sm:flex items-center gap-6">
          <Skeleton variant="rectangle" width={70} height={20} className="rounded" />
          <Skeleton variant="rectangle" width={70} height={20} className="rounded" />
          <Skeleton variant="rectangle" width={70} height={20} className="rounded" />
          <Skeleton variant="rectangle" width={70} height={20} className="rounded" />
        </div>
      </header>

      {/* Skeleton Main Hero & Content Grid */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 flex-1">
        {/* Hero Banner Skeleton */}
        <div className="space-y-6 max-w-3xl">
          <Skeleton variant="rectangle" width={180} height={28} className="rounded-full" />
          <Skeleton variant="text" lines={2} className="h-8" />
          <Skeleton variant="text" lines={3} className="h-4" />
          <div className="flex flex-wrap gap-4 pt-4">
            <Skeleton variant="rectangle" width={150} height={42} className="rounded-lg" />
            <Skeleton variant="rectangle" width={150} height={42} className="rounded-lg" />
          </div>
        </div>

        {/* Feature Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          <Skeleton variant="card" />
          <Skeleton variant="card" />
          <Skeleton variant="card" />
        </div>
      </main>

      {/* Skeleton Footer */}
      <footer className="h-16 border-t border-border-subtle bg-bg-surface1 px-6 flex items-center justify-between">
        <Skeleton variant="text" width={200} height={16} />
        <Skeleton variant="text" width={120} height={16} />
      </footer>
      <span className="sr-only">Loading page content, please wait...</span>
    </div>
  );
}
