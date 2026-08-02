import type { Education } from "@/types";

/**
 * Academic Background & Educational Records
 */
export const education: ReadonlyArray<Education> = [
  {
    id: "edu-be-cse",
    degree: "Bachelor of Engineering (B.E.)",
    fieldOfStudy: "Computer Science & Engineering",
    institution: {
      name: "Visvesvaraya Technological University", // TODO: Fill with real institution name if different
      location: "Karnataka, India", // TODO: Fill with real city/state
    },
    dateRange: {
      startDate: "2017-08",
      endDate: "2021-07",
      isCurrent: false,
      formattedDisplay: "2017 — 2021",
    },
    gradeOrCgpa: "First Class with Distinction", // TODO: Fill with exact GPA/CGPA if preferred
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming & Design",
      "Database Management Systems (DBMS)",
      "Operating Systems & Process Synchronization",
      "Computer Networks & Protocols (TCP/IP, HTTP)",
      "Distributed Computing Systems",
      "Software Engineering & Architecture Principles",
    ],
    honorsAndAwards: [
      "Academic Excellence Distinction Award", // TODO: Fill with real awards or leave empty if none
    ],
  },
];
