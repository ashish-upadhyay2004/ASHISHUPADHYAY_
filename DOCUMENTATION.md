# Ashish Upadhyay Portfolio - Project Documentation

A comprehensive guide to understanding, maintaining, and extending this portfolio website.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Folder Structure](#folder-structure)
5. [Key Files & Components](#key-files--components)
6. [Pages & Routes](#pages--routes)
7. [Data Flow](#data-flow)
8. [Customization Guide](#customization-guide)
9. [Adding New Projects](#adding-new-projects)
10. [Managing the Blog CMS](#managing-the-blog-cms)
11. [Deployment Guide](#deployment-guide)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a modern, glassmorphism-styled portfolio website for **Ashish Upadhyay**, a Software Engineer specializing in Full Stack Development and SaaS Systems. The portfolio features:

- 🎨 **Glassmorphism UI** with smooth animations
- 📝 **Blog CMS** for publishing articles
- 📬 **Contact Form** with database storage
- 🔐 **Admin Dashboard** for content management
- 📱 **Fully Responsive** design
- ⚡ **Optimized Performance** with lazy loading

---

## Technology Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui components |
| **Animations** | Framer Motion, GSAP |
| **Backend** | Supabase (Lovable Cloud) |
| **Database** | PostgreSQL (via Supabase) |
| **Authentication** | Supabase Auth |
| **State Management** | TanStack Query (React Query) |
| **Routing** | React Router DOM v6 |

---

## Project Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React)                        │
├─────────────────────────────────────────────────────────────────┤
│  Pages: Home, Blog, BlogPost, Auth, Admin, AdminPostEditor      │
│  Components: Portfolio sections, UI components, SEO             │
│  Hooks: useAuth, useMobile, useToast                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUPABASE CLIENT (API Layer)                  │
│  src/integrations/supabase/client.ts                            │
│  - Handles all database operations                              │
│  - Manages authentication state                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      LOVABLE CLOUD (Backend)                    │
├───────────────┬───────────────┬─────────────────────────────────┤
│  PostgreSQL   │  Auth Service │  Row Level Security (RLS)       │
│  - blog_posts │  - Users      │  - Protects data access         │
│  - contacts   │  - Sessions   │  - Role-based permissions       │
│  - user_roles │               │                                 │
└───────────────┴───────────────┴─────────────────────────────────┘
```

---

## Folder Structure

```
📁 project-root/
├── 📁 public/                    # Static assets served as-is
│   └── favicon.ico
│
├── 📁 src/                       # Main source code
│   ├── 📁 assets/                # Images and static files (imported in code)
│   │
│   ├── 📁 components/            # Reusable React components
│   │   ├── 📁 portfolio/         # Portfolio-specific sections
│   │   │   ├── AboutSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── GitHubProjectsSection.tsx  # ⭐ Live GitHub repos
│   │   │   ├── GitHubStatsSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PortfolioFooter.tsx
│   │   │   ├── PortfolioNavbar.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── SkillsSection.tsx
│   │   │
│   │   ├── 📁 seo/               # SEO components
│   │   │   └── SEOHead.tsx       # Meta tags, Open Graph, etc.
│   │   │
│   │   └── 📁 ui/                # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ... (40+ components)
│   │
│   ├── 📁 data/                  # Static data files
│   │   ├── portfolio.ts          # ⭐ Personal info, projects, skills
│   │   └── projects.ts           # Additional project data
│   │
│   ├── 📁 hooks/                 # Custom React hooks
│   │   ├── useAuth.tsx           # Authentication context & hook
│   │   ├── useGitHubRepos.ts     # ⭐ GitHub API integration
│   │   ├── use-mobile.tsx        # Responsive breakpoint detection
│   │   └── use-toast.ts          # Toast notification hook
│   │
│   ├── 📁 integrations/          # External service integrations
│   │   └── 📁 supabase/
│   │       ├── client.ts         # Supabase client instance
│   │       └── types.ts          # Auto-generated database types
│   │
│   ├── 📁 lib/                   # Utility functions
│   │   └── utils.ts              # cn() for className merging
│   │
│   ├── 📁 pages/                 # Route page components
│   │   ├── Admin.tsx             # Admin dashboard
│   │   ├── AdminPostEditor.tsx   # Blog post editor
│   │   ├── Auth.tsx              # Login/signup page
│   │   ├── Blog.tsx              # Blog listing page
│   │   ├── BlogPost.tsx          # Individual blog post
│   │   ├── Home.tsx              # Main portfolio page
│   │   └── NotFound.tsx          # 404 page
│   │
│   ├── 📁 types/                 # TypeScript type definitions
│   │   └── index.ts              # Shared interfaces
│   │
│   ├── App.tsx                   # Main app with routing
│   ├── index.css                 # Global styles & design tokens
│   └── main.tsx                  # React entry point
│
├── 📁 supabase/                  # Backend configuration
│   ├── 📁 functions/             # Edge Functions (if any)
│   ├── 📁 migrations/            # Database migration files
│   └── config.toml               # Supabase configuration
│
├── .env                          # Environment variables (auto-generated)
├── index.html                    # HTML entry point
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite build configuration
```

---

## GitHub Integration

### How It Works

The portfolio dynamically fetches repositories from GitHub using the public API:

```
┌──────────────────┐     ┌─────────────────┐     ┌──────────────────┐
│  useGitHubRepos  │ --> │  GitHub API     │ --> │  GitHubProjects  │
│  (Custom Hook)   │     │  /users/repos   │     │  Section         │
└──────────────────┘     └─────────────────┘     └──────────────────┘
```

### The Hook (`src/hooks/useGitHubRepos.ts`)

```typescript
// Usage
const { repos, loading, error } = useGitHubRepos('username', 6);

// Returns
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;         // Link to GitHub repo
  homepage: string | null;  // Live demo URL
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}
```

### Data Fetched
- Repository name and description
- Primary programming language
- Stars and forks count
- Topics/tags
- Homepage URL (for live demos)

### Smart Button Logic

```tsx
// If repo has a homepage URL, show "View Website"
{repo.homepage ? (
  <Button>View Website</Button>
) : (
  <Button>View Code</Button>
)}
```

### Rate Limiting
GitHub API allows 60 requests/hour for unauthenticated requests. Repos are cached per page session.

---

## Key Files & Components

### Core Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main application with routing configuration |
| `src/main.tsx` | React entry point, wraps app with providers |
| `src/index.css` | Global styles, CSS variables, design tokens |
| `tailwind.config.ts` | Tailwind theme customization |

### Data Files (⭐ Edit These to Customize)

| File | What to Edit |
|------|-------------|
| `src/data/portfolio.ts` | Personal info, skills, projects, experience |
| `src/data/projects.ts` | Additional project details with images |

### Portfolio Sections

| Component | Displays |
|-----------|----------|
| `HeroSection` | Name, title, tagline, CTA buttons |
| `AboutSection` | Biography and introduction |
| `SkillsSection` | Technical skills by category |
| `ProjectsSection` | Project cards with modal details |
| `ExperienceSection` | Work experience timeline |
| `CertificationsSection` | Professional certifications |
| `GitHubStatsSection` | GitHub contribution stats |
| `BlogSection` | Latest blog posts |
| `ContactSection` | Contact form (saves to database) |

### Admin Components

| Component | Purpose |
|-----------|---------|
| `Admin.tsx` | Dashboard with posts list and contact messages |
| `AdminPostEditor.tsx` | Create/edit blog posts with markdown |

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home.tsx | Main portfolio with all sections |
| `/blog` | Blog.tsx | List of published blog posts |
| `/blog/:slug` | BlogPost.tsx | Individual blog post |
| `/auth` | Auth.tsx | Login/signup for admin access |
| `/admin` | Admin.tsx | Admin dashboard (protected) |
| `/admin/posts/:id` | AdminPostEditor.tsx | Post editor (protected) |
| `*` | NotFound.tsx | 404 page |

---

## Data Flow

### 1. Portfolio Data (Static)
```
src/data/portfolio.ts → Components → UI
```
Personal info, skills, and projects are stored in static TypeScript files and imported directly by components.

### 2. Contact Form Submissions
```
User fills form → ContactSection → supabase.from('contact_submissions').insert() → Database
Admin views → Admin.tsx → supabase.from('contact_submissions').select() → Dashboard
```

### 3. Blog Posts
```
Admin writes post → AdminPostEditor → supabase.from('blog_posts').upsert() → Database
Public reads → Blog/BlogPost → supabase.from('blog_posts').select() → UI
```

### 4. Authentication
```
User login → Auth.tsx → supabase.auth.signInWithPassword() → Session stored
Protected routes → useAuth() hook → Checks user role → Allow/Deny access
```

---

## Customization Guide

### Changing Personal Information

Edit `src/data/portfolio.ts`:

```typescript
export const portfolioInfo = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'Your Tagline',
  email: 'your@email.com',
  location: 'Your Location',
  about: 'Your bio...',
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
};
```

### Changing Skills

Edit the `skills` object in `src/data/portfolio.ts`:

```typescript
export const skills = {
  frontend: [
    { name: 'React', icon: 'react' },
    // Add more skills...
  ],
  // Add more categories...
};
```

### Changing Theme Colors

Edit `src/index.css` CSS variables:

```css
:root {
  --primary: 262 83% 58%;        /* Purple */
  --secondary: 217 91% 60%;      /* Blue */
  --accent: 280 100% 70%;        /* Pink */
  --background: 0 0% 100%;       /* White */
  --foreground: 224 71% 4%;      /* Dark text */
}
```

### Adding New Sections

1. Create component in `src/components/portfolio/`
2. Import and add to `src/pages/Home.tsx`
3. Add navigation link in `PortfolioNavbar.tsx`

---

## Adding New Projects

1. Open `src/data/portfolio.ts`

2. Add a new project object to the `projects` array:

```typescript
export const projects = [
  // ... existing projects
  {
    id: 'unique-project-id',           // URL-safe identifier
    title: 'Project Name',              // Display title
    description: 'Project description', // 1-2 sentences
    features: [                          // Key features list
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    tech: ['React', 'TypeScript'],       // Tech stack tags
    image: 'https://...',                // Cover image URL (800x600)
    liveUrl: 'https://...',              // Live demo (or null)
    githubUrl: 'https://...',            // GitHub repo (or null)
  },
];
```

3. Save the file - changes appear immediately in development

### Image Guidelines

- Use **800x600px** aspect ratio for consistency
- Host on Unsplash, Cloudinary, or your own CDN
- Optimize images for web (compress to <200KB)

---

## Managing the Blog CMS

### Accessing the Admin Dashboard

1. Go to `/auth` and sign up with your email
2. Have someone with database access run:
   ```sql
   INSERT INTO user_roles (user_id, role) 
   SELECT id, 'admin' FROM auth.users WHERE email = 'your@email.com';
   ```
3. Log in and go to `/admin`

### Creating a Blog Post

1. Click "New Post" in the admin dashboard
2. Fill in:
   - **Title**: Post title (slug auto-generated)
   - **Excerpt**: Short summary for listing page
   - **Content**: Full post content (HTML supported)
   - **Cover Image**: URL to header image
3. Toggle "Published" to make it public
4. Click "Save"

### Viewing Contact Messages

1. Go to `/admin`
2. Click the "Messages" tab
3. Click any message to view full details
4. Messages are marked as read automatically

---

## Deployment Guide

### Deploying to Lovable

1. Click **Share** → **Publish** in the Lovable interface
2. Your site is live at your Lovable URL

### Connecting a Custom Domain

1. Go to **Project** → **Settings** → **Domains**
2. Click **Connect Domain**
3. Add your domain and configure DNS as instructed

### Manual Deployment (if needed)

1. Clone the repository locally
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Deploy the `dist/` folder to any static host

---

## Troubleshooting

### Common Issues

**"supabaseUrl is required" error**
- The environment variables aren't loading. The client.ts file includes fallbacks, so this should be resolved.

**Blog posts not showing**
- Make sure posts have `published: true`
- Check that RLS policies allow public read access

**Admin access denied**
- Verify your user has the `admin` role in `user_roles` table

**Styles not updating**
- Clear browser cache
- Restart development server

### Getting Help

- Check the [Lovable Docs](https://docs.lovable.dev)
- Review the [Troubleshooting Guide](https://docs.lovable.dev/tips-tricks/troubleshooting)

---

## Quick Reference

### Development Commands

```bash
npm install     # Install dependencies
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

### Key URLs

- **Preview**: Your Lovable preview URL
- **Published**: Your Lovable published URL
- **Blog**: `/blog`
- **Admin**: `/admin`
- **Auth**: `/auth`

---

*Last updated: January 2026*
*Maintained by: Ashish Upadhyay*
