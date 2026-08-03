"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface FadeInProps {
  /** Elements to animate into view */
  readonly children: React.ReactNode;
  /** Delay before animation starts (seconds) */
  readonly delay?: number;
  /** Direction from which the element enters */
  readonly direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance in pixels for translation */
  readonly distance?: number;
  /** Animation duration (seconds) */
  readonly duration?: number;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * FadeIn Component
 * Lightweight, accessible scroll-triggered fade-in animation wrapper using framer-motion.
 * Automatically respects `prefers-reduced-motion: reduce` by rendering static content when enabled.
 *
 * @accessibility Fully respects reduced motion preferences.
 * @performance Only animates once when element enters viewport (`viewport={{ once: true }}`).
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "up",
  distance = 16,
  duration = 0.4,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const directionOffsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // ease-spring
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

FadeIn.displayName = "FadeIn";
