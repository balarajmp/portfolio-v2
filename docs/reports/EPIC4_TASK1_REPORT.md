# Epic 4 — Task 1: Homepage Visual Polish — Implementation Report

**Document Version:** 1.0.0
**Author:** Senior Staff Software Engineer / UI Architect
**Date:** 2026-08-03
**Status:** Completed & Verified

---

## 1. Objective

Perform a full audit of all 8 homepage sections and resolve all visual inconsistencies without introducing new features, components, or layouts. Maintain the Obsidian Violet design system throughout.

---

## 2. Audit Methodology

Every component in the following sections was manually inspected for:
- Spacing and gap consistency
- Typography variant correctness
- Card radius, padding, and shadow uniformity
- Icon orb sizing and color tokens
- Hover state transitions
- Section background alternation rhythm
- Border placement (double-border / orphaned-border checks)
- Sub-section divider patterns
- Data accuracy (hardcoded vs verified content)

**Sections audited:**
Hero | Recruiter Command Center | Featured Projects | Skills Matrix | Engineering Journey | Education | About | Contact

---

## 3. Visual Improvements Applied

### 3.1 Data Accuracy Fixes

| Location | Issue | Fix Applied |
| :--- | :--- | :--- |
| `HeroMetrics.tsx` | CGPA showed `8.6`, verified value is `8.68` | Changed to `8.68 CGPA` |
| `HeroMetrics.tsx` | Graduation description said `"B.E. Computer Science & Eng."` — wrong discipline | Changed to `"B.E. Information Science & Eng."` |
| `ProfileSnapshot.tsx` | CGPA fallback hardcoded to `"8.6 CGPA"`, label `"CGPA Score"` | Fallback updated to `"8.68 CGPA"`, label shortened to `"CGPA"`. Now reads `gradeLabel` from `edu` content to auto-format correctly |

### 3.2 Typography Fixes

| Location | Issue | Fix Applied |
| :--- | :--- | :--- |
| `HeroContent.tsx` | Candidate name used `variant="caption"` (tiny 10px text) | Promoted to `variant="small"` with `font-semibold` — scannable before the `<h1>` |

### 3.3 Spacing & Gap Normalization

| Location | Issue | Fix Applied |
| :--- | :--- | :--- |
| `FeaturedProjects.tsx` | Section header `pb-6` vs `pb-4` in all other sections | Normalized to `pb-4` |
| `FeaturedProjects.tsx` | Project card list `gap={10}` vs `gap={8}` in Journey, Skills | Normalized to `gap={8}` |
| `AboutSection.tsx` | `Stack gap={10}` vs `gap={8}` standard | Normalized to `gap={8}` |

### 3.4 Card Consistency Fixes

| Location | Issue | Fix Applied |
| :--- | :--- | :--- |
| `ProjectMetrics.tsx` | `StatCard` used `radius="md"` vs `radius="lg"` everywhere else | Normalized to `radius="lg"` |
| `ProjectCard.tsx` | Sub-sections were separated only by `space-y-6` with no visual break | Added `border-t border-border-subtle/50 pt-4` wrapper on each sub-section (Architecture, TechStack, Metrics, Challenges, Actions) for consistent internal card rhythm |
| `ProjectCard.tsx` | `space-y-6` was doubling with new `pt-4` wrappers | Removed `space-y-6` from Card container |

### 3.5 Icon Color Consistency

| Location | Issue | Fix Applied |
| :--- | :--- | :--- |
| `StatCard.tsx` | Icon orb used `text-accent-primary` (dimmer) vs `text-accent-hover` in all feature card icon orbs | Aligned to `text-accent-hover` for uniform icon brightness |

### 3.6 Section Background Alternation Rhythm

The homepage sections were not establishing a consistent light/dark background alternation. The correct rhythm (matching the visual intent of the design system) is:

```
Hero           → no background (transparent)
Recruiter      → surface1 + border-y   ✓ (was correct)
Projects       → default               ✓ (was correct)
Skills         → surface1 + border-y   ✓ (was correct)
Journey        → default               ✓ (was correct)
Education      → surface1 + border-y   ✓ (was correct)
About          → default               ✗ MISSING surface1
Contact        → surface1              ✓
```

