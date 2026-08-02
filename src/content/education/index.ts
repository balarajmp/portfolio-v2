import type { Education, Hackathon, Seminar } from "@/types";

/**
 * Academic Background & Educational Records
 * Verified candidate academic credentials — CMR Institute of Technology.
 */
export const education: ReadonlyArray<Education> = [
  {
    id: "edu-be",
    degree: "Bachelor of Engineering",
    fieldOfStudy: "Information Science & Engineering",
    institution: {
      name: "CMR Institute of Technology",
      location: "Bengaluru, Karnataka, India",
    },
    dateRange: {
      startDate: "Oct 2023",
      endDate: "May 2027",
      isCurrent: true,
      formattedDisplay: "Oct 2023 — May 2027",
    },
    gradeOrCgpa: "8.68",
    gradeLabel: "CGPA",
    status: "pursuing",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
      "Computer Networks",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  },
  {
    id: "edu-puc",
    degree: "PUC (PCMB)",
    fieldOfStudy: "Science (Physics, Chemistry, Mathematics, Biology)",
    institution: {
      name: "Karnataka Science College",
      location: "Karnataka, India",
    },
    dateRange: {
      startDate: "2021",
      endDate: "2023",
      isCurrent: false,
      formattedDisplay: "2021 — 2023",
    },
    gradeOrCgpa: "91.33",
    gradeLabel: "Percentage",
    status: "completed",
    relevantCoursework: [],
  },
  {
    id: "edu-10th",
    degree: "Secondary School Certificate (10th)",
    fieldOfStudy: "General",
    institution: {
      name: "MDRS Machina",
      location: "Karnataka, India",
    },
    dateRange: {
      startDate: "2019",
      endDate: "2021",
      isCurrent: false,
      formattedDisplay: "2019 — 2021",
    },
    gradeOrCgpa: "95.04",
    gradeLabel: "Percentage",
    status: "completed",
    relevantCoursework: [],
  },
];

/**
 * Hackathon & Competition Participation Records
 * Verified candidate participation entries.
 */
export const hackathons: ReadonlyArray<Hackathon> = [
  {
    id: "hack-fsd-2025",
    name: "FSD Hackathon",
    organizer: "CMR Institute of Technology",
    date: "2025",
    isFeatured: true,
  },
  {
    id: "hack-codestorm-2026",
    name: "Codestorm 2026",
    organizer: "CMR Institute of Technology",
    date: "2026",
    isFeatured: true,
  },
  {
    id: "hack-gen-ai-unlox",
    name: "Gen AI Hackathon — UNLOX",
    organizer: "CMR Institute of Technology",
    date: "2026",
    isFeatured: true,
  },
];

/**
 * Seminars & Workshop Attendance Records
 * Verified candidate academic development activities.
 */
export const seminars: ReadonlyArray<Seminar> = [
  {
    id: "sem-spark-python",
    title: "Modern Data Engineering using Spark and Python Libraries",
  },
  {
    id: "sem-ai-industry",
    title: "AI and Industry 4.0",
  },
];
