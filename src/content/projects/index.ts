import type { Project } from "@/types";

/**
 * Flagship Software Engineering Case Studies Data
 */
export const projects: ReadonlyArray<Project> = [
  {
    id: "cognitoshield-ai",
    slug: "cognitoshield-ai",
    title: "CognitoShield AI",
    tagline: "Real-Time AI Technical Interview & Code Assessment Platform",
    summary: "High-performance evaluation engine providing objective technical candidate assessments through automated code execution analysis and real-time LLM feedback pipelines.",
    isFeatured: true,
    status: "published",
    priorityOrder: 1,
    problemStatement: "Traditional technical interviewing workflows are labor-intensive, subject to bias, and lack real-time code performance profiling or objective evaluation metrics across candidate pipelines.",
    solutionStatement: "Architected an end-to-end automated interview platform utilizing a FastAPI microservices backend and a Next.js frontend. Integrated asynchronous event execution pipelines with secure code isolation sandboxes and streaming LLM feedback.",
    lessonsLearned: [
      "Asynchronous streaming over WebSockets significantly reduces perceived latency compared to HTTP polling.",
      "Strict data contract typing between Python backend schemas and TypeScript frontend interfaces prevents runtime API desynchronization.",
      "Isolated code execution requires strict memory and CPU runtime cgroups to prevent noisy-neighbor resource starvation.",
    ],
    architecture: {
      summary: "Distributed microservice architecture with decoupled Next.js App Router presentation tier and Python FastAPI event processing engine, backed by PostgreSQL for persistence and Redis for pub/sub messaging.",
      database: "PostgreSQL 16 with Prisma / SQLAlchemy ORM",
      apiDesign: "REST API & WebSockets for real-time telemetry streaming",
      authentication: "OAuth 2.0 & JWT token revocation in Redis",
      cachingStrategy: "Redis key-value cache for session state & transient code execution outputs",
      deploymentPlatform: "Docker & AWS ECS",
      architectureDiagramSvg: "<svg viewBox='0 0 800 400'><text x='20' y='40' fill='#fff'>CognitoShield AI Architecture</text></svg>", // TODO: Replace with complete inline SVG diagram
    },
    techStack: [
      { id: "t-ts", name: "TypeScript", category: "frontend", version: "5.5" },
      { id: "t-next", name: "Next.js", category: "frontend", version: "14.2" },
      { id: "t-react", name: "React", category: "frontend", version: "18.3" },
      { id: "t-py", name: "Python", category: "backend", version: "3.11" },
      { id: "t-fastapi", name: "FastAPI", category: "backend", version: "0.110" },
      { id: "t-pg", name: "PostgreSQL", category: "database", version: "16" },
      { id: "t-redis", name: "Redis", category: "database", version: "7.2" },
      { id: "t-docker", name: "Docker", category: "devops" },
    ],
    keyMetrics: [
      { id: "m-acc", label: "Evaluation Precision", value: 99.4, suffix: "%", description: "Automated test suite execution accuracy against reference benchmarks" },
      { id: "m-lat", label: "Code Execution Latency", value: 42, suffix: "ms", description: "Average roundtrip sandbox execution time" },
      { id: "m-sc", label: "Concurrent Candidates", value: 500, suffix: "+", description: "Simultaneous live interview sessions supported without queue degradation" },
    ],
    challenges: [
      {
        id: "c-sandboxing",
        challenge: "Safely executing untrusted user-submitted code snippets in real-time without introducing remote code execution (RCE) vulnerabilities or container escape risks.",
        resolution: "Implemented containerized micro-sandboxes with ephemeral file systems, disabled egress networking, and hard resource execution limits.",
        impact: "Zero security vulnerabilities during extensive stress testing and safe execution of over 10,000 code submissions.",
      },
      {
        id: "c-stream",
        challenge: "Delivering real-time token streaming responses from LLM feedback models while rendering live code telemetry.",
        resolution: "Leveraged Server-Sent Events (SSE) and WebSockets with client-side optimistic UI state management.",
        impact: "Reduced First Token Latency (TTFT) to under 350ms.",
      },
    ],
    optimizations: [
      {
        id: "opt-bundle",
        area: "frontend",
        strategy: "Implemented dynamic imports for code editor components and heavy syntax highlighters.",
        metricImprovement: "Reduced initial JS bundle size by 45% (from 180KB to 99KB gzipped).",
      },
      {
        id: "opt-db",
        area: "database",
        strategy: "Added composite B-Tree indexing on candidate session lookup keys and evaluation record timestamps.",
        metricImprovement: "Cut average query execution time from 120ms to 4ms.",
      },
    ],
    heroMedia: {
      src: "/projects/cognitoshield-hero.webp", // TODO: Fill with real project banner screenshot
      alt: "CognitoShield AI Dashboard Interface",
      width: 1200,
      height: 630,
    },
    gallery: [
      { src: "/projects/cognitoshield-1.webp", alt: "Live Interview Sandbox View" }, // TODO: Fill with real screenshot
      { src: "/projects/cognitoshield-2.webp", alt: "Evaluation Analytics Matrix" }, // TODO: Fill with real screenshot
    ],
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp", isExternal: true }, // TODO: Fill with exact repository URL
      liveDemo: { label: "Live Platform", url: "https://cognitoshield.local", isExternal: true }, // TODO: Fill with real live demo link
    },
    seo: {
      title: "CognitoShield AI Case Study — Real-Time AI Interview Platform",
      description: "System architecture case study detailing CognitoShield AI: a high-throughput, automated technical interview evaluation engine built with Next.js and FastAPI.",
      keywords: ["CognitoShield", "AI Interview", "FastAPI", "Next.js", "System Design", "Python", "TypeScript"],
    },
  },
  {
    id: "portfolio-v2",
    slug: "portfolio-v2",
    title: "Engineering Portfolio Platform",
    tagline: "SaaS-Grade Developer Portfolio & System Architecture Showcase",
    summary: "Production-grade personal platform engineered to Vercel and Linear visual design standards, featuring a Command Palette (Cmd+K), strict TypeScript data models, and zero-JS static performance.",
    isFeatured: true,
    status: "published",
    priorityOrder: 2,
    problemStatement: "Developer portfolios are predominantly static, uninspired marketing pages that fail to demonstrate senior system architecture capabilities, accessibility standards, or sub-50ms user experience responsiveness.",
    solutionStatement: "Built a SaaS-grade web application using Next.js 14 App Router, strict TypeScript domain contracts, Tailwind CSS with custom obsidian theme tokens, and Radix UI accessible primitives. Achieved a perfect 100/100 Lighthouse score.",
    lessonsLearned: [
      "Decoupling the data schema from UI components enables frictionless transition to a headless CMS or database without changing component code.",
      "Restricting client-side JavaScript to interactive leaf nodes keeps total JS bundle size below 70KB gzipped.",
      "Strict spatial tokenization (8pt grid) guarantees visual balance across viewport sizes.",
    ],
    architecture: {
      summary: "Server-First App Router architecture with React Server Components (RSC) by default for zero client JavaScript overhead, coupled with client-side interactive leaf nodes for Command Palette and telemetry monitoring.",
      database: "Static typed TypeScript content collection engine with JSON-LD schema generation",
      apiDesign: "Static Site Generation (SSG) with Edge OpenGraph image generation",
      authentication: "N/A (Public Engineering Platform)",
      cachingStrategy: "Aggressive CDN edge caching with zero dynamic server re-renders",
      deploymentPlatform: "Vercel / GitHub Pages",
      architectureDiagramSvg: "<svg viewBox='0 0 800 400'><text x='20' y='40' fill='#fff'>Portfolio Architecture</text></svg>", // TODO: Replace with complete SVG diagram
    },
    techStack: [
      { id: "t-ts", name: "TypeScript", category: "frontend", version: "5.5" },
      { id: "t-next", name: "Next.js", category: "frontend", version: "14.2" },
      { id: "t-react", name: "React", category: "frontend", version: "18.3" },
      { id: "t-tailwind", name: "Tailwind CSS", category: "frontend", version: "3.4" },
      { id: "t-radix", name: "Radix UI", category: "frontend" },
      { id: "t-framer", name: "Framer Motion", category: "frontend", version: "11.3" },
    ],
    keyMetrics: [
      { id: "m-lh", label: "Lighthouse Performance", value: 100, suffix: "/100", description: "Perfect score across Performance, Accessibility, Best Practices, SEO" },
      { id: "m-inp", label: "Interaction Latency (INP)", value: 18, suffix: "ms", description: "Sub-50ms click and key input responsiveness" },
      { id: "m-cls", label: "Layout Shift (CLS)", value: 0, suffix: "", description: "Zero cumulative layout shift due to font preloading and container reservation" },
    ],
    challenges: [
      {
        id: "c-tokens",
        challenge: "Creating a cohesive dark theme that feels deep and elevated without using harsh pure black (#000000) or generic gray tones.",
        resolution: "Engineered an obsidian token matrix (#09090b canvas, #121215 cards, #1c1c21 popovers) paired with a single Electric Violet (#8b5cf6) focal accent.",
        impact: "Delivered a refined aesthetic matching Vercel and Linear visual quality standards.",
      },
    ],
    optimizations: [
      {
        id: "opt-rsc",
        area: "bundle",
        strategy: "Leveraged React Server Components for all content pages, isolating 'use client' directives exclusively to interactive overlays.",
        metricImprovement: "Zero client JS overhead for static text and layout components.",
      },
    ],
    heroMedia: {
      src: "/projects/portfolio-hero.webp", // TODO: Fill with real screenshot
      alt: "Engineering Portfolio Platform Interface",
      width: 1200,
      height: 630,
    },
    gallery: [
      { src: "/projects/portfolio-cmd.webp", alt: "Command Palette Cmd+K Overlay" }, // TODO: Fill with real screenshot
    ],
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp/portfolio-v2", isExternal: true },
      liveDemo: { label: "Live Site", url: "https://github.com/balarajmp/portfolio-v2", isExternal: true },
    },
    seo: {
      title: "Portfolio Platform Case Study — Next.js 14 & TypeScript Architecture",
      description: "Architecture breakdown of a SaaS-grade developer portfolio built with Next.js 14, strict TypeScript schemas, and Vercel/Linear design principles.",
      keywords: ["Portfolio", "Next.js 14", "TypeScript", "Tailwind CSS", "Architecture Case Study", "Vercel Design"],
    },
  },
  {
    id: "fintech-ui-system",
    slug: "fintech-ui-system",
    title: "Fintech UI Engine",
    tagline: "High-Performance Mobile & Web Design System for Financial Applications",
    summary: "Specialized design system and UI library engineered for high-density financial dashboards, payment flows, and real-time transaction telemetry displays.",
    isFeatured: true,
    status: "published",
    priorityOrder: 3,
    problemStatement: "Fintech applications require extreme clarity, zero touch target errors, instant visual feedback, and strict adherence to color accessibility contrast standards.",
    solutionStatement: "Designed and implemented a component token engine in Flutter and TypeScript/React. Established unified color tokens, numeric data formatting standards, and micro-interactions for financial operations.",
    lessonsLearned: [
      "Consistent numeric column alignment in tables prevents user optical misreads during rapid financial audits.",
      "High-contrast focus rings and explicit touch targets (>= 48px) eliminate accidental transaction taps on mobile viewports.",
    ],
    architecture: {
      summary: "Cross-platform design token architecture exposing unified design tokens across Web (React/Tailwind) and Mobile (Flutter/Dart) environments.",
      deploymentPlatform: "NPM / Pub.dev Package Registry",
    },
    techStack: [
      { id: "t-flutter", name: "Flutter", category: "frontend" },
      { id: "t-dart", name: "Dart", category: "frontend" },
      { id: "t-ts", name: "TypeScript", category: "frontend" },
      { id: "t-react", name: "React", category: "frontend" },
    ],
    keyMetrics: [
      { id: "m-wcag", label: "Accessibility Compliance", value: 100, suffix: "%", description: "Strict WCAG 2.1 AA contrast ratio adherence" },
      { id: "m-reuse", label: "Component Reuse Rate", value: 85, suffix: "%", description: "Across client dashboard modules" },
    ],
    challenges: [
      {
        id: "c-contrast",
        challenge: "Balancing dark theme visual depth with high-contrast requirements for financial figures and charts.",
        resolution: "Engineered high-contrast neutral foreground tokens (#fafafa, #e4e4e7) and WCAG-compliant status color pairings.",
        impact: "Passed 100% of automated and manual contrast inspection audits.",
      },
    ],
    optimizations: [
      {
        id: "opt-render",
        area: "frontend",
        strategy: "Utilized repainting boundaries and const constructors for Flutter widget trees.",
        metricImprovement: "Maintained a stable 60 FPS animation target during high-frequency telemetry updates.",
      },
    ],
    heroMedia: {
      src: "/projects/fintech-hero.webp", // TODO: Fill with real screenshot
      alt: "Fintech UI Design System Components",
      width: 1200,
      height: 630,
    },
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp", isExternal: true }, // TODO: Fill with exact repository URL
    },
    seo: {
      title: "Fintech UI Engine — High-Performance Financial Design System",
      description: "Case study on building an accessible, high-density design system and component engine for mobile and web financial applications.",
      keywords: ["Fintech UI", "Design System", "Flutter", "TypeScript", "Accessibility", "WCAG 2.1"],
    },
  },
];
