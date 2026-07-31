# SwiftCargo Engineering Instructions

## Purpose and Precedence

This is the permanent instruction file for this repository. **Read this file at the start of every task, before inspecting or changing code.** Do not ignore or bypass these instructions unless the user explicitly directs otherwise.

Optimize every change for low token use, consistent quality, minimal scope, easy review, maintainable architecture, and predictable behavior.

## Technology Stack

| Technology | Status | Project guidance |
| --- | --- | --- |
| React 19 | In use | Use functional components and hooks. |
| Next.js 15 | In use | Use the App Router in `app/`; prefer Server Components. |
| TypeScript | In use, strict mode | Preserve strict typing; use the `@/*` path alias. |
| Tailwind CSS 3 | In use | Reuse established utilities and theme values. |
| React Hook Form | In use | Reuse for forms. |
| Zod | In use | Keep validation schemas in `lib/validations.ts`. |
| Axios | Not installed | Do not introduce it without explicit approval. |
| Zustand | Not installed | Do not introduce it without explicit approval. |
| TanStack Query / React Query | Not installed | Do not introduce it without explicit approval. |
| shadcn/ui | Not installed as a package system | Reuse the local primitives in `components/ui/`. |
| Radix UI | Not installed | Do not introduce it without explicit approval. |
| i18next | Not installed | Do not introduce it without explicit approval. |
| Vite | Not applicable | This is a Next.js application. |

Other established libraries include Framer Motion, Lucide React, Sonner, Resend, `clsx`, `tailwind-merge`, and class-variance-authority. Reuse them when they fit the existing pattern.

## Repository Structure

```text
app/                 # App Router pages, layouts, route handlers, loading/error UI, global CSS
  api/contact/       # Contact form route handler
  services/[slug]/   # Dynamic service detail route
components/          # Reusable UI, organized by role
  cards/             # Domain card components
  forms/             # Form components
  layout/            # Site shell and persistent layout controls
  sections/          # Page sections composed from smaller components
  shared/            # Cross-page presentation components
  tracking/          # Tracking-specific UI
  ui/                # Base reusable UI primitives
constants/           # Static site, services, industry, and testimonial data
hooks/               # Reusable React hooks (currently empty; search before adding)
lib/                 # Shared utilities, validation, tracking data, and service integrations
public/              # Static assets served by Next.js
types/               # Shared TypeScript types
```

Do not create example folders such as `src/`, `services/`, `api/`, `store/`, `utils/`, `assets/`, or `styles/` at the repository root unless explicitly requested. Use the established locations above; for example, shared helpers belong in `lib/` and types in `types/`.

## Required Workflow

For every request:

1. Read `AGENTS.md` and understand the requested scope.
2. Search only relevant directories for existing components, hooks, helpers, constants, API functions, and types.
3. Search for a similar file before creating one; modify the existing implementation when appropriate.
4. Reuse existing code and patterns. Do not create duplicate logic.
5. Plan the smallest safe change, then modify the minimum necessary files.
6. Validate changed imports, TypeScript, and formatting with the most relevant available command.
7. Return a concise summary: changed files and why. Keep normal responses under 10 lines unless more detail is requested.

## Code and Architecture Principles

- Keep components small, focused, and composable.
- Follow DRY, KISS, SOLID, and single-responsibility principles pragmatically.
- Reuse existing components, hooks, utilities, constants, types, and API integrations before writing new ones.
- Maintain existing naming, folder structure, architecture, and styling conventions.
- Do not introduce a new pattern where an established project pattern solves the problem.
- Avoid deep prop drilling; use composition first and Context only when it is genuinely necessary.
- Avoid unnecessary state and derived state. Compute derived values during render when practical.

## Editing Discipline

- Edit only the lines needed for the requested outcome; never rewrite an entire file without explicit direction.
- Preserve local formatting and import order. Do not reorder imports unless a changed import requires it.
- Do not rename variables, refactor unrelated code, or change unrelated behavior.
- Remove unused imports created by your change and avoid circular dependencies.
- Do not add comments for obvious code. Document only complex business rules or non-obvious decisions.
- Never leave `console.log`, `debugger`, or temporary logging in committed code.

## React and Next.js

- Prefer functional components, hooks, controlled form inputs, and custom hooks for reusable stateful behavior.
- Use complete, correct dependency arrays for hooks.
- Prefer Server Components. Add `'use client'` only when browser APIs, event handlers, or client-side hooks require it.
- Follow App Router conventions: colocate route UI in `app/`, use `loading.tsx`, `error.tsx`, and `not-found.tsx` where appropriate.
- Use Server Actions when they fit the existing architecture; otherwise reuse existing route handlers.
- Use `next/image` and `next/link` for applicable images and internal navigation.
- Apply caching, Suspense, dynamic imports, lazy loading, memoization, or virtualization only when justified by a measurable or likely need. Never over-optimize.

## Styling and UI

- Prefer Tailwind classes and existing CSS variables/theme values from `app/globals.css` and `tailwind.config.ts`.
- Reuse primitives in `components/ui/` before creating a new UI abstraction.
- Avoid inline styles unless Tailwind or existing CSS cannot express the requirement.
- Do not duplicate utility class sets when a shared component or variant can provide them.
- Preserve accessibility semantics and existing responsive behavior.

## Data, Forms, and State

- Keep static data in `constants/`, shared types in `types/`, and schemas in `lib/validations.ts`.
- Reuse React Hook Form and Zod for form validation.
- This repository has no shared state library, Axios client, or query client. Do not add Zustand, Context providers, Axios, or TanStack Query merely to solve a local problem.
- Never duplicate API calls, client configuration, interceptors, or state. Centralize a new integration only when explicitly needed and after checking for an existing implementation.

## TypeScript, Tests, and Git

- Never use `any`. Prefer type inference; otherwise use `type`, `interface`, generics, and narrow types deliberately.
- Keep API and shared domain types centralized in `types/` when they are reused.
- Do not modify tests unless the request requires it. If business logic changes and tests exist or should exist, state which tests need updates.
- Make small, focused commits with one feature or fix per commit when committing is requested.
- Never modify unrelated files.

## Forbidden Without Explicit Request

- Creating duplicate components, hooks, constants, API clients, utilities, or types.
- Installing packages, changing package versions, or changing lockfiles.
- Deleting files, renaming folders, or moving broad project structures.
- Reformatting the whole project or regenerating unchanged code.
- Scanning unrelated portions of the repository or producing unnecessary boilerplate.

## Pre-Submission Checklist

- [ ] I searched the relevant existing implementation first.
- [ ] I reused an existing pattern or explained why a new one is necessary.
- [ ] I changed only files required for the task.
- [ ] I removed imports or temporary code made unused by my change.
- [ ] I checked types, imports, and formatting proportionally to the change.
- [ ] My response is concise and identifies the changed files and reason.
