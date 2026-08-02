import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: {
          canvas: "var(--bg-canvas)",
          surface1: "var(--bg-surface-1)",
          surface2: "var(--bg-surface-2)",
          surface3: "var(--bg-surface-3)",
          surfaceHover: "var(--bg-surface-hover)",
          glass: "var(--bg-glass)",
        },
        border: {
          subtle: "var(--border-subtle)",
          default: "var(--border-default)",
          strong: "var(--border-strong)",
          active: "var(--border-active)",
          focus: "var(--border-focus)",
          glass: "var(--border-glass)",
        },
        fg: {
          primary: "var(--fg-primary)",
          secondary: "var(--fg-secondary)",
          muted: "var(--fg-muted)",
          inverse: "var(--fg-inverse)",
        },
        accent: {
          primary: "var(--accent-primary)",
          hover: "var(--accent-hover)",
          subtle: "var(--accent-subtle)",
          glow: "var(--accent-glow)",
        },
        status: {
          success: {
            fg: "var(--status-success-fg)",
            bg: "var(--status-success-bg)",
            border: "var(--status-success-border)",
          },
          warning: {
            fg: "var(--status-warning-fg)",
            bg: "var(--status-warning-bg)",
            border: "var(--status-warning-border)",
          },
          error: {
            fg: "var(--status-error-fg)",
            bg: "var(--status-error-bg)",
            border: "var(--status-error-border)",
          },
          info: {
            fg: "var(--status-info-fg)",
            bg: "var(--status-info-bg)",
            border: "var(--status-info-border)",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["var(--font-size-display)", { lineHeight: "var(--line-height-tight)", letterSpacing: "var(--letter-spacing-tighter)" }],
        h1: ["var(--font-size-h1)", { lineHeight: "var(--line-height-heading)", letterSpacing: "var(--letter-spacing-tighter)" }],
        h2: ["var(--font-size-h2)", { lineHeight: "var(--line-height-heading)", letterSpacing: "var(--letter-spacing-tight)" }],
        h3: ["var(--font-size-h3)", { lineHeight: "var(--line-height-heading)", letterSpacing: "var(--letter-spacing-tight)" }],
        h4: ["var(--font-size-h4)", { lineHeight: "var(--line-height-heading)", letterSpacing: "var(--letter-spacing-normal)" }],
        bodyLg: ["var(--font-size-body-lg)", { lineHeight: "var(--line-height-base)", letterSpacing: "var(--letter-spacing-normal)" }],
        bodyMd: ["var(--font-size-body-md)", { lineHeight: "var(--line-height-base)", letterSpacing: "var(--letter-spacing-normal)" }],
        bodySm: ["var(--font-size-body-sm)", { lineHeight: "var(--line-height-base)", letterSpacing: "var(--letter-spacing-wide)" }],
        caption: ["var(--font-size-caption)", { lineHeight: "var(--line-height-base)", letterSpacing: "var(--letter-spacing-wide)" }],
        code: ["var(--font-size-code)", { lineHeight: "var(--line-height-base)", letterSpacing: "var(--letter-spacing-normal)" }],
        overline: ["var(--font-size-overline)", { lineHeight: "var(--line-height-tight)", letterSpacing: "var(--letter-spacing-wider)" }],
      },
      spacing: {
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "8": "var(--space-8)",
        "10": "var(--space-10)",
        "12": "var(--space-12)",
        "16": "var(--space-16)",
        "20": "var(--space-20)",
        "24": "var(--space-24)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glass: "var(--shadow-glass)",
        focus: "var(--shadow-focus)",
      },
      zIndex: {
        base: "var(--z-base)",
        sticky: "var(--z-sticky)",
        dropdown: "var(--z-dropdown)",
        drawer: "var(--z-drawer)",
        modal: "var(--z-modal)",
        toast: "var(--z-toast)",
        tooltip: "var(--z-tooltip)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      transitionTimingFunction: {
        spring: "var(--ease-spring)",
        standard: "var(--ease-standard)",
      },
    },
  },
  plugins: [],
};

export default config;
