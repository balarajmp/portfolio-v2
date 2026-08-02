/**
 * Purpose: Central barrel export for all Composite UI components.
 * Used By: Portfolio Feature Modules, Technical Architecture Showcase, Telemetry Dashboards, Case Studies.
 * Accessibility: Re-exports accessible, WCAG AA compliant composite component abstractions.
 * Notes: Entry point for composite components (@/components/ui/composite).
 */

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  type CardProps,
  type CardHeaderProps,
  type CardTitleProps,
  type CardDescriptionProps,
  type CardContentProps,
  type CardFooterProps,
} from "./Card";

export { StatCard, type StatCardProps, type StatCardTrend } from "./StatCard";

export {
  Avatar,
  type AvatarProps,
  type AvatarStatus,
  type AvatarSize,
} from "./Avatar";

export {
  Skeleton,
  type SkeletonProps,
  type SkeletonVariant,
  type SkeletonAnimation,
} from "./Skeleton";

export {
  EmptyState,
  type EmptyStateProps,
  type EmptyStateAction,
} from "./EmptyState";

export { CodeBlock, type CodeBlockProps } from "./CodeBlock";
