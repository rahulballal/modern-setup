import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'
import React, {PropsWithChildren} from "react";
import {addMocksToSchema, IMocks} from "@graphql-tools/mock";
import {SchemaLink} from "@apollo/client/link/schema";
import {makeExecutableSchema} from "@graphql-tools/schema";


export const GQLMockProvider: React.FC<PropsWithChildren<{ mockResolvers?: IMocks }>> = (props) => {
  const schemaString = `
  type Cat {
  id: String!
  adaptability: Int
  affection_level: Int
  child_friendliness: Int
  country_code: String
  description: String
  dog_friendliness: Int
  energy_level: Int
  experimental: Boolean
  grooming: Int
  hairless: Boolean
  health_issues: Int
  hypoallergenic: Boolean
  indoor: Boolean
  intelligence: Int
  lap: Boolean
  name: String
  natural: Boolean
  origin: String
  rare: Boolean
  rex: Boolean
  shedding_level: Int
  short_legs: Boolean
  social_needs: Int
  stranger_friendly: Int
  suppressed_tail: Boolean
  vocalisation: Int
  wikipedia_url: String
  weight: [Int]
  temperament: [String]
  life_span: [Int]
}

input NewCatInput {
  adaptability: Int
  affection_level: Int
  child_friendliness: Int
  country_code: String
  description: String
  dog_friendliness: Int
  energy_level: Int
  experimental: Boolean
  grooming: Int
  hairless: Boolean
  health_issues: Int
  hypoallergenic: Boolean
  indoor: Boolean
  intelligence: Int
  lap: Boolean
  name: String
  natural: Boolean
  origin: String
  rare: Boolean
  rex: Boolean
  shedding_level: Int
  short_legs: Boolean
  social_needs: Int
  stranger_friendly: Int
  suppressed_tail: Boolean
  vocalisation: Int
  wikipedia_url: String
  weight: [Int]
  temperament: [String]
  life_span: [Int]
}

type Query {
  cats: [Cat!]!
  cat(id: String!): Cat!
}

type Mutation {
  add(newCat: NewCatInput): Cat!
}

  `
  const schema = makeExecutableSchema({typeDefs: schemaString})
  const schemaWithMocks = addMocksToSchema({ schema, mocks: props.mockResolvers })
  const testApolloClient = new ApolloClient({
    link: new SchemaLink({schema: schemaWithMocks}),
    cache: new InMemoryCache()
  })
  return <ApolloProvider client={testApolloClient}>{props.children}</ApolloProvider>
}