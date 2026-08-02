# Information Architecture (IA) & User Experience Specification

**Version:** 1.0.0  
**Author:** Senior Staff Software Engineer & UI/UX Architect  
**Status:** Draft / Pending Approval  

---

### 1. Visual Aesthetic & Design Tokens

The portfolio adopts a sleek, SaaS-grade aesthetic inspired by **Linear**, **Vercel**, and **Apple**. It utilizes a polished, near-black dark theme paired with a single signature accent color (**Electric Violet**) to establish high contrast, extreme visual clarity, and sophisticated elegance.

#### 1.1 Color Palette Tokens

```css
/* Color Palette System */
--bg-canvas: #09090b;           /* Obsidian near-black background */
--bg-surface: #121215;          /* Elevated card & surface container */
--bg-surface-hover: #1a1a20;    /* Interactive state hover */
--border-subtle: #27272a;       /* Clean 1px surface separation */
--border-strong: #3f3f46;       /* Focused & active state borders */

/* Typography & Text */
--text-primary: #f4f4f5;        /* High-contrast primary headers & text */
--text-secondary: #a1a1aa;      /* Subtitles, meta info, descriptions */
--text-muted: #71717a;          /* Timestamps, subtle labels */

/* Signature Accent Color: Electric Violet */
--accent-primary: #8b5cf6;      /* Violet 500 - Primary actions & glows */
--accent-hover: #a78bfa;        /* Violet 400 - Hover state */
--accent-subtle: rgba(139, 92, 246, 0.12); /* Subtle glow backgrounds */
--accent-border: rgba(139, 92, 246, 0.35); /* Accent highlight borders */
```

#### 1.2 Typography & Spatial System
- **Display & Body Font:** `Inter` / `Geist Sans` (Variable, high-legibility at micro sizes).
- **Code & Telemetry Font:** `JetBrains Mono` / `Geist Mono` (Crisp alignment for system specs and metrics).
- **Surface Elevation:** Subtle 1px borders with glassmorphism backdrop blurs (`backdrop-filter: blur(12px)`).
- **Micro-Animations:** Fluid 150ms-250ms spring transitions for hover states, modal overlays, and drawer expansions.

---

### 2. Recruiter Journey & Speed-to-Value Flow

The user journey is optimized specifically for **speed-to-value**. Recruiters and hiring managers spend an average of 15–30 seconds reviewing a candidate's page. The layout ensures all essential evaluation signals are delivered **in under 5 seconds**.

```
[ Visitor Arrives ] 
       │
       ├──► 0-3s: Hero Snapshot (Headline + Role + Recruiter Quick-Bar)
       │           └── [ 1-Click Resume Download ] [ Copy Email ] [ GitHub ]
       │
       ├──► 3-10s: Flagship Projects (Prioritized BEFORE Biography)
       │           └── [ Live System Metrics ] [ Tech Stack Tags ] [ "Inspect Architecture" ]
       │
       ├──► 10-20s: Career Matrix & Experience Timeline
       │           └── [ Scope of Responsibility ] [ Quantified Impact ] [ Key Stack ]
       │
       └──► 20-30s: Engineering Philosophy & Technical Mindset (/about)
```

---

### 3. Site Navigation Structure

#### 3.1 Top Navigation Bar (Fixed Glassmorphic Header)
- **Left:** Brand Mark / Logo (`Name.dev` with live status indicator dot: `🟢 Available for Senior Roles`).
- **Center:** Primary Navigation:
  1. `Projects` (Direct anchor to flagship projects / `/projects`)
  2. `Experience` (Career timeline / `/experience`)
  3. `Architecture` (System design & sandbox / `/architecture`)
  4. `About` (Engineering philosophy & background / `/about`)
- **Right:**
  - `Cmd+K` Command Center Trigger (Pill button with visual key shortcut).
  - Recruiter Action CTA (`Get Resume` / `Contact`).

#### 3.2 Command Palette (`Cmd + K`) Modal Structure
- **Quick Actions:** Download Resume, Copy Email, Copy Phone, Open GitHub, Schedule Call.
- **Navigation:** Jump to any project, experience entry, or page instantly.
- **Theme & Preferences:** Toggle reduced motion, toggle terminal drawer.

#### 3.3 Persistent Telemetry Footer Bar (Compact)
- Floating minimal status bar showing: `FPS: 60 | Latency: 12ms | WCAG: 100% AA`.

---

### 4. Content Hierarchy & Page Breakdown

In strict adherence to the mandate: **Projects are prioritized before biography.**

#### 4.1 Page 1: Home (`/`) — Hero & Flagship Projects Hub

1. **Header & Recruiter Command Bar:**
   - Impactful headline: *"Senior Software Engineer — Building Distributed Systems & High-Performance Web Applications."*
   - Recruiter Quick Actions Bar: Instant `Download PDF Resume`, `Copy Email`, `Schedule 15-Min Intro`.
2. **Flagship Projects Section (Top Priority Content):**
   - Grid of 2-3 top production projects.
   - Each card displays: Project Title, Tagline, Quantified Metrics (e.g., *"Processed 1.2M events/sec"*), Primary Tech Stack Pills (e.g., `TypeScript`, `Next.js`, `Go`, `Redis`), and an interactive `"Inspect Architecture"` drawer trigger.
