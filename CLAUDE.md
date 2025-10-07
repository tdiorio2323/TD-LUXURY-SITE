# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is TD Studios' luxury website - a Next.js 15 application with TypeScript that showcases premium design solutions. The project is automatically synced with v0.app deployments and deployed on Vercel. It features a luxury design aesthetic with glassmorphism effects, premium branding, comprehensive analytics tracking, and AI-powered support chat via OpenAI ChatKit.

## Architecture

**Framework**: Next.js 15.5.4 with App Router
**Language**: TypeScript with strict mode enabled
**Styling**: Tailwind CSS v3.4.17 with PostCSS integration and custom design system
**UI Components**: Radix UI primitives with shadcn/ui setup (New York style, RSC enabled)
**Package Manager**: pnpm (v10.15.1 specified in package.json)
**Fonts**: Geist Sans and Geist Mono
**Icons**: Lucide React
**Analytics**: Vercel Analytics with custom tracking utilities
**Testing**: Vitest for unit tests, Playwright for E2E tests

### Key Directories

- `app/` - Next.js app router pages with route-based organization
  - `api/` - API routes for backend functionality
    - `contact/` - Contact form submission endpoint
    - `chatkit/session/` - ChatKit session management for support chat
  - `services/` - Unified services page with tabbed layout (Design | Development | Web Experience)
    - `_components/` - Service-specific tab components
  - `work/` - Portfolio showcase and case studies (renamed from portfolio)
  - `pricing/` - Pricing tiers (Starter, Pro, Elite) with FAQ
  - `process/` - 5-step project methodology with deliverables
  - `book/` - Calendly consultation booking page
  - `legal/` - Terms of Service and Privacy Policy
  - `contact/` - Contact page with form functionality
  - `support/` - Support page with ChatKit integration for live chat
  - `resources/` - Resource downloads and content hub
    - `premade-designs/` - Premade design offerings catalog (relocated)
  - `clients/[client]/` - Dynamic client portal pages
  - `[client]/signin/` - Dynamic client sign-in pages
  - `globals.css` - Global styles with Tailwind configuration and mobile optimizations
  - `layout.tsx` - Root layout with StickyHeader, Footer, analytics, and mobile viewport fixes
  - `page.tsx` - Homepage with service grid and hero content

- `components/` - Reusable React components with consistent patterns
  - `sticky-header.tsx` - Sticky navigation header (replaces nav.tsx)
  - `nav.tsx` - Navigation component with updated route structure
  - `footer.tsx` - Site footer with branding and quick links (Support, Legal, Book)
  - `glass-card.tsx` - Glassmorphism card component for content presentation
  - `frosted-button.tsx` - Polymorphic button with analytics tracking
  - `page-title.tsx` - Standardized page title component with eyebrow/subtitle
  - `section.tsx` - Section wrapper with optional title and id
  - `json-ld.tsx` - Structured data component for SEO
  - `calendly-embed.tsx` - Calendly iframe embed component
  - `logo.tsx` - Brand logo component
  - `analytics-provider.tsx` - Analytics context and tracking wrapper
  - `ab-test-wrapper.tsx` - A/B testing component system
  - `theme-provider.tsx` - Theme management (dark/light mode support)
  - `ui/` - shadcn/ui components (buttons, forms, dialogs, etc.)

- `lib/` - Utility functions and business logic
  - `utils.ts` - className merging utility (cn function)
  - `analytics.ts` - Comprehensive analytics tracking functions
  - `ab-testing.ts` - A/B testing configuration and utilities

- `public/` - Static assets including hero images and branding materials
- `styles/` - Additional CSS files (currently contains globals.css)
- `tests/` - Playwright end-to-end tests for mobile layout and functionality

### Component Architecture

