# Contributing to Keystone CLI

Welcome! We're excited you're interested in contributing to **Keystone CLI**. This document outlines the conventions and guidelines for collaboration.

---

## Branch Naming Convention

All branches should follow this format:

```
feature/<issueId>-<short-description>
```

**Examples:**

- `feature/12-add-keystone-init-command`
- `fix/34-invalid-path-aliasing`

Use lowercase and hyphens for readability.

---

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard. This helps automate changelogs, ensures clarity, and maintains consistency.

### Prefixes:

- `feat`: new feature
- `fix`: bug fix
- `docs`: documentation only
- `style`: formatting only, no code changes
- `refactor`: code change that is not a bug fix or feature
- `test`: adding or updating tests
- `chore`: maintenance tasks, tooling, etc.

**Format:**

```
<type>(scope): short description
```

**Example:**

```
feat(init): add template scaffolding with role support
```

---

## Pull Request Guidelines

All PRs should:

- **Target the `dev` branch**
- Follow commit message conventions
- Be named using a semantic title:
  - `feat(init): implement keystone init with role support`
- Include a clear description with:
  - Summary of changes
  - Related issue (`Closes #8`)
  - Screenshots/output if relevant
  - Checklist confirming:
    - [ ] Code linted
    - [ ] Pre-commit checks passed
    - [ ] Tested locally

---

## Pre-commit Workflow

We use Husky, lint-staged, and Commitlint to enforce standards:

- `pnpm run lint` must pass before commits
- Commit messages are validated
- Code must match prettier/eslint settings

---

By following these conventions, we ensure a clean, scalable codebase for all contributors.
