/**
 * Purpose: Central barrel export for all UI design system primitives (Interactive & Layout).
 * Used By: Global pages, component modules, and portfolio feature views.
 * Accessibility: Re-exports strongly-typed, accessible UI component APIs.
 * Notes: Provides a clean single-entry import path for the design system primitives (@/components/ui).
 */

// Interactive Design System Primitives
export { Button, type ButtonProps } from "./Button";
export { Typography, type TypographyProps } from "./Typography";
export { Badge, type BadgeProps } from "./Badge";
export { Chip, type ChipProps } from "./Chip";
export { Link, type LinkProps, type LinkVariant, type LinkUnderline } from "./Link";
export { Icon, type IconProps, type IconSize, type IconColor } from "./Icon";

// Re-export Layout Primitives
export * from "./layout";
