import {test} from "@playwright/test";
import {AddCatPage, CatDetailsPage, CatListPage} from "./pages";

test("list page is operational", async ({page}) => {
  const catListPage = new CatListPage(page);

  await catListPage.visit();
  await catListPage.ensureBasicFunctionality();
});

test("individual cat can be retrieved", async ({page}) => {
  const catId = "464e88b1-dc61-4804-b74b-b49960d413eb";
  const catDetailsPage = new CatDetailsPage(page);

  await catDetailsPage.visit(catId);
  await catDetailsPage.ensureBasicFunctionality();
});

test("can navigate to the new cat form", async ({page}) => {
  const catListPage = new CatListPage(page);
  const addCatPage = new AddCatPage(page);

  await catListPage.visit();
  await catListPage.clickAddCat();

  await addCatPage.confirmPageUrl();
  await addCatPage.confirmSubmitButtonVisible();

});