The app uses a consistent luxury design layout with:
- **Sticky Navigation**: StickyHeader component with responsive design and mobile menu
- **Glass Card System**: Reusable glassmorphism components for content presentation with backdrop blur effects
- **Polymorphic Buttons**: FrostedButton component that can render as Link or button with built-in analytics tracking
- **Analytics Integration**: Comprehensive event tracking throughout user interactions via AnalyticsProvider context
- **A/B Testing Framework**: Built-in A/B testing capabilities for conversion optimization
- **Theme Support**: Dark/light mode capability with theme provider
- **Mobile-First Design**: Responsive patterns with mobile menu and touch-friendly interactions
- **Mobile Viewport Fixes**: Inline script in layout.tsx handles iOS Safari viewport height issues and background optimization

## Development Commands

```bash
# Development (preferred package manager: pnpm)
pnpm dev            # Start development server (Next.js dev mode on port 3000)
pnpm serve          # Start production server on port 3000 (after building)

# Building
pnpm build          # Build for production using Next.js

# Code Quality & Verification
pnpm lint           # Run Next.js linting with ESLint
pnpm typecheck      # Run TypeScript type checking without emitting files
pnpm ci:verify      # Run full CI verification (lint + typecheck + test)
pnpm report:types   # Generate type error report using custom script
pnpm scan:secrets   # Scan entire codebase for potential secrets using secretlint
pnpm scan:secrets:staged  # Scan only staged git files for secrets (used by pre-commit hook)

# Testing
pnpm test           # Run unit tests with Vitest (single run)
pnpm test:watch     # Run Vitest in watch mode for development
pnpm test:jest      # Run Jest tests (if applicable)
npx playwright test # Run Playwright end-to-end tests
npx playwright test --ui # Run tests with UI mode for debugging
npx playwright test tests/mobile-layout.spec.ts # Run specific test file

# Performance & Auditing
pnpm lh:routes      # Run Lighthouse audits on routes using custom script
```

## Testing

### Unit Testing with Vitest
- **Framework**: Vitest with jsdom environment for React component testing
- **Test Files**: Located in `tests/` directory with `*.spec.ts?(x)` pattern
- **Setup**: Test setup file at `tests/setup.ts`
- **Configuration**: `vitest.config.ts` with path alias support (`@/` → project root)
- **Key Features**:
  - Globals enabled for test utilities
  - Excludes Playwright E2E tests from Vitest runs
  - JSX automatic transform via esbuild
- **Commands**:
  - `pnpm test` - Run all unit tests once
  - `pnpm test:watch` - Watch mode for development
  - `pnpm ci:verify` - Run lint + typecheck + test for CI

### End-to-End Testing with Playwright
- **Framework**: Playwright for cross-browser testing
- **Test Files**: Located in `tests/` directory (excluded from Vitest)
- **Mobile Focus**: Tests specifically validate mobile layout behavior and responsive design
- **Key Test Areas**:
  - Hero text centering on mobile viewports
  - Background image parallax behavior
  - Touch target accessibility standards
  - Mobile viewport handling and text sizing
- **Screenshots**: Automated visual testing captures in `tests/screenshots/`
- **Configuration**: Default Playwright configuration (no custom config file)

## Configuration Details

### Next.js Configuration (`next.config.mjs`)
- ESLint errors ignored during builds for deployment compatibility
- TypeScript build errors ignored for v0.app integration
- **Image domains**: Configured for `i.imgur.com` and `via.placeholder.com`
- **Domain redirects**: www.tdstudiosny.com → tdstudiosny.com (permanent, 301)

### TypeScript Configuration (`tsconfig.json`)
- Strict mode enabled with ES6 target
- Path mapping: `@/*` points to project root
- Next.js plugin integration for app router support
- Isolated modules for better build performance

### Styling Configuration
- **Tailwind CSS v3.4.17**: Modern PostCSS configuration with custom design system
- **Global Styles**: Located in `app/globals.css` with comprehensive mobile optimizations
- **Design Tokens**: CSS custom properties for colors, typography, and spacing
- **Theme Support**: Light/dark mode variables with OKLCH color space
- **Component Variants**: shadcn/ui New York style with neutral base color
- **Mobile Background**: Optimized viewport handling with iOS Safari fixes and dynamic height calculation

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
- **Build Process**: Standard Next.js build process
- **CI Pipeline**: Use `pnpm ci:verify` for comprehensive validation before commits

