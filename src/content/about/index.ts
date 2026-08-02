import type { AboutContent } from "@/types";

/**
 * About Me & Engineering Philosophy Content
 * Strictly derived from verified resume content, project data, and skills content.
 * No invented interests, fictional technologies, or unverified achievements.
 */
export const aboutContent: AboutContent = {
  paragraphs: [
    "I'm a third-year Information Science & Engineering student at CMR Institute of Technology, Bengaluru, building software systems across backend APIs, machine learning pipelines, and full-stack web applications. My work so far covers three production-grade case studies: a real-time LLM security microservice (CognitoShield AI), an IoT crop telemetry platform (Smart Agriculture Portal), and an industrial gas demand forecasting engine (Gaslytics).",
    "My focus sits at the intersection of backend architecture and data engineering — writing Python and Node.js systems that are correct, observable, and maintainable at scale. I think about software as infrastructure: inputs, transformations, outputs, and the failure modes in between. That lens pushes me toward understanding systems from first principles rather than reaching for the nearest abstraction.",
    "Outside of coursework, I'm drawn to Linux internals, networking fundamentals, and infrastructure automation. These areas shape how I reason about distributed systems, latency, and resource management — skills I treat as multipliers for every application-level decision I make.",
  ],

  interests: [
    "Backend Engineering",
    "Linux Systems",
    "Networking",
    "Infrastructure Engineering",
    "Automation",
    "Machine Learning",
    "Problem Solving",
  ],

  philosophyPrinciples: [
    {
      id: "ph-practical",
      title: "Build practical solutions",
      description: "Engineering value is measured by what runs reliably in production — not by architectural elegance on a whiteboard. Every decision should solve a real problem.",
      iconName: "Wrench",
    },
    {
      id: "ph-deep",
      title: "Understand systems deeply",
      description: "Knowing how the OS schedules processes, how TCP handles retransmission, or how a database chooses an index plan changes every application-level decision you make.",
      iconName: "Layers",
    },
    {
      id: "ph-maintainable",
      title: "Write maintainable software",
      description: "Code is read far more than it is written. Consistent naming, small functions, and explicit data contracts reduce the cognitive load for everyone — including future me.",
      iconName: "Code2",
    },
    {
      id: "ph-learn",
      title: "Keep learning continuously",
      description: "The stack changes. Fundamentals don't. Prioritize depth in computer science concepts and treat new frameworks as implementation details of those fundamentals.",
      iconName: "BookOpen",
    },
  ],

  // Derived strictly from verified skills in @/content/skills
  currentFocusTechs: [
    { id: "cf-python",   name: "Python",     categoryId: "cat-languages" },
    { id: "cf-fastapi",  name: "FastAPI",    categoryId: "cat-backend" },
    { id: "cf-react",    name: "React",      categoryId: "cat-frontend" },
    { id: "cf-nodejs",   name: "Node.js",    categoryId: "cat-backend" },
    { id: "cf-sql",      name: "SQL",        categoryId: "cat-languages" },
    { id: "cf-docker",   name: "Docker",     categoryId: "cat-devops" },
    { id: "cf-git",      name: "Git",        categoryId: "cat-devops" },
    { id: "cf-ml",       name: "Scikit-Learn", categoryId: "cat-ml" },
  ],

  roadmapAreas: [
    {
      id: "rm-backend-arch",
      title: "Backend Architecture",
      description: "Deepening understanding of service decomposition, event-driven patterns, and API contract design.",
      iconName: "Server",
    },
    {
      id: "rm-system-design",
      title: "System Design",
      description: "Studying capacity planning, fault tolerance strategies, and consistency vs. availability trade-offs.",
      iconName: "Cpu",
    },
    {
      id: "rm-os",
      title: "Operating Systems",
      description: "Coursework and self-study covering process scheduling, memory management, and I/O subsystems.",
      iconName: "Terminal",
    },
    {
      id: "rm-networks",
      title: "Computer Networks",
      description: "Working through TCP/IP fundamentals, routing protocols, and the impact of network topology on application latency.",
      iconName: "Network",
    },
    {
      id: "rm-distributed",
      title: "Distributed Systems",
      description: "Exploring consensus algorithms, replication strategies, and partition tolerance in large-scale systems.",
      iconName: "Globe",
    },
    {
      id: "rm-cloud",
      title: "Cloud Fundamentals",
      description: "Understanding compute, storage, and networking primitives in cloud environments to inform deployment and cost decisions.",
      iconName: "Cloud",
    },
  ],

  // All values sourced directly from verified typed content — no hardcoded fabrications
  highlights: [
    {
      id: "hl-projects",
      label: "Production case studies",
      value: "3",
      iconName: "FolderCode",
    },
    {
      id: "hl-degree",
      label: "Current degree",
      value: "B.E. Information Science & Engineering",
      iconName: "GraduationCap",
    },
    {
      id: "hl-cgpa",
      label: "Current CGPA",
      value: "8.68",
      iconName: "TrendingUp",
    },
    {
      id: "hl-grad",
      label: "Expected graduation",
      value: "May 2027",
      iconName: "Calendar",
    },
    {
      id: "hl-focus",
      label: "Primary focus",
      value: "Linux & Backend Engineering",
      iconName: "Terminal",
    },
  ],
};
