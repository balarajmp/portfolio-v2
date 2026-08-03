import React from "react";
import {
  Wrench, Layers, Code2, BookOpen, Server, Cpu,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/composite/Card";
import { Typography } from "@/components/ui/Typography";
import type { PhilosophyPrinciple } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Layers,
  Code2,
  BookOpen,
  Server,
  Cpu,
};


export interface EngineeringPhilosophyProps {
  readonly principles: ReadonlyArray<PhilosophyPrinciple>;
  readonly className?: string;
}

/**
 * EngineeringPhilosophy Component
 * Renders 4 core engineering philosophy principle cards.
 *
 * @accessibility Semantic heading tags and WCAG AA contrast.
 * @performance Server Component with zero JavaScript overhead.
 */
export const EngineeringPhilosophy: React.FC<EngineeringPhilosophyProps> = ({
  principles,
  className = "",
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <Typography variant="h3" as="h3" className="font-bold text-fg-primary text-xl">
        Engineering Philosophy
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {principles.map((p) => {
          const IconComp = (p.iconName && iconMap[p.iconName]) || Code2;
          return (
            <Card
              key={p.id}
              glass
              padding="md"
              radius="lg"
              outlined
              className="space-y-2 bg-bg-surface1/70 hover:border-border-strong transition-all duration-normal"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-bg-surface2 border border-border-subtle text-accent-hover shrink-0">
                  <IconComp className="h-4 w-4" aria-hidden="true" />
                </div>
                <Typography variant="h4" as="h4" className="font-semibold text-fg-primary text-sm">
                  {p.title}
                </Typography>
              </div>
              <p className="text-sm text-fg-secondary leading-relaxed">{p.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
