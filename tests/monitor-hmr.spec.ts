import { test, expect } from '@playwright/test';

test('monitor HMR and page refresh behavior on admin page', async ({ page }) => {
  const events: { type: string; timestamp: number; details?: string }[] = [];

  // Track page loads (full reloads)
  let loadCount = 0;
  page.on('load', () => {
    loadCount++;
    events.push({ type: 'PAGE_LOAD', timestamp: Date.now() });
    console.log(`[PAGE LOAD #${loadCount}] at ${new Date().toISOString()}`);
  });

  // Track navigation events
  page.on('framenavigated', (frame) => {
    if (frame === page.mainFrame()) {
      events.push({ type: 'NAVIGATION', timestamp: Date.now(), details: frame.url() });
    }
  });

  // Capture console messages
  page.on('console', (msg) => {
    const text = msg.text();
    const type = msg.type();

    if (text.includes('HMR') || text.includes('Fast Refresh') || text.includes('rebuilding') || text.includes('Compiling')) {
      events.push({ type: 'HMR_EVENT', timestamp: Date.now(), details: text });
      console.log(`[HMR] ${text}`);
    }

    if (type === 'error' || text.includes('Error')) {
      events.push({ type: 'ERROR', timestamp: Date.now(), details: text });
      console.log(`[ERROR] ${text}`);
    }
  });

  // Track network requests
  const hmrRequests: string[] = [];
  page.on('request', (request) => {
    const url = request.url();
    if (url.includes('_next') || url.includes('webpack') || url.includes('hmr')) {
      hmrRequests.push(url);
    }
  });

  // Navigate to admin page
  console.log('Navigating to http://localhost:3000/admin...');
  await page.goto('http://localhost:3000/admin', { waitUntil: 'networkidle', timeout: 30000 });

  console.log('\n=== MONITORING FOR 30 SECONDS ===');
  console.log('Watching for page reloads, HMR events, and errors...\n');

  // Monitor for 30 seconds
  await page.waitForTimeout(30000);

  // Analyze results
  console.log('\n=== DIAGNOSIS RESULTS ===');
  console.log(`Total page loads: ${loadCount}`);
  console.log(`Total HMR events: ${events.filter(e => e.type === 'HMR_EVENT').length}`);
  console.log(`Total errors: ${events.filter(e => e.type === 'ERROR').length}`);
  console.log(`Total HMR network requests: ${hmrRequests.length}`);

  if (loadCount > 1) {
    console.log('\n⚠️  PAGE IS RELOADING MULTIPLE TIMES!');
    const reloads = events.filter(e => e.type === 'PAGE_LOAD');
    for (let i = 1; i < reloads.length; i++) {
      const interval = reloads[i].timestamp - reloads[i - 1].timestamp;
      console.log(`  Reload #${i + 1} occurred ${interval}ms after previous`);
    }
  }

  const hmrEvents = events.filter(e => e.type === 'HMR_EVENT');
  if (hmrEvents.length > 5) {
    console.log('\n⚠️  EXCESSIVE HMR ACTIVITY DETECTED!');
    console.log(`  ${hmrEvents.length} HMR events in 30 seconds`);
    console.log('  This suggests the dev server is continuously recompiling');
  }

  const errors = events.filter(e => e.type === 'ERROR');
  if (errors.length > 0) {
    console.log('\n❌ ERRORS FOUND:');
    errors.slice(0, 10).forEach(e => console.log(`  - ${e.details}`));
  }

  // Check for specific patterns that indicate file watcher issues
  if (hmrEvents.length > 0 && loadCount === 1) {
    console.log('\n📊 ANALYSIS:');
    console.log('  - Page is NOT reloading (only 1 load)');
    console.log('  - HMR is active but not causing full page reloads');
    console.log('  - This is likely a file watcher issue, not a code issue');
  }

  await page.screenshot({ path: 'test-results/hmr-monitor.png', fullPage: true });
  console.log('\nScreenshot saved to test-results/hmr-monitor.png');
});
