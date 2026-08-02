/**
 * Purpose: Multi-line text field input primitive supporting custom rows, resize modes, validation states, and character counter.
 * Used By: Recruiter Message Forms, Case Study Feedback, Architecture Notes, Contact Submissions.
 * Accessibility: WCAG AA compliant contrast, high-contrast focus rings, aria-invalid attributes, aria-describedby linkage for character counter.
 * Notes: Implements Obsidian dark mode design tokens with configurable vertical/horizontal resize rules.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textAreaVariants = cva(
  "w-full rounded-md bg-bg-surface1 text-fg-primary placeholder:text-fg-muted font-sans border border-border-subtle p-3.5 text-sm transition-all duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-bg-surface2 read-only:bg-bg-surface2 read-only:cursor-default",
  {
    variants: {
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
      invalid: {
        true: "border-status-error-border text-fg-primary focus-visible:ring-status-error-border focus-visible:border-status-error-border",
        false: "hover:border-border-strong",
      },
    },
    defaultVariants: {
      resize: "vertical",
      invalid: false,
    },
  }
);

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  /**
   * Textarea resize behavior
   * @default "vertical"
   */
  resize?: "none" | "vertical" | "horizontal" | "both";
  /**
   * Applies validation error border and aria-invalid attribute
   * @default false
   */
  invalid?: boolean;
  /**
   * Shows a character count indicator at bottom right of the textarea
   * @default false
   */
  showCharacterCount?: boolean;
}

/**
 * TextArea Component Primitive
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      resize = "vertical",
      invalid = false,
      rows = 4,
      disabled,
      readOnly,
      maxLength,
      showCharacterCount = false,
      value,
      defaultValue,
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    // Track current length for character counter
    const [charCount, setCharCount] = React.useState<number>(
      (value ?? defaultValue ?? "").toString().length
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setCharCount(value.toString().length);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) onChange(e);
    };

    const counterId = id ? `${id}-char-count` : undefined;

    return (
      <div className="flex flex-col w-full gap-1.5">
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={counterId ? counterId : props["aria-describedby"]}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={cn(textAreaVariants({ resize, invalid }), className)}
          {...props}
        />

        {showCharacterCount && (
          <div
            id={counterId}
            className="flex justify-end text-xs font-mono text-fg-muted px-1"
            aria-live="polite"
          >
            <span>
              {charCount}
              {maxLength ? ` / ${maxLength}` : " chars"}
            </span>
          </div>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
