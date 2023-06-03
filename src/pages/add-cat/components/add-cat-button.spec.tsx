import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AddCatButton } from "./add-cat-button";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";
import { AddNewCatDocument, CatsDocument } from "../../../__generated__/hooks";

test("should render", () => {
  render(
    <MockedProvider>
      <AddCatButton newCat={{ name: "Fluffkins" }} />
    </MockedProvider>
  );
  expect(screen.getByText("Submit")).toBeInTheDocument();
});

test("creates new cat and refetches all cats to refresh the cache", async () => {
  const mocks = [
    {
      request: {
        query: CatsDocument,
        variables: {},
      },
      result: {
        data: {
          cats: [
            {
              id: "3a46150a-6dad-4a6e-8a67-44fd36ab0bb7",
              adaptability: 5,
              affection_level: 5,
              child_friendliness: 3,
              country_code: "EG",
              description:
                "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
              hypoallergenic: false,
              indoor: false,
              intelligence: 5,
              name: "Abyssinian",
              origin: "Egypt",
              shedding_level: 2,
              weight: [3, 5],
              life_span: [14, 15],
            },
          ],
        },
      },
    },
    {
      request: {
        query: AddNewCatDocument,
        variables: {
          newCat: {
            name: "fluffkins",
            adaptability: 0,
            affection_level: 0,
            child_friendliness: 0,
            description: "",
            hypoallergenic: false,
            indoor: false,
            intelligence: 0,
            life_span: [],
            origin: "",
            shedding_level: 0,
            weight: [],
          },
        },
      },
      result: {
        data: {
          add: {
            id: "97650f32-b791-45d3-a252-b74867647500",
            adaptability: 0,
            affection_level: 0,
            child_friendliness: 0,
            country_code: null,
            description: "",
            hypoallergenic: false,
            indoor: false,
            intelligence: 0,
            name: "fluffkins",
            origin: "",
            shedding_level: 0,
            weight: [],
            life_span: [],
          },
        },
      },
    },
  ];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AddCatButton
        newCat={{
          name: "fluffkins",
          adaptability: 0,
          affection_level: 0,
          child_friendliness: 0,
          description: "",
          hypoallergenic: false,
          indoor: false,
          intelligence: 0,
          life_span: [],
          origin: "",
          shedding_level: 0,
          weight: [],
        }}
      />
    </MockedProvider>
  );
  const catbutton = await screen.findByTestId("newcat");
  userEvent.click(catbutton);

  expect(await screen.findByTestId("saving-cat")).toBeInTheDocument();
  expect(await screen.findByTestId("save-completed")).toBeInTheDocument();
});
