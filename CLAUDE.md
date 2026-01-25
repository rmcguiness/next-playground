# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start Next.js dev server (localhost:3000)
npm run build        # Build for production
npm start            # Start production server

# Testing
npm test             # Run Jest tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report

# Linting
npm run lint         # Run ESLint
```

### Running a Single Test

```bash
npx jest path/to/file.test.tsx          # Run specific test file
npx jest -t "test name"                 # Run tests matching name pattern
```

## Architecture

### Next.js App Router Structure

The app uses Next.js 15 with the App Router. Key routing patterns:

- **`src/app/(protected)/`** - Route group for authenticated pages. The parentheses create a route group without affecting the URL structure.
- **`src/app/auth/`** - Public authentication pages (login, signup)
- **`src/app/design-system/`** - Component showcase/documentation

### Authentication Flow

Supabase authentication with SSR support:

1. **`src/utils/supabase/client.ts`** - Browser-side Supabase client
2. **`src/utils/supabase/server.ts`** - Server-side client using cookies
3. **`src/utils/supabase/middleware.ts`** - Session refresh logic
4. **`src/middleware.ts`** - Combines CSP headers with Supabase session management
5. **`src/actions/auth-actions.ts`** - Server actions for login/signup/signout

### Middleware

`src/middleware.ts` handles two concerns:
- Content Security Policy (CSP) with nonce generation for secure script execution
- Supabase session refresh via `updateSession()`

The nonce is passed via `x-nonce` header and consumed by `NonceContext` for inline scripts.

### Component Organization

- **`src/components/ui/`** - Base UI primitives (Button, Card, Badge, Alert, Label) using CVA for variants
- **`src/components/`** - Feature components organized by concern (navbar, theme-switcher, etc.)
- Components use Radix UI primitives for accessibility

### Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/utils/*` → `./src/utils/*`

## Code Style

- Use functional components with TypeScript
- Prefer pure functions and immutability
- Use `class-variance-authority` (CVA) for component variants
- Utility function for className merging: `cn()` from `@/utils/cn`
- TailwindCSS 4 for styling
