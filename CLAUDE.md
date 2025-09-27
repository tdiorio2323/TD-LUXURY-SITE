# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is TD Studios' luxury website - a Next.js 14 application with TypeScript that showcases premium design solutions. The project is automatically synced with v0.app deployments and deployed on Vercel. It features a luxury design aesthetic with glassmorphism effects and premium branding.

## Architecture

**Framework**: Next.js 14 with App Router
**Language**: TypeScript with strict mode
**Styling**: Tailwind CSS v4 with PostCSS integration and custom glass morphism utilities
**UI Components**: Radix UI primitives with shadcn/ui setup (New York style, RSC enabled)
**Package Manager**: pnpm (specified in package.json)
**Fonts**: Geist Sans and Geist Mono
**Icons**: Lucide React
**Analytics**: Vercel Analytics

### Key Directories

- `app/` - Next.js app router pages with route-based organization
  - `contact/` - Contact page
  - `dev/` - Development/product platform page
  - `portfolio/` - Portfolio showcase
  - `social/` - Social programs page
  - `web/` - Web experience page
- `components/` - Reusable React components including nav, footer, glass effects
- `lib/` - Utility functions (mainly `utils.ts` for className merging)
- `public/` - Static assets
- `styles/` - Additional CSS files

### Component Architecture

The app uses a consistent layout with:
- Persistent navigation (`Nav` component with mobile hamburger menu)
- Glass card components (`GlassCard`) for content presentation
- Frosted button components (`FrostedButton`) - polymorphic (Link or button)
- Custom glass morphism CSS utilities (`.glass`, `.glass-strong`, `.luxury-glass`)
- Theme provider for dark/light mode support

## Development Commands

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run Next.js linting
```

## Configuration Notes

- **Next.js Config**: ESLint and TypeScript errors are ignored during builds (`next.config.mjs`)
- **TypeScript**: Strict mode enabled with path mapping (`@/*` points to root)
- **Tailwind**: Uses v4 with PostCSS integration and custom glass utilities
- **shadcn/ui**: Configured with New York style, RSC support, and Lucide icons
- **Images**: Unoptimized for deployment compatibility

## Design System

The project implements a luxury design system with:
- **Glass morphism effects**: `.glass`, `.glass-strong`, `.luxury-glass` utility classes with backdrop blur
- **Dark theme**: Black background with white text as primary scheme (neutral color palette)
- **Typography**: Geist font family for modern, clean aesthetics
- **Icons**: Lucide React for consistent iconography
- **Components**: Built on Radix UI primitives with class-variance-authority for variants
- **Styling**: Utility-first approach with custom CSS variables and responsive design

## Deployment

- **Primary**: Auto-deployed to Vercel from this repository
- **Source**: Synced automatically from v0.app project modifications
- **Analytics**: Vercel Analytics integrated in root layout

## Development Notes

- This project is primarily managed through v0.app with automatic syncing
- Manual changes should be carefully considered as they may be overwritten by v0.app syncs
- The app uses Suspense for loading states and error boundaries
- Console logging is present in layout for debugging v0.app integration

## Key Libraries & Dependencies

**UI Framework:**
- `@radix-ui/*` - Complete suite of accessible UI primitives
- `class-variance-authority` - Component variant management
- `clsx` + `tailwind-merge` - Conditional className handling (via `cn` utility)

**Forms & Validation:**
- `react-hook-form` + `zod` - Form handling and validation
- `sonner` - Toast notifications

**Development:**
- `@vercel/analytics` - Performance tracking
- `next-themes` - Theme management capability

## TypeScript Patterns

- Path aliases: `@/*` points to project root
- Strict typing with proper interface definitions
- Client components marked with `"use client"` directive
- Polymorphic components (e.g., FrostedButton as Link or button)