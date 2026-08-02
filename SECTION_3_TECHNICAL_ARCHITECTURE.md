# Section 3: Technical Architecture & Engineering Standards

**Document Status:** Final Draft / Pending User Approval  
**Role:** Senior Staff Software Engineer, Technical Lead, System Architect  
**Project:** SaaS-Grade Developer Portfolio Website  

---

### 1. Technology Stack Selection & Architectural Rationale

The portfolio architecture is designed to deliver maximum performance, static resilience, zero bundle redundancy, and bulletproof type safety.

| Layer | Recommended Technology | Architectural Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | Hybrid rendering engine offering React Server Components (RSC) by default, static site generation (SSG) with zero-JS server rendering, and built-in edge optimizations. |
| **UI Library** | **React 18 / 19** | Industry standard component architecture utilizing Server Components for static layouts and Client Components for isolated interactive widgets. |
| **Language** | **TypeScript 5+ (Strict)** | Compile-time type enforcement (`strict: true`), eliminating runtime data ambiguity and ensuring predictable component props. |
| **Styling** | **Tailwind CSS v3/v4** | Utility-first CSS engine producing a minimal CSS footprint via static purge. Coupled with CSS custom properties for near-black theme tokens. |
| **Component Primitives** | **Radix UI / shadcn/ui** | Accessible, unstyled headless UI primitives supporting WCAG 2.1 AA standards (keyboard focus, screen-reader ARIA semantics). |
| **Animation Engine** | **Framer Motion** | Declarative animation library restricted to micro-interactions, hardware-accelerated transforms (`transform`, `opacity`), and drawer physics. |
| **Command Palette** | **cmdk** | Unstyled, fast, accessible command menu implementation matching Raycast/Linear UX standards. |
| **Icons & Utilities** | **Lucide React + clsx + tailwind-merge** | Lightweight SVG icons paired with a deterministic class merger utility (`cn()`). |

---

### 2. Scalable Directory Structure (Feature-Based Architecture)

The codebase follows a **feature-driven folder strategy**. Shared atomic UI elements and utilities reside in core folders, while domain-specific code is organized into isolated feature modules.

```
portfolio-v2/
├── .github/                  # CI/CD workflows (Lighthouse audit, Playwright tests, ESLint)
├── public/                   # Static assets (favicons, static images, OG template assets, resume PDF)
├── src/
│   ├── app/                  # Next.js App Router route hierarchy
│   │   ├── (main)/           # Primary layout group (Header + Footer wrapper)
│   │   │   ├── page.tsx      # Homepage (Hero, Featured Projects Hub)
│   │   │   ├── projects/     # Projects catalog page (/projects)
│   │   │   │   └── [id]/     # Dynamic Case Study page (/projects/[id])
│   │   │   ├── experience/   # Career matrix & timeline (/experience)
│   │   │   └── about/        # Engineering mindset & bio (/about)
│   │   ├── api/              # API Route Handlers
│   │   │   ├── og/route.tsx  # Dynamic OpenGraph image generator (Vercel OG)
│   │   │   └── telemetry/    # Client metrics collection route
│   │   ├── global-error.tsx  # Root error boundary
│   │   ├── layout.tsx        # Global Root Layout (Fonts, Metadata, Providers)
│   │   ├── loading.tsx       # Root suspense loading fallback
│   │   ├── not-found.tsx     # 404 page
│   │   └── sitemap.ts        # Auto-generated sitemap XML
│   ├── components/           # Component Hierarchy
│   │   ├── ui/               # Atomic shadcn/ui primitives (button, card, dialog, drawer, badge)
│   │   ├── shared/           # Cross-cutting layout components (header, footer, command-palette)
│   │   └── features/         # Domain-Driven Feature Modules
│   │       ├── hero/         # hero-command-bar, availability-badge, recruiter-quick-actions
│   │       ├── projects/     # project-card, architecture-drawer, tech-radar, system-diagram
│   │       ├── experience/   # experience-timeline, role-card, adr-viewer
│   │       └── telemetry/    # performance-monitor, vitals-drawer, telemetry-badge
│   ├── config/               # Application configuration
│   │   ├── site.ts           # Site metadata, navigation links, social URLs, recruiter links
│   │   └── theme.ts          # Color tokens and design parameters
│   ├── content/              # Typed static content databases (Single Source of Truth)
│   │   ├── projects.ts       # Structured project records, metrics, and architecture specs
│   │   ├── experience.ts     # Chronological role history & ADR logs
│   │   └── skills.ts         # Technical radar skill matrix
│   ├── hooks/                # Reusable custom React hooks
│   │   ├── use-command-palette.ts # Cmd+K shortcut listener & state
│   │   ├── use-telemetry.ts       # FPS, route latency, and Web Vitals sampler
│   │   └── use-reduced-motion.ts  # Media query listener for animation fallback
│   ├── lib/                  # Utility functions
│   │   ├── utils.ts          # Class merging (cn helper)
│   │   ├── metrics.ts        # Web Vitals calculation helpers
│   │   └── metadata.ts       # SEO metadata builder factory
│   ├── styles/               # Styling specifications
│   │   └── globals.css       # Tailwind directives, CSS variables, typography utility classes
│   └── types/                # Strict TypeScript type definitions
│       ├── project.ts        # Project, ArchitectureSpec, SystemMetric interfaces
│       ├── experience.ts     # Role, ADR, Company interfaces
│       └── telemetry.ts      # WebVitalsSnapshot, LatencyMetric interfaces
├── .eslintrc.json            # Strict ESLint config
├── next.config.mjs           # Next.js build config (headers, image domains, CSP)
├── tailwind.config.ts        # Custom Tailwind design system tokens
└── tsconfig.json             # Strict TypeScript compiler options
```

