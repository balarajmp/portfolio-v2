/**
 * Purpose: Compact user headshot, author mark, or entity representation graphic component.
 * Used By: Recruiter Command Bar, Testimonial Cards, Author Meta Headers, System Status Avatars.
 * Accessibility: Image alt text enforcement, aria-label status indicators, screen-reader readable initials fallback.
 * Notes: Features automatic image error fallbacks to user initials, tokenized size variants, and status badges.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-md bg-bg-surface2 text-fg-primary border border-border-subtle font-mono font-semibold select-none transition-all duration-fast",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
      },
      shape: {
        square: "rounded-md",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "square",
    },
  }
);

const statusDotVariants = cva(
  "absolute bottom-0 right-0 rounded-full border-2 border-bg-canvas ring-1 ring-border-subtle shrink-0",
  {
    variants: {
      status: {
        online: "bg-status-success-fg",
        offline: "bg-fg-muted",
        away: "bg-status-warning-fg",
        busy: "bg-status-error-fg",
      },
      size: {
        xs: "h-2 w-2 translate-x-0.5 translate-y-0.5 border-1",
        sm: "h-2.5 w-2.5 translate-x-0.5 translate-y-0.5",
        md: "h-3 w-3 translate-x-0.5 translate-y-0.5",
        lg: "h-3.5 w-3.5 translate-x-1 translate-y-1",
        xl: "h-4 w-4 translate-x-1 translate-y-1",
      },
    },
    defaultVariants: {
      status: "online",
      size: "md",
    },
  }
);

export type AvatarStatus = "online" | "offline" | "away" | "busy";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  /**
   * Avatar image source URL
   */
  src?: string;
  /**
   * Accessible alt text for avatar image
   * @default "Avatar"
   */
  alt?: string;
  /**
   * Fallback initials displayed when image is unavailable or loading fails (e.g., "BV", "JD")
   */
  fallback?: string;
  /**
   * Live availability status badge indicator
   */
  status?: AvatarStatus;
  /**
   * Size preset variant
   * @default "md"
   */
  size?: AvatarSize;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = "Avatar",
      fallback,
      status,
      size = "md",
      shape = "square",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState<boolean>(false);

    // Reset error state when src changes
    React.useEffect(() => {
      setImageError(false);
    }, [src]);

    const showImage = src && !imageError;

    // Get initials fallback text
    const displayFallback = React.useMemo(() => {
      if (fallback) return fallback.substring(0, 2).toUpperCase();
      if (alt && alt !== "Avatar") {
        const words = alt.trim().split(" ");
        if (words.length >= 2 && words[0] && words[1]) {
          return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
        }
        return alt.substring(0, 2).toUpperCase();
      }
      return "??";
    }, [fallback, alt]);

    const statusLabelMap: Record<AvatarStatus, string> = {
      online: "Live Online",
      offline: "Offline",
      away: "Away",
      busy: "Do Not Disturb",
    };

    return (
      <div className="relative inline-block shrink-0">
        <div
          ref={ref}
          className={cn(avatarVariants({ size, shape, className }))}
          role="img"
          aria-label={alt}
          {...props}
        >
          {showImage ? (
            // Using standard img element for generic UI primitive compatibility
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-fg-secondary tracking-wider" aria-hidden="true">
              {displayFallback}
            </span>
          )}
          {children}
        </div>

        {status && (
          <span
            className={cn(statusDotVariants({ status, size }))}
            title={`Status: ${statusLabelMap[status]}`}
            aria-label={`Status: ${statusLabelMap[status]}`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