### Git Workflow & Security
- **Husky Git Hooks**: Automated security and workflow enforcement
  - **Pre-commit hook**: Runs secretlint on staged files to prevent committing secrets
  - **Pre-push hook**: Blocks direct pushes to `main` branch (requires feature branch + PR workflow)
- **Secret Detection**: secretlint configured with recommended rules to catch API keys, tokens, credentials
- **Branch Protection**: Feature branch workflow enforced - all changes to main must go through PRs

## Key Dependencies & Stack

### Core Framework
- `next`: 15.5.4 - Next.js 15 with App Router and enhanced features
- `react`: ^18 - React 18 with concurrent features
- `typescript`: ^5 - Latest TypeScript with strict mode

### UI & Design System
- `@radix-ui/*`: Complete suite of 20+ accessible UI primitives
- `tailwindcss`: ^3.4.17 - Modern Tailwind CSS with custom design system
- `tailwindcss-animate`: Animation utilities for micro-interactions
- `class-variance-authority`: Type-safe component variant management
- `clsx` + `tailwind-merge`: Conditional className handling via `cn` utility

### Enhanced Functionality
- `react-hook-form`: ^7.60.0 - Form state management with validation
- `zod`: 3.25.67 - Runtime type validation for form schemas
- `@hookform/resolvers`: ^3.10.0 - Resolver integration for react-hook-form with Zod
- `sonner`: ^1.7.4 - Toast notification system
- `cmdk`: Command palette and search functionality
- `date-fns`: Date manipulation and formatting
- `embla-carousel-react`: Carousel component for content presentation
- `recharts`: Data visualization for analytics dashboards
- `react-resizable-panels`: Resizable layout components
- `react-calendly`: ^4.4.0 - Calendly integration for booking consultations
- `vaul`: ^0.9.9 - Drawer component for mobile interactions
- `input-otp`: OTP input component for authentication flows
- `@openai/chatkit-react`: ChatKit integration for AI-powered support chat
- `openai`: OpenAI API client for AI functionality
- `resend`: Email service for contact form submissions

### Development & Quality
- `@vercel/analytics`: Performance and user behavior tracking
- `next-themes`: Theme management system
- `geist`: Premium font family (Sans and Mono variants)
- `lucide-react`: Consistent icon library with 1000+ icons
- `vitest`: Fast unit test framework with jsdom environment
- `@playwright/test`: End-to-end testing framework for mobile and responsive testing
- `@testing-library/react` + `@testing-library/jest-dom`: React component testing utilities
- `jest`: JavaScript testing framework for additional test scenarios
- `lighthouse`: Performance auditing and optimization tool
- `secretlint`: Secret detection and prevention (with recommended rule preset)
- `husky`: Git hooks for automated workflow enforcement
- `tw-animate-css`: Additional Tailwind animation utilities
- `tsx`: TypeScript execution for scripts
- `start-server-and-test`: Utility for coordinating server startup with test execution

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

## Route Structure

See [ROUTES.md](./ROUTES.md) for complete routing documentation.

### Primary Routes
- `/` - Homepage with service grid and hero content
- `/work` - Portfolio and case studies (renamed from /portfolio)
- `/services` - Unified services page with tabs for Design, Development, and Web Experience
- `/pricing` - Pricing tiers (Starter, Pro, Elite) with FAQ and JSON-LD
- `/process` - 5-step project methodology with deliverables and timeline
- `/book` - Calendly consultation booking page
- `/legal` - Terms of Service and Privacy Policy
- `/contact` - Contact form with email integration
- `/support` - ChatKit AI-powered support chat
- `/resources` - Resource hub
  - `/resources/premade-designs` - Premade design catalog (relocated from /premade-designs)

### Dynamic Routes
- `/[client]/signin` - Dynamic client sign-in pages
- `/clients/[client]` - Dynamic client portal pages

### Navigation Structure
- **Primary Nav**: Work · Services · Pricing · Process · Resources · Contact
- **Footer Links**: Support · Legal · Book
- **SEO**: All pages include canonical URLs, OpenGraph, Twitter Card metadata, and JSON-LD structured data
