import {it, expect, describe, vi} from "vitest";
import {act, render, screen} from "@testing-library/react";
import {AddCatButton} from './add-cat-button'
import { GQLMockProvider } from "../../../testing/gql-mock-provider";
import {IMocks} from "@graphql-tools/mock";


describe("AddCatButton", () => {
  it("should render", () => {
    render(<GQLMockProvider><AddCatButton/></GQLMockProvider>);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should call the onClick prop when clicked", async () => {
    const mockResolvers: IMocks = {
      add: () => ({
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
      }),
      cats: () => ({
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
      })

    }
    // const mocks = [
    //   {
    //     request: {
    //       query: AddNewCatDocument,
    //       variables: {
    //         newCat: {
    //           name: "Thunder Cat",
    //           adaptability: 0,
    //           affection_level: 0,
    //           child_friendliness: 0,
    //           description: "",
    //           hypoallergenic: true,
    //           indoor: false,
    //           intelligence: 0,
    //           life_span: [],
    //           origin: "",
    //           shedding_level: 0,
    //           weight: []
    //         }
    //       }
    //     },
    //     result: {
    //       data: {
    //         add: {
    //           id: "478e1487-07b9-4135-851c-fef25525d307",
    //           name: "Thunder Cat",
    //           adaptability: 0,
    //           affection_level: 0,
    //           child_friendliness: 0,
    //           description: "",
    //           hypoallergenic: true,
    //           indoor: false,
    //           intelligence: 0,
    //           life_span: [],
    //           origin: "",
    //           shedding_level: 0,
    //           weight: []
    //         }
    //
    //       }
    //     }
    //   },
    //   {
    //     request: {
    //       query: CatsDocument,
    //       variables: {},
    //     },
    //     result: {
    //       data: {
    //         cats: [{
    //           id: "478e1487-07b9-4135-851c-fef25525d307",
    //           name: "Thunder Cat",
    //           adaptability: 0,
    //           affection_level: 0,
    //           child_friendliness: 0,
    //           description: "",
    //           hypoallergenic: true,
    //           indoor: false,
    //           intelligence: 0,
    //           life_span: [],
    //           origin: "",
    //           shedding_level: 0,
    //           weight: []
    //         }]
    //       }
    //     }
    //   }];
    render(<GQLMockProvider mockResolvers={mockResolvers}><AddCatButton
        newCat={{name: "fluffy"}}/></GQLMockProvider>);
    await act(() => {
      screen.getByText("Submit").click();
      expect(screen.getByText("Submit")).toBeInTheDocument();
    })
  })

});

