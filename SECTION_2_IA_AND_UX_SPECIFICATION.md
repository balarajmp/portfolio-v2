# Section 2: Information Architecture (IA), UX Flow & Wireframe Specification

**Document Status:** Final Draft / Pending User Approval  
**Role:** Senior Staff Software Engineer, Product Designer, UI/UX Architect  
**Project:** SaaS-Grade Developer Portfolio Website  

---

### 1. Visual Direction & Aesthetic Framework

Inspired by the design craftsmanship of **Apple**, **Vercel**, and **Linear**, the visual identity is built on structural precision, generous whitespace, zero visual noise, and intentional typography.

#### 1.1 The Near-Black Aesthetic System
- **Canvas Base (`--bg-canvas`):** `#09090b` (Deep obsidian near-black; avoids pure `#000000` to prevent harsh OLED contrast while maintaining a premium dark feel).
- **Surface Elevation Level 1 (`--bg-surface-1`):** `#121215` (Cards, project containers, key modules).
- **Surface Elevation Level 2 (`--bg-surface-2`):** `#1c1c21` (Dropdowns, modals, hover states, active inputs).
- **Subtle Borders (`--border-subtle`):** `#27272a` (1px clean zinc borders for structured containment without heavy lines).
- **Focus / Active Borders (`--border-strong`):** `#3f3f46` (High-visibility focus rings and active cards).
- **Primary Accent (`--accent-violet`):** `#8b5cf6` (Electric Violet - used exclusively for active states, key interactive indicators, and luminous subtle glows).
- **Accent Hover (`--accent-hover`):** `#a78bfa` (Softer violet for hover feedback).
- **Accent Background Tint (`--accent-glow`):** `rgba(139, 92, 246, 0.08)` (Subtle background highlight for callouts and active tabs).

#### 1.2 Glassmorphism & Shadow Guidelines
- **Glassmorphism Rule:** Used *sparingly*—only on fixed overlays (Top Navigation Header, Command Palette Modal, Slide-Over Inspector Drawers).
- **Backdrop Blur Standard:** `backdrop-filter: blur(12px) saturate(180%)`; background opacity set to 75% dark obsidian.
- **Shadow Tokens:** Soft ambient drop shadows (`0 8px 30px rgba(0, 0, 0, 0.5)`) to create natural visual layering without heavy colored glows.

---

### 2. Complete User Journeys by Persona

Each persona has distinct goals, constraints, and time allowances. The site dynamically satisfies all 5 user profiles through clear paths and quick action triggers.

```
                  +-----------------------------------+
                  |      VISITOR ARRIVES ON SITE      |
                  +-----------------------------------+
                                    |
     +-----------------+------------+-----------+-----------------+
     |                 |                        |                 |
[ Recruiter ]   [ Hiring Manager ]     [ Senior Engineer ]   [ Founder / CTO ]
(15-30s budget)   (1-2 min budget)       (3-5 min budget)    (30-60s budget)
     |                 |                        |                 |
     v                 v                        v                 v
Fast-Track Bar    Project Specs            Architecture          Full-Stack
(Resume/Email)   & Metrics                & ADR Breakdown       Product Polish
```

#### 2.1 Persona 1: Technical Recruiter
- **Time Budget:** 15 – 30 seconds.
- **Primary Goal:** Verify senior-level candidate match, locate role title, download resume, copy contact info.
- **Journey Mapping:**
  1. Lands on `/` (Homepage).
  2. Immediate sight of Hero Title (*"Senior Software Engineer"*), Current Availability Badge (*"🟢 Available for Senior/Staff Roles"*), and **Recruiter Action Bar**.
  3. Clicks **"Download PDF Resume"** or **"Copy Email"** directly from Hero (1 click).
  4. Quickly scrolls down past Flagship Projects to verify key skills radar and experience timeline.
  5. Exits with candidate profile saved or email drafted.

#### 2.2 Persona 2: Hiring Manager / Director of Engineering
- **Time Budget:** 1 to 2 minutes.
- **Primary Goal:** Evaluate project impact, leadership scope, technical complexity, and architectural ownership.
- **Journey Mapping:**
  1. Lands on `/` (Homepage).
  2. Skips bio; reads Flagship Project cards focused on metrics (*"99.99% Availability"*, *"1.2M req/sec"*).
  3. Clicks **"Inspect Architecture"** on Project Card 1.
  4. Reads the slide-over inspector modal detailing system flow, challenges, and engineering trade-offs.
  5. Navigates to `/experience` to inspect career trajectory, scope of responsibility, and team size/impact.

