import React from "react";
import { gql } from "./__generated__/gql";

export const QUERY_CATS = gql(`
  query Cats {
    cats {
      id
      adaptability
      affection_level
      child_friendliness
      country_code
      description
      dog_friendliness
      energy_level
      experimental
      grooming
      hairless
      health_issues
      hypoallergenic
      indoor
      intelligence
      lap
      name
      natural
      origin
      rare
      rex
      shedding_level
      short_legs
      social_needs
      stranger_friendly
      suppressed_tail
      vocalisation
      wikipedia_url
      weight
      temperament
      life_span
    }
  }
`);

export const QUERY_CAT = gql(`
query Cat($catId: String!) {
  cat(id: $catId) {
    id
    adaptability
    affection_level
    child_friendliness
    country_code
    description
    dog_friendliness
    energy_level
    experimental
    grooming
    hairless
    health_issues
    hypoallergenic
    indoor
    intelligence
    lap
    name
    natural
    origin
    rare
    rex
    shedding_level
    short_legs
    social_needs
    stranger_friendly
    suppressed_tail
    vocalisation
    wikipedia_url
    weight
    temperament
    life_span
  }
}
`);

export const MUTATION_ADD_CAT = gql(`
mutation AddNewCat($newCat: NewCatInput) {
  add(newCat: $newCat) {
    id
    adaptability
    affection_level
    child_friendliness
    country_code
    description
    dog_friendliness
    energy_level
    experimental
    grooming
    hairless
    health_issues
    hypoallergenic
    indoor
    intelligence
    lap
    name
    natural
    origin
    rare
    rex
    shedding_level
    short_legs
    social_needs
    stranger_friendly
    suppressed_tail
    vocalisation
    wikipedia_url
    weight
    temperament
    life_span
  }
}
`);

export const CatList: React.FC = (props) => {};