---

### 3. Server vs. Client Component Boundaries & State Strategy

#### 3.1 React Server Components (RSC) Strategy (Default Baseline)
To keep client JavaScript bundle size exceptionally small (< 70KB gzipped), **all layouts, pages, and static content renderers are Server Components by default**.

- **Server Component Responsibilities:**
  - Reading typed static content (`projects.ts`, `experience.ts`).
  - Generating static HTML output during build time (SSG / Static Export).
  - Injecting structured JSON-LD schema and dynamic SEO tags.
  - Rendering code blocks, Markdown text, and static layouts.

#### 3.2 Client Component Boundaries (`'use client'`)
Client Component code is strictly isolated to low-level interactive "islands".

- **Client Component Responsibilities:**
  1. `CommandPalette` (`cmdk` overlay and keyboard event listener).
  2. `ArchitectureDrawer` (Radix Sheet drawer open/close state).
  3. `TelemetryMonitor` (Live request latency sampler and FPS requestAnimationFrame listener).
  4. `RecruiterBar` (1-click clipboard copy triggers and tooltip states).
  5. `ThemeToggle` (Local storage theme switcher).

#### 3.3 State Management Blueprint
Rather than introducing heavy external state stores (like Redux or Zustand), state is managed using lightweight native browser patterns:

- **URL Search Parameters (`nuqs` or Next Router):** Used for filtering project categories (`/projects?category=saas`). Enables shareable, bookmarkable deep links.
- **React Context:** Restricted to global UI overlay triggers (`CommandPaletteContext`, `TelemetryContext`).
- **Local State (`useState`):** Component-level state for dropdowns, tooltips, and tab selections.

---

### 4. Coding Conventions & Quality Standards

#### 4.1 Strict TypeScript Standards
- **Compiler Configuration:**
  ```json
  {
    "compilerOptions": {
      "strict": true,
      "noImplicitAny": true,
      "strictNullChecks": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "exactOptionalPropertyTypes": true
    }
  }
  ```
- **Type Rules:**
  - Zero usage of `any`. Explicitly typed generics or `unknown` with type guards.
  - Interface-first approach for component props (`interface ProjectCardProps`).
  - Strict type definitions for static content schemas (`Project`, `ExperienceEntry`, `ADRRecord`).

#### 4.2 Naming Conventions & Import Aliases
- **Files & Directories:** `kebab-case` (`architecture-drawer.tsx`, `use-telemetry.ts`).
- **React Components:** `PascalCase` matching file role (`export function ArchitectureDrawer()`).
- **Utility Functions:** `camelCase` (`function calculateVitals()`).
- **Import Paths:** Path alias `@/` mapped to `src/`:
  ```typescript
  import { cn } from "@/lib/utils";
  import { ProjectCard } from "@/components/features/projects/project-card";
  import type { Project } from "@/types/project";
  ```

---

### 5. Performance Strategy & Core Web Vitals Optimization

To maintain Lighthouse scores above 95 across all metrics, the architecture enforces strict optimization controls.

