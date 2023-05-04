import { AddCatButton } from "./components/add-cat-button";
import { AddCatForm } from "./components/add-cat-form";

export function AddCat() {
  return <AddCatForm AddButtonNode={AddCatButton} />
}