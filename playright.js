const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.olx.ro');

  // Accept cookies if the popup appears (OLX)
  try {
    await page.click('button:has-text("Accept")', { timeout: 3000 });
  } catch (e) {}

  // Find the OLX search input and type "laptop-uri"
  await page.fill('input[placeholder*="Caută"]', 'laptop-uri');
  await page.keyboard.press('Enter');

  // Wait for results to load
  await page.waitForSelector('div[data-testid="listing-grid"]');
  await page.screenshot({ path: 'olx_laptopuri.png' });
  await browser.close();
})();
