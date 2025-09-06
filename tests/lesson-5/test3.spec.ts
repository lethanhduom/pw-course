import { test } from "@playwright/test";
test("exercise 3", async ({ page }) => {
  await test.step("Go to Material page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("Click on the ToDo Page", async () => {
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
  });
  await test.step("Add todo list", async () => {
    for (let i = 0; i < 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });
  await test.step("Delete odd numbered tasks", async () => {
    await page.on("dialog", (dialog) => dialog.accept());

    for (let i = 0; i < 100; i++) {
      if (i % 2 === 1) {
        await page.locator(`//button[@id='todo-${i}-delete']`).click();
      }
    }
  });
});
