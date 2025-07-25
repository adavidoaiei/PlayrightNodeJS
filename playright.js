const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');

  // Accept cookies if the popup appears (Google)
  try {
    await page.click('button:has-text("Accept all")', { timeout: 3000 });
  } catch (e) {}

  // Find the Google search input and type "linux playright.js"
  await page.fill('input[name="q"]', 'linux playright.js');
  await page.keyboard.press('Enter');

  // Wait for results to load
  await page.waitForSelector('h3');
  await page.screenshot({ path: 'google_search.png' });
  await browser.close();
})();
