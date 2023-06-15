import { expect, Page } from "@playwright/test";
import { Cat } from "../src/__generated__/hooks";
import * as casual from "casual";
import { NewCatFormState } from "../src/pages/add-cat/components/state-management/reducer";

export class CatListPage {
  constructor(private readonly page: Page) {}

  async visit() {
    await this.page.goto("/");
  }

  async clickAddCat() {
    await this.page.getByText("Add Cat").click();
  }

  async ensureBasicFunctionality() {
    await expect(this.page.getByText("Cats World")).toBeDefined();
  }
}

export class CatDetailsPage {
  constructor(private readonly page: Page) {}

  async visit(catId: Cat["id"]) {
    await this.page.goto(`/cat/${catId}`);
  }

  async ensureBasicFunctionality() {
    await expect(this.page.getByText("Abyssinian")).toBeDefined();
  }
}

export class AddCatPage {
  constructor(private readonly page: Page) {}

  async confirmPageUrl() {
    await expect(this.page.url().search("new-cat")).toBeTruthy();
  }

  async confirmSubmitButtonVisible() {
    await expect(this.page.getByText("Submit")).toBeVisible();
  }

  async fillForm() {
    const newCat: NewCatFormState = {
      name: casual.name,
      description: casual.string,
    };

    await this.page.getByTestId("Name").fill(newCat.name);
    await this.page.getByTestId("Indoor").check();
    await this.page.getByTestId("Description").fill(newCat.description);

    await this.page.getByText("Submit").click();

    return newCat;
  }
}
