/**
 * @file about.ts
 * @description Typed schema for the About Me & Engineering Philosophy section.
 */

import type { ID } from "./common";

/**
 * A single engineering philosophy principle card.
 */
export interface PhilosophyPrinciple {
  readonly id: ID;
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
}

/**
 * A current-focus technology (skills actively used now).
 */
export interface CurrentFocusTech {
  readonly id: ID;
  readonly name: string;
  readonly categoryId: string; // maps to a skill category ID
}

/**
 * A learning roadmap growth area (next goals, not yet mastered).
 */
export interface RoadmapArea {
  readonly id: ID;
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
}

/**
 * A concise engineering highlight fact (sourced from typed content).
 */
export interface EngHighlight {
  readonly id: ID;
  readonly label: string;
  readonly value: string;
  readonly iconName: string;
}

/**
 * The full About Me content shape.
 */
export interface AboutContent {
  readonly paragraphs: ReadonlyArray<string>;
  readonly interests: ReadonlyArray<string>;
  readonly philosophyPrinciples: ReadonlyArray<PhilosophyPrinciple>;
  readonly currentFocusTechs: ReadonlyArray<CurrentFocusTech>;
  readonly roadmapAreas: ReadonlyArray<RoadmapArea>;
  readonly highlights: ReadonlyArray<EngHighlight>;
}
