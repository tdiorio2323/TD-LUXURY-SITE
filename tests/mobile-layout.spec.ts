import { test, expect } from '@playwright/test';

test.describe('Mobile Layout Analysis', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Hero text centering on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

    // Wait for hero section to load
    await page.waitForSelector('h1');

    // Get hero text element
    const heroTitle = page.locator('h1').first();
    const heroSubtitle = page.locator('p').first();

    // Check if text is visible
    await expect(heroTitle).toBeVisible();
    await expect(heroSubtitle).toBeVisible();

    // Get bounding boxes to analyze positioning
    const titleBox = await heroTitle.boundingBox();
    const subtitleBox = await heroSubtitle.boundingBox();
    const viewportWidth = 375;

    console.log('Title position:', titleBox);
    console.log('Subtitle position:', subtitleBox);

    // Check horizontal centering (allowing for some padding)
    if (titleBox) {
      const titleCenter = titleBox.x + titleBox.width / 2;
      const viewportCenter = viewportWidth / 2;
      const centeringTolerance = 20; // pixels

      console.log(`Title center: ${titleCenter}, Viewport center: ${viewportCenter}`);
      expect(Math.abs(titleCenter - viewportCenter)).toBeLessThan(centeringTolerance);
    }
  });

  test('Background image behavior on scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Get the hero section
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    // Take screenshot before scroll
    await page.screenshot({ path: 'tests/screenshots/mobile-before-scroll.png' });

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    // Take screenshot after scroll
    await page.screenshot({ path: 'tests/screenshots/mobile-after-scroll.png' });

    // Check that hero section has proper background styling
    const heroBackgroundDiv = heroSection.locator('div').first();
    const backgroundStyles = await heroBackgroundDiv.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        position: styles.position,
        inset: styles.inset
      };
    });

    console.log('Background styles:', backgroundStyles);
    // Hero background should be absolutely positioned to cover the section
    expect(backgroundStyles.position).toBe('absolute');
  });

  test('Mobile viewport and text sizing', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Wait for page to load
    await page.waitForSelector('h1');

    const heroTitle = page.locator('h1').first();
    const heroSection = page.locator('section').first();

    // Check container height and positioning
    const containerBox = await heroSection.boundingBox();
    console.log('Hero container:', containerBox);

    // Check text properties
    const titleStyles = await heroTitle.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        fontSize: styles.fontSize,
        textAlign: styles.textAlign,
        lineHeight: styles.lineHeight,
        display: styles.display
      };
    });

    console.log('Title styles:', titleStyles);
    expect(titleStyles.textAlign).toBe('center');
  });

  test('Touch target accessibility', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Wait for navigation to load
    await page.waitForSelector('nav');

    // Check navigation menu button (mobile hamburger menu)
    const menuButton = page.locator('button[aria-label*="menu"]').first();

    // Wait for button to be visible
    await expect(menuButton).toBeVisible();

    const buttonBox = await menuButton.boundingBox();
    if (buttonBox) {
      // WCAG 2.1 minimum touch target size is 44x44 pixels
      expect(buttonBox.width).toBeGreaterThanOrEqual(44);
      expect(buttonBox.height).toBeGreaterThanOrEqual(44);
    }
  });
});