#### 2.3 Persona 3: Senior / Staff Software Engineer & Technical Interviewer
- **Time Budget:** 3 to 5 minutes.
- **Primary Goal:** Inspect code quality, system design reasoning, performance engineering, accessibility, and Web Vitals.
- **Journey Mapping:**
  1. Lands on `/` and presses `Cmd + K` out of muscle memory or opens the Telemetry drawer.
  2. Inspects real-time Web Vitals (FPS, bundle size, latency meter).
  3. Navigates to `/projects/[id]` or `/architecture` to read Architecture Decision Records (ADRs).
  4. Evaluates tab accessibility, keyboard focus states, code snippet syntax formatting, and edge delivery speed.

#### 2.4 Persona 4: Startup Founder / CTO
- **Time Budget:** 30 to 60 seconds.
- **Primary Goal:** Assess speed of execution, full-stack product intuition, aesthetic polish, and design capability.
- **Journey Mapping:**
  1. Lands on `/` and immediately observes visual aesthetic (dark theme, crisp layout, micro-interactions).
  2. Interacts with live embedded project sandbox or interactive component demos.
  3. Validates that the engineer builds products that look and feel like top-tier SaaS (Linear/Stripe grade).
  4. Clicks **"Schedule Intro Call"** or **"LinkedIn"**.

#### 2.5 Persona 5: General Tech Visitor / Developer Peer
- **Time Budget:** 2+ minutes.
- **Primary Goal:** Exploration, reading technical articles/ADRs, examining UI components.
- **Journey Mapping:** Uses `Cmd + K` or primary nav to explore projects, tech radar, articles, and interactive terminal drawer.

---

### 3. Click-Optimization Matrix (Zero-Friction Access)

| Key Asset | Max Clicks Required | Primary Location | Alternative Secondary Location |
| :--- | :---: | :--- | :--- |
| **Download PDF Resume** | **1 Click** | Hero Recruiter Action Bar | Header CTA / `Cmd + K` Menu / Footer |
| **Copy Email Address** | **1 Click** | Hero Recruiter Action Bar | Top Nav Contact Button / `Cmd + K` Menu |
| **Featured Projects** | **0 Clicks** | Directly visible on Homepage Hero scroll | Top Navigation Bar (`/projects`) |
| **GitHub Profile** | **1 Click** | Hero Social Strip / Recruiter Bar | Header Icon / Footer / `Cmd + K` |
| **LinkedIn Profile** | **1 Click** | Hero Social Strip / Recruiter Bar | Header Icon / Footer / `Cmd + K` |

---

### 4. Responsive Navigation System Design

#### 4.1 Desktop Navigation (Width ≥ 1024px)
- **Top Glassmorphic Bar:** Fixed header with 75% dark obsidian fill, 12px blur, 1px subtle zinc bottom border.
- **Left Cluster:** Logo mark (`Name.dev`) + Live Status Pill (`🟢 Available`).
- **Center Cluster:** Segmented navigation links (`Projects`, `Experience`, `Architecture`, `About`). Active route highlighted with a subtle violet indicator underline and faint background glow.
- **Right Cluster:**
  - `Cmd + K` Spotlight Search Pill (`[ 🔍 Search or Jump...  ⌘K ]`).
  - Primary CTA button: `Resume 📄`.

#### 4.2 Tablet Navigation (768px ≤ Width < 1024px)
- **Top Bar Adaptation:** Logo mark on left; `Cmd + K` search trigger icon and compact `Resume` button on right.
- **Nav Links:** Compact horizontal pill strip below header or accessible via sticky bar.

#### 4.3 Mobile Navigation (Width < 768px)
- **Top Header:** Clean logo mark + compact `Cmd + K` magnifying glass icon + minimal mobile menu trigger (`☰`).
- **Mobile Menu (Bottom Slide-Up Glass Sheet):**
  - Sweeps up from bottom (thumb-friendly ergonomic layout).
  - Contains large tap targets (48px height) for `Projects`, `Experience`, `Architecture`, `About`.
  - Dedicated **Recruiter Quick Actions Grid** at bottom of sheet: `📄 Resume`, `✉️ Copy Email`, `🐙 GitHub`, `💼 LinkedIn`.

