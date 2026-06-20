import { test, expect } from '@playwright/test';

test('verify admin page stability - no auto-refresh', async ({ page }) => {
  let loadCount = 0;
  let hmrEvents = 0;

  page.on('load', () => {
    loadCount++;
    console.log(`[PAGE LOAD #${loadCount}]`);
  });

  page.on('console', (msg) => {
    const text = msg.text();
    if (text.includes('Fast Refresh') || text.includes('rebuilding')) {
      hmrEvents++;
      console.log(`[HMR] ${text}`);
    }
  });

  // Navigate to admin page
  await page.goto('http://localhost:3000/admin', { waitUntil: 'networkidle' });

  // Monitor for 15 seconds
  await page.waitForTimeout(15000);

  console.log('\n=== VERIFICATION RESULTS ===');
  console.log(`Page loads: ${loadCount}`);
  console.log(`HMR events: ${hmrEvents}`);

  // Assertions
  expect(loadCount).toBe(1); // Should only load once
  expect(hmrEvents).toBeLessThan(10); // Minimal HMR activity

  console.log('\n✅ VERIFICATION PASSED: Page is stable, no auto-refresh detected');
});
