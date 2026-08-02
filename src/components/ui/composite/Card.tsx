/**
 * Purpose: Elevated container for grouping related content, metrics, media, and actions.
 * Used By: Project Case Studies, Architecture Cards, Experience Roles, Skill Modules, Feature Previews.
 * Accessibility: Semantic container rendering, optional interactive focus management, aria-labelledby association when title is present.
 * Notes: Combines modular subcomponents (Header, Title, Description, Content, Footer) with top-level prop convenience and design tokens.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative transition-all duration-normal ease-standard text-fg-primary overflow-hidden",
  {
    variants: {
      padding: {
        none: "p-0",
        sm: "p-3 sm:p-4",
        md: "p-4 sm:p-6",
        lg: "p-6 sm:p-8",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
      variant: {
        surface: "bg-bg-surface1",
        surface2: "bg-bg-surface2",
        surface3: "bg-bg-surface3",
      },
    },
    defaultVariants: {
      padding: "md",
      radius: "lg",
      variant: "surface",
    },
  }
);

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof cardVariants> {
  /**
   * Title text or element for automatic header rendering
   */
  title?: React.ReactNode;
  /**
   * Description text or element for automatic header rendering
   */
  description?: React.ReactNode;
  /**
   * Custom header slot content
   */
  header?: React.ReactNode;
  /**
   * Custom footer slot content
   */
  footer?: React.ReactNode;
  /**
   * Enables interactive hover lift, border tinting, and focus outline
   * @default false
   */
  interactive?: boolean;
  /**
   * Enables glassmorphism background blur and semi-transparent border
   * @default false
   */
  glass?: boolean;
  /**
   * Applies subtle 1px border separation
   * @default true
   */
  outlined?: boolean;
  /**
   * HTML element type to render
   * @default "div"
   */
  as?: React.ElementType;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      padding,
      radius,
      variant,
      title,
      description,
      header,
      footer,
      interactive = false,
      glass = false,
      outlined = true,
      as: Component = "div",
      children,
      ...props
    },
    ref
  ) => {
    const hasHeader = Boolean(header || title || description);

    return (
      <Component
        ref={ref}
        className={cn(
          cardVariants({ padding, radius, variant }),
          glass
            ? "bg-bg-glass backdrop-blur-md border border-border-glass shadow-glass"
            : outlined && "border border-border-subtle shadow-subtle",
          interactive &&
            "cursor-pointer hover:bg-bg-surfaceHover hover:border-border-strong hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas",
          className
        )}
        tabIndex={interactive ? (props.tabIndex ?? 0) : props.tabIndex}
        {...props}
      >
        {header ? (
          header
        ) : hasHeader ? (
          <CardHeader>
            {title && (typeof title === "string" ? <CardTitle>{title}</CardTitle> : title)}
            {description && (
              typeof description === "string" ? (
                <CardDescription>{description}</CardDescription>
              ) : (
                description
              )
            )}
          </CardHeader>
        ) : null}

        {children}

        {footer && (typeof footer === "string" ? <CardFooter>{footer}</CardFooter> : footer)}
      </Component>
    );
  }
);

Card.displayName = "Card";

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 mb-4", className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: React.ElementType;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = "h3", children, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        "font-sans text-xl font-semibold tracking-tight text-fg-primary leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);
CardTitle.displayName = "CardTitle";

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("font-sans text-sm text-fg-secondary leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  )
);
CardDescription.displayName = "CardDescription";

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("text-fg-primary", className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center pt-4 mt-4 border-t border-border-subtle", className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";
