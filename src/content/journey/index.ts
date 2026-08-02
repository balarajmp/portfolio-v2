import type { JourneyMilestone } from "@/types";

/**
 * Engineering Growth Timeline Milestones Data
 * Chronological history of technical learning, project breakthroughs, and academic milestones.
 */
export const journeyMilestones: ReadonlyArray<JourneyMilestone> = [
  {
    id: "m-start",
    date: "October 2023",
    title: "Beginning of B.E. Degree",
    category: "academic",
    summary: "Initiated Bachelor of Engineering program with focus on core Computer Science & Information Science fundamentals.",
    description: "Enrolled in the B.E. program, laying the groundwork for low-level memory mechanics, object-oriented design, and discrete mathematics.",
    keyTakeaways: [
      "Mastered fundamentals of C programming and system memory management.",
      "Acquired strong foundations in linear algebra and discrete mathematical structures.",
    ],
    skillsAcquired: ["C", "Algorithms", "Mathematics"],
    iconName: "GraduationCap",
  },
  {
    id: "m-foundations",
    date: "Early 2024",
    title: "Programming Foundations & Data Structures",
    category: "learning",
    summary: "Deep-dive into Object-Oriented Programming (Java) and Data Structures & Algorithms.",
    description: "Focused on algorithm complexity analysis (Big-O), search/sort optimization, trees, graphs, and structured Java object modeling.",
    keyTakeaways: [
      "Built object-oriented software patterns in Java.",
      "Implemented standard data structures (trees, heaps, graphs) from scratch.",
    ],
    skillsAcquired: ["Java", "Data Structures", "Algorithms", "OOP"],
    iconName: "Code2",
  },
  {
    id: "m-backend",
    date: "Mid 2024",
    title: "Full-Stack Web & Backend Architecture",
    category: "learning",
    summary: "Transitioned into full-stack JavaScript/TypeScript engineering with React, Node.js, and REST APIs.",
    description: "Expanded focus toward HTTP networking, asynchronous event loops, relational database design with MySQL, and responsive component UI.",
    keyTakeaways: [
      "Architected REST APIs with Express.js and Node.js runtime environment.",
      "Designed normalized relational schemas and optimized SQL query execution.",
    ],
    skillsAcquired: ["React", "Node.js", "Express.js", "MySQL", "JavaScript"],
    iconName: "Server",
  },
  {
    id: "m-smart-agri",
    date: "Late 2024",
    title: "Smart Agriculture Portal Breakthrough",
    category: "project",
    summary: "Architected and delivered first major production-ready IoT crop telemetry system.",
    description: "Engineered an IoT soil analytics portal handling high-frequency sensor streams, batching telemetry queues, and real-time dashboard visualization.",
    keyTakeaways: [
      "Reduced telemetry query execution time from 450ms to 28ms via SQL table partitioning.",
      "Achieved 40% reduction in automated irrigation water consumption.",
    ],
    skillsAcquired: ["IoT Telemetry", "Node.js", "React", "MySQL"],
    relatedProjectId: "smart-agriculture-portal",
    iconName: "FolderCode",
  },
  {
    id: "m-ml",
    date: "Early 2025",
    title: "Machine Learning & Predictive Engine",
    category: "learning",
    summary: "Mastered tabular data pipelines, time-series feature engineering, and model optimization.",
    description: "Applied Scikit-Learn pipelines, XGBoost hyperparameter cross-validation, and ONNX model export for CPU inference acceleration.",
    keyTakeaways: [
      "Mastered time-series lag feature extraction and rolling window statistics.",
      "Accelerated model inference cycles by 60% using ONNX runtime binaries.",
    ],
    skillsAcquired: ["Python", "Scikit-Learn", "XGBoost", "Predictive Analytics"],
    iconName: "BrainCircuit",
  },
  {
    id: "m-gaslytics",
    date: "Mid 2025",
    title: "Gaslytics Analytics Engine Breakthrough",
    category: "project",
    summary: "Delivered predictive gas consumption forecasting engine for industrial distribution networks.",
    description: "Built end-to-end Python machine learning pipeline achieving 94.8% demand prediction accuracy and sub-12ms scoring latency.",
    keyTakeaways: [
      "Mitigated class imbalance in anomaly detection using SMOTE and cost-weighted loss.",
      "Deployed Dockerized REST endpoints for real-time volumetric inference.",
    ],
    skillsAcquired: ["Python", "XGBoost", "Scikit-Learn", "Docker", "Express.js"],
    relatedProjectId: "gaslytics",
    iconName: "TrendingUp",
  },
  {
    id: "m-cognitoshield",
    date: "Late 2025",
    title: "CognitoShield AI Security Guardrail Engine",
    category: "project",
    summary: "Engineered real-time asynchronous LLM security proxy microservice.",
    description: "Developed sub-35ms security validation proxy using Python FastAPI async generators, streaming token regex sanitizers, and Next.js 14 telemetry monitoring.",
    keyTakeaways: [
      "Maintained TTFT latency under 50ms for streaming AI token scanning.",
      "Achieved 99.2% accuracy in PII and prompt injection attack identification.",
    ],
    skillsAcquired: ["FastAPI", "Python", "LLM Security", "Next.js", "SQLite"],
    relatedProjectId: "cognitoshield-ai",
    iconName: "ShieldCheck",
  },
  {
    id: "m-graduation",
    date: "May 2027",
    title: "Expected Graduation",
    category: "academic",
    summary: "Completion of B.E. degree program with strong practical engineering portfolio.",
    description: "Targeted graduation milestone marking transition into full-time Software Engineering roles specializing in Backend, Distributed Systems, and AI Security.",
    keyTakeaways: [
      "Consolidated 3 major production case studies and multiple technical competencies.",
      "Ready for high-impact software engineering roles.",
    ],
    skillsAcquired: ["Systems Engineering", "Software Architecture"],
    isCurrent: false,
    iconName: "Award",
  },
];
