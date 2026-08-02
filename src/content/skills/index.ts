import type { SkillCategory } from "@/types";

/**
 * Tech Radar & Skill Categories Matrix
 * Strictly verified stack used in this codebase (portfolio-v2).
 */
export const skillCategories: ReadonlyArray<SkillCategory> = [
  {
    id: "cat-frontend",
    name: "Frontend & UI Architecture",
    description: "Building accessible, sub-50ms responsive user interfaces and scalable design token systems.",
    displayOrder: 1,
    skills: [
      {
        id: "sk-ts",
        name: "TypeScript",
        slug: "typescript",
        categoryId: "cat-frontend",
        proficiency: "expert",
        yearsOfExperience: 3, // TODO: Fill with candidate's actual years of experience
        iconName: "FileCode",
        verifiedProjectIds: ["portfolio-v2"],
        isFeatured: true,
      },
      {
        id: "sk-next",
        name: "Next.js 14+ (App Router)",
        slug: "nextjs",
        categoryId: "cat-frontend",
        proficiency: "expert",
        yearsOfExperience: 2, // TODO: Fill with candidate's actual years of experience
        iconName: "Globe",
        verifiedProjectIds: ["portfolio-v2"],
        isFeatured: true,
      },
      {
        id: "sk-react",
        name: "React 18",
        slug: "react",
        categoryId: "cat-frontend",
        proficiency: "expert",
        yearsOfExperience: 3, // TODO: Fill with candidate's actual years of experience
        iconName: "Atom",
        verifiedProjectIds: ["portfolio-v2"],
        isFeatured: true,
      },
      {
        id: "sk-tailwind",
        name: "Tailwind CSS",
        slug: "tailwindcss",
        categoryId: "cat-frontend",
        proficiency: "expert",
        yearsOfExperience: 2, // TODO: Fill with candidate's actual years of experience
        iconName: "Palette",
        verifiedProjectIds: ["portfolio-v2"],
        isFeatured: true,
      },
    ],
  },
  {
    id: "cat-devops",
    name: "Infrastructure & Tools",
    description: "Version control, automated build validation, and project toolchains.",
    displayOrder: 2,
    skills: [
      {
        id: "sk-git",
        name: "Git & GitHub",
        slug: "git",
        categoryId: "cat-devops",
        proficiency: "expert",
        yearsOfExperience: 3, // TODO: Fill with candidate's actual years of experience
        iconName: "GitBranch",
        verifiedProjectIds: ["portfolio-v2"],
        isFeatured: true,
      },
    ],
  },
  // TODO: Add candidate's additional verified skills and categories
];
