/**
 * Design System Tokens Contract (Obsidian Violet Theme)
 * Single source of truth for programmatic design tokens in TypeScript.
 * Aligned with DESIGN_SYSTEM.md specifications.
 */

export const colors = {
  bg: {
    canvas: "#09090b",
    surface1: "#121215",
    surface2: "#1c1c21",
    surface3: "#27272a",
    surfaceHover: "#1a1a22",
    glass: "rgba(9, 9, 11, 0.75)",
  },
  border: {
    subtle: "#27272a",
    default: "#27272a",
    strong: "#3f3f46",
    active: "#8b5cf6",
    focus: "#8b5cf6",
    glass: "rgba(255, 255, 255, 0.08)",
  },
  text: {
    primary: "#f4f4f5",
    secondary: "#a1a1aa",
    muted: "#71717a",
    inverse: "#09090b",
  },
  accent: {
    primary: "#8b5cf6",
    hover: "#a78bfa",
    subtle: "rgba(139, 92, 246, 0.12)",
    glow: "rgba(139, 92, 246, 0.25)",
  },
  status: {
    success: {
      fg: "#22c55e",
      bg: "rgba(34, 197, 94, 0.12)",
      border: "rgba(34, 197, 94, 0.3)",
    },
    warning: {
      fg: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.12)",
      border: "rgba(245, 158, 11, 0.3)",
    },
    error: {
      fg: "#ef4444",
      bg: "rgba(239, 68, 68, 0.12)",
      border: "rgba(239, 68, 68, 0.3)",
    },
    info: {
      fg: "#3b82f6",
      bg: "rgba(59, 130, 246, 0.12)",
      border: "rgba(59, 130, 246, 0.3)",
    },
  },
  selection: {
    bg: "rgba(139, 92, 246, 0.3)",
    fg: "#ffffff",
  },
} as const;

export const spacing = {
  "1": "0.25rem", // 4px
  "2": "0.5rem", // 8px
  "3": "0.75rem", // 12px
  "4": "1rem", // 16px
  "5": "1.25rem", // 20px
  "6": "1.5rem", // 24px
  "8": "2rem", // 32px
  "10": "2.5rem", // 40px
  "12": "3rem", // 48px
  "16": "4rem", // 64px
  "20": "5rem", // 80px
  "24": "6rem", // 96px
} as const;

export const borderRadius = {
  none: "0px",
  sm: "0.375rem", // 6px
  md: "0.5rem", // 8px
  lg: "0.75rem", // 12px
  xl: "1rem", // 16px
  "2xl": "1.5rem", // 24px
  full: "9999px",
} as const;

export const typography = {
  fontFamily: {
    sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
    mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
  },
  fontSize: {
    display: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }], // 48px
    h1: ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.025em" }], // 36px
    h2: ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 30px
    h3: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }], // 20px
    h4: ["1rem", { lineHeight: "1.4", letterSpacing: "0em" }], // 16px
    bodyLg: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0em" }], // 18px
    bodyMd: ["0.9375rem", { lineHeight: "1.6", letterSpacing: "0em" }], // 15px
    bodySm: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.01em" }], // 13px
    caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.01em" }], // 12px
    code: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0em" }], // 13px mono
    overline: ["0.6875rem", { lineHeight: "1.0", letterSpacing: "0.08em" }], // 11px uppercase
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
} as const;

export const shadows = {
  subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.4)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)",
  lg: "0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px #3f3f46",
  glass: "0 8px 32px 0 rgba(0, 0, 0, 0.36), inset 0 0 0 1px rgba(255, 255, 255, 0.08)",
  focus: "0 0 0 2px #09090b, 0 0 0 4px #8b5cf6",
} as const;

export const zIndex = {
  base: 0,
  sticky: 100,
  dropdown: 200,
  drawer: 300,
  modal: 400,
  toast: 500,
  tooltip: 600,
} as const;

export const motion = {
  duration: {
    fast: "100ms",
    normal: "150ms",
    slow: "250ms",
  },
  easing: {
    spring: "cubic-bezier(0.16, 1, 0.3, 1)",
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  },
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const designTokens = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  zIndex,
  motion,
  breakpoints,
} as const;

export default designTokens;
