const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 設定用戶代理來模仿真實瀏覽器
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

  // 瀏覽 Google
  await page.goto('https://www.google.com');

  // 獲取頁面內容並顯示
  const content = await page.content();
  console.log(content);

  await browser.close();
})();
