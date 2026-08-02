# Design System Specification: Obsidian Violet

**Document Status:** Final Draft / Visual Source of Truth  
**Role:** Lead Product Designer, UI/UX Architect, Senior Staff Engineer  
**Project:** SaaS-Grade Developer Portfolio Website  

---

## 1. Brand Identity

### 1.1 Brand Personality
The brand identity is **Authoritative, Precise, Minimal, and Uncompromisingly Technical**. It avoids flashiness, decorative noise, or unneeded embellishments. It projects the quiet confidence of an engineer who builds mission-critical infrastructure and high-performance software.

### 1.2 Design Philosophy
- **Form Follows Function & Speed:** Design must enhance readability and decision speed. Every visual token serves a functional purpose.
- **Obsidian Near-Black Depth:** Rather than flat pitch black, surfaces utilize deep obsidian layers (`#09090b` ➔ `#121215` ➔ `#1c1c21`) with subtle 1px zinc borders to create natural spatial hierarchy.
- **Single Signature Accent:** Electric Violet (`#8b5cf6`) acts as the exclusive focal accent, representing technical precision and modern SaaS polish (inspired by Linear and Vercel).

### 1.3 Emotional Goals
- **For Recruiters:** "This candidate is exceptionally organized, clear, and provides instant access to everything I need."
- **For Hiring Managers & Engineering Directors:** "This candidate possesses elite architectural maturity, values performance, and writes production-grade code."
- **For Founders & CTOs:** "This engineer builds products that feel like Stripe, Apple, and Linear out of the box."

### 1.4 Visual Language
Minimalist, high-density, glass-trimmed dark mode. Characterized by crisp typography, tight grid alignment, generous macro-whitespace, subtle 1px border lines, and subtle micro-spring animations.

### 1.5 Tone of Voice
Direct, objective, metric-focused, and concise. Uses active verbs and quantified outcomes (e.g., *"Engineered distributed pipeline processing 1.2M events/sec with 99.99% uptime"* rather than *"Worked on a fast backend"*).

---

## 2. Color System & Semantic Tokens

The color system relies **strictly on semantic design tokens**. Raw color hex codes must never be applied directly to UI components.

### 2.1 Color Tokens Specification Table

| Semantic Token Name | Hex Value / CSS Rule | Purpose & Usage Rule |
| :--- | :--- | :--- |
| **`color-bg-canvas`** | `#09090b` | Global root page background. Deep obsidian near-black. |
| **`color-bg-surface-1`** | `#121215` | Default card containers, section panels, and content modules. |
| **`color-bg-surface-2`** | `#1c1c21` | Elevated surfaces (dropdown menus, popovers, active tabs). |
| **`color-bg-surface-3`** | `#27272a` | High-elevation overlays (dialog modals, toast alerts). |
| **`color-bg-surface-hover`**| `#1a1a22` | Background fill on interactive card/row hover states. |
| **`color-border-subtle`** | `#27272a` | Default 1px subtle separation border for cards & rows. |
| **`color-border-strong`** | `#3f3f46` | High-visibility container borders and divider lines. |
| **`color-border-focus`** | `#8b5cf6` | Focus ring outline for keyboard accessibility. |
| **`color-text-primary`** | `#f4f4f5` | Main display titles, headings, and high-contrast text. |
| **`color-text-secondary`**| `#a1a1aa` | Subtitles, body descriptions, and meta information. |
| **`color-text-muted`** | `#71717a` | Captions, timestamps, disabled labels, and secondary tags. |
| **`color-accent-primary`**| `#8b5cf6` | Electric Violet 500 — Active states, primary action buttons. |
| **`color-accent-hover`** | `#a78bfa` | Electric Violet 400 — Primary button & link hover states. |
| **`color-accent-subtle`**| `rgba(139,92,246,0.12)`| Soft violet tint for active badge fills & callout boxes. |
| **`color-accent-glow`** | `rgba(139,92,246,0.25)`| Luminous subtle backdrop glow behind key triggers. |
| **`color-status-success`**| `#22c55e` | Green 500 — Live system status indicators & positive metrics. |
| **`color-status-warning`**| `#f59e0b` | Amber 500 — System alerts, non-blocking trade-offs. |
| **`color-status-error`** | `#ef4444` | Red 500 — Failed validations, error messages, critical alerts. |
| **`color-status-info`** | `#3b82f6` | Blue 500 — Informational callouts and tooltips. |
| **`color-selection-bg`** | `rgba(139,92,246,0.3)` | Text highlight selection background. |
| **`color-selection-fg`** | `#ffffff` | Text highlight selection foreground color. |

