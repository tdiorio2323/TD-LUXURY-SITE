# TD Studios - UX Roadmap
**Generated:** 2025-10-07
**Total Effort:** ~31 hours
**Execution Order:** High → Medium → Low

---

## 🔴 HIGH PRIORITY (Pre-Launch Critical)
**Total: ~7h | Must complete before production deployment**

### Navigation & Core Functionality
- [ ] **Fix broken service links** — 0.5h
  - Update 4 broken links: `/web`, `/dev`, `/social`, `/design` → `/services`
  - Files: `app/page.tsx` lines 14, 21, 28, 35, 42

- [ ] **Fix portfolio route** — 0.1h
  - Change `/portfolio` → `/work`
  - Files: `app/page.tsx` line 49

### Performance (Blocking)
- [ ] **Optimize hero images** — 4h
  - Convert 4.4MB `parallax-hero.jpg` + 3 others to WebP
  - Target: < 300KB each (85%+ reduction)
  - Impact: LCP improvement, mobile load speed
  - Files: `/public/parallax-hero.jpg`, `design-showcase-1.jpg`, `parallax-hero-backup.jpg`, `web-hero.jpg`

### SEO Essentials
- [ ] **Update sitemap** — 0.5h
  - Add 9 missing routes: `/work`, `/services`, `/pricing`, `/process`, `/book`, `/support`, `/resources`, `/resources/premade-designs`, `/legal`
  - Fix base URL: `www.tdstudiosny.com` → `tdstudiosny.com`
  - Files: `app/sitemap.ts`

- [ ] **Create robots.txt** — 0.3h
  - Next.js 15 format
  - Files: Create `app/robots.ts`

### Trust & Compliance
- [ ] **Remove/verify award badges** — 1h
  - 4 unverified awards with `data-verify="pending"`
  - Options: Remove, verify, or change to "Featured On"
  - Files: `app/page.tsx` lines 157-197

- [ ] **Add skip-to-content link** — 0.3h
  - Accessibility improvement for keyboard navigation
  - Files: `components/sticky-header.tsx`

---

## 🟡 MEDIUM PRIORITY (Week 1-2 Post-Launch)
**Total: ~16h | High-impact polish & SEO**

### SEO Enhancement
- [ ] **Add JSON-LD to 6 pages** — 3h
  - Homepage: Organization + WebSite schema
  - Work: CollectionPage + CreativeWork
  - Process: HowTo schema
  - Support: Organization + ContactPoint
  - Resources: ItemList schema
  - Files: Each `page.tsx` metadata

- [ ] **Add canonical URLs** — 1h
  - All pages need `alternates: { canonical }` in metadata
  - Files: All `app/*/page.tsx`

- [ ] **Optimize meta descriptions** — 1h
  - 150-160 chars, unique per page
  - Files: All page metadata exports

### Performance Optimization
- [ ] **Lazy load below-fold images** — 1.5h
  - Add `loading="lazy"` to testimonials, capabilities, lead magnets
  - Files: `app/page.tsx` lines 200+

- [ ] **Remove unused placeholder files** — 0.5h
  - Delete `placeholder.{svg,jpg,png}`, `placeholder-logo.*`, `placeholder-user.jpg`
  - Update fallback in `app/page.tsx:280`
  - Files: `public/placeholder.*`

### Content Improvements
- [ ] **Add testimonial images** — 2h
  - Replace initials (M, S, R) with real photos
  - Files: `app/page.tsx` lines 214, 231, 248 | `/public/testimonials/`

- [ ] **Replace capability fallback** — 0.5h
  - Remove `placeholder.svg` fallback
  - Files: `app/page.tsx` line 280

- [ ] **Add case study links** — 2h
  - Enrich work page with detailed case studies
  - Files: `app/work/portfolio-client-page.tsx`

### Mobile UX
- [ ] **Enhance mobile menu animations** — 1.5h
  - Add slide-in/fade transitions
  - Files: `components/nav.tsx` lines 114-165

- [ ] **Verify touch targets** — 1h
  - Ensure all CTAs are 44x44px minimum
  - Files: All pages with buttons

- [ ] **Improve mobile form UX** — 2h
  - Floating labels, inline validation
  - Files: `app/contact/page.tsx`

---

## 🟢 LOW PRIORITY (Week 3+ / Ongoing)
**Total: ~12h | Code quality & maintainability**

### Code Quality
- [ ] **Audit console.log statements** — 0.5h
  - Remove from production code
  - Command: `grep -r "console.log" app/ components/`

- [ ] **Remove unused Image fallback** — 0.3h
  - Files: `app/page.tsx` line 280

- [ ] **Consolidate duplicate hero images** — 0.5h
  - Keep one: `parallax-hero.jpg` or backup
  - Files: `public/parallax-hero*.jpg`

