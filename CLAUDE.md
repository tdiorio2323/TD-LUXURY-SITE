# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is TD Studios' luxury website - a Next.js 14 application with TypeScript that showcases premium design solutions. The project is automatically synced with v0.app deployments and deployed on Vercel. It features a luxury design aesthetic with glassmorphism effects, premium branding, and comprehensive analytics tracking.

## Architecture

**Framework**: Next.js 14 with App Router
**Language**: TypeScript with strict mode enabled
**Styling**: Tailwind CSS v4 with PostCSS integration and custom design system
**UI Components**: Radix UI primitives with shadcn/ui setup (New York style, RSC enabled)
**Package Manager**: pnpm (v10.15.1 specified in package.json)
**Fonts**: Geist Sans and Geist Mono
**Icons**: Lucide React
**Analytics**: Vercel Analytics with custom tracking utilities

### Key Directories

- `app/` - Next.js app router pages with route-based organization
  - `contact/` - Contact page with form functionality
  - `dev/` - Development/product platform services page
  - `portfolio/` - Portfolio showcase and case studies
  - `social/` - Social programs and community services page
  - `web/` - Web experience and marketing services page
  - `resources/` - Resource downloads and content hub
  - `globals.css` - Global styles with Tailwind v4 configuration
  - `layout.tsx` - Root layout with navigation, analytics, and providers
  - `page.tsx` - Homepage with service grid and hero content

- `components/` - Reusable React components with consistent patterns
  - `nav.tsx` - Responsive navigation with mobile menu and social links
  - `footer.tsx` - Site footer with branding and links
  - `glass-card.tsx` - Glassmorphism card component for content presentation
  - `frosted-button.tsx` - Polymorphic button with analytics tracking
  - `logo.tsx` - Brand logo component
  - `analytics-provider.tsx` - Analytics context and tracking wrapper
  - `ab-test-wrapper.tsx` - A/B testing component system
  - `theme-provider.tsx` - Theme management (dark/light mode support)

- `lib/` - Utility functions and business logic
  - `utils.ts` - className merging utility (cn function)
  - `analytics.ts` - Comprehensive analytics tracking functions
  - `ab-testing.ts` - A/B testing configuration and utilities

- `public/` - Static assets including hero images and branding materials
- `styles/` - Additional CSS files (currently contains globals.css)

### Component Architecture

The app uses a consistent luxury design layout with:
- **Persistent Navigation**: Responsive nav component with mobile hamburger menu, social media links (Instagram, Telegram)
- **Glass Card System**: Reusable glassmorphism components for content presentation with backdrop blur effects
- **Polymorphic Buttons**: FrostedButton component that can render as Link or button with built-in analytics tracking
- **Analytics Integration**: Comprehensive event tracking throughout user interactions
- **A/B Testing Framework**: Built-in A/B testing capabilities for conversion optimization
- **Theme Support**: Dark/light mode capability with theme provider
- **Mobile-First Design**: Responsive patterns with mobile menu and touch-friendly interactions

## Development Commands

```bash
# Development
npm run dev          # Start development server (Next.js dev mode)
pnpm dev            # Alternative using pnpm (preferred package manager)

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run Next.js linting with ESLint
```

## Configuration Details

### Next.js Configuration (`next.config.mjs`)
- ESLint errors ignored during builds for deployment compatibility
- TypeScript build errors ignored for v0.app integration
- Images set to unoptimized for static deployment compatibility

### TypeScript Configuration (`tsconfig.json`)
- Strict mode enabled with ES6 target
- Path mapping: `@/*` points to project root
- Next.js plugin integration for app router support
- Isolated modules for better build performance

### Styling Configuration
- **Tailwind CSS v4**: Modern PostCSS-only configuration
- **Global Styles**: Located in `app/globals.css` and `styles/globals.css`
- **Design Tokens**: CSS custom properties for colors, typography, and spacing
- **Theme Support**: Light/dark mode variables with OKLCH color space
- **Component Variants**: shadcn/ui New York style with neutral base color

### shadcn/ui Configuration (`components.json`)
- Style: New York variant for premium aesthetic
- RSC: React Server Components enabled
- Base Color: Neutral for sophisticated palette
- CSS Variables: Enabled for dynamic theming
- Path Aliases: Configured for components, utils, ui, lib, and hooks

## Design System

### Color Palette & Theming
- **Primary Theme**: Dark mode with black background (`oklch(0.145 0 0)`) and white text
- **Glassmorphism**: Neutral-900 with 70% opacity and backdrop blur for depth
- **CSS Variables**: Comprehensive design tokens using OKLCH color space for precise color control
- **Component Colors**: Neutral palette with accent colors for charts and interactive elements

