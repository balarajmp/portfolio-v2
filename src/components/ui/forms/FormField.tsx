/**
 * Purpose: Accessible compound form field wrapper composable with Label, Input/TextArea, Description, Error, and Helper Text.
 * Used By: Recruiter Contact Forms, Command Palette Filters, Settings Controls, Case Study Feedback Forms.
 * Accessibility: Automated accessible ID generation (useId), aria-describedby linkage, aria-invalid propagation, and label association.
 * Notes: Enforces consistent vertical spacing, high-contrast error message styling, and seamless control composition.
 */

import * as React from "react";
import { AlertCircle } from "lucide-react";
import { Label } from "./Label";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Field label text or element
   */
  label?: React.ReactNode;
  /**
   * Contextual label description
   */
  description?: React.ReactNode;
  /**
   * Helper guidance text below input
   */
  helperText?: React.ReactNode;
  /**
   * Error message displayed when field validation fails
   */
  error?: React.ReactNode;
  /**
   * Marks field as required for validation and screen readers
   * @default false
   */
  required?: boolean;
  /**
   * Disables child form control input
   * @default false
   */
  disabled?: boolean;
  /**
   * Unique input ID override (auto-generated if omitted)
   */
  id?: string;
  /**
   * Optional tooltip node or slot
   */
  tooltip?: React.ReactNode;
  /**
   * Form control element (Input, TextArea, Select, etc.)
   */
  children: React.ReactNode;
}

/**
 * FormField Component Primitive
 */
export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      label,
      description,
      helperText,
      error,
      required = false,
      disabled = false,
      id: customId,
      tooltip,
      children,
      ...props
    },
    ref
  ) => {
    // Generate deterministic accessible React ID fallback
    const generatedId = React.useId();
    const fieldId = customId || `field-${generatedId}`;

    const isInvalid = Boolean(error);
    const helperId = helperText ? `${fieldId}-helper` : undefined;
    const errorId = error ? `${fieldId}-error` : undefined;

    // Join describedby IDs
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    // Automatically clone child element if it's a valid React element to pass accessibility props
    const renderChild = () => {
      if (React.isValidElement(children)) {
        const childProps = children.props as Record<string, unknown>;
        return React.cloneElement(children, {
          id: (childProps.id as string) || fieldId,
          invalid: childProps.invalid !== undefined ? childProps.invalid : isInvalid,
          disabled: childProps.disabled !== undefined ? childProps.disabled : disabled,
          "aria-describedby":
            (childProps["aria-describedby"] as string)
              ? `${childProps["aria-describedby"]} ${describedBy || ""}`.trim()
              : describedBy,
          "aria-required": required ? true : undefined,
        } as React.HTMLAttributes<HTMLElement>);
      }
      return children;
    };

    return (
      <div ref={ref} className={cn("flex flex-col w-full my-2", className)} {...props}>
        {label && (
          <Label
            htmlFor={fieldId}
            required={required}
            description={description}
            tooltip={tooltip}
          >
            {label}
          </Label>
        )}

        {renderChild()}

        {/* Helper Text */}
        {helperText && !error && (
          <p
            id={helperId}
            className="font-sans text-xs text-fg-muted mt-1.5 leading-normal"
          >
            {helperText}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <div
            id={errorId}
            className="flex items-center gap-1.5 mt-1.5 text-xs font-medium text-status-error-fg"
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