### 2.2 Chart & Telemetry Color Palette
- **Primary Metric Line:** `#8b5cf6` (Electric Violet)
- **Secondary Metric Line:** `#38bdf8` (Sky Blue)
- **Target / Baseline Line:** `#71717a` (Zinc 500 - Dashed)
- **Grid Lines:** `rgba(255, 255, 255, 0.05)` (Subtle dark grid)

---

## 3. Typography System

### 3.1 Font Families
- **Display & Primary Sans-Serif:** `Inter`, `Geist Sans`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`.
- **Code, Telemetry & Technical Mono:** `JetBrains Mono`, `Geist Mono`, `monospace`.

### 3.2 Typography Scale & Responsive Rules

| Style Level | Size (Desktop) | Size (Mobile) | Line Height | Weight | Letter Spacing | Usage Context |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `48px (3rem)` | `32px (2rem)` | `1.1` | `700 (Bold)` | `-0.025em` | Hero landing main title. |
| **Heading H2** | `30px (1.875rem)`| `24px (1.5rem)` | `1.2` | `600 (SemiBold)`| `-0.02em` | Section titles (Projects, Experience). |
| **Heading H3** | `20px (1.25rem)` | `18px (1.125rem)`| `1.3` | `600 (SemiBold)`| `-0.01em` | Card headers, modal titles. |
| **Heading H4** | `16px (1rem)` | `15px (0.937rem)`| `1.4` | `600 (SemiBold)`| `0em` | Sub-section labels, group titles. |
| **Body Large** | `18px (1.125rem)`| `16px (1rem)` | `1.6` | `400 (Regular)` | `0em` | Hero lead paragraph, intro bio. |
| **Body Base** | `15px (0.937rem)`| `14px (0.875rem)`| `1.6` | `400 (Regular)` | `0em` | Primary body descriptions, case study text. |
| **Body Small** | `13px (0.812rem)`| `12px (0.75rem)` | `1.5` | `400 (Regular)` | `0.01em` | Meta descriptions, tooltips, captions. |
| **Code / Mono** | `13px (0.812rem)`| `12px (0.75rem)` | `1.5` | `500 (Medium)`  | `0em` | Telemetry bar, code blocks, metrics. |
| **Overline Tag**| `11px (0.687rem)`| `10px (0.625rem)`| `1.0` | `700 (Bold)` | `0.08em` (UPPERCASE)| Category badges, small status pills. |

---

## 4. Layout & Grid System

### 4.1 Layout Boundaries & Containers
- **Max Canvas Width:** `1280px` (`max-w-7xl`).
- **Standard Content Width:** `1024px` (`max-w-5xl` for optimal reading measure).
- **Prose / Reading Width:** `768px` (`max-w-3xl` for case study text).

### 4.2 Grid Architecture
- **Desktop Grid (≥1024px):** 12-Column Grid (`gap-6` / `24px`).
- **Tablet Grid (768px–1023px):** 8-Column Grid (`gap-4` / `16px`).
- **Mobile Grid (<768px):** 4-Column Grid (`gap-4` / `16px`).

### 4.3 Responsive Breakpoints
- **Mobile (`sm`):** `640px`
- **Tablet (`md`):** `768px`
- **Desktop (`lg`):** `1024px`
- **Large Desktop (`xl`):** `1280px`
- **Ultra-Wide (`2xl`):** `1536px`

### 4.4 Spatial Rhythm & Margin Standards
- **Section Vertical Gap:** `96px` desktop / `64px` mobile (`space-y-24` / `space-y-16`).
- **Card Internal Padding:** `24px` desktop / `16px` mobile.
- **Header Offset Padding:** `80px` top padding to prevent fixed nav overlap.

---

## 5. Spacing System

All padding, margins, and gaps must strictly use the **8pt / 4pt Spatial Scale**.

| Token Name | Value | Usage Rule |
| :--- | :--- | :--- |
| **`space-1`** | `4px` | Micro gaps between icon and inline text label. |
| **`space-2`** | `8px` | Gap between tech stack pills, chip padding, inline badges. |
| **`space-3`** | `12px` | Internal padding for compact inputs, tooltips, button vertical padding. |
| **`space-4`** | `16px` | Standard card internal padding (mobile), button horizontal padding. |
| **`space-6`** | `24px` | Standard card internal padding (desktop), grid column gap. |
| **`space-8`** | `32px` | Gap between major section subsections. |
| **`space-12`**| `48px` | Margin above major section headers. |
| **`space-16`**| `64px` | Mobile vertical section spacing. |
| **`space-24`**| `96px` | Desktop vertical section spacing. |

---

## 6. Border Radius System

To maintain geometric consistency inspired by Apple and Vercel:

| Component Category | Radius Token | Value | Visual Rationale |
| :--- | :--- | :--- | :--- |
| **Chips, Badges, Status Pills** | `radius-full` | `9999px` | Fully rounded pill shape for discrete metadata tags. |
| **Buttons & Compact Inputs** | `radius-md` | `8px` | Crisp geometric corners matching Linear UI. |
| **Cards & Content Modules** | `radius-lg` | `12px` | Modern container curvature. |
| **Dialog Modals & Drawers** | `radius-xl` | `16px` | Pronounced curvature for floating overlays. |
| **Code Snippet Containers** | `radius-md` | `8px` | Aligns cleanly with internal code line height. |
| **Avatars & Logo Icons** | `radius-sm` | `6px` | Subtle rounding for small square marks. |

---

## 7. Shadows & Elevation Philosophy

Elevations in dark mode rely on **surface color lightness and subtle 1px border contrast**, supplemented by soft ambient drop shadows.

```
Elevation Level 0 (Canvas: #09090b)
  └── Elevation Level 1 (Surface: #121215 + Border: #27272a)
        └── Elevation Level 2 (Surface: #1c1c21 + Shadow: Soft Ambient Drop)
              └── Elevation Level 3 (Modal/Drawer: #27272a + Backlit Violet Glow)
```

### 7.1 Elevation Levels & Shadow Tokens
- **Level 0 (Flat Canvas):** No shadow. Background `#09090b`.
- **Level 1 (Card Containers):** `1px solid #27272a`. No heavy drop shadow needed.
- **Level 2 (Hovered Cards / Dropdowns):** `box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px #3f3f46`.
- **Level 3 (Modals, Command Palette):** `box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(139, 92, 246, 0.3)`.

---

## 8. Glassmorphism Rules

### 8.1 Allowed Glassmorphism Surfaces
Glassmorphism is restricted to **fixed, floating UI overlays** to maintain spatial context of underlying content:
1. **Fixed Top Navigation Bar**
2. **`Cmd + K` Command Palette Backdrop Overlay**
3. **Slide-Over Architecture Inspector Drawer Backdrop**
4. **Floating Telemetry Footer Bar**

### 8.2 Prohibited Glassmorphism Surfaces
- ❌ Main content body cards.
- ❌ Text-heavy paragraphs or reading zones (causes contrast degradation).
- ❌ Buttons or input fields.

### 8.3 Glass Specification Standard
- **Background Fill:** `rgba(9, 9, 11, 0.75)` (75% dark obsidian transparency).
- **Backdrop Blur:** `backdrop-filter: blur(12px) saturate(180%)`.
- **Border Trim:** `1px solid rgba(255, 255, 255, 0.08)` top/bottom border line.

---

## 9. Motion System

### 9.1 Duration & Easing Tokens
- **Duration Micro (`--duration-fast`):** `100ms` (`ease-out`) — Button feedback, active tab indicators.
- **Duration Normal (`--duration-normal`):** `150ms` (`ease-out`) — Card hover state, tooltip reveal.
- **Duration Surface (`--duration-slow`):** `200ms – 250ms` (`cubic-bezier(0.16, 1, 0.3, 1)`) — Modal popups, drawer slide-overs.

### 9.2 Component Animation Standards
- **Button Hover:** Scale `1.0` ➔ `1.02` with 150ms spring response; background color transitions smoothly.
- **Card Hover:** Vertical translation `-2px Y` + border tint change from `#27272a` to `#3f3f46`.
- **Slide-Over Drawer:** Horizontal translation `100% X` ➔ `0% X` over 200ms with backdrop fade (`opacity 0 ➔ 1`).
- **Command Palette (`Cmd+K`):** Scale `95%` ➔ `100%` with backdrop blur fade over 150ms.

### 9.3 Motion Ban List (Forbidden Animations)
- ❌ Scroll-jacking or custom smooth-scroll overrides.
- ❌ Continuous floating particle animations or animated canvas gradients.
- ❌ Layout reflow animations (`height`, `width`, `top` adjustments).
- ❌ Motion of any kind when `@media (prefers-reduced-motion: reduce)` is active.

---

## 10. Component Design Standards

Detailed visual specs for 20 core UI components:

1. **Buttons:** Primary (Electric Violet fill, white text), Secondary (Surface 2 fill, zinc border), Ghost (transparent fill, violet hover). Height: `40px` desktop / `44px` mobile. Radius: `8px`.
2. **Inputs & Search:** Obsidian surface fill, 1px `#27272a` border, `#8b5cf6` focus ring outline with 2px offset.
3. **Cards:** Surface 1 fill (`#121215`), 1px border (`#27272a`), `12px` radius. Hover state adds `-2px Y` lift and strong border (`#3f3f46`).
4. **Badges & Tags:** Fully rounded pill shape (`9999px`), `11px` uppercase overline font, subtle violet tint (`rgba(139,92,246,0.12)`).
5. **Top Navigation Header:** Fixed glassmorphic header, height `64px`, 75% dark obsidian opacity, 12px backdrop blur.
6. **Mobile Navigation Bottom Sheet:** Slide-up sheet from bottom viewport edge, 48px touch targets, dark obsidian background.
7. **Footer:** Clean divider line (`#27272a`), copyright note, social icon links, live availability status indicator.
8. **Dialog Modals (`Cmd+K`):** Centered overlay, `16px` radius, `box-shadow` Level 3, backdrop blur overlay.
9. **Drawers (Architecture Inspector):** Right-aligned slide-over panel, width `600px` (desktop) / `100%` (mobile), full viewport height.
10. **Tables & Data Grids:** Striped surface background, 1px zinc row dividers, `JetBrains Mono` for numerical metric data.
11. **Tabs:** Segmented container (`#1c1c21`), active tab pill (`#27272a`) with subtle violet text highlight.
12. **Accordions (Timeline Expandables):** Smooth 200ms height transition, chevron icon rotation (`0deg ➔ 180deg`).
13. **Timeline Matrix:** Left vertical zinc line (`2px solid #27272a`) with active node dots in Electric Violet.
14. **Tooltips:** Compact surface 3 fill (`#27272a`), text `12px`, 150ms fade-in, high contrast.
15. **Code Blocks:** Dark surface fill (`#09090b`), `JetBrains Mono` font, syntax highlighting tokens, copy-code button top-right.
16. **Project Cards:** Featured card layout with image preview top, impact metrics pill row, tech tags, and dual CTAs.
17. **Forms:** Accessible label elements above inputs, explicit error message containers below inputs (`#ef4444`).
18. **Search Inputs:** Integrated search magnifier icon left, clear button right, keyboard shortcut indicator (`⌘K`).
19. **Command Palette (`cmdk`):** Search input top, grouped action list (Navigation, Recruiter Actions, Theme), keyboard highlight state.
20. **Telemetry Badge:** Compact status pill in header/footer displaying live FPS counter and route latency.

---

## 11. Iconography System

- **Icon Library:** `Lucide React` (Clean, geometric, modern SVG icons).
- **Standard Icon Sizes:**
  - Compact Inline: `16px × 16px` (`size={16}`)
  - Standard Button / Nav: `20px × 20px` (`size={20}`)
  - Large Section Feature: `24px × 24px` (`size={24}`)
- **Stroke Width:** Standard `1.75px` or `2.0px` stroke width matching Inter font weight.

---

## 12. Imagery & Asset Guidelines

- **Architecture Diagrams:** Vector SVG sequence/flow diagrams with Electric Violet nodes and zinc connectors. High contrast in dark mode.
- **Project Screenshots & Previews:** Rendered inside crisp 1px bordered browser frames with subtle dark drop shadows.
- **Avatars & Professional Headshots:** Crisp circular/square avatar with a subtle 1px violet border outline.
- **Background Textures:** Zero loud grid images or heavy noise textures. Clean, dark obsidian canvas only.

---

## 13. Accessibility Design Specifications

- **Focus Style Standard:** `outline: 2px solid #8b5cf6; outline-offset: 2px;` on all focused interactive elements.
- **Minimum Touch Targets:** `44px × 44px` minimum clickable area on touch devices (Mobile/Tablet).
- **Color Contrast Enforcement:** All text contrast ratios verified ≥ 4.5:1 against adjacent background tokens.

---

## 14. Responsive Behavior Matrix

- **Desktop (≥1024px):** Full 12-column grid, fixed header with visible link labels, slide-over drawer width 600px.
- **Laptop (1024px–1280px):** 12-column grid, compact container padding.
- **Tablet (768px–1023px):** 8-column grid, compact pill navigation header.
- **Mobile (<768px):** Single-column layout, bottom ergonomic slide-up navigation sheet, full-screen drawers.
- **Ultra-Wide (≥1536px):** Content capped at `1280px` centered with equal auto margins to avoid stretched reading measures.

---

## 15. Summary of Design Principles & Inspirations

| Brand Inspiration | Adopted Design Characteristics |
| :--- | :--- |
| **Apple** | Spatial precision, refined typography scale, subtle spring animation physics, high legibility. |
| **Vercel** | Near-black dark mode depth, high-contrast monospace technical telemetry, crisp grid borders. |
| **Linear** | Electric Violet accent focus, `Cmd+K` keyboard-first ergonomics, micro-tactile button responses. |
| **Stripe** | Professional metric density, high-quality technical documentation layouts, clean card geometry. |
| **Notion** | Modular information hierarchy, collapsible timeline accordions, structured ADR decision logs. |

---