**Fix applied:**
- `AboutSection.tsx`: Added `background="surface1"` and `className="border-y border-border-subtle/80"` — now alternates correctly.
- `ContactSection.tsx`: Removed manual `border-t` — the top border is now provided by `AboutSection`'s `border-y`, eliminating the previous double-border artifact at their join.

---

## 4. Accessibility Review

| Check | Status | Notes |
| :--- | :---: | :--- |
| Semantic `<h2>` per section | ✅ | All sections have exactly one `<h2>` as the section heading |
| `<h3>` card headings | ✅ | All cards use `as="h3"` or `as="h4"` correctly below section `<h2>` |
| Icon `aria-hidden="true"` | ✅ | All decorative icons marked hidden |
| External link `aria-label` | ✅ | All social/github/linkedin links include descriptive aria labels |
| Form field `<label>` association | ✅ | All `FormField` wrappers produce associated labels |
| WCAG AA color contrast | ✅ | All text on `surface1`/`surface2` uses `fg-primary`/`fg-secondary` tokens at verified ratios |
| Keyboard navigation | ✅ | All interactive elements (buttons, links) accessible via Tab/Enter/Space |

---

## 5. Responsive Layout Review

| Section | Breakpoints Verified | Status |
| :--- | :--- | :---: |
| Hero | `sm` stack → `lg` side-by-side metrics | ✅ |
| Recruiter Command Center | 1-col → 2-col → 3-col grid | ✅ |
| Featured Projects | Full-width card, problem/solution 1→2 col | ✅ |
| Skills Matrix | Filter bar wraps, skill grid 1→2→3 col | ✅ |
| Engineering Journey | Timeline stacks gracefully on mobile | ✅ |
| Education | 1-col → 2-col (timeline left / credentials right) | ✅ |
| About | Bio 1-col → 5-col split (`lg:col-span-3` / `lg:col-span-2`) | ✅ |
| Contact | Info cards + form 1-col → 2-col at `lg` | ✅ |

---

## 6. Components Affected

| File | Change |
| :--- | :--- |
| `src/components/ui/composite/StatCard.tsx` | Icon orb: `accent-primary` → `accent-hover` |
| `src/components/features/hero/HeroContent.tsx` | Name label: `caption` → `small + font-semibold` |
| `src/components/features/hero/HeroMetrics.tsx` | CGPA: `8.6` → `8.68`; degree name corrected |
| `src/components/features/recruiter/ProfileSnapshot.tsx` | CGPA fallback fixed; label shortened; `gradeLabel` aware |
| `src/components/features/projects/FeaturedProjects.tsx` | Header `pb-6`→`pb-4`; project list `gap-10`→`gap-8` |
| `src/components/features/projects/ProjectCard.tsx` | Removed `space-y-6`; added `border-t + pt-4` sub-section dividers |
| `src/components/features/projects/ProjectMetrics.tsx` | `radius="md"` → `radius="lg"` |
| `src/components/features/about/AboutSection.tsx` | `gap-10`→`gap-8`; added `background="surface1"` + `border-y` |
| `src/components/features/contact/ContactSection.tsx` | Removed orphaned `border-t` (now provided by `AboutSection`'s `border-y`) |

---

## 7. Verification Results

| Check | Command | Result |
| :--- | :--- | :---: |
| **Type Check** | `npm run type-check` | ✅ 0 errors |
| **Linting** | `npm run lint` | ✅ 0 warnings |
| **Production Build** | `npm run build` | ✅ Static `○ /` — exit code 0 |

**Build output:**
```
Route (app)                              Size     First Load JS
┌ ○ /                                    12.4 kB         126 kB
├ ○ /_not-found                          873 B          88.1 kB
└ ○ /playground                          232 B           114 kB
```
Homepage remains fully statically prerendered with no JS overhead increase.

---

## 8. Commit

```
style(ui): polish homepage visual consistency
9 files changed, 32 insertions(+), 19 deletions(-)
```
