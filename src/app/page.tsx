import { AppShell } from "@/components/shared/layout";
import { Hero } from "@/components/features/hero";
import { RecruiterCommandCenter } from "@/components/features/recruiter";

export default function HomePage() {
  return (
    <AppShell container={false}>
      <Hero />
      <RecruiterCommandCenter />
    </AppShell>
  );
}
