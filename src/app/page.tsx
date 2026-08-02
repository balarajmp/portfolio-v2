import { AppShell } from "@/components/shared/layout";
import { Hero } from "@/components/features/hero";
import { RecruiterCommandCenter } from "@/components/features/recruiter";
import { FeaturedProjects } from "@/components/features/projects";
import { SkillsMatrix } from "@/components/features/skills";
import { EngineeringJourney } from "@/components/features/journey";
import { EducationSection } from "@/components/features/education";

export default function HomePage() {
  return (
    <AppShell container={false}>
      <Hero />
      <RecruiterCommandCenter />
      <FeaturedProjects />
      <SkillsMatrix />
      <EngineeringJourney />
      <EducationSection />
    </AppShell>
  );
}
