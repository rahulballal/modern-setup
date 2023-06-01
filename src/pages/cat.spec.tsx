import {CatDetail} from "./cat";
import {MockedProvider} from "@apollo/client/testing";
import {render, screen} from "@testing-library/react";
import {CatDocument} from "../__generated__/hooks";
import {GraphQLError} from "graphql/error";

describe("CatDetail", () => {
  it("should render after handling loading state", async () => {
    const mockedResponse = [
      {
        request: {
          query: CatDocument,
          variables: {catId: "1"}
        },
        delay: 500, // this is important to wait for the loading state
        result: {
          data: {
            cat: {
              id: "1",
              adaptability: 5,
              affection_level: 5,
              child_friendliness: 5,
              description: "description",
              hypoallergenic: true,
              indoor: true,
              intelligence: 5,
              name: "FurElise",
              origin: "Azerbaijan",
              shedding_level: 4,
              weight: [12, 15],
              life_span: [5, 9],
              country_code: 'AB'
            }
          }
        }
      }
    ];
    render(
        <MockedProvider mocks={mockedResponse} addTypename={false}>
          <CatDetail id={"1"}/>
        </MockedProvider>
    )
    expect(await screen.findByTestId("loader")).toBeInTheDocument();
    expect(await screen.findByText("Id")).toBeInTheDocument();
  });

  it("should render after handling error state", async () => {
    const mockedResponse = [
      {
        request: {
          query: CatDocument,
          variables: {catId: "1"}
        },
        result: {
          data: null,
          errors:[new GraphQLError("busted")]
        }
      }
    ];
    render(
        <MockedProvider mocks={mockedResponse} addTypename={false}>
          <CatDetail id={"1"}/>
        </MockedProvider>
    )
    expect(await screen.findByTestId("error")).toBeInTheDocument();
  })
});
