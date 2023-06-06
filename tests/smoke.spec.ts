import { test, expect } from "@playwright/test";

const BASE_URL = "/";
test("list page is operational", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.getByText("Cats World")).toBeDefined();
});

test("individual cat can be retreived", async ({ page }) => {
  const firstCatPath = "cat/464e88b1-dc61-4804-b74b-b49960d413eb";
  await page.goto(`${BASE_URL}${firstCatPath}`);

  await expect(page.getByText("Abyssinian")).toBeDefined();
});

test("can navigate to the new cat form", async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByText("Add Cat").click();

  await expect(page.getByText("Submit")).toBeVisible();
});
