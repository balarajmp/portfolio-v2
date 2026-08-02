import React from "react";

export interface HeroBackgroundProps {
  /** Optional custom CSS class names */
  readonly className?: string;
}

/**
 * HeroBackground Component
 * Provides subtle layered obsidian background depth with Electric Violet ambient glow.
 * Strictly avoids heavy canvas particles or GPU-draining animations for performance.
 *
 * @accessibility Marked `aria-hidden="true"` and `pointer-events-none` to prevent screen reader distraction.
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* Primary Radial Glow - Electric Violet Tint */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] opacity-25 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139, 92, 246, 0.4) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />

      {/* Secondary Depth Shadow - Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-canvas to-transparent" />

      {/* Subtle Spatial Grid Texture Layer */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px]"
      />
    </div>
  );
};
