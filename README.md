# Portfolio Platform (v2) — Production-Grade SaaS Developer Portfolio

![Version](https://img.shields.io/badge/version-v0.1.0-8b5cf6?style=for-the-badge)
![Build Status](https://img.shields.io/badge/build-passing-22c55e?style=for-the-badge)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-95%2B-22c55e?style=for-the-badge)
![WCAG Accessibility](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-8b5cf6?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

An interactive, production-grade developer portfolio website engineered as a SaaS application. Designed to the aesthetic and technical standards of **Vercel**, **Linear**, **Stripe**, and **Apple**.

---

## 🌟 Key Highlights & Features

- **Obsidian Violet Aesthetic:** Polished near-black background (`#09090b`), dark neutral surfaces (`#121215`), subtle zinc borders (`#27272a`), and Electric Violet accent (`#8b5cf6`).
- **Recruiter Speed-to-Value (< 3s):** 1-Click access to downloadable PDF resume, email copy, GitHub, and LinkedIn assets directly from the hero header.
- **Flagship Projects & Architecture Inspector:** Interactive slide-over drawer featuring system flow diagrams, data flow specs, trade-off logs, and code highlights.
- **Command Center (`Cmd + K`):** Global Raycast/Linear style spotlight menu powered by `cmdk` for keyboard-first navigation and shortcuts.
- **Live Telemetry & Performance Monitor:** Real-time client-side performance sampler displaying FPS, route latency, and Web Vitals metrics.
- **Career Matrix & ADR Logs:** Interactive career timeline detailing technical scale, scope of responsibility, and Architecture Decision Records.
- **100% WCAG 2.1 AA Accessibility:** Visible focus rings, keyboard trap prevention, ARIA attributes, and automatic `prefers-reduced-motion` detection.

---

## 🛠️ Technology Stack

| Layer | Technology | Architectural Role |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | Hybrid rendering engine with React Server Components (RSC) by default. |
| **Language** | **TypeScript 5+** | Strict static type checking (`strict: true`, zero `any` usage). |
| **Styling** | **Tailwind CSS v3/v4** | Utility-first CSS engine with CSS custom properties for near-black tokens. |
| **Primitives** | **Radix UI / shadcn/ui** | Headless accessible UI primitives meeting WCAG 2.1 AA standards. |
| **Command Menu** | **cmdk** | Unstyled, fast, accessible command menu matching Raycast ergonomics. |
| **Icons & Utils** | **Lucide React + clsx** | Lightweight SVG icons and deterministic class merger utility (`cn()`). |

---

## 📁 Repository Directory Structure

```
portfolio-v2/
├── .github/                  # CI/CD workflows and GitHub templates
├── docs/                     # Engineering documentation and milestone reports
│   └── reports/              # Milestone verification reports (M1.1, etc.)
├── public/                   # Static assets, favicons, and resume PDF
├── src/
│   ├── app/                  # Next.js App Router static pages and layout groups
│   ├── components/           # UI Primitives, Shared Layouts, and Feature Modules
│   ├── config/               # Site metadata, social links, and recruiter settings
│   ├── content/              # Typed static databases (projects, experience, skills)
│   ├── hooks/                # Custom React hooks (useCommandPalette, useTelemetry)
│   ├── lib/                  # Core utility functions (cn, metrics, metadata builder)
│   ├── styles/               # Global CSS directives and Tailwind theme tokens
│   └── types/                # Strict TypeScript interfaces and schemas
├── PROJECT_BIBLE.md          # Master engineering handbook & single source of truth
├── DESIGN_SYSTEM.md          # Visual source of truth & color token specification
├── CONTENT_STRATEGY.md       # Content strategy & data schema blueprint
├── CONTRIBUTING.md           # Git branching model & PR quality gate checklist
├── LICENSE                   # MIT License
└── package.json              # Project dependencies and build scripts
```

---

## 🚦 Getting Started

### Prerequisites
- **Node.js:** `v18.17.0` or higher
- **Package Manager:** `npm` or `pnpm`

### Installation & Local Setup

```bash
# Clone the repository
git clone https://github.com/balarajmp/portfolio-v2.git

# Navigate to project directory
cd portfolio-v2

# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📚 Architectural Documentation

For deep technical details, refer to the documentation suite:

- 📘 [`PROJECT_BIBLE.md`](./PROJECT_BIBLE.md) — Master handbook & single source of truth
- 🎨 [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — Visual source of truth & color tokens
- 📊 [`CONTENT_STRATEGY.md`](./CONTENT_STRATEGY.md) — Content strategy & data schemas
- 🗺️ [`SECTION_4_ROADMAP_AND_MILESTONES.md`](./SECTION_4_ROADMAP_AND_MILESTONES.md) — Phased roadmap
- 🛡️ [`SECTION_5_ENGINEERING_STANDARDS.md`](./SECTION_5_ENGINEERING_STANDARDS.md) — Quality standards & DoD

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.
