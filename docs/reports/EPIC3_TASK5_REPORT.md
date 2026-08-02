# Epic 3 - Task 5: Engineering Journey Timeline Implementation Report

**Document Version:** 1.0.0  
**Author:** Senior Staff Software Engineer / UI Architect  
**Date:** 2026-08-02  
**Status:** Completed & Verified  

---

## 1. Architecture & Design Strategy

The **Engineering Journey Timeline** (`src/components/features/journey/`) is situated on the homepage (`/`) directly below the Engineering Skills Matrix. Avoiding traditional resume/employment layouts, it presents an evidence-backed narrative of candidate growth spanning from degree commencement in October 2023 to major technical milestones, project breakthroughs, and expected graduation in May 2027.

### Chronological Milestones
1. **October 2023:** Degree Commencement (Beginning of B.E. Degree)
2. **Early 2024:** Programming Foundations & Data Structures (C, Java, OOP, Algorithms)
3. **Mid 2024:** Full-Stack Web & Backend Architecture (React, Node.js, Express.js, REST APIs)
4. **Late 2024:** Smart Agriculture Portal Breakthrough (IoT Telemetry & Soil Analytics)
5. **Early 2025:** Machine Learning & Predictive Engine (Python, Scikit-Learn, XGBoost)
6. **Mid 2025:** Gaslytics Analytics Engine Breakthrough (Time-Series Gas Demand Forecasting)
7. **Late 2025:** CognitoShield AI Security Guardrail Engine (Asynchronous FastAPI Microservice)
8. **May 2027:** Expected Graduation (B.E. Degree)

### Component Hierarchy
```
src/components/features/journey/
├── EngineeringJourney.tsx # Landmark section container wrapping the growth narrative
├── JourneySummary.tsx     # High-level narrative summary callout banner
├── JourneyTimeline.tsx    # Vertical timeline line container orchestrating milestone nodes
├── JourneyMilestone.tsx   # Individual node connector positioning milestone icons
├── JourneyCard.tsx        # Glass card displaying milestone details, insights, skills, & project links
└── index.ts               # Barrel exporter for feature components
```

### Key Architectural Principles
1. **100% Server Components (RSC):** All timeline components execute as pure React Server Components with **0kB client JavaScript bundle size**.
2. **Strictly Content-Driven:** Driven entirely by typed data collections (`journeyMilestones` from `@/content/journey`), eliminating hardcoded JSX timeline entries.
3. **Project Cross-Referencing:** `JourneyCard` looks up `relatedProjectId` against `@/content/projects` to render verified project proof badges dynamically.

---

## 2. Component APIs

### `EngineeringJourney`
- **Props:** `EngineeringJourneyProps { readonly className?: string; }`
- **Description:** Landmark `<section id="engineering-journey">` coordinating section headers, summary narrative, and vertical timeline.

### `JourneySummary`
- **Props:** `JourneySummaryProps { readonly className?: string; }`
- **Description:** High-level narrative summary callout highlighting degree timeline and major project breakthroughs.

### `JourneyTimeline`
- **Props:** `JourneyTimelineProps { readonly className?: string; }`
- **Description:** Vertical timeline line container mapping through `journeyMilestones`.

### `JourneyMilestone`
- **Props:** `JourneyMilestoneProps { readonly milestone: JourneyMilestone; readonly className?: string; }`
- **Description:** Positions vertical axis node icons (Lucide icons) and renders `JourneyCard`.

### `JourneyCard`
- **Props:** `JourneyCardProps { readonly milestone: JourneyMilestone; readonly className?: string; }`
- **Description:** Obsidian surface card displaying milestone title, category badge, date, engineering insights list, acquired skill chips, and project links.

---

## 3. Accessibility (WCAG 2.1 AA)

- **Semantic Hierarchy:** Enclosed in `<section id="engineering-journey" aria-label="Engineering Growth Timeline">` with `<article>` cards and `<h3>` heading tags.
- **Node Contrast & Ringing:** Timeline node icons utilize high-contrast borders and outer ring backgrounds to ensure high visibility against dark obsidian surfaces (`#09090b`).
- **Keyboard Navigation:** High-contrast focus states across all interactive links and skill badges.

---

## 4. Performance Engineering

- **Zero-JS Overhead:** 100% React Server Component rendering.
- **Static Page Prerendering:** The entire homepage (`/`) is prerendered as a static route during `next build`.

---

## 5. Verification Results

| Check | Command | Result | Notes |
| :--- | :--- | :---: | :--- |
| **Type Check** | `npm run type-check` | **PASSED** | 0 TypeScript errors |
| **Linting** | `npm run lint` | **PASSED** | 0 ESLint warnings / errors |
| **Static Build** | `npm run build` | **PASSED** | Prerendered `/` static page cleanly |

---

## 6. Future Enhancements

1. **Interactive Milestone Drawer:** Allow clicking a milestone card to open a slide-over drawer with detailed code snippets or academic transcript references.
2. **Timeline Filter Toggles:** Filter timeline milestones by category (Academic, Learning, Project Breakthroughs).
