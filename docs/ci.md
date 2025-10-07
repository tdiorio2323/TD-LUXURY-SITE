# CI: Health Check + Lighthouse

## Overview
This repository uses GitHub Actions for continuous integration with robust Lighthouse performance testing.

## Health Check Configuration
- **Startup Gate**: Uses retry-based health check to handle CI environment variance
- **Environment Variables**: 
  - `LH_HEALTHCHECK_ATTEMPTS`: Number of health check attempts (default: 30, CI: 45)
  - `LH_HEALTHCHECK_DELAY_MS`: Delay between attempts in milliseconds (default: 1000)

## Test Routes
The Lighthouse tests run against these routes:
- `/` (Homepage)
- `/work` (Portfolio)
- `/services` (Services)
- `/contact` (Contact)

## CI Pipeline
1. **Test**: Unit tests and type checking
2. **Secret Scan**: Security scanning for secrets
3. **Lighthouse**: Performance, SEO, and accessibility testing

## Branch Protection
- **Main branch** requires passing checks before merge
- **Strict mode**: Up-to-date branches required
- **Admin enforcement**: Enabled for all users

## Configuration Files
- `.github/workflows/ci.yml`: Main CI pipeline
- `scripts/lh-run.cjs`: Lighthouse test runner
- `.secretlintignore`: Secret scanning exclusions