### Typography & Layout
- **Font System**: Geist Sans and Geist Mono with proper font loading
- **Spacing**: Consistent padding and margin using Tailwind utilities
- **Radius**: 0.625rem default radius with sm/md/lg/xl variants
- **Responsive Design**: Mobile-first approach with breakpoint-specific adaptations

### Component Patterns
- **Glass Cards**: Consistent backdrop blur and border styling for content containers
- **Interactive Elements**: Hover states, transitions, and focus management for accessibility
- **Icon Integration**: Lucide React icons with consistent sizing and styling
- **Button Variants**: Primary, secondary, and ghost variants with proper contrast ratios

## Analytics & Optimization

### Analytics Implementation (`lib/analytics.ts`)
- **Page View Tracking**: Automatic page view events with custom parameters
- **Button Click Tracking**: Comprehensive interaction tracking with location context
- **Form Submission Tracking**: Success and error state tracking for conversions
- **Lead Magnet Downloads**: Dedicated tracking for content downloads
- **Consultation Bookings**: High-value conversion tracking
- **Scroll Depth**: Engagement measurement through scroll behavior
- **Time on Page**: Session duration tracking for content effectiveness
- **CTA Performance**: Call-to-action click tracking with position data

### A/B Testing Framework (`lib/ab-testing.ts`)
- **Test Configuration**: Structured A/B test definitions with variant control
- **Traffic Allocation**: Percentage-based traffic splitting for experiments
- **Active Test Management**: Easy enable/disable of running tests
- **Conversion Tracking**: Integration with analytics for performance measurement

## Deployment & Integration

### v0.app Integration
- **Auto-Sync**: Repository automatically synced with v0.app deployments
- **Source Control**: Changes flow from v0.app → GitHub → Vercel
- **Project Link**: [v0.app/chat/projects/MgSVoHLfRb7](https://v0.app/chat/projects/MgSVoHLfRb7)
- **Deployment URL**: Vercel deployment with automatic builds

### Development Workflow
- **Primary Development**: Use v0.app interface for major changes
- **Manual Edits**: Consider sync implications when making direct code changes
- **Debug Logging**: Console logging in layout for v0.app integration debugging
- **Build Process**: Optimized for static deployment with image optimization disabled

## Key Dependencies & Stack

### Core Framework
- `next`: 14.2.16 - Latest stable Next.js with App Router
- `react`: ^18 - React 18 with concurrent features
- `typescript`: ^5 - Latest TypeScript with strict mode

### UI & Design System
- `@radix-ui/*`: Complete suite of 20+ accessible UI primitives
- `tailwindcss`: ^4.1.9 - Latest Tailwind CSS with v4 features
- `tailwindcss-animate`: Animation utilities for micro-interactions
- `class-variance-authority`: Type-safe component variant management
- `clsx` + `tailwind-merge`: Conditional className handling via `cn` utility

### Enhanced Functionality
- `react-hook-form`: ^7.60.0 - Form state management with validation
- `zod`: 3.25.67 - Runtime type validation for form schemas
- `sonner`: ^1.7.4 - Toast notification system
- `cmdk`: Command palette and search functionality
- `date-fns`: Date manipulation and formatting
- `embla-carousel-react`: Carousel component for content presentation
- `recharts`: Data visualization for analytics dashboards
- `react-resizable-panels`: Resizable layout components

### Development & Quality
- `@vercel/analytics`: Performance and user behavior tracking
- `next-themes`: Theme management system
- `geist`: Premium font family (Sans and Mono variants)
- `lucide-react`: Consistent icon library with 1000+ icons

## UX Research & Optimization Context

The project includes comprehensive UX research documentation:
- **UI/UX Audit**: Systematic analysis of design patterns and user experience
- **User Journey Mapping**: Conversion funnel analysis and optimization opportunities
- **Luxury Brand Standards**: Premium positioning and credibility indicators
- **Performance Optimization**: Technical UX improvements and loading experience

## Development Best Practices

### TypeScript Patterns
- **Strict Typing**: Comprehensive interface definitions for all components
- **Path Aliases**: Clean imports using `@/*` for better maintainability
- **Client Components**: Proper `"use client"` directive usage for interactive components
- **Polymorphic Components**: Type-safe polymorphic patterns (e.g., FrostedButton as Link or button)

### Component Guidelines
- **Consistent Naming**: PascalCase for components, kebab-case for files
- **Props Interfaces**: Dedicated interfaces for all component props
- **Analytics Integration**: Built-in tracking for user interactions
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Performance**: Lazy loading, code splitting, and optimized re-renders

### Styling Conventions
- **Utility-First**: Tailwind CSS classes for rapid development
- **Component Variants**: CVA for maintainable component variations
- **Responsive Design**: Mobile-first breakpoint strategy
- **Design Tokens**: CSS custom properties for theme consistency
- **Glass Effects**: Consistent backdrop blur and transparency patterns