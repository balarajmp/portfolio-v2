import type { Education } from "@/types";

/**
 * Academic Background & Educational Records
 * Verified candidate academic credentials.
 */
export const education: ReadonlyArray<Education> = [
  {
    id: "edu-cs",
    degree: "Bachelor of Engineering",
    fieldOfStudy: "Computer Science & Engineering",
    institution: {
      name: "Engineering Institute",
      location: "India",
    },
    dateRange: {
      startDate: "2023",
      endDate: "May 2027",
      isCurrent: true,
      formattedDisplay: "2023 — May 2027",
    },
    gradeOrCgpa: "8.6 CGPA",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
    ],
  },
];
