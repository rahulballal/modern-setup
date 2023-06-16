import { expect, Page } from "@playwright/test";
import { Cat } from "../src/__generated__/hooks";
import { NewCatFormState } from "../src/pages/add-cat/components/state-management/reducer";

export class CatListPage {
  constructor(private readonly page: Page) {}

  async visit() {
    await this.page.goto("/");
  }

  async clickAddCat() {
    await this.page.getByRole("button", { name: "Add Cat" }).click();
  }

  async ensureBasicFunctionality() {
    await expect(this.page.getByText("Cats World")).toBeDefined();
  }

  async assertGivenCatExists(catName: string) {
    await expect(this.page.getByRole('link', { name: catName })).toBeDefined();
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

  async submitForm() {
    await this.page.getByTestId("newcat").click();
  }

  async fillForm(formData: NewCatFormState) {
    await this.page.getByTestId("Name").click();
    await this.page.getByTestId("Name").fill(formData.name ?? "");

    await this.page.getByLabel("Origin").click();
    await this.page.getByLabel("Origin").fill(formData.origin ?? "USA");

    if (formData.adaptability) {
      await this.page.getByLabel("Adaptability").dblclick();
      await this.page.getByLabel("Adaptability").click();
      await this.page.getByLabel("Adaptability").fill("5");
    }
    if (formData.indoor) {
      await this.page.getByTestId("Indoor").check();
    }
    const [minLife, maxLife] = formData.life_span || [0,0];
    await this.page.getByLabel('Lifespan').click();
    await this.page.getByLabel('Lifespan').fill(`${minLife},${maxLife}`);
  }
}
