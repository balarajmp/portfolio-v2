import type { AboutContent } from "@/types";

/**
 * About Me & Engineering Philosophy Content
 * Strictly verified narrative for Balaraj M P.
 */
export const aboutContent: AboutContent = {
  paragraphs: [
    "I am a Software Engineer currently pursuing a Bachelor of Engineering in Information Science and Engineering at CMR Institute of Technology, Bengaluru.",
    "My journey into software engineering started with curiosity about how applications work behind the scenes. Over time, that curiosity evolved into building complete software systems—from backend APIs and machine learning models to responsive web applications.",
    "I enjoy designing scalable backend services, building AI-powered applications, and developing full-stack solutions that solve practical problems. Every project I build strengthens my understanding of software architecture, clean coding practices, databases, APIs, and production-ready engineering.",
    "I believe software engineering is a continuous learning journey, and I actively improve my skills by building projects, solving coding problems, and exploring modern technologies.",
  ],

  interests: [
    "Build software that solves real problems.",
    "Write clean, maintainable, scalable code.",
    "Continuously learn modern technologies.",
    "Prioritize reliability, performance, and security.",
    "Build with simplicity before complexity.",
  ],

  philosophyPrinciples: [
    {
      id: "ph-swe",
      title: "Why Software Engineering",
      description: "Software engineering allows me to transform ideas into practical solutions that improve people's lives. I enjoy the complete engineering process—from understanding a problem and designing a solution to implementing, testing, and continuously improving software.",
      iconName: "Wrench",
    },
    {
      id: "ph-backend",
      title: "Why Backend",
      description: "Backend development is where application logic, scalability, security, and performance come together. I enjoy designing REST APIs, managing databases, implementing authentication, optimizing application performance, and building reliable systems.",
      iconName: "Server",
    },
    {
      id: "ph-ai",
      title: "Why AI",
      description: "Artificial Intelligence enables software to make intelligent decisions using data. Through CognitoShield AI and the Smart Agriculture Portal, I explored how machine learning can solve real-world problems.",
      iconName: "Cpu",
    },
    {
      id: "ph-fullstack",
      title: "Why Full Stack",
      description: "Understanding both frontend and backend enables me to build complete software solutions and better understand the interaction between every layer of an application.",
      iconName: "Layers",
    },
    {
      id: "ph-motivation",
      title: "What Motivates Me",
      description: "My motivation comes from solving challenging problems and continuously learning new technologies. Every project teaches me something valuable and helps me become a better engineer.",
      iconName: "BookOpen",
    },
  ],

  currentFocusTechs: [
    { id: "cf-backend", name: "Backend Development", categoryId: "cat-backend" },
    { id: "cf-fastapi", name: "FastAPI", categoryId: "cat-backend" },
    { id: "cf-nodejs", name: "Node.js", categoryId: "cat-backend" },
    { id: "cf-react", name: "React", categoryId: "cat-frontend" },
    { id: "cf-nextjs", name: "Next.js", categoryId: "cat-frontend" },
    { id: "cf-ml", name: "Machine Learning", categoryId: "cat-ml" },
    { id: "cf-system-design", name: "System Design", categoryId: "cat-architecture" },
    { id: "cf-rest-api", name: "REST APIs", categoryId: "cat-backend" },
    { id: "cf-dsa", name: "Data Structures & Algorithms", categoryId: "cat-cs" },
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
      id: "rm-distributed",
      title: "Distributed Systems",
      description: "Exploring consensus algorithms, replication strategies, and partition tolerance in large-scale systems.",
      iconName: "Globe",
    },
    {
      id: "rm-cloud",
      title: "Cloud & DevOps Primitives",
      description: "Understanding compute, storage, containerization, and deployment automation for production environments.",
      iconName: "Cloud",
    },
  ],

  highlights: [
    {
      id: "hl-projects",
      label: "Engineered Projects",
      value: "4",
      iconName: "FolderCode",
    },
    {
      id: "hl-degree",
      label: "Current Education",
      value: "B.E. Information Science & Eng",
      iconName: "GraduationCap",
    },
    {
      id: "hl-location",
      label: "Location",
      value: "Bengaluru, India",
      iconName: "MapPin",
    },
    {
      id: "hl-focus",
      label: "Core Specialization",
      value: "Backend & AI Engineering",
      iconName: "Terminal",
    },
  ],
};