#### 5.1 Code Splitting & Dynamic Imports
Heavy third-party components or modals are dynamically imported with zero SSR overhead until activated by the user:
- `CommandPalette` component dynamically imported upon pressing `Cmd + K`.
- Interactive SVG system flow diagrams dynamically loaded inside the slide-over drawer upon activation.
- Syntax highlighter components lazily fetched only on case study pages containing code snippets.

#### 5.2 Image & Asset Optimization
- Mandatory use of `next/image` with explicit `width`, `height`, and `sizes` attributes to prevent Cumulative Layout Shift (CLS).
- Automatic format conversion to `AVIF` and `WebP`.
- Priority flag (`priority={true}`) applied strictly to hero assets above the fold.

#### 5.3 Web Vitals Performance Targets
- **Largest Contentful Paint (LCP):** < 1.2 seconds (achieved via zero-JS static HTML for hero content).
- **Interaction to Next Paint (INP):** < 50ms (achieved by isolating event handlers and deferring non-essential execution).
- **Cumulative Layout Shift (CLS):** < 0.01 (achieved via explicit CSS aspect ratios and font fallback metrics).

---

### 6. Accessibility (WCAG 2.1 Level AA) & Ergonomics

1. **Keyboard Ergonomics:**
   - Full keyboard accessibility across all interactive widgets (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc`).
   - Focus trap enforcement inside modal dialogs and drawers using Radix UI primitives.
   - Visible, high-contrast focus rings (`focus-visible:ring-2 focus-visible:ring-violet-500`).
2. **Screen Reader Semantics:**
   - Semantic HTML5 structure (`<header>`, `<main>`, `<nav>`, `<section>`, `<aside>`, `<footer>`).
   - Explicit `aria-label`, `aria-expanded`, and `aria-controls` on custom triggers.
   - Live region (`aria-live="polite"`) used for copying confirmation messages (e.g., *"Email copied to clipboard"*).
3. **Reduced Motion Support:**
   - Automated detection of `prefers-reduced-motion: reduce`.
   - CSS utility class disables Framer Motion spring physics, replacing them with instant state updates.

---

### 7. SEO, OpenGraph & Metadata Architecture

1. **Next.js Metadata API:** Static and dynamic metadata definitions utilizing `generateMetadata()` for routes.
2. **Dynamic OpenGraph (OG) Images:**
   - Auto-generated OG banner images using `@vercel/og` via API Edge Route Handler (`/api/og`).
   - Displays project title, category tag, and candidate branding dynamically on social sharing links.
3. **Structured Data (JSON-LD):**
   - Embedded `Person` and `WebSite` JSON-LD schemas embedded in root layout to optimize Google Knowledge Graph parsing.

---

### 8. Error Handling, Telemetry & Testing Strategy

#### 8.1 Error Boundaries & Fallbacks
- `app/error.tsx`: Elegant client error fallback with retry trigger.
- `app/not-found.tsx`: SaaS-styled 404 page featuring quick navigation links back to `/projects` or `/`.

#### 8.2 Client-Side Performance Telemetry
- Integrated custom `useTelemetry()` hook listening to native browser Performance Observers (`layout-shift`, `first-input`, `largest-contentful-paint`).
- Real-time client stats displayed inside the floating status bar and Telemetry Drawer.

#### 8.3 Quality Assurance & Testing Pipeline
- **Static Analysis:** ESLint strict config + TypeScript strict build check (`tsc --noEmit`).
- **Component & Utility Testing (Vitest):** Unit tests verifying utility helpers (`cn()`, metrics calculators, schema parsers).
- **End-to-End & Accessibility Auditing (Playwright + axe-core):**
  - Automated E2E test running headlessly before deployment.
  - Automated accessibility audit validating zero WCAG 2.1 AA violations on all routes.

---

### 9. Architectural Decision Summary & Reasoning

1. **Why Feature-Based Architecture over Category-Based Folders?**
   - Category-based folders (`components/`, `hooks/`, `utils/`) become bloated and hard to maintain as projects grow. Feature-based modules (`components/features/projects/`) colocate related logic, making code modular, readable, and easy to refactor.
2. **Why Static Content Schemas over a Headless CMS for V1?**
   - Headless CMS API calls introduce runtime latency and potential deployment failures. Storing typed static TypeScript objects (`projects.ts`) guarantees build-time validation, sub-10ms static delivery, and zero CMS cost.
3. **Why Radix UI Primitives via shadcn/ui?**
   - Building accessible modals, drawers, and popovers from scratch is error-prone. Radix primitives provide battle-tested keyboard handlers and ARIA attributes out of the box, allowing us to focus entirely on visual styling and UX polish.

---
