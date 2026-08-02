/**
 * Purpose: Compact quantitative metric telemetry card displaying key performance indicators (KPIs) and technical stats.
 * Used By: System Telemetry Monitor, Architecture Performance Metrics, Project Benchmark Summaries.
 * Accessibility: Formats trend directional indicators with visual & text screen-reader announcements, aria-busy state on loading.
 * Notes: Integrates trend direction indicators (up/down/neutral), icon badges, and skeleton loading fallbacks.
 */

import * as React from "react";
import { type LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, type CardProps } from "./Card";
import { Skeleton } from "./Skeleton";
import { cn } from "@/lib/utils";

export interface StatCardTrend {
  /**
   * Numeric or percentage change label (e.g., "+12.5%", "-4ms")
   */
  value: string;
  /**
   * Directional indicator for metric trend
   * @default "up"
   */
  direction?: "up" | "down" | "neutral";
  /**
   * Secondary label context (e.g., "vs last week", "p99 latency")
   */
  label?: string;
}

export interface StatCardProps extends Omit<CardProps, "title"> {
  /**
   * Metric title or category label (e.g., "Throughput", "P99 Latency")
   */
  title: React.ReactNode;
  /**
   * Primary metric display value (e.g., "1.2M req/s", "99.99%")
   */
  value: React.ReactNode;
  /**
   * Context description or metric baseline caption
   */
  description?: React.ReactNode;
  /**
   * Directional trend indicator object
   */
  trend?: StatCardTrend;
  /**
   * Optional lead icon component (LucideIcon) or custom element
   */
  icon?: LucideIcon | React.ReactNode;
  /**
   * Renders skeletal placeholder state during telemetry updates
   * @default false
   */
  loading?: boolean;
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      title,
      value,
      description,
      trend,
      icon,
      loading = false,
      className,
      padding = "md",
      radius = "lg",
      interactive = false,
      glass = false,
      outlined = true,
      ...props
    },
    ref
  ) => {
    // Render icon if provided
    const renderIcon = () => {
      if (!icon) return null;
      if (typeof icon === "function" || (typeof icon === "object" && "render" in icon)) {
        const IconComponent = icon as LucideIcon;
        return (
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle text-accent-primary shrink-0">
            <IconComponent className="h-4 w-4" />
          </div>
        );
      }
      return <div className="shrink-0">{icon}</div>;
    };

    // Render trend indicator with accessible text & color
    const renderTrend = () => {
      if (!trend) return null;

      const { value: trendValue, direction = "up", label: trendLabel } = trend;

      let trendColorClass = "text-fg-muted bg-bg-surface2 border-border-subtle";
      let TrendIcon = Minus;

      if (direction === "up") {
        trendColorClass =
          "text-status-success-fg bg-status-success-bg/40 border-status-success-border/50";
        TrendIcon = TrendingUp;
      } else if (direction === "down") {
        trendColorClass =
          "text-status-error-fg bg-status-error-bg/40 border-status-error-border/50";
        TrendIcon = TrendingDown;
      }

      return (
        <div className="flex items-center gap-1.5 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono font-medium border",
              trendColorClass
            )}
          >
            <TrendIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span>{trendValue}</span>
          </span>
          {trendLabel && <span className="text-fg-muted font-sans">{trendLabel}</span>}
        </div>
      );
    };

    if (loading) {
      return (
        <Card
          ref={ref}
          padding={padding}
          radius={radius}
          glass={glass}
          outlined={outlined}
          className={cn("aria-busy:opacity-80", className)}
          aria-busy="true"
          {...props}
        >
          <div className="flex items-center justify-between gap-4 mb-3">
            <Skeleton variant="text" width="60%" height="1rem" />
            <Skeleton variant="circle" width="2.25rem" height="2.25rem" />
          </div>
          <Skeleton variant="text" width="40%" height="2rem" className="my-2" />
          <Skeleton variant="text" width="80%" height="0.875rem" className="mt-3" />
        </Card>
      );
    }

    return (
      <Card
        ref={ref}
        padding={padding}
        radius={radius}
        interactive={interactive}
        glass={glass}
        outlined={outlined}
        className={cn("flex flex-col justify-between", className)}
        {...props}
      >
        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="font-sans text-sm font-medium text-fg-secondary tracking-wide">
              {title}
            </span>
            {renderIcon()}
          </div>

          <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-fg-primary my-1">
            {value}
          </div>
        </div>

        {(description || trend) && (
          <div className="mt-3 pt-3 border-t border-border-subtle/60 flex flex-col gap-1.5">
            {renderTrend()}
            {description && (
              <p className="font-sans text-xs text-fg-muted leading-relaxed">{description}</p>
            )}
          </div>
        )}
      </Card>
    );
  }
);

StatCard.displayName = "StatCard";
