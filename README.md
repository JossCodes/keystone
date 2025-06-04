# Keystone CLI

**Keystone** is a programmable CLI that generates clean, scalable, and role-adapted backend scaffolds in seconds. It is not just a project initializer—it's an engineering-grade tool for platform teams, solo devs, and backend architects.

> “Not a CLI. A surgical backend generator.”

---

## Vision

Keystone exists to eliminate boilerplate debt and accelerate backend development without compromising structure, auditability, or long-term maintainability.

It’s built for:

- Backend developers who value architecture.
- Platform teams who need scalable templates and role-based guardrails.
- Indie hackers who want to launch fast without creating junk code.

---

## Features

- CLI commands: `keystone init`, `keystone add`, `keystone up`, `keystone doctor`
- Clean architecture by default (modular, testable, observable)
- Supports role-based scaffolding (`junior`, `lead`, more coming)
- Declarative templates (`rest-api`, `fastify-api`, `graphql-api`)
- Auto-traceable: every scaffold has a digital signature
- Ready for plugin ecosystem, CI/CD, monorepos

---

## Installation

```bash
pnpm install
pnpm dev
```

---

## Usage Example

```bash
pnpm keystone init my-api --template rest-api --role lead --env staging
pnpm keystone up
```

---

## Project Structure

```
src/
├── cli/         # CLI commands and routing
├── core/        # Reusable CLI services (logger, error, fs helpers)
├── engine/      # Template render engine and validation
├── templates/   # Declarative scaffolds
```

---

## CLI Dependencies

The following packages support core CLI functionality:

| Package     | Purpose                                   |
| ----------- | ----------------------------------------- |
| `commander` | Argument parsing and command registration |
| `chalk`     | Terminal color output                     |
| `ora`       | Spinners and feedback during operations   |
| `fs-extra`  | Async file utilities                      |
| `zod`       | Validation of config files and inputs     |

---

## Contribution Guidelines

- Branch name format: `feature/<issue-id>-<slug>`
- Use [Conventional Commits](https://www.conventionalcommits.org/)
- All code must pass `pnpm lint` and `pnpm format`
- Open PRs against `dev` with clear titles and descriptions

---

## LICENSE

MIT (but commercial licensing will be available for enterprise modules/plugins)
