import { test } from "@playwright/test";
test("exercise 1", async ({ page }) => {
  await test.step("Go to Material page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("Click on the Register Page", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });
  await test.step("Fill all infomation", async () => {
    await page.locator("//input[@id='username']").fill("Dilys");
    await page.locator("//input[@id='email']").fill("Dilys@gmail.com");
    await page.locator("//input[@id='female']").setChecked(true);
    await page.locator("//input[@id='reading']").setChecked(true);
    await page.locator("//input[@id='cooking']").setChecked(true);
    await page.selectOption("//select[@id='interests']", "technology");
    await page.selectOption("//select[@id='country']", "usa");
    await page.locator("//input[@id='dob']").fill("2003-02-03");
    await page
      .locator("//input[@id='profile']")
      .setInputFiles(
        "01-Playwright-Exercise\\pw-course\\tests\\lesson-5\\image\\picture.webp"
      );
    await page
      .locator("//textarea[@id='bio']")
      .fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit, nulla id viverra porttitor, lectus ipsum aliquam neque, vitae aliquam est nunc sit amet est. Integer eget purus sem. Cras aliquet mi sit amet viverra blandit"
      );
    await page.locator("//input[@id='rating']").fill("9");
    await page.locator("//input[@id='favcolor']").fill("#ce27c0");
    await page.locator("//div[@class='tooltip']").hover();
    await page.locator("//input[@id='newsletter']").setChecked(true);
    await page.locator("//span[@class='slider round']").click();
    await page.locator("//div[@id='starRating']").click();
    await page.locator("//button[contains(text(),'Register')]").click();
  });
});