#### 4.4 Global Keyboard Navigation & Command Center (`Cmd + K`)
- Triggered by `Cmd + K` (Mac) or `Ctrl + K` (Windows/Linux) anywhere on the site.
- Fuzzy search input with instant matching.
- Categories:
  - **Actions:** *Download Resume*, *Copy Email*, *Toggle Dark/Light Mode*, *Toggle Sound FX*.
  - **Navigation:** *Go to Home*, *Go to CloudScale Project*, *Go to Experience*, *Go to About*.
  - **Socials:** *Open GitHub*, *Open LinkedIn*, *Open Twitter/X*.

---

### 5. Recommended Homepage Section Sequence & Engineering Rationale

The homepage structure strictly prioritizes **proof of capability (projects & metrics)** over generic personal introductions.

```
┌─────────────────────────────────────────────────────────┐
│ 1. HERO & RECRUITER COMMAND BAR                          │
├─────────────────────────────────────────────────────────┤
│ 2. FLAGSHIP PROJECTS (Top Priority - Proof of Capability)│
├─────────────────────────────────────────────────────────┤
│ 3. LIVE SYSTEM METRICS & TECH RADAR (Technical Depth)   │
├─────────────────────────────────────────────────────────┤
│ 4. CAREER MILESTONES TIMELINE (Quantified Track Record) │
├─────────────────────────────────────────────────────────┤
│ 5. ARCHITECTURE PHILOSOPHY & BRIEF BIO (Engineering Mind)│
├─────────────────────────────────────────────────────────┤
│ 6. FOOTER & RECRUITER FAST-TRACK SUMMARY                 │
└─────────────────────────────────────────────────────────┘
```

#### Rationale for Section Order:
1. **Hero & Recruiter Bar (Section 1):** Instantly clarifies candidate role level and satisfies 15-second recruiter needs.
2. **Flagship Projects (Section 2 - Before Bio):** Decision-makers care about what you've *built* and the *scale of impact* before reading personal essays.
3. **Tech Radar & Metrics (Section 3):** Establishes domain depth across frontend, backend, databases, and DevOps immediately after showing projects.
4. **Career Milestones (Section 4):** Validates enterprise history, leadership growth, and employment track record.
5. **Philosophy & Bio (Section 5):** Provides context on engineering mindset *after* technical credibility has been proven.

---

### 6. Granular Page Specifications & Content Hierarchy

#### 6.1 Page 1: Home (`/`) — Executive Landing & Flagship Showcase
- **Purpose:** High-impact landing page that proves engineering mastery within 5 seconds and converts visitors into interview leads.
- **Target Audience:** Recruiters, Hiring Managers, Founders, Senior Engineers.
- **Primary CTA:** `Download PDF Resume`
- **Secondary CTA:** `Inspect Architecture` / `View Projects`
- **Exit Paths:** `/projects`, `/experience`, `/about`, External GitHub/LinkedIn, Direct Email trigger.
- **Content Hierarchy:**
  1. Header with live status pill.
  2. Hero Headline, Subhead, and 1-Click Recruiter Bar.
  3. Flagship Projects Grid (2-3 top projects with live metric pills & inspector drawers).
  4. Core Technical Radar (categorized grid of mastered stacks).
  5. Quantified Career Summary Banner.
  6. Concise Philosophy snippet leading to `/about`.

---

#### 6.2 Page 2: Projects Hub (`/projects`) — Complete Systems Catalog
- **Purpose:** Full gallery of engineered products, open-source tools, and technical case studies with system design specs.
- **Target Audience:** Hiring Managers, Staff Engineers, CTOs.
- **Primary CTA:** `Inspect Architecture` (opens slide-over drawer).
- **Secondary CTA:** `Launch Live Demo` / `View GitHub Repo`.
- **Exit Paths:** `/projects/[id]` (Detailed Case Study), `/experience`, `/`.
- **Content Hierarchy:**
  1. Page Title & Category Filter Tabs (`All Systems`, `Full-Stack SaaS`, `Distributed Systems`, `Frontend Core`).
  2. Detailed Project Cards with visual preview, problem/solution breakdown, key stack pills, and impact metrics.
  3. Interactive Architecture Inspector Drawer trigger on each card.

---

