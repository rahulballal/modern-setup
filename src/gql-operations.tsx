import { gql } from "@apollo/client";

export const QUERY_CATS = gql`
  query Cats {
    cats {
      id
      adaptability
      affection_level
      child_friendliness
      description
      hypoallergenic
      indoor
      intelligence
      name
      origin
      shedding_level
      weight
      life_span
    }
  }
`;

export const QUERY_CAT = gql`
  query Cat($catId: String!) {
    cat(id: $catId) {
      id
      adaptability
      affection_level
      child_friendliness
      description
      hypoallergenic
      indoor
      intelligence
      name
      origin
      shedding_level
      weight
      life_span
    }
  }
`;

export const MUTATION_ADD_CAT = gql`
  mutation AddNewCat($newCat: NewCatInput) {
    add(newCat: $newCat) {
      id
      adaptability
      affection_level
      child_friendliness
      description
      hypoallergenic
      indoor
      intelligence
      name
      origin
      shedding_level
      weight
      life_span
    }
  }
`;
