import { test } from "@playwright/test";
import casual from "casual";
import { AddCatPage, CatListPage } from "./pages";
import { NewCatFormState } from "../src/pages/add-cat/components/state-management/reducer";

test("visit the add cat page, fill form and ensure new cat added", async ({
  page,
}) => {
  const catList = new CatListPage(page);
  await catList.visit();
  await catList.clickAddCat();

  const addCatForm = new AddCatPage(page);
  await addCatForm.confirmPageUrl();

  const newCatEntry: NewCatFormState = {
    name: casual.name,
    origin: "AU",
    adaptability: 1,
    indoor: true,
    life_span: [3, 15],
  };
  await addCatForm.fillForm(newCatEntry);
  await addCatForm.submitForm();
  await catList.visit();
  await catList.assertGivenCatExists(String(newCatEntry.name));
});
