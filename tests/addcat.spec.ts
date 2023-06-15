import { test } from "@playwright/test";
import { AddCatPage, CatListPage } from "./pages";

test.skip("visit the add cat page, fill form and ensure new cat added", async ({
  page,
}) => {
  const catListPage = new CatListPage(page);
  const addCatPage = new AddCatPage(page);

  await catListPage.visit();
  await catListPage.clickAddCat();
  await addCatPage.confirmPageUrl();
  const formData = await addCatPage.fillForm();
  await catListPage.visit();
  await expect(page.getByText(formData.name)).toBeDefined();
});