### Asset Organization
- [ ] **Audit unused public images** — 2h
  - Remove duplicate backgrounds, unused hero variants
  - Files: `public/*.{jpg,png}`

- [ ] **Standardize client logos** — 2h
  - Convert all to WebP, consistent naming
  - Files: `/public/clients/*/logo.*`

- [ ] **Create image optimization script** — 1h
  - Automate WebP conversion pre-commit
  - Files: Create `scripts/optimize-images.mjs`

### Component Refactoring
- [ ] **Extract testimonial component** — 1.5h
  - Create `<TestimonialCard>`
  - Files: Extract `app/page.tsx:204-264` → `components/testimonial-card.tsx`

- [ ] **Create stat card component** — 1h
  - Extract to `<StatCard>`
  - Files: Extract `app/page.tsx:126-151` → `components/stat-card.tsx`

- [ ] **Standardize page hero** — 2h
  - Create `<PageHero>` component
  - Files: Extract pattern from pricing, process, contact

### Mobile-Specific
- [ ] **Test viewport height fix** — 0.5h
  - Verify iOS 14+, Android Chrome
  - Files: `app/layout.tsx` lines 62-89

- [ ] **Add touch gestures to carousel** — 1h
  - Swipe support for mobile
  - Files: `components/design-carousel.tsx` (if exists)

### Typography & Readability
- [ ] **Review mobile text sizing** — 0.5h
  - Minimum 16px body text
  - Files: `app/globals.css`

- [ ] **Improve contrast ratios** — 1h
  - WCAG AA compliance (4.5:1)
  - Files: `app/globals.css` (glass-card classes)

---

## 📋 Execution Checklist

### Phase 1: Critical Fixes (Day 1)
1. Fix broken service links (0.5h)
2. Fix portfolio route (0.1h)
3. Update sitemap (0.5h)
4. Create robots.txt (0.3h)
5. Add skip-to-content (0.3h)
**Total: 1.7h**

### Phase 2: Performance (Day 2-3)
1. Optimize hero images (4h)
2. Remove award badges (1h)
**Total: 5h**

### Phase 3: SEO & Content (Week 1)
1. Add JSON-LD to 6 pages (3h)
2. Add canonical URLs (1h)
3. Optimize meta descriptions (1h)
4. Lazy load images (1.5h)
5. Remove placeholder files (0.5h)
**Total: 7h**

### Phase 4: Mobile & Content Polish (Week 2)
1. Add testimonial images (2h)
2. Replace capability fallback (0.5h)
3. Add case study links (2h)
4. Enhance mobile menu (1.5h)
5. Verify touch targets (1h)
6. Improve form UX (2h)
**Total: 9h**

### Phase 5: Technical Cleanup (Week 3+)
1. Code quality audit (1.3h)
2. Asset organization (5h)
3. Component refactoring (4.5h)
4. Mobile-specific tests (1.5h)
**Total: 12.3h**

---

## 🎯 Success Metrics

**Post-Phase 1 (Critical Fixes):**
- ✅ Zero 404 errors from homepage
- ✅ All routes in sitemap
- ✅ robots.txt discoverable

**Post-Phase 2 (Performance):**
- ✅ LCP < 2.5s on mobile
- ✅ Homepage load < 3s on 3G
- ✅ Image payload < 2MB total

**Post-Phase 3 (SEO):**
- ✅ All pages have JSON-LD
- ✅ Google Search Console validates schema
- ✅ Meta descriptions unique & optimized

**Post-Phase 4 (Mobile & Content):**
- ✅ Mobile conversion rate +15%
- ✅ Touch targets pass accessibility audit
- ✅ Form completion rate improved

**Post-Phase 5 (Cleanup):**
- ✅ Codebase maintainability score +20%
- ✅ Bundle size reduced by 15%
- ✅ Component reusability improved

---

## 🛠️ Quick Commands

```bash
# Development
pnpm dev                    # Start dev server

# Optimization (to be created)
pnpm run optimize:images    # Convert images to WebP
pnpm run audit:routes       # Check for broken links
pnpm run audit:seo          # Validate metadata & schemas

# Testing
pnpm test                   # Run unit tests
npx playwright test         # Run E2E tests

# Performance
pnpm lh:routes              # Lighthouse audit

# Code Quality
pnpm lint                   # ESLint check
pnpm typecheck              # TypeScript validation
pnpm scan:secrets           # Security scan
```

---

## 📊 Priority Breakdown

| Priority | Tasks | Hours | Impact |
|----------|-------|-------|--------|
| 🔴 High | 7 | 7h | Fixes critical bugs, SEO basics, performance |
| 🟡 Medium | 11 | 16h | 50-70% perf boost, comprehensive SEO |
| 🟢 Low | 13 | 12h | Maintainability, bundle reduction |
| **Total** | **31** | **35h** | **Production-ready luxury site** |

---

**Last Updated:** 2025-10-07
**Source:** UX-TODO.md comprehensive analysis
