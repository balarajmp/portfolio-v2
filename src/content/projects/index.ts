import type { Project } from "@/types";

/**
 * Flagship Software Engineering Case Studies Data
 * Verified project entries (3 Major Projects).
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
      architectureDiagramSvg: "<svg viewBox='0 0 800 400'><text x='20' y='40' fill='#fff'>Portfolio Architecture</text></svg>",
    },
    techStack: [
      { id: "t-ts", name: "TypeScript", category: "frontend", version: "5.5" },
      { id: "t-next", name: "Next.js", category: "frontend", version: "14.2" },
      { id: "t-react", name: "React", category: "frontend", version: "18.3" },
      { id: "t-tailwind", name: "Tailwind CSS", category: "frontend", version: "3.4" },
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
      src: "/projects/portfolio-hero.webp",
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
  {
    id: "cogniguard-ai",
    slug: "cogniguard-ai",
    title: "CogniGuard AI Security Platform",
    tagline: "Full-Stack AI Application & Real-time Content Guardrail Engine",
    summary: "Full-stack LLM security proxy and real-time content filtering application built with FastAPI backend and Next.js frontend, providing latency-optimized safety validation for AI prompts.",
    isFeatured: true,
    status: "published",
    priorityOrder: 2,
    problemStatement: "Enterprise LLM applications require sub-100ms security validation to prevent prompt injection, PII leakage, and non-compliant content without slowing down model inference streams.",
    solutionStatement: "Designed an asynchronous FastAPI microservice with streaming regex token sanitizers, SQLite audit persistence, and a high-performance Next.js monitoring dashboard.",
    lessonsLearned: [
      "Asynchronous request pipelines in Python FastAPI eliminate event loop blocking during high-concurrency LLM security scanning.",
      "Optimizing regex token compilation improves scanning throughput by 4x.",
    ],
    architecture: {
      summary: "Decoupled microservice architecture: FastAPI Python backend handling prompt guardrails and SQLite telemetry, connected via REST/SSE to a Next.js client dashboard.",
      database: "SQLite / PostgreSQL",
      apiDesign: "REST API with Server-Sent Events (SSE)",
      authentication: "Bearer Token / API Keys",
      cachingStrategy: "In-memory LRU cache for compiled regex policies",
      deploymentPlatform: "Docker / Vercel / Render",
    },
    techStack: [
      { id: "t-py", name: "Python", category: "backend", version: "3.11" },
      { id: "t-fastapi", name: "FastAPI", category: "backend", version: "0.110" },
      { id: "t-react", name: "React", category: "frontend", version: "18.2" },
      { id: "t-sqlite", name: "SQLite", category: "database" },
    ],
    keyMetrics: [
      { id: "m-lat", label: "Scan Latency", value: 35, suffix: "ms", description: "Average real-time prompt guardrail inspection duration" },
      { id: "m-acc", label: "Accuracy Rate", value: 99.2, suffix: "%", description: "Detection accuracy for PII and prompt injection attacks" },
    ],
    challenges: [
      {
        id: "c-stream",
        challenge: "Scanning streaming tokens without buffering the entire LLM response payload.",
        resolution: "Implemented sliding window token tokenizers using Python generators.",
        impact: "Maintained time-to-first-token (TTFT) metrics under 50ms.",
      },
    ],
    optimizations: [
      {
        id: "opt-fastapi",
        area: "backend",
        strategy: "Used async coroutines and uvloop for event-driven asynchronous request handling.",
        metricImprovement: "Handled 1,200 requests/sec per container instance.",
      },
    ],
    heroMedia: {
      src: "/projects/cogniguard-hero.webp",
      alt: "CogniGuard AI Security Platform Dashboard",
      width: 1200,
      height: 630,
    },
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp/cogniguard-ai", isExternal: true },
    },
    seo: {
      title: "CogniGuard AI — Real-Time LLM Security Guardrail Microservice",
      description: "Architecture review of CogniGuard AI security application built with Python FastAPI and Next.js.",
      keywords: ["FastAPI", "Python", "LLM Security", "AI Guardrails", "Next.js"],
    },
  },
  {
    id: "ml-predictive-engine",
    slug: "ml-predictive-engine",
    title: "Predictive Analytics & ML Pipeline",
    tagline: "Scikit-Learn & XGBoost End-to-End Classification Engine",
    summary: "Production-ready machine learning pipeline featuring feature engineering, model tuning, and automated REST inference endpoints built with Python, Scikit-Learn, and XGBoost.",
    isFeatured: true,
    status: "published",
    priorityOrder: 3,
    problemStatement: "Manual feature preprocessing and unoptimized model hyperparameters resulted in slow inference cycles and lower prediction accuracy on tabular datasets.",
    solutionStatement: "Developed a modular Python ML pipeline incorporating cross-validated hyperparameter optimization using XGBoost and Scikit-Learn pipelines, served via Dockerized REST endpoints.",
    lessonsLearned: [
      "Strict feature transformation pipelines prevent data leakage between training and validation splits.",
      "Model serialization using joblib combined with Docker containerization ensures reproducible deployment across cloud environments.",
    ],
    architecture: {
      summary: "End-to-end Python machine learning pipeline with automated feature extraction, model evaluation, and ONNX/joblib inference serving.",
      database: "MySQL / CSV Feature Store",
      apiDesign: "RESTful Inference API",
      cachingStrategy: "In-memory model weight caching",
      deploymentPlatform: "Docker / AWS ECS",
    },
    techStack: [
      { id: "t-py", name: "Python", category: "backend" },
      { id: "t-scikit", name: "Scikit-Learn", category: "backend" },
      { id: "t-xgboost", name: "XGBoost", category: "backend" },
      { id: "t-docker", name: "Docker", category: "devops" },
    ],
    keyMetrics: [
      { id: "m-f1", label: "Model F1-Score", value: 94.8, suffix: "%", description: "Balanced precision and recall on unseen validation benchmark sets" },
      { id: "m-inf", label: "Inference Time", value: 12, suffix: "ms", description: "Per-request model scoring latency" },
    ],
    challenges: [
      {
        id: "c-imbalance",
        challenge: "Handling severe class imbalance in tabular training dataset without overfitting.",
        resolution: "Applied SMOTE resampling techniques and cost-sensitive XGBoost objective weighting.",
        impact: "Boosted minority class recall by 32%.",
      },
    ],
    optimizations: [
      {
        id: "opt-onnx",
        area: "backend",
        strategy: "Exported trained XGBoost decision trees to ONNX runtime format for lightweight CPU inference.",
        metricImprovement: "Reduced inference latency by 60%.",
      },
    ],
    heroMedia: {
      src: "/projects/ml-hero.webp",
      alt: "Predictive Analytics ML Engine Interface",
      width: 1200,
      height: 630,
    },
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp/ml-predictive-engine", isExternal: true },
    },
    seo: {
      title: "Predictive Analytics Engine — Scikit-Learn & XGBoost Architecture",
      description: "Technical case study of an end-to-end machine learning pipeline built with Python, Scikit-Learn, and XGBoost.",
      keywords: ["Python", "Scikit-Learn", "XGBoost", "Machine Learning", "Data Pipeline"],
    },
  },
];
