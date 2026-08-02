/**
 * Purpose: Core single-line text input field primitive supporting types, icons, validation states, and clear triggers.
 * Used By: SearchInput, FormField, Recruiter Contact Forms, Command Palette Inputs, Filter Controls.
 * Accessibility: Preserves WCAG AA contrast, high-contrast focus rings, aria-invalid attributes, and keyboard operable triggers.
 * Notes: Implements Obsidian Violet dark mode design tokens with sm/md/lg size variants.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full rounded-md bg-bg-surface1 text-fg-primary placeholder:text-fg-muted font-sans border border-border-subtle transition-all duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-bg-surface2 read-only:bg-bg-surface2 read-only:cursor-default",
  {
    variants: {
      inputSize: {
        sm: "h-8 px-2.5 text-xs",
        md: "h-10 px-3.5 text-sm",
        lg: "h-12 px-4 text-base",
      },
      invalid: {
        true: "border-status-error-border text-fg-primary focus-visible:ring-status-error-border focus-visible:border-status-error-border",
        false: "hover:border-border-strong",
      },
    },
    defaultVariants: {
      inputSize: "md",
      invalid: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /**
   * Supported input type preset
   * @default "text"
   */
  type?: "text" | "email" | "password" | "search" | "url" | "number" | "tel";
  /**
   * Input size variant preset
   * @default "md"
   */
  inputSize?: "sm" | "md" | "lg";
  /**
   * Applies validation error border and aria-invalid attribute
   * @default false
   */
  invalid?: boolean;
  /**
   * Optional leading Lucide icon component reference
   */
  leadingIcon?: LucideIcon;
  /**
   * Optional trailing Lucide icon component reference
   */
  trailingIcon?: LucideIcon;
  /**
   * Displays 1-click clear button on the right edge of input when value is present
   * @default false
   */
  clearButton?: boolean;
  /**
   * Event handler fired when the clear button is clicked
   */
  onClear?: () => void;
}

/**
 * Input Component Primitive
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      inputSize = "md",
      invalid = false,
      disabled,
      readOnly,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      clearButton = false,
      onClear,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    // Internal state tracking for clear button visibility when uncontrolled
    const [internalValue, setInternalValue] = React.useState<string>(
      (value ?? defaultValue ?? "").toString()
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value.toString());
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      if (onChange) onChange(e);
    };

    const hasValue = Boolean(internalValue && internalValue.length > 0);
    const showClear = clearButton && hasValue && !disabled && !readOnly;

    const iconSizeClasses = {
      sm: "h-3.5 w-3.5",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    };

    const paddingLeftClasses = {
      sm: "pl-8",
      md: "pl-9.5",
      lg: "pl-11",
    };

    const paddingRightClasses = {
      sm: "pr-8",
      md: "pr-9.5",
      lg: "pr-11",
    };

    const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setInternalValue("");
      if (onClear) {
        onClear();
      }
    };

    const inputElement = (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={invalid ? true : undefined}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={cn(
          inputVariants({ inputSize, invalid }),
          LeadingIcon && paddingLeftClasses[inputSize],
          (TrailingIcon || showClear) && paddingRightClasses[inputSize],
          className
        )}
        {...props}
      />
    );

    // If no leading/trailing icons or clear button, render raw input element
    if (!LeadingIcon && !TrailingIcon && !showClear) {
      return inputElement;
    }

    return (
      <div className="relative flex items-center w-full">
        {LeadingIcon && (
          <div
            className={cn(
              "absolute left-3 flex items-center justify-center text-fg-muted pointer-events-none shrink-0",
              iconSizeClasses[inputSize]
            )}
            aria-hidden="true"
          >
            <LeadingIcon className="h-full w-full text-current" />
          </div>
        )}

        {inputElement}

        {showClear ? (
          <button
            type="button"
            onClick={handleClearClick}
            className={cn(
              "absolute right-3 flex items-center justify-center rounded-sm text-fg-muted hover:text-fg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focus transition-colors",
              iconSizeClasses[inputSize]
            )}
            aria-label="Clear input text"
          >
            <X className="h-full w-full text-current" />
          </button>
        ) : TrailingIcon ? (
          <div
            className={cn(
              "absolute right-3 flex items-center justify-center text-fg-muted pointer-events-none shrink-0",
              iconSizeClasses[inputSize]
            )}
            aria-hidden="true"
          >
            <TrailingIcon className="h-full w-full text-current" />
          </div>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
