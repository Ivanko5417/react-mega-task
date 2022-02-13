const puppeteer = require("puppeteer");

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("https://www.google.com/");
    await page.waitForSelector(".uU7dJb");
    const text = await page.$eval(".uU7dJb", (e) => e.textContent);
    console.log(text);
    expect(text).toContain('Беларусь');
  });

  afterAll(() => browser.close());
});
