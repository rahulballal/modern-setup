import { CatDetail } from "./cat";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { CatDocument } from "../__generated__/hooks";
import { GraphQLError } from "graphql/error";

test("should render after handling loading state", async () => {
  render(
    <MockedProvider
      mocks={[
        {
          request: {
            query: CatDocument,
            variables: {
              catId: "eda58439-4ade-4ce3-9e71-d8fd269dec30",
            },
          },
          delay: 500,
          result: {
            data: {
              cat: {
                id: "eda58439-4ade-4ce3-9e71-d8fd269dec30",
                adaptability: 5,
                affection_level: 4,
                child_friendliness: 4,
                country_code: "GR",
                description:
                  "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
                hypoallergenic: false,
                indoor: false,
                intelligence: 3,
                name: "Aegean",
                origin: "Greece",
                shedding_level: 3,
                weight: [3, 5],
                life_span: [9, 12],
                __typename: "Cat",
              },
            },
          },
        },
      ]}
      addTypename={false}
    >
      <CatDetail id={"eda58439-4ade-4ce3-9e71-d8fd269dec30"} />
    </MockedProvider>
  );
  expect(await screen.findByTestId("loader")).toBeInTheDocument();
  expect(await screen.findByTestId("cat-detail")).toBeInTheDocument();
});

test("should render after handling error state", async () => {
  const mocks = [
    {
      request: {
        query: CatDocument,
        variables: {
          catId: "eda58439-4ade-4ce3-9e71-d8fd269dec30",
        },
      },
      delay: 500,
      error: new GraphQLError("Something unexpected happened"),
    },
  ];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CatDetail id={"eda58439-4ade-4ce3-9e71-d8fd269dec30"} />
    </MockedProvider>
  );
  expect(await screen.findByTestId("loader")).toBeInTheDocument();
  expect(await screen.findByTestId("error")).toBeInTheDocument();
});
