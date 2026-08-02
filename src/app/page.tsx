import { AppShell } from "@/components/shared/layout";
import { Hero } from "@/components/features/hero";

export default function HomePage() {
  return (
    <AppShell container={false}>
      <Hero />
    </AppShell>
  );
}
