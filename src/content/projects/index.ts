import type { Project } from "@/types";

/**
 * Flagship Software Engineering Case Studies Data
 * Strictly verified projects:
 * 1. CognitoShield AI
 * 2. Smart Agriculture Portal
 * 3. Gaslytics
 */
export const projects: ReadonlyArray<Project> = [
  {
    id: "cognitoshield-ai",
    slug: "cognitoshield-ai",
    title: "CognitoShield AI",
    tagline: "Real-Time LLM Content Guardrail & Prompt Security Engine",
    summary: "Full-stack LLM security proxy and real-time content filtering application built with FastAPI backend and Next.js frontend, providing latency-optimized safety validation for AI prompts.",
    isFeatured: true,
    status: "published",
    priorityOrder: 1,
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
      { id: "t-next", name: "Next.js", category: "frontend", version: "14.2" },
      { id: "t-react", name: "React", category: "frontend", version: "18.3" },
      { id: "t-sqlite", name: "SQLite", category: "database" },
      { id: "t-docker", name: "Docker", category: "devops" },
    ],
    keyMetrics: [
      { id: "m-lat", label: "Scan Latency", value: 35, suffix: "ms", description: "Average real-time prompt guardrail inspection duration" },
      { id: "m-acc", label: "Detection Accuracy", value: 99.2, suffix: "%", description: "Accuracy for PII and prompt injection attack identification" },
    ],
    challenges: [
      {
        id: "c-stream",
        challenge: "Scanning streaming tokens without buffering the entire LLM response payload.",
        resolution: "Implemented sliding window token sanitization using Python generators and async iterators.",
        impact: "Maintained time-to-first-token (TTFT) latency under 50ms.",
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
      src: "/projects/cognitoshield-hero.webp",
      alt: "CognitoShield AI Security Dashboard Interface",
      width: 1200,
      height: 630,
    },
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp/cognitoshield-ai", isExternal: true },
    },
    seo: {
      title: "CognitoShield AI — Real-Time LLM Security Guardrail Engine",
      description: "Architecture review of CognitoShield AI security application built with Python FastAPI and Next.js.",
      keywords: ["CognitoShield AI", "FastAPI", "Python", "LLM Security", "Next.js"],
    },
  },
  {
    id: "smart-agriculture-portal",
    slug: "smart-agriculture-portal",
    title: "Smart Agriculture Portal",
    tagline: "IoT Crop Telemetry & Soil Analytics Platform",
    summary: "Full-stack web application and IoT telemetry portal delivering real-time soil parameter analytics, crop disease diagnosis support, and automated irrigation management.",
    isFeatured: true,
    status: "published",
    priorityOrder: 2,
    problemStatement: "Agricultural operators lack real-time soil moisture and environmental telemetry, resulting in sub-optimal crop yield predictions and excessive water consumption.",
    solutionStatement: "Engineered an IoT telemetry portal using React, Node.js, and Express with MySQL relational persistence to aggregate real-time sensor streams and display analytical dashboards.",
    lessonsLearned: [
      "Optimizing SQL index strategies on time-series telemetry data speeds up dashboard rendering by 5x.",
      "Component modularization allows seamless integration of live charting libraries.",
    ],
    architecture: {
      summary: "Distributed IoT telemetry architecture: Express/Node.js API ingestion server storing telemetry in MySQL, serving real-time analytics to a responsive React frontend dashboard.",
      database: "MySQL",
      apiDesign: "RESTful Data Ingestion API",
      authentication: "JWT Session Tokens",
      cachingStrategy: "Redis query cache for aggregated daily metrics",
      deploymentPlatform: "Docker / AWS",
    },
    techStack: [
      { id: "t-react", name: "React", category: "frontend", version: "18.2" },
      { id: "t-node", name: "Node.js", category: "backend", version: "20.0" },
      { id: "t-express", name: "Express.js", category: "backend", version: "4.19" },
      { id: "t-mysql", name: "MySQL", category: "database" },
      { id: "t-py", name: "Python", category: "backend", version: "3.11" },
    ],
    keyMetrics: [
      { id: "m-water", label: "Water Conservation", value: 40, suffix: "%", description: "Reduction in irrigation water wastage through automated thresholding" },
      { id: "m-ingest", label: "Ingestion Latency", value: 45, suffix: "ms", description: "End-to-end sensor packet processing time" },
    ],
    challenges: [
      {
        id: "c-ingest",
        challenge: "Handling concurrent telemetry bursts from thousands of distributed IoT soil sensor nodes.",
        resolution: "Designed batching ingestion queues with connection pooling in Node.js.",
        impact: "Eliminated database lock contention during peak telemetry transmissions.",
      },
    ],
    optimizations: [
      {
        id: "opt-indexing",
        area: "database",
        strategy: "Partitioned time-series telemetry tables by timestamp ranges and composite keys.",
        metricImprovement: "Dashboard query execution dropped from 450ms to 28ms.",
      },
    ],
    heroMedia: {
      src: "/projects/smart-agriculture-hero.webp",
      alt: "Smart Agriculture Portal Dashboard Interface",
      width: 1200,
      height: 630,
    },
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp/smart-agriculture-portal", isExternal: true },
    },
    seo: {
      title: "Smart Agriculture Portal — IoT Crop Telemetry Case Study",
      description: "Architecture breakdown of an IoT crop telemetry platform built with React, Node.js, and MySQL.",
      keywords: ["Smart Agriculture", "React", "Node.js", "MySQL", "IoT Telemetry"],
    },
  },
  {
    id: "gaslytics",
    slug: "gaslytics",
    title: "Gaslytics",
    tagline: "Predictive Industrial Gas Consumption & Analytics Engine",
    summary: "Machine learning platform providing automated time-series gas consumption forecasting, anomaly detection, and predictive demand modeling for industrial distribution networks.",
    isFeatured: true,
    status: "published",
    priorityOrder: 3,
    problemStatement: "Industrial gas supply networks experience unpredictable volumetric demand spikes, causing costly storage overages or supply shortages due to manual estimation.",
    solutionStatement: "Developed an automated machine learning forecasting pipeline using Python, XGBoost, and Scikit-Learn, served via Dockerized REST microservices with interactive analytics.",
    lessonsLearned: [
      "Time-series feature engineering (lag features, rolling averages) is critical for high-accuracy XGBoost demand forecasting.",
      "ONNX model export optimizes inference speed for resource-constrained edge deployments.",
    ],
    architecture: {
      summary: "Modular ML inference microservice architecture: Python machine learning engine exporting ONNX model weights, wrapped in REST APIs and Docker containers.",
      database: "MySQL / CSV Feature Store",
      apiDesign: "RESTful Scoring API",
      cachingStrategy: "In-memory LRU model score cache",
      deploymentPlatform: "Docker / AWS ECS",
    },
    techStack: [
      { id: "t-py", name: "Python", category: "backend" },
      { id: "t-scikit", name: "Scikit-Learn", category: "backend" },
      { id: "t-xgboost", name: "XGBoost", category: "backend" },
      { id: "t-express", name: "Express.js", category: "backend" },
      { id: "t-mysql", name: "MySQL", category: "database" },
      { id: "t-docker", name: "Docker", category: "devops" },
    ],
    keyMetrics: [
      { id: "m-acc-gas", label: "Forecast Accuracy", value: 94.8, suffix: "%", description: "Volumetric demand forecasting accuracy on validation benchmarks" },
      { id: "m-inf-gas", label: "Inference Time", value: 12, suffix: "ms", description: "Real-time consumption scoring latency" },
    ],
    challenges: [
      {
        id: "c-variance",
        challenge: "Modelling sudden non-linear volumetric consumption spikes caused by seasonal temperature variations.",
        resolution: "Engineered rolling statistical features and ensemble XGBoost regressor models.",
        impact: "Reduced peak demand forecast error by 35%.",
      },
    ],
    optimizations: [
      {
        id: "opt-onnx",
        area: "backend",
        strategy: "Converted decision tree pipelines to ONNX runtime format for CPU inference.",
        metricImprovement: "Reduced scoring latency by 60%.",
      },
    ],
    heroMedia: {
      src: "/projects/gaslytics-hero.webp",
      alt: "Gaslytics Predictive Analytics Interface",
      width: 1200,
      height: 630,
    },
    links: {
      githubRepo: { label: "GitHub Repository", url: "https://github.com/balarajmp/gaslytics", isExternal: true },
    },
    seo: {
      title: "Gaslytics — Predictive Industrial Gas Consumption Analytics",
      description: "Case study of Gaslytics predictive analytics machine learning pipeline built with Python, XGBoost, and Scikit-Learn.",
      keywords: ["Gaslytics", "Python", "XGBoost", "Scikit-Learn", "Machine Learning"],
    },
  },
];
