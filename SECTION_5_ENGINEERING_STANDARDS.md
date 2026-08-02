# Section 5: Engineering Standards, Coding Guidelines & Quality Benchmarks

**Document Status:** Final Draft / Pending User Approval  
**Role:** Senior Staff Software Engineer, Technical Lead, Quality Architect  
**Project:** SaaS-Grade Developer Portfolio Website  

---

### 1. Code Quality & Language Standards

To maintain production-grade quality comparable to Vercel, Stripe, and Linear, all code authored in this project must adhere strictly to the following standards.

#### 1.1 TypeScript Best Practices
- **Strict Mode Mandatory:** `"strict": true` is enforced in `tsconfig.json`. Compiler warnings are treated as build errors.
- **Zero `any` Allowance:** The use of `any` is strictly prohibited. Use `unknown` paired with type guards or explicit generics.
- **Explicit Return Types:** All public functions, custom hooks, and API handlers must state their return types explicitly.
- **Type vs. Interface Rule:**
  - Use `interface` for object shapes, component props, and extensible contracts (`interface ProjectCardProps`).
  - Use `type` for union types, primitives, tuples, and utility maps (`type Category = 'saas' | 'distributed' | 'frontend'`).
- **Immutability:** Prefer `readonly` arrays and props to enforce immutable data flow.

#### 1.2 React & Next.js Standards
- **Named Exports Only:** Use explicit named component exports (`export function ProjectCard()`) instead of default exports to ensure uniform refactoring and import clarity.
- **React Server Components (RSC) by Default:** All files in `src/app/` and `src/components/` are Server Components unless interactivity explicitly requires the `'use client'` directive.
- **Client Component Boundaries:** Keep `'use client'` directives at the lowest leaf nodes of the component tree (e.g., wrap a copy button in `'use client'` rather than making the entire parent card a Client Component).
- **Clean Component Guard Clauses:** Handle empty states, loading states, and missing props using early return guard clauses before rendering main JSX.
- **Custom Hooks Isolation:** Complex state logic (e.g., keyboard shortcuts, event listeners, media queries) must be extracted into dedicated custom hooks in `src/hooks/`.

---

### 2. Component Architecture & Reusability Principles

1. **Single Responsibility Principle (SRP):** Each component must perform exactly one logical task. If a component exceeds 150 lines of code, split it into smaller sub-components.
2. **Composition over Configuration:** Avoid creating "god components" with dozens of boolean flags (`isLarge`, `hasIcon`, `isDark`, `showBadge`). Use slotted children (`children`) and composition patterns.
3. **Explicit Prop Interface Naming:** Prop interfaces must match the pattern `[ComponentName]Props`:
   ```typescript
   export interface ArchitectureDrawerProps {
     readonly isOpen: boolean;
     readonly onOpenChange: (open: boolean) => void;
     readonly spec: ArchitectureSpec;
   }
   ```
4. **Decoupled Business Logic:** UI components must not directly manipulate global state or make raw fetch calls. Data fetching occurs in Server Components or dedicated utility handlers.

---

### 3. UI/UX Principles: Clarity, Consistency & Restraint

- **Visual Restraint:** Restrict the color palette to near-black backgrounds (`#09090b`), dark neutral surfaces (`#121215`, `#1c1c21`), zinc borders (`#27272a`), and a single Electric Violet accent (`#8b5cf6`). Avoid decorative gradients or rainbow button styles.
- **Generous Whitespace:** Maintain consistent padding and margins using Tailwind spacing tokens (e.g., `gap-4`, `p-6`, `space-y-8`). Never crowd content.
- **Tactile Feedback:** Every interactive control (button, link, card, menu item) must provide instantaneous visual feedback on hover, focus, and click states.
- **Content Hierarchy:** High-value data (impact metrics, tech tags, action triggers) must be visually distinct through weight and contrast, not excessive size.

---

### 4. Animation & Motion Guidelines

Animations exist solely to aid spatial orientation, indicate state transitions, and provide micro-tactile feedback.

#### 4.1 Duration & Easing Budget
- **Micro-Interactions (Button hovers, icon morphs):** `100ms – 150ms` using `ease-out`.
- **Surface Transitions (Modal overlays, drawers, tabs):** `150ms – 250ms` using custom spring response `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Page Route Transitions:** `100ms` subtle opacity fade (`opacity 0 ➔ 1`).

#### 4.2 Prohibited Motion Patterns (Motion Ban List)
- ❌ **No Scroll-Jacking:** Never override or manipulate native browser scrolling physics.
- ❌ **No Infinite Background Canvas Loops:** Avoid continuous particle grids or animated webgl shaders that waste CPU/GPU resources.
- ❌ **No Layout Reflow Animations:** Avoid animating CSS properties that trigger browser layout recalculations (`height`, `width`, `top`, `margin`). Animate only hardware-accelerated CSS properties (`transform`, `opacity`).
- ❌ **Automatic Reduced Motion:** Respect `prefers-reduced-motion: reduce`. When set, all motion transitions revert to instantaneous updates.

---

### 5. Accessibility (WCAG 2.1 Level AA) Mandatory Rules

Accessibility is integrated from the ground up, not patched on afterwards.

1. **Keyboard Ergonomics:**
   - Every interactive element must be reachable and operable using standard keyboard navigation (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc`).
   - Custom interactive elements must have visible, high-contrast focus indicators (`focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`).
