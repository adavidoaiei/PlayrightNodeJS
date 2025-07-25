const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://litoralulromanesc.ro');

  // Accept cookies if the popup appears
  try {
    await page.click('button:has-text("Accept")', { timeout: 3000 });
  } catch (e) {}

  // Find the search input and type "hoteluri"
  await page.fill('input[placeholder*="Caută"]', 'hoteluri');
  await page.keyboard.press('Enter');

  // Wait for results to load
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'hoteluri_search.png' });
  await browser.close();
})();
