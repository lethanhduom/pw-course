import { test } from "@playwright/test";
const getArticleData: { title: string; content: string }[] = [];

test("exercise 4", async ({ page }) => {
  await test.step("Go to VN express", async () => {
    await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  });
  await test.step("Get Article", async () => {
    const articleList = await page.locator(
      "//article[@class='item-news item-news-common']"
    );
    const count = await articleList.count();
    for (let i = 0; i < Math.min(10, count); i++) {
      const title = await articleList
        .nth(i)
        .locator("xpath=.//h4[@class='title-news']/a")
        .innerText();
      const description = await articleList
        .nth(i)
        .locator("xpath=.//p[@class='description']")
        .innerText();
      getArticleData.push({
        title,
        content: description.split(".").slice(0, 3).join("."),
      });
    }
  });
  await test.step("Go to Material page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("Click on the  Personal notes Page", async () => {
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
  });
  await test.step("Add notes", async () => {
    for (let data of getArticleData) {
      await page.locator("//input[@id='note-title']").fill(data.title);
      await page.locator("//textarea[@id='note-content']").fill(data.content);
      await page.locator("//button[@id='add-note']").click();
    }
  });
  await test.step("Search a note", async () => {
    let randomNumber = Math.floor(Math.random() * (getArticleData.length - 1));
    await page
      .locator("//input[@id='search']")
      .fill(getArticleData[randomNumber].title);
  });
});
