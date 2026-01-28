# Copilot Instructions - Ashish Upadhyay Portfolio

## Project Overview
A premium, glassmorphic portfolio for Ashish Upadhyay (Software Engineer specializing in Full Stack & SaaS). Built with React, TypeScript, Vite, Tailwind CSS, shadcn/ui, and integrated with Supabase for authentication and backend services.

## Tech Stack & Build
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.0 (via `@tailwindcss/vite`)
- **UI Components**: shadcn/ui (40+ Radix UI-based components)
- **Animations**: Framer Motion 12+, GSAP 3+
- **Routing**: React Router v6
- **Backend**: Supabase (auth, database, edge functions)
- **Package Manager**: bun (lightweight alternative to npm)
- **Dev Server**: `npm run dev` → http://localhost:8080
- **Build**: `npm run build` produces `dist/` folder (Vite handles TypeScript compilation)

## Architecture & Component Structure

### Data Flow Pattern
- **Data Layer** (`src/data/*.ts`): Static portfolios, projects, skills stored as constants
  - `portfolio.ts` - Personal info, skills (frontend/backend/cloud), social links
  - `projects.ts` - Project catalog with metadata
  - `photographer.ts` - Portfolio-specific photographer info
- **Components** organized by domain:
  - `components/portfolio/` - Main portfolio sections (Hero, About, Skills, Projects, etc.)
  - `components/layout/` - Header, Footer, Layout wrapper
  - `components/ui/` - shadcn/ui + custom UI primitives (40+ components)
  - `components/forms/` - Form components with React Hook Form + Zod validation
- **Pages** (`src/pages/*.tsx`): Route-level components (Home, Blog, Auth, Admin, etc.)
- **Hooks** (`src/hooks/`): Custom logic
  - `useAuth.tsx` - Supabase auth state management (user, session, admin role)
  - `useGitHubRepos.ts` - Fetch GitHub repos via API
  - `useScrollPosition.ts`, `useMediaQuery.ts` - Responsive behaviors

### Provider & Context Setup
```tsx
// In App.tsx: QueryClientProvider → ThemeProvider → AuthProvider → Router
// Theme: next-themes with dark mode enabled, system preference detection
// All shadcn toast/tooltip providers nested in App
```

## Key Patterns & Conventions

### Component Composition
- **Functional components** with TypeScript interfaces for props
- **shadcn/ui integration**: Use existing shadcn components from `src/components/ui/` (don't duplicate)
- **Lazy-loaded pages**: Routes are code-split for performance using `React.lazy()` + `Suspense`
- **Section components** accept no props, pull data from `src/data/` directly (e.g., `<AboutSection />` reads from `portfolio.ts`)

### Authentication & Authorization
- Supabase session stored in context via `AuthProvider` hook
- Admin role checked against `profiles` table via RPC call `get_admin_role(user_id)`
- Protected routes wrap with role check: `if (!isAdmin) redirect("/auth")`

### Styling & Theming
- **Tailwind**: Utility-first, no custom CSS unless unavoidable. Use `clsx`/`tailwind-merge` for dynamic classes
- **Dark mode**: Default is `"dark"`. Use `dark:` prefix for dark-mode-specific styles
- **Shadcn components**: Leverage existing `button`, `card`, `dialog` etc. from `src/components/ui/`
- **Animations**: Framer Motion for React components, GSAP for DOM or complex sequences

### Form Handling
- **React Hook Form** for form state + validation
- **Zod** for schema validation (imported but used minimally in current code)
- **Example**: `ContactForm.tsx` uses `useForm` with Zod schemas

### SEO & Metadata
- `SEOHead` component in `src/components/seo/SEOHead.tsx` for OG tags, title, description
- Used on all major pages (Home, Blog posts, Portfolio detail)

## Git & Deployment
- **No GitHub Actions workflow exists** yet - deployment is manual or via Lovable.dev
- **Lovable integration**: Repo synced with Lovable.dev project; code-split syncing happens automatically
- **Environment**: `.env.local` not tracked; Supabase credentials hardcoded in client (public Anon key OK)

## Common Tasks

### Adding a New Page
1. Create `src/pages/NewPage.tsx` (use `Home.tsx` as template)
2. Import in `src/App.tsx`, add lazy import + route
3. Wrap route with `<PageTransition>` for consistent animations

### Adding UI Component
1. Use existing shadcn/ui components from `src/components/ui/` if available
2. To add new shadcn component: `npx shadcn-ui@latest add [component-name]`
3. Keep custom primitives minimal; leverage Radix UI base components

### Updating Portfolio Data
- Edit `src/data/portfolio.ts`, `src/data/projects.ts`
- No database calls needed for static content; re-export data where needed
- GitHub repos fetch dynamically via `useGitHubRepos` hook (GitHub API)

### Debugging
- **Browser DevTools**: React DevTools shows component tree, Tailwind DevTools for class conflicts
- **Vite HMR**: File changes auto-refresh (`npm run dev`)
- **Supabase Debug**: Check `supabase/config.toml` for local testing; use Supabase Studio web UI for production

## Important Files & Examples
- [src/App.tsx](src/App.tsx) - Route setup, provider nesting
- [src/components/portfolio/HeroSection.tsx](src/components/portfolio/HeroSection.tsx) - Animation + GSAP example
- [src/data/portfolio.ts](src/data/portfolio.ts) - Data model for portfolio info
- [src/types/index.ts](src/types/index.ts) - TypeScript interfaces (Project, PhotographerInfo, etc.)
- [src/hooks/useAuth.tsx](src/hooks/useAuth.tsx) - Auth context + Supabase integration
- [vite.config.ts](vite.config.ts) - Path aliases (`@` → `src/`), Tailwind/React plugins

## DO NOTs
- ❌ Don't modify `tailwind-plus/` folder (reference/template only)
- ❌ Don't create custom CSS files (use Tailwind utilities)
- ❌ Don't hardcode API endpoints; use environment variables
- ❌ Don't duplicate shadcn/ui components; reuse from `src/components/ui/`
