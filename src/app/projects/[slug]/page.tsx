import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { generateProjectMetadata, getProjectJsonLd } from "@/lib/seo";
import {
  ProjectCaseStudyHero,
  ProjectArchitecture,
  ProjectTechStack,
  ProjectMetrics,
  ProjectChallenges,
  ProjectOptimizations,
  ProjectGallery,
  ProjectNav,
  ProjectHeader,
} from "@/components/features/projects";

interface ProjectPageProps {
  readonly params: {
    readonly slug: string;
  };
}

/**
 * Generate static URL params for pre-rendering project case study pages at build time.
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Dynamic Metadata generator for SEO, OpenGraph, and Twitter Cards.
 */
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug || p.id === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested software engineering case study could not be located.",
    };
  }
  return generateProjectMetadata(project);
}

/**
 * Dynamic Project Case Study Page (`/projects/[slug]`)
 */
export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug || p.id === params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = getProjectJsonLd(project);

  return (
    <>
      {/* Schema.org SoftwareApplication JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        {/* 1. Hero Section */}
        <ProjectCaseStudyHero project={project} />

        {/* 2. Architectural & Problem Matrix */}
        <section aria-labelledby="problem-solution-heading" className="space-y-4">
          <ProjectHeader project={project} />
        </section>

        {/* 3. System Architecture & Flow */}
        <section aria-labelledby="architecture-heading">
          <ProjectArchitecture architecture={project.architecture} />
        </section>

        {/* 4. Technology Stack & Frameworks */}
        <section aria-labelledby="techstack-heading">
          <ProjectTechStack techStack={project.techStack} />
        </section>

        {/* 5. Optimizations & Engineering Trade-Offs */}
        <section aria-labelledby="optimizations-heading">
          <ProjectOptimizations
            optimizations={project.optimizations}
            lessonsLearned={project.lessonsLearned}
          />
        </section>

        {/* 6. Technical Bottlenecks & Resolutions */}
        <section aria-labelledby="challenges-heading">
          <ProjectChallenges challenges={project.challenges} />
        </section>

        {/* 7. Verified Engineering Telemetry & Impact */}
        <section aria-labelledby="metrics-heading">
          <ProjectMetrics metrics={project.keyMetrics} />
        </section>

        {/* 8. Screenshot & Architecture Gallery */}
        <section aria-labelledby="gallery-heading">
          <ProjectGallery title={project.title} gallery={project.gallery} />
        </section>

        {/* 9. Bottom Project Pagination */}
        <ProjectNav currentSlug={project.slug} />
      </main>
    </>
  );
}
