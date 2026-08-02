import type { Experience } from "@/types";

/**
 * Professional Career History & Employment Milestones
 */
export const experiences: ReadonlyArray<Experience> = [
  {
    id: "exp-senior-swe",
    slug: "senior-software-engineer",
    roleTitle: "Senior Software Engineer",
    company: {
      name: "Technology Systems Inc.", // TODO: Fill with real company name
      location: "Bengaluru, India", // TODO: Fill with real city/location
      websiteUrl: "https://example.com", // TODO: Fill with real website URL
    },
    employmentType: "full-time",
    dateRange: {
      startDate: "2023-01",
      isCurrent: true,
      formattedDisplay: "Jan 2023 — Present",
    },
    summary: "Lead full-stack engineer architecting distributed web platforms, high-throughput microservices, and modern frontend application suites. Responsible for system design, team mentoring, and performance optimization.",
    achievements: [
      "Architected and deployed microservice backend pipelines handling over 500,000 daily API requests with sub-50ms latency.",
      "Spearheaded migration of legacy monolith to Next.js 14 App Router and TypeScript, reducing client bundle size by 40%.",
      "Mentored junior and mid-level engineers in system design principles, strict TypeScript usage, and WCAG accessibility standards.",
    ],
    keyMetrics: [
      { id: "m-exp-1", label: "API Response Time", value: 45, suffix: "ms", description: "Average p95 latency across primary routes" },
      { id: "m-exp-2", label: "System Availability", value: 99.95, suffix: "%", description: "Production uptime managed" },
    ],
    techStack: [
      { id: "t-ts", name: "TypeScript", category: "frontend" },
      { id: "t-next", name: "Next.js", category: "frontend" },
      { id: "t-py", name: "Python / FastAPI", category: "backend" },
      { id: "t-node", name: "Node.js", category: "backend" },
      { id: "t-pg", name: "PostgreSQL", category: "database" },
      { id: "t-docker", name: "Docker", category: "devops" },
    ],
    adrLogs: [
      {
        id: "adr-01",
        title: "ADR 001: Adoption of React Server Components (RSC)",
        status: "accepted",
        context: "Client-side rendering (CSR) payload sizes were ballooning, causing elevated LCP times on mobile networks.",
        decision: "Adopted Next.js App Router with RSC by default, delivering pre-rendered HTML and isolating client JS to interactive leaf nodes.",
        consequences: [
          "Reduced client JavaScript bundle size by 40%.",
          "Improved LCP score from 2.8s to 1.1s.",
        ],
      },
    ],
    isCurrentRole: true,
  },
  {
    id: "exp-software-engineer",
    slug: "software-engineer",
    roleTitle: "Software Engineer",
    company: {
      name: "CloudScale Systems", // TODO: Fill with real company name
      location: "Bengaluru, India", // TODO: Fill with real location
    },
    employmentType: "full-time",
    dateRange: {
      startDate: "2021-06",
      endDate: "2022-12",
      isCurrent: false,
      formattedDisplay: "Jun 2021 — Dec 2022",
    },
    summary: "Built scalable web components, RESTful microservices, and database query optimizations for enterprise SaaS products.",
    achievements: [
      "Engineered reusable UI component library consumed across 4 product teams, reducing frontend development time by 30%.",
      "Optimized database indexing and ORM query execution plans, cutting slow query logs by 65%.",
      "Implemented OAuth2 and JWT authentication handlers with automated token refresh routines.",
    ],
    keyMetrics: [
      { id: "m-exp-3", label: "Query Speedup", value: 65, suffix: "%", description: "Reduction in slow database queries" },
    ],
    techStack: [
      { id: "t-react", name: "React", category: "frontend" },
      { id: "t-js", name: "JavaScript / TS", category: "frontend" },
      { id: "t-express", name: "Express.js", category: "backend" },
      { id: "t-mongo", name: "MongoDB", category: "database" },
    ],
    isCurrentRole: false,
  },
];