#### 6.3 Page 3: Detailed Project Case Study (`/projects/[id]`)
- **Purpose:** In-depth engineering case study detailing architectural decisions, database schemas, performance bottlenecks, and solutions.
- **Target Audience:** Technical Interviewers, Staff Engineers, Hiring Managers.
- **Primary CTA:** `View Live Application`
- **Secondary CTA:** `Back to Projects` / `View Codebase`.
- **Exit Paths:** Related Projects, `/experience`, `/`.
- **Content Hierarchy:**
  1. Project Hero (Title, Tagline, Live Link, Repo Link, Team Role, Timeline).
  2. Quantified Impact Banner (e.g., *"Reduced P99 latency by 64%"*).
  3. Problem Statement & Business Context.
  4. System Architecture Diagram (Interactive SVG sequence / flow diagram).
  5. Key Engineering Trade-Offs & Decision Log (ADRs).
  6. Code Snippets & Optimization Highlights.

---

#### 6.4 Page 4: Experience Matrix (`/experience`) — Career Track Record
- **Purpose:** Showcase career trajectory, scope of responsibility, engineering achievements, and leadership milestones.
- **Target Audience:** Recruiters, Engineering Directors, HR.
- **Primary CTA:** `Download Full PDF Resume`
- **Secondary CTA:** `Contact Candidate`
- **Exit Paths:** `/projects`, `/about`, `/`.
- **Content Hierarchy:**
  1. Header with total experience counter & engineering domain summary.
  2. Interactive Chronological Timeline.
  3. Role Cards featuring: Company Name, Role Title, Date Range, Location, Core Achievements (bullet points with bolded metrics), and Tech Stack Tags.
  4. Highlighted Architecture Decision Records (ADRs) authored during each role.

---

#### 6.5 Page 5: Engineering Mindset & Bio (`/about`) — Craft & Philosophy
- **Purpose:** Express software philosophy, craftsmanship values, work ethics, and technical background.
- **Target Audience:** Engineering Managers, Senior Peers, Founders.
- **Primary CTA:** `Schedule Intro Call` / `Email Candidate`
- **Secondary CTA:** `Explore Code Projects`
- **Exit Paths:** `/projects`, `/experience`, Social Links.
- **Content Hierarchy:**
  1. Engineering Philosophy Cards (e.g., *"Simplicity over cleverness"*, *"Performance as a feature"*).
  2. Background Narrative (Career journey & key tech transitions).
  3. Daily Driver Stack & Tooling Setup (IDE, OS, CLI, hardware).
  4. Continuous Learning & Technical Focus Areas.

---

### 7. Text-Based Low-Fidelity Wireframes

#### 7.1 Homepage Desktop Wireframe (`/`)

```
================================================================================
[ Logo: Name.dev 🟢 ]       [Projects]  [Experience]  [About]      [ ⌘K ] [ Resume 📄 ]
================================================================================

 [ BADGE: Senior Software Engineer ]

 <h1>Architecting Scalable SaaS & High-Performance Systems</h1>
 <p>Specializing in TypeScript, Distributed Architecture, and Premium UX.</p>

 +----------------------------------------------------------------------------+
 |  [📄 Download Resume]   [✉️ Copy Email]   [🐙 GitHub]   [💼 LinkedIn]      |
 +----------------------------------------------------------------------------+

 ------------------------------------------------------------------------------
 FEATURED PROJECTS (Prioritized Content)
 ------------------------------------------------------------------------------
 +----------------------------------------+ +----------------------------------------+
 | PROJECT 01: CloudScale SaaS            | | PROJECT 02: PulseEngine Analytics      |
 | [ Image / Preview Mockup ]             | | [ Image / Preview Mockup ]             |
 |                                        | |                                        |
 | Impact: 99.99% Availability | 50k MAU | | Impact: < 15ms Query Latency | P99     |
 | Stack: Next.js, Go, PostgreSQL, Redis | | Stack: TypeScript, ClickHouse, RSC     |
 |                                        | |                                        |
 | [ 🔗 Live App ]  [ 📐 Architecture ]   | | [ 🔗 Live App ]  [ 📐 Architecture ]   |
 +----------------------------------------+ +----------------------------------------+

 ------------------------------------------------------------------------------
 CORE TECHNICAL RADAR
 ------------------------------------------------------------------------------
 +-----------------------+ +-----------------------+ +-----------------------+
 | Frontend Architecture | | Backend & Distributed | | Cloud & Infrastructure|
 | React, Next.js, RSC,  | | Node.js, Go, Redis,   | | AWS, Docker, K8s,     |
 | TypeScript, Tailwind  | | PostgreSQL, GraphQL | | CI/CD, Cloudflare     |
 +-----------------------+ +-----------------------+ +-----------------------+

================================================================================
 [ Floating Telemetry Footer:  FPS: 60  |  Latency: 14ms  |  WCAG 2.1 AA: 100% ]
================================================================================
```

