/**
 * Purpose: Form field caption label primitive with required field indicators, contextual descriptions, and tooltip slots.
 * Used By: FormField, Recruiter Contact Inputs, Filter Groups, Search Controls.
 * Accessibility: Preserves semantic label linkage (htmlFor), aria-hidden required markers, screen reader text announcements.
 * Notes: Uses Inter / Geist sans font with high contrast text-fg-primary and text-fg-secondary subtitle tokens.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Displays required field visual indicator (*) and screen-reader context
   * @default false
   */
  required?: boolean;
  /**
   * Optional subtitle description text below label
   */
  description?: React.ReactNode;
  /**
   * Optional tooltip element or icon slot
   */
  tooltip?: React.ReactNode;
}

/**
 * Label Component Primitive
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      required = false,
      description,
      tooltip,
      children,
      htmlFor,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col space-y-1 mb-1.5">
        <div className="flex items-center justify-between gap-2">
          <label
            ref={ref}
            htmlFor={htmlFor}
            className={cn(
              "font-sans text-sm font-medium text-fg-primary leading-none select-none flex items-center gap-1.5",
              className
            )}
            {...props}
          >
            <span>{children}</span>
            {required && (
              <span className="text-status-error-fg font-bold" title="Required field">
                *<span className="sr-only"> (required)</span>
              </span>
            )}
          </label>

          {tooltip && <div className="shrink-0">{tooltip}</div>}
        </div>

        {description && (
          <p className="font-sans text-xs text-fg-secondary leading-normal">
            {description}
          </p>
        )}
      </div>
    );
  }
);

Label.displayName = "Label";
