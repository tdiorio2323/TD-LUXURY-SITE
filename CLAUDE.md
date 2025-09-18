# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is TD Studios' luxury website - a Next.js 14 application with TypeScript that showcases premium design solutions. The project is automatically synced with v0.app deployments and deployed on Vercel. It features a luxury design aesthetic with glassmorphism effects and premium branding.

## Architecture

**Framework**: Next.js 14 with App Router
**Language**: TypeScript
**Styling**: Tailwind CSS v4 with custom glass morphism utilities
**UI Components**: Radix UI primitives with shadcn/ui setup
**Fonts**: Geist Sans and Geist Mono
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
- Persistent navigation (`Nav` component)
- Glass card components for content presentation
- Frosted button components for interactions
- Custom glass morphism CSS utilities

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
- **Glass morphism effects**: `.glass` and `.glass-strong` utility classes
- **Dark theme**: Black background with white text as primary scheme
- **Typography**: Geist font family for modern, clean aesthetics
- **Icons**: Lucide React for consistent iconography

## Deployment

- **Primary**: Auto-deployed to Vercel from this repository
- **Source**: Synced automatically from v0.app project modifications
- **Analytics**: Vercel Analytics integrated in root layout

## Development Notes

- This project is primarily managed through v0.app with automatic syncing
- Manual changes should be carefully considered as they may be overwritten by v0.app syncs
- The app uses Suspense for loading states and error boundaries
- Console logging is present in layout for debugging v0.app integration