import type { Project } from "@/types";

/**
 * Flagship Software Engineering Case Studies Data
 * Contains strictly verified project entries (Engineering Portfolio Platform).
 * Unverified projects have been removed and replaced with TODO comments.
 */
export const projects: ReadonlyArray<Project> = [
  {
    id: "portfolio-v2",
    slug: "portfolio-v2",
    title: "Engineering Portfolio Platform",
    tagline: "SaaS-Grade Developer Portfolio & System Architecture Showcase",
    summary: "Production-grade personal platform engineered to Vercel and Linear visual design standards, featuring a Command Palette (Cmd+K), strict TypeScript data models, and zero-JS static performance.",
    isFeatured: true,
    status: "published",
    priorityOrder: 1,
    problemStatement: "Developer portfolios are predominantly static, uninspired marketing pages that fail to demonstrate senior system architecture capabilities, accessibility standards, or sub-50ms user experience responsiveness.",
    solutionStatement: "Built a SaaS-grade web application using Next.js 14 App Router, strict TypeScript domain contracts, Tailwind CSS with custom obsidian theme tokens, and Radix UI accessible primitives.",
    lessonsLearned: [
      "Decoupling the data schema from UI components enables frictionless transition to a headless CMS or database without changing component code.",
      "Restricting client-side JavaScript to interactive leaf nodes keeps total JS bundle size minimal.",
      "Strict spatial tokenization guarantees visual balance across viewport sizes.",
    ],
    architecture: {
      summary: "Server-First App Router architecture with React Server Components (RSC) by default for zero client JavaScript overhead, coupled with client-side interactive leaf nodes for Command Palette and telemetry monitoring.",
      database: "Static typed TypeScript content collection engine",
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
      { id: "m-lh", label: "Lighthouse Performance", value: 100, suffix: "/100", description: "Target score across Performance, Accessibility, Best Practices, SEO" },
      { id: "m-inp", label: "Interaction Latency (INP)", value: 18, suffix: "ms", description: "Sub-50ms click and key input responsiveness" },
    ],
    challenges: [
      {
        id: "c-tokens",
        challenge: "Creating a cohesive dark theme that feels deep and elevated without using harsh pure black (#000000) or generic gray tones.",
        resolution: "Engineered an obsidian token matrix (#09090b canvas, #121215 cards, #1c1c21 popovers) paired with an Electric Violet (#8b5cf6) focal accent.",
        impact: "Delivered a refined aesthetic matching modern SaaS visual quality standards.",
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
      src: "/projects/portfolio-hero.webp", // TODO: Add real screenshot to public/projects/portfolio-hero.webp
      alt: "Engineering Portfolio Platform Interface",
      width: 1200,
      height: 630,
    },
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp/portfolio-v2", isExternal: true },
    },
    seo: {
      title: "Portfolio Platform Case Study — Next.js 14 & TypeScript Architecture",
      description: "Architecture breakdown of a SaaS-grade developer portfolio built with Next.js 14, strict TypeScript schemas, and modern design principles.",
      keywords: ["Portfolio", "Next.js 14", "TypeScript", "Tailwind CSS", "Architecture Case Study"],
    },
  },
  // TODO: Add candidate's additional verified projects here
];
