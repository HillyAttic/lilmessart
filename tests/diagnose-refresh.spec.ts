import { test, expect } from '@playwright/test';

test('diagnose admin page refresh loop', async ({ page }) => {
  const reloads: number[] = [];
  const consoleLogs: string[] = [];
  const networkRequests: string[] = [];

  // Track page reloads
  let loadCount = 0;
  page.on('load', () => {
    loadCount++;
    reloads.push(Date.now());
    console.log(`[RELOAD #${loadCount}] at ${new Date().toISOString()}`);
  });

  // Capture console messages
  page.on('console', (msg) => {
    const text = msg.text();
    consoleLogs.push(text);
    if (text.includes('HMR') || text.includes('Fast Refresh') || text.includes('rebuilding')) {
      console.log(`[CONSOLE] ${text}`);
    }
  });

  // Track network requests (especially WebSocket and HMR)
  page.on('request', (request) => {
    const url = request.url();
    if (url.includes('_next') || url.includes('webpack') || url.includes('hmr') || url.includes('ws://')) {
      networkRequests.push(url);
      console.log(`[NETWORK] ${request.method()} ${url}`);
    }
  });

  // Navigate to admin page
  console.log('Navigating to http://localhost:3000/admin...');
  await page.goto('http://localhost:3000/admin', { waitUntil: 'networkidle' });

  // Wait and monitor for 10 seconds
  console.log('Monitoring for 10 seconds...');
  await page.waitForTimeout(10000);

  // Analyze results
  console.log('\n=== DIAGNOSIS RESULTS ===');
  console.log(`Total page loads: ${loadCount}`);
  console.log(`Total reloads detected: ${reloads.length}`);
  console.log(`Console logs with HMR/Fast Refresh: ${consoleLogs.filter(l => l.includes('HMR') || l.includes('Fast Refresh') || l.includes('rebuilding')).length}`);
  console.log(`Network requests to _next/webpack/hmr: ${networkRequests.length}`);

  if (reloads.length > 1) {
    console.log('\n⚠️  PAGE IS REFRESHING REPEATEDLY!');
    const intervals = [];
    for (let i = 1; i < reloads.length; i++) {
      intervals.push(reloads[i] - reloads[i - 1]);
    }
    console.log(`Average interval between reloads: ${intervals.reduce((a, b) => a + b, 0) / intervals.length}ms`);
  }

  // Check for specific error patterns
  const errorLogs = consoleLogs.filter(l => l.includes('Error') || l.includes('error'));
  if (errorLogs.length > 0) {
    console.log(`\nErrors found: ${errorLogs.length}`);
    errorLogs.slice(0, 5).forEach(e => console.log(`  - ${e}`));
  }

  // Take screenshot for visual inspection
  await page.screenshot({ path: 'test-results/admin-diagnostic.png' });
  console.log('\nScreenshot saved to test-results/admin-diagnostic.png');
});
