import {it, expect, describe, vi} from "vitest";
import {act, render, screen} from "@testing-library/react";
import {AddCatButton} from './add-cat-button'
import {AddNewCatDocument, CatDocument, CatsDocument} from "../../../__generated__/hooks";
import {MockedProvider} from "@apollo/client/testing";


describe.skip("AddCatButton", () => {
  it("should render", () => {
    render(<MockedProvider><AddCatButton/></MockedProvider>);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should call the onClick prop when clicked", async () => {
    const mocks = [
      {
        request: {
          query: AddNewCatDocument,
          variables: {
            newCat: {
              name: "Thunder Cat",
              adaptability: 0,
              affection_level: 0,
              child_friendliness: 0,
              description: "",
              hypoallergenic: true,
              indoor: false,
              intelligence: 0,
              life_span: [],
              origin: "",
              shedding_level: 0,
              weight: []
            }
          }
        },
        result: {
          data: {
            add: {
              id: "478e1487-07b9-4135-851c-fef25525d307",
              name: "Thunder Cat",
              adaptability: 0,
              affection_level: 0,
              child_friendliness: 0,
              description: "",
              hypoallergenic: true,
              indoor: false,
              intelligence: 0,
              life_span: [],
              origin: "",
              shedding_level: 0,
              weight: []
            }

          }
        }
      },
      {
        request: {
          query: CatsDocument,
          variables: {},
        },
        result: {
          data: {
            cats: [{
              id: "478e1487-07b9-4135-851c-fef25525d307",
              name: "Thunder Cat",
              adaptability: 0,
              affection_level: 0,
              child_friendliness: 0,
              description: "",
              hypoallergenic: true,
              indoor: false,
              intelligence: 0,
              life_span: [],
              origin: "",
              shedding_level: 0,
              weight: []
            }]
          }
        }
      }];
    render(<MockedProvider mocks={mocks}><AddCatButton
        newCat={{name: "fluffy"}}/></MockedProvider>);
    await act(() => {
      screen.getByText("Submit").click();
      expect(screen.getByText("Submit")).toBeInTheDocument();
    })
  })

});