2. **ARIA Semantics & Structure:**
   - Use native semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<button>`).
   - Use explicit ARIA attributes for dynamic state: `aria-expanded`, `aria-controls`, `aria-haspopup`, `aria-describedby`.
   - Implement an `aria-live="polite"` feedback container for non-modal status updates (e.g., *"Email copied to clipboard"*).
3. **Color Contrast Ratios:**
   - Text against background must achieve a minimum contrast ratio of **4.5:1** for normal body text and **3:1** for large display text.
   - Interactive focus states and borders must achieve a minimum contrast ratio of **3:1** against adjacent background colors.

---

### 6. Testing Strategy & Quality Automation

```
                     +---------------------------------------+
                     |    PLAYWRIGHT E2E & AXE-CORE AUDITS    |  (Route Navigation & WCAG 100%)
                     +---------------------------------------+
                                         |
                     +---------------------------------------+
                     |   REACT TESTING LIBRARY INTEGRATION   |  (Interactive Drawers & Cmd+K)
                     +---------------------------------------+
                                         |
                     +---------------------------------------+
                     |         VITEST UNIT TESTS             |  (Utilities, Formatters, Schemas)
                     +---------------------------------------+
```

1. **Unit Testing (Vitest):**
   - 100% test coverage required for core utility functions (`src/lib/utils.ts`, metrics calculators, date formatters, schema validation helpers).
2. **Component Integration Testing (React Testing Library):**
   - Verify interactive component state transitions (`RecruiterBar` copy trigger, `CommandPalette` filter logic, `ArchitectureDrawer` open/close handlers).
3. **End-to-End & Automated Accessibility Auditing (Playwright + `@axe-core/playwright`):**
   - Automated E2E test runs across Chrome, Firefox, and Mobile Safari emulation.
   - Automated accessibility scanner validating **zero WCAG 2.1 AA violations** on all route endpoints (`/`, `/projects`, `/projects/[id]`, `/experience`, `/about`).

---

### 7. Documentation Standards

1. **Self-Documenting Code:** Code must be clear enough that inline comments are rarely needed. Use descriptive variable and function names (`calculateRouteLatencyMs` instead of `calcLat`).
2. **JSDoc Annotations:** All public helper functions, exported hooks, and complex data schemas must include JSDoc block comments specifying parameters, return types, and usage examples.
3. **Comment Philosophy:** Comments should explain **WHY** a decision was made (e.g., architectural trade-offs, workaround for browser quirks), never **WHAT** the code does.

---

### 8. Quality Review Checklists

#### 8.1 Code Review Checklist (Static Quality Gate)
- [ ] Are TypeScript types strict with zero usage of `any`?
- [ ] Is the component a Server Component by default unless interactivity requires `'use client'`?
- [ ] Are `'use client'` directives isolated at the leaf level?
- [ ] Do all interactive components support full keyboard navigation (`Tab`, `Enter`, `Esc`)?
- [ ] Are images loaded using `next/image` with explicit dimensions and priority flags where appropriate?
- [ ] Are there zero console errors, warnings, or unhandled promise rejections?
- [ ] Does `npm run build` pass cleanly with zero type errors or linter warnings?

#### 8.2 Design & UX Review Checklist (Visual Quality Gate)
- [ ] Does the background adhere strictly to the near-black obsidian token (`#09090b`)?
- [ ] Is visual hierarchy clear, with the Electric Violet accent (`#8b5cf6`) reserved for active/primary triggers?
- [ ] Is whitespace generous and consistent across desktop, tablet, and mobile viewports?
- [ ] Do all hover, focus, and active states react within 150ms?
- [ ] Are glassmorphism overlays blurred cleanly (`12px`) without visual artifacts or text illegibility?
- [ ] Does the page render flawlessly on 320px mobile screens up to 4K displays?

---

### 9. The Definition of Excellence

A feature or milestone is **NOT complete** when code is merely written. It is considered complete **only when it satisfies the Definition of Excellence**:

> **The Definition of Excellence:**
> 1. **Production Quality Only:** Clean, maintainable TypeScript code with zero technical debt or placeholder hacks.
> 2. **Lighthouse Score ≥ 95:** Verified performance, accessibility, best practices, and SEO scores on production builds.
> 3. **WCAG 2.1 AA Compliant:** Zero accessibility violations verified via automated `axe-core` test suites and manual keyboard testing.
> 4. **Speed-to-Value Optimized:** Recruiters and hiring managers can access key background signals and resume assets in **under 3 seconds**.
> 5. **Visual Polish:** Sleek, SaaS-grade aesthetic matching the craftsmanship of Vercel, Linear, and Apple.
> 6. **Zero Console Errors:** Flawless browser console execution during all interactive flows.

---
