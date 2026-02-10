# Agent Operating Notes

This repository is currently minimal: only `.gitignore` exists at the root.
No build, lint, or test configuration files are present yet. Treat this file
as a baseline guide for new code and for future updates as the project grows.

## Quick Facts
- Repo root: `/Users/nicoricaldi/dev/nicolas-ricaldi`
- Existing rules: none found in `.cursor/rules/`, `.cursorrules`, or
  `.github/copilot-instructions.md`.
- There is no `package.json`, `pyproject.toml`, `Makefile`, `go.mod`, etc.

## Build / Lint / Test Commands

No commands can be derived yet because there are no build or test tools
configured in this repository. When you add tooling, update this section with
the exact command lines.

Use these placeholders as a template when the project is initialized:

- Build (project-wide)
  - Example: `make build`
  - Example: `npm run build`
  - Example: `go build ./...`

- Lint (project-wide)
  - Example: `make lint`
  - Example: `npm run lint`
  - Example: `golangci-lint run`

- Test (project-wide)
  - Example: `make test`
  - Example: `npm test`
  - Example: `go test ./...`

- Single test (fast feedback)
  - Example (Jest): `npm test -- path/to/file.test.ts -t "name"`
  - Example (Vitest): `npm run test -- path/to/file.test.ts -t "name"`
  - Example (Pytest): `pytest path/to/test_file.py -k "name"`
  - Example (Go): `go test ./path -run TestName`

If the project adds a task runner (Make, Just, Nx, Bazel, etc.), prefer the
wrapper commands over raw tool invocations for consistency.

## Development Workflow Expectations

- Prefer deterministic, reproducible steps.
- Keep commands scriptable (no interactive prompts).
- Run the narrowest possible test target while iterating.
- Only broaden to full test suites before finalizing a change.

## Code Style Guidelines

Because the codebase is empty, these are default conventions to apply until a
project-specific style emerges. Update this section once real code exists.

### Imports

- Prefer explicit, stable import paths.
- Group imports by origin: standard library, third-party, local.
- Keep import blocks sorted alphabetically within each group.
- Do not use unused imports; remove them immediately.

### Formatting

- Use a formatter if the language supports it (Prettier, gofmt, black, etc.).
- Keep line length reasonable (target 100-120 chars unless a formatter rules).
- Indentation: 2 spaces for JS/TS, 4 spaces for Python, tabs for Go.
- Avoid trailing whitespace; ensure files end with a newline.

### Types and Interfaces

- Prefer explicit types at public boundaries.
- Keep internal code as inferred as is idiomatic for the language.
- Define shared types in a single module to avoid duplication.
- For TS: avoid `any`; use `unknown` and narrow carefully.

### Naming

- Use descriptive, intention-revealing names.
- Prefer nouns for data, verbs for functions, adjectives for booleans.
- Use `is/has/should/can` prefixes for boolean values.
- Keep acronyms consistent (e.g., `URL`, `HTTP`, `ID`).

### Error Handling

- Fail fast on invalid inputs at module boundaries.
- Prefer returning typed errors or results instead of throwing raw strings.
- Include context in errors (operation name, identifiers, inputs).
- Avoid swallowing errors; log or surface them with actionable detail.

### Logging

- Do not add ad-hoc `print` or `console.log` in final code.
- Use a centralized logger if available; otherwise, keep logging minimal.
- Do not log secrets or PII.

### Testing

- Prefer unit tests for logic-heavy code, integration tests for boundaries.
- Test names should describe behavior and expected outcomes.
- Keep tests deterministic; avoid reliance on global state.

### API and Data Boundaries

- Validate external inputs at the boundary (API, file IO, CLI).
- Normalize data into internal representations quickly.
- Avoid leaking transport-specific types across layers.

### File and Module Organization

- Group code by feature or domain once the project grows.
- Keep public modules small and stable.
- Avoid cyclic dependencies; prefer clear layering.

### Documentation

- Prefer concise module docs over inline comments.
- Only add comments when the intent is not obvious from the code.
- Keep README and this AGENTS file updated with real commands.

## Security and Secrets

- Never commit secrets, tokens, or credentials.
- Use env vars or a secrets manager; document required variables.
- If a secret is discovered in history, rotate it immediately.

## When Adding Tooling

Once you introduce a stack, update this file with actual commands and rules.
Specifically capture:

- Install steps (e.g., `npm install`, `pip install -r requirements.txt`).
- Build, lint, and test commands with exact flags.
- Single-test command examples.
- Formatting rules and linters.
- Any framework-specific conventions (React, Django, Rails, etc.).

## Repository Rules Inheritance

No Cursor rules or Copilot instructions are present yet. If any are added,
copy their relevant directives here so agentic tools can follow them.

## Notes for Agentic Tools

- The repository is intentionally minimal; do not assume a stack.
- Ask for clarification if you need to introduce a framework or language.
- Prefer small, incremental changes as the project is bootstrapped.

## Update Checklist

When you add real code, update this file to include:

- The actual build/lint/test commands.
- The single-test invocation pattern for the chosen runner.
- The formatting and linting rules actually enforced.
- The project-specific naming and error-handling conventions.
