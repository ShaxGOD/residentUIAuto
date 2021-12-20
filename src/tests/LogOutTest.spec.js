const { test, expect } = require("@playwright/test");
const { chromium } = require('@playwright/test');

test.describe("Resident tests", () => {

  let browser,context,page;

    test.beforeAll(async ({},testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 90000);
    browser = await chromium.launch({
      args: ['--disable-dev-shm-usage']
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("http://automationpractice.com/index.php");
    await page.click("a:has-text('Sign in')");
    await expect(page).toHaveURL(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
    await page.fill("input[id=email]", "itspecialbro@gmail.com");
    await page.fill('input[id="passwd"]', "ShakhMAN12!");
    await page.click("button[id=SubmitLogin]");
  });
  
  test("Log out test", async ({}) => {
    const userName = page.locator('//div[@class="header_user_info"]/a/span');
  
    await expect(userName).toHaveText("Shakh Afsdfsfd");
  
    await expect(page.locator("h1:has-text('My account')")).toBeVisible();
  
    await expect(
      page.locator(
        'p:has-text("Welcome to your account. Here you can manage all of your personal information and orders.")'
      )
    ).toBeVisible();
  
    await page.click('//a[@class="logout"]');
  
    await expect(page).toHaveURL(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
  
    await expect(page.locator('h1:has-text("Authentication")')).toBeVisible();
  });
});