#### 7.2 Slide-Over Architecture Inspector Drawer Wireframe

```
================================================================================
| ARCHITECTURE INSPECTOR: CloudScale SaaS                             [ X Close ]
================================================================================
|
| SYSTEM DATA FLOW DIAGRAM:
|
|   +--------------+      +-------------------+      +------------------+
|   | Client App   | ---> | Cloudflare Edge   | ---> | Next.js App Router|
|   +--------------+      +-------------------+      +------------------+
|                                                             |
|                                                             v
|                                                    +------------------+
|                                                    | Go Microservice  |
|                                                    +------------------+
|                                                       |            |
|                                                       v            v
|                                                 [Redis Cache]  [PostgreSQL]
|
| KEY ARCHITECTURAL DECISIONS & TRADE-OFFS:
| 1. Redis Distributed Cache vs. In-Memory LRU:
|    Selected Redis cluster to maintain cache state across horizontal scaling instances.
| 2. Optimistic UI Updates:
|    Implemented client-side optimistic mutations with rollback triggers for zero-latency UX.
|
| RELEVANT CODE SNIPPET (State Mutation Engine):
| ```typescript
| export async function mutateOptimisticState<T>(payload: T): Promise<Result<T>> {
|   // Code logic breakdown...
| }
| ```
================================================================================
```

---

### 8. UX Animation & Micro-Interaction Strategy Matrix

Animations are strictly functional—used to reinforce visual hierarchy, spatial orientation, and state changes. Excessive decorational motion, parallax loops, and slow page transitions are **explicitly prohibited**.

| UI Component / Trigger | Recommended Animation Type | Duration / Timing | Purpose & UX Rationale |
| :--- | :--- | :--- | :--- |
| **Page Route Navigation** | Instant render or subtle opacity fade-in | 100ms fade (`ease-out`) | Prevents perceived navigation lag; maintains snappy feel. |
| **Button / Card Hover** | Subtle elevation lift (-2px Y) + border glow | 150ms spring (`ease-out`) | Provides crisp tactile confirmation of interactability. |
| **Slide-Over Inspector Drawer** | Right-to-left slide with backdrop backdrop-blur | 200ms cubic-bezier | Establishes spatial depth and clear context switching. |
| **Command Palette (`Cmd+K`)** | Centered scale fade (95% ➔ 100%) | 150ms ease | Smooth modal overlay arrival without jarring jump cuts. |
| **Expandable Timeline Item** | Vertical accordion height transition | 200ms ease-in-out | Reveals detailed role ADRs cleanly without shifting unrelated content. |
| **Code Snippet Copy Trigger** | Checkmark icon morph + violet glow | 150ms spring | Instant feedback confirming text copied to clipboard. |

#### Animations Out of Scope / Forbidden:
- ❌ Continuous floating background particles or heavy canvas animations (distracts eye, burns battery/GPU).
- ❌ Scroll-jacking or horizontal scroll overrides (violates native browser ergonomics and accessibility).
- ❌ Long entrance animations (> 300ms) that block user interaction.
- ❌ Motion on elements when `prefers-reduced-motion: reduce` is enabled.

---

### 9. Detailed UX Rationale & Design Philosophy

1. **Why Near-Black (`#09090b`) over Pure Black (`#000000`)?**
   - Pure black causes harsh contrast against white text, leading to eye fatigue during reading. A subtle obsidian tint (`#09090b`) provides depth, softens high-contrast typography, and pairs seamlessly with glassmorphism overlays.
2. **Why Electric Violet (`#8b5cf6`) as the Sole Accent?**
   - Using multiple accent colors creates visual clutter and dilutes focus. Electric Violet delivers exceptional contrast against near-black backgrounds, signals modern SaaS polish (inspired by Linear and Vercel), and clearly guides the user's eye to high-value actions.
3. **Why Projects Before Biography?**
   - In technical recruitment, hiring managers evaluate **evidence of output** first. Showing projects, live metrics, and system design upfront builds immediate technical credibility before presenting narrative bio details.
4. **Why Integrated `Cmd + K` Command Palette?**
   - Power users (Senior Engineers, Staff Reviewers, Founders) expect keyboard-first navigation efficiency. `Cmd + K` offers zero-mouse navigation while showcasing technical foresight in developer experience (DX).

---
