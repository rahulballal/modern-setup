import {CatDetail} from "./cat";
import {MockedProvider} from "@apollo/client/testing";
import {render} from "@testing-library/react";
import {CatDocument} from "../__generated__/hooks";

describe("CatDetail", () => {
  it("should render", () => {
    let mockedResponse = [
      {
        request: {
          query: CatDocument,
          variables: {catId: "1"}
        },

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
  });
});
