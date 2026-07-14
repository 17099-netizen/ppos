const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });

  const page = await browser.newPage();

  await page.goto(
    'https://ppos.ct.ws/ai_security_scan.php?token=MySuperSecretKey123',
    {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    }
  );

  console.log('SUCCESS');

  await browser.close();
})();