3. **Core Engineering Capabilities & Tech Radar:**
   - Categorized skills matrix grouped by domain: *Frontend Architecture*, *Distributed Systems & Backend*, *Cloud & DevOps*, *Database & Storage*.
4. **Quantified Career Highlights:**
   - Quick stats counter (e.g., *"6+ Years Experience | 3 Enterprise SaaS Products Shipped | 99.99% Availability Systems Managed"*).

---

#### 4.2 Page 2: Projects Hub (`/projects`) — Detailed Systems & Case Studies

1. **Projects Filter Bar:**
   - Filter by domain: `All`, `Full-Stack SaaS`, `Frontend Engineering`, `Distributed Systems`, `Open Source`.
2. **Project Case Study Cards:**
   - High-fidelity preview mockups with live interactive links.
   - Problem Statement vs. Architectural Solution vs. Quantified Business Outcome.
3. **Interactive Architecture Inspector Drawer (Slide-Over):**
   - Opens when clicking `"Inspect Architecture"` on any project.
   - Contains:
     - Interactive System Flow Diagram (SVG/Mermaid sequence of client ➔ API gateway ➔ microservices ➔ database).
     - Engineering Trade-offs & Decisions Log.
     - Code snippet breakdown highlighting complex logic or state optimizations.

---

#### 4.3 Page 3: Experience Matrix (`/experience`) — Career Storytelling & Impact

1. **Interactive Timeline View:**
   - Reverse chronological timeline of roles (Senior Software Engineer ➔ Software Engineer ➔ Tech Lead).
2. **Role Card Schema:**
   - Company Name, Role Title, Date Range, Location/Remote status.
   - **Key Architectural Contributions:** Bullet points focused on high-scale impact, performance, and leadership.
   - **Tech Stack Employed:** Tag pills for every role.
   - **Architecture Decision Record (ADR) Snippet:** Highlighted engineering challenge solved during the tenure.

---

#### 4.4 Page 4: Engineering Mindset & Bio (`/about`) — Craft & Philosophy

1. **Engineering Philosophy & Principles:**
   - Core tenets (e.g., *"Build for simplicity first"*, *"Obsess over latency & Web Vitals"*, *"Code is for humans to read, machines to execute"*).
2. **Professional Bio & Background:**
   - High-level narrative of career trajectory and passion for building SaaS products.
3. **Developer Setup & Workflow:**
   - Daily driver tools (IDE, Terminal, OS, Hardware setup).

---

### 5. Low-Fidelity Wireframe Specifications

#### 5.1 Home Page Layout (`/`)

```
+-----------------------------------------------------------------------+
|  [Logo: Name.dev 🟢]     [Projects] [Experience] [About]   [Cmd+K] [Resume ⬇] |
+-----------------------------------------------------------------------+
|                                                                       |
|  [ BADGE: Senior Software Engineer / Technical Lead ]                 |
|  <h1>Architecting Scalable SaaS & High-Performance Systems</h1>       |
|  <p>Specializing in TypeScript, Distributed Systems, and UI/UX.</p>    |
|                                                                       |
|  +-----------------------------------------------------------------+  |
|  |  [📄 Download Resume]  [✉️ Copy Email]  [🐙 GitHub]  [💼 LinkedIn] |  |
|  +-----------------------------------------------------------------+  |
|                                                                       |
|  --- FLAGSHIP PROJECTS (Prioritized Content) ------------------------ |
|                                                                       |
|  +-----------------------------------+ +-----------------------------------+  |
|  | PROJECT 01: CloudScale SaaS      | | PROJECT 02: PulseEngine Analytics |  |
|  | Impact: 99.99% Uptime, 50k MAU    | | Impact: < 15ms Query Latency      |  |
|  | Stack: Next.js, Go, PostgreSQL    | | Stack: TypeScript, ClickHouse, RSC|  |
|  | [ View Live ] [ Inspect Architecture ]| [ View Live ] [ Inspect Architecture ]|  |
|  +-----------------------------------+ +-----------------------------------+  |
|                                                                       |
|  --- CORE TECH RADAR ------------------------------------------------ |
|  [ Frontend Architecture ]  [ Backend & Distributed ]  [ Cloud & DevOps ]|
|                                                                       |
+-----------------------------------------------------------------------+
|  [ Floating Status Bar: 60 FPS | 12ms Latency | WCAG AA 100% ]        |
+-----------------------------------------------------------------------+
```

#### 5.2 Slide-Over Architecture Inspector Drawer Wireframe

```
+------------------------------------------+
|  ARCHITECTURE INSPECTOR: CloudScale SaaS  | [X Close]
+------------------------------------------+
|  System Flow Diagram:                    |
|  [Client] ──> [Cloudflare Edge] ──> [API Gateway]
|                                           │
|                                           ├──> [Redis Cache]
|                                           └──> [Go Workers]
|
|  Key Trade-Offs & Decisions:
|  - Chose Redis cluster over in-memory node cache to support zero-downtime rolling deploys.
|  - Implemented optimistic UI updates with rollback strategy for instant UX.
|
|  Code Highlight: Optimistic Lock Handler
|  ```typescript
|  async function executeOptimisticUpdate(...) { ... }
|  ```
+------------------------------------------+
```

---
