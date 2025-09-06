import { test } from "@playwright/test";
test("exercise 2", async ({ page }) => {
  await test.step("Go to Material page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("Click on the Product Page", async () => {
    await page.locator("//a[@href='02-xpath-product-page.html']").click();
  });
  await test.step("Add products to the cart", async () => {
    const xpathAddProduct1 = "button.add-to-cart[data-product-id='1']";
    const xpathAddProduct2 = "button.add-to-cart[data-product-id='2']";
    const xpathAddProduct3 = "button.add-to-cart[data-product-id='3']";
    for (let i = 0; i < 2; i++) {
      await page.locator(xpathAddProduct1).click();
    }
    for (let i = 0; i < 3; i++) {
      await page.locator(xpathAddProduct2).click();
    }
    await page.locator(xpathAddProduct3).click();
  });
});
