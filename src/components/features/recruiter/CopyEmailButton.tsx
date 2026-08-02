"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export interface CopyEmailButtonProps {
  /** Email address to copy. Defaults to candidate siteConfig email */
  readonly email?: string;
  /** Button style variant */
  readonly variant?: ButtonProps["variant"];
  /** Button size variant */
  readonly size?: ButtonProps["size"];
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * CopyEmailButton Component
 * Interactive client component that copies candidate email to clipboard with temporary feedback state.
 *
 * @accessibility Includes aria-live region announcing copy status to screen reader users.
 */
export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email = siteConfig.author.email,
  variant = "outline",
  size = "md",
  className = "",
}) => {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Fallback for older browsers or restricted permissions
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }
  };

  React.useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="inline-flex items-center relative">
      <Button
        variant={copied ? "secondary" : variant}
        size={size}
        onClick={handleCopy}
        className={cn(
          "font-mono transition-all duration-normal",
          copied && "border-status-success-border text-status-success-fg bg-status-success-bg/30",
          className
        )}
        aria-label={copied ? "Email copied to clipboard" : `Copy email address ${email}`}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-2 shrink-0 text-status-success-fg" aria-hidden="true" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
            <span>Copy Email</span>
          </>
        )}
      </Button>

      {/* Screen Reader Live Region */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {copied ? `Copied email ${email} to clipboard` : ""}
      </span>
    </div>
  );
};
