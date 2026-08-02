import * as React from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "default" | "wide" | "reading" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Container maximum width boundary preset
   * - `default`: 1280px (`max-w-7xl`)
   * - `wide`: 1400px (`max-w-[1400px]`)
   * - `reading`: 768px (`max-w-3xl`) for optimal prose readability
   * - `full`: 100% width without max-width constraint
   * @default "default"
   */
  size?: ContainerSize;
  /**
   * HTML element type to render
   * @default "div"
   */
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
  reading: "max-w-3xl",
  full: "w-full",
};

/**
 * Container Primitive
 * Provides responsive horizontal padding and width constraint boundaries.
 */
export const Container: React.FC<ContainerProps> = ({
  size = "default",
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
