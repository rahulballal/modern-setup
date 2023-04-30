import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { randomUUID } from "node:crypto";

// File path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "data.json");

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
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

`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    cats: () => db.data,
    cat: (_parent, { id }) => {
      console.info("received cat id", id);
      const found = db.data.find((item) => item.id === id);
      if (!found) {
        throw new Error(`Invalid cat ID received ${id}`);
      }
      console.info("Found", found);
      return found;
    },
  },
  Mutation: {
    add: async (_parent, { newCat }) => {
      const cat = Object.assign({}, { id: randomUUID() }, newCat);
      db.data.push(cat);
      await db.write().catch((err) => console.error(err));
      return cat;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
