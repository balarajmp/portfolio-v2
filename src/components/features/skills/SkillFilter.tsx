"use client";

import * as React from "react";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";

export interface SkillCategoryFilterItem {
  id: string;
  name: string;
}

export interface SkillFilterProps {
  /** Array of available categories for filtering */
  readonly categories: ReadonlyArray<SkillCategoryFilterItem>;
  /** Currently selected category ID ('all' or specific category ID) */
  readonly selectedCategoryId: string;
  /** Callback fired when a category is clicked */
  readonly onSelectCategory: (categoryId: string) => void;
  /** Custom CSS class names */
  readonly className?: string;
}

/**
 * SkillFilter Component
 * Interactive category filter bar for the Skills Matrix.
 *
 * @accessibility Fully keyboard accessible with aria-pressed toggle states and focus rings.
 */
export const SkillFilter: React.FC<SkillFilterProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  className = "",
}) => {
  return (
    <div
      role="group"
      aria-label="Filter skills by technical category"
      className={cn("flex flex-wrap items-center gap-2", className)}
    >
      {/* 'All' Filter Toggle */}
      <Chip
        selected={selectedCategoryId === "all"}
        onClick={() => onSelectCategory("all")}
        className="text-xs font-mono py-1 px-3"
      >
        All Categories
      </Chip>

      {/* Dynamic Category Toggles */}
      {categories.map((cat) => {
        const isSelected = selectedCategoryId === cat.id;
        return (
          <Chip
            key={cat.id}
            selected={isSelected}
            onClick={() => onSelectCategory(cat.id)}
            className="text-xs font-mono py-1 px-3"
          >
            {cat.name}
          </Chip>
        );
      })}
    </div>
  );
};
