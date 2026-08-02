# Contributing Guidelines & Git Workflow

Thank you for reviewing the engineering and contribution standards for **Portfolio Platform (portfolio-v2)**. This project follows production-grade software engineering practices.

---

## 1. Git Branching Strategy

The repository strictly enforces a structured Git branching model:

```
main (Protected production branch)
 ├── feature/*  (New features, components, and interactive utilities)
 ├── release/*  (Version preparation & milestone consolidation)
 └── hotfix/*   (Urgent production patches)
```

### Branch Naming Conventions:
- **Feature Branches:** `feature/<milestone-id>-<short-description>` (e.g., `feature/m1.1-project-init`, `feature/m3.1-command-palette`)
- **Release Branches:** `release/v<semver>` (e.g., `release/v0.1.0`)
- **Hotfix Branches:** `hotfix/<issue-id>-<description>` (e.g., `hotfix/csp-header-fix`)

---

## 2. Conventional Commits Standard

All commit messages must strictly follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat(scope):` New user-facing feature or component
- `fix(scope):` Bug fix or regression patch
- `docs(scope):` Documentation updates or architecture spec modifications
- `style(scope):` Formatting, visual token adjustments, or CSS tweaks
- `refactor(scope):` Code restructuring without functional changes
- `perf(scope):` Performance optimizations, dynamic imports, or bundle size reductions
- `test(scope):` Adding unit, E2E, or accessibility tests
- `chore(scope):` Project configuration, dependencies, or build tooling updates

### Example Commit Messages:
```bash
git commit -m "chore(init): initialize engineering portfolio platform"
git commit -m "feat(hero): add 1-click recruiter quick actions bar"
git commit -m "perf(drawer): dynamically import architecture inspector SVG"
```

---

## 3. Pull Request (PR) Quality Gate Checklist

Before any branch is merged into `main`, it must satisfy the following checklist:

- [ ] **Zero Lint Errors:** Passes `npm run lint` with zero errors or warnings.
- [ ] **Type Safety:** Passes `npm run type-check` (`tsc --noEmit`) with strict TypeScript check.
- [ ] **Test Coverage:** All unit and E2E tests passing (`npm run test`).
- [ ] **Build Validation:** `npm run build` succeeds cleanly with zero build warnings.
- [ ] **Design System Compliance:** Adheres to semantic color tokens (`#09090b` canvas, `#8b5cf6` violet accent) in `DESIGN_SYSTEM.md`.
- [ ] **Accessibility Check:** Keyboard operable (`Tab`, `Esc`), visible focus rings, and zero WCAG 2.1 AA violations.
