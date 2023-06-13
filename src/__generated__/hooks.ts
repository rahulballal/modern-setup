import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: "Cat";
  adaptability?: Maybe<Scalars["Int"]>;
  affection_level?: Maybe<Scalars["Int"]>;
  child_friendliness?: Maybe<Scalars["Int"]>;
  country_code?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  dog_friendliness?: Maybe<Scalars["Int"]>;
  energy_level?: Maybe<Scalars["Int"]>;
  experimental?: Maybe<Scalars["Boolean"]>;
  grooming?: Maybe<Scalars["Int"]>;
  hairless?: Maybe<Scalars["Boolean"]>;
  health_issues?: Maybe<Scalars["Int"]>;
  hypoallergenic?: Maybe<Scalars["Boolean"]>;
  id: Scalars["String"];
  indoor?: Maybe<Scalars["Boolean"]>;
  intelligence?: Maybe<Scalars["Int"]>;
  lap?: Maybe<Scalars["Boolean"]>;
  life_span?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  name?: Maybe<Scalars["String"]>;
  natural?: Maybe<Scalars["Boolean"]>;
  origin?: Maybe<Scalars["String"]>;
  rare?: Maybe<Scalars["Boolean"]>;
  rex?: Maybe<Scalars["Boolean"]>;
  shedding_level?: Maybe<Scalars["Int"]>;
  short_legs?: Maybe<Scalars["Boolean"]>;
  social_needs?: Maybe<Scalars["Int"]>;
  stranger_friendly?: Maybe<Scalars["Int"]>;
  suppressed_tail?: Maybe<Scalars["Boolean"]>;
  temperament?: Maybe<Array<Maybe<Scalars["String"]>>>;
  vocalisation?: Maybe<Scalars["Int"]>;
  weight?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  wikipedia_url?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  add: Cat;
};

export type MutationAddArgs = {
  newCat?: InputMaybe<NewCatInput>;
};

export type NewCatInput = {
  adaptability?: InputMaybe<Scalars["Int"]>;
  affection_level?: InputMaybe<Scalars["Int"]>;
  child_friendliness?: InputMaybe<Scalars["Int"]>;
  country_code?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dog_friendliness?: InputMaybe<Scalars["Int"]>;
  energy_level?: InputMaybe<Scalars["Int"]>;
  experimental?: InputMaybe<Scalars["Boolean"]>;
  grooming?: InputMaybe<Scalars["Int"]>;
  hairless?: InputMaybe<Scalars["Boolean"]>;
  health_issues?: InputMaybe<Scalars["Int"]>;
  hypoallergenic?: InputMaybe<Scalars["Boolean"]>;
  indoor?: InputMaybe<Scalars["Boolean"]>;
  intelligence?: InputMaybe<Scalars["Int"]>;
  lap?: InputMaybe<Scalars["Boolean"]>;
  life_span?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  natural?: InputMaybe<Scalars["Boolean"]>;
  origin?: InputMaybe<Scalars["String"]>;
  rare?: InputMaybe<Scalars["Boolean"]>;
  rex?: InputMaybe<Scalars["Boolean"]>;
  shedding_level?: InputMaybe<Scalars["Int"]>;
  short_legs?: InputMaybe<Scalars["Boolean"]>;
  social_needs?: InputMaybe<Scalars["Int"]>;
  stranger_friendly?: InputMaybe<Scalars["Int"]>;
  suppressed_tail?: InputMaybe<Scalars["Boolean"]>;
  temperament?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  vocalisation?: InputMaybe<Scalars["Int"]>;
  weight?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  wikipedia_url?: InputMaybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  cat: Cat;
  cats: Array<Cat>;
};

export type QueryCatArgs = {
  id: Scalars["String"];
};

export type CatsQueryVariables = Exact<{ [key: string]: never }>;

export type CatsQuery = {
  __typename?: "Query";
  cats: Array<{
    __typename?: "Cat";
    id: string;
    adaptability?: number | null;
    affection_level?: number | null;
    child_friendliness?: number | null;
    country_code?: string | null;
    description?: string | null;
    hypoallergenic?: boolean | null;
    indoor?: boolean | null;
    intelligence?: number | null;
    name?: string | null;
    origin?: string | null;
    shedding_level?: number | null;
    weight?: Array<number | null> | null;
    life_span?: Array<number | null> | null;
  }>;
};

export type CatQueryVariables = Exact<{
  catId: Scalars["String"];
}>;

export type CatQuery = {
  __typename?: "Query";
  cat: {
    __typename?: "Cat";
    id: string;
    adaptability?: number | null;
    affection_level?: number | null;
    child_friendliness?: number | null;
    country_code?: string | null;
    description?: string | null;
    hypoallergenic?: boolean | null;
    indoor?: boolean | null;
    intelligence?: number | null;
    name?: string | null;
    origin?: string | null;
    shedding_level?: number | null;
    weight?: Array<number | null> | null;
    life_span?: Array<number | null> | null;
  };
};

export type AddNewCatMutationVariables = Exact<{
  newCat?: InputMaybe<NewCatInput>;
}>;

export type AddNewCatMutation = {
  __typename?: "Mutation";
  add: {
    __typename?: "Cat";
    id: string;
    adaptability?: number | null;
    affection_level?: number | null;
    child_friendliness?: number | null;
    country_code?: string | null;
    description?: string | null;
    hypoallergenic?: boolean | null;
    indoor?: boolean | null;
    intelligence?: number | null;
    name?: string | null;
    origin?: string | null;
    shedding_level?: number | null;
    weight?: Array<number | null> | null;
    life_span?: Array<number | null> | null;
  };
};

export const CatsDocument = gql`
  query Cats {
    cats {
      id
      adaptability
      affection_level
      child_friendliness
      country_code
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

/**
 * __useCatsQuery__
 *
 * To run a query within a React component, call `useCatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCatsQuery(
  baseOptions?: Apollo.QueryHookOptions<CatsQuery, CatsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CatsQuery, CatsQueryVariables>(CatsDocument, options);
}
export function useCatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CatsQuery, CatsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CatsQuery, CatsQueryVariables>(
    CatsDocument,
    options
  );
}
export type CatsQueryHookResult = ReturnType<typeof useCatsQuery>;
export type CatsLazyQueryHookResult = ReturnType<typeof useCatsLazyQuery>;
export type CatsQueryResult = Apollo.QueryResult<CatsQuery, CatsQueryVariables>;
export const CatDocument = gql`
  query Cat($catId: String!) {
    cat(id: $catId) {
      id
      adaptability
      affection_level
      child_friendliness
      country_code
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

/**
 * __useCatQuery__
 *
 * To run a query within a React component, call `useCatQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatQuery({
 *   variables: {
 *      catId: // value for 'catId'
 *   },
 * });
 */
export function useCatQuery(
  baseOptions: Apollo.QueryHookOptions<CatQuery, CatQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CatQuery, CatQueryVariables>(CatDocument, options);
}
export function useCatLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CatQuery, CatQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CatQuery, CatQueryVariables>(CatDocument, options);
}
export type CatQueryHookResult = ReturnType<typeof useCatQuery>;
export type CatLazyQueryHookResult = ReturnType<typeof useCatLazyQuery>;
export type CatQueryResult = Apollo.QueryResult<CatQuery, CatQueryVariables>;
export const AddNewCatDocument = gql`
  mutation AddNewCat($newCat: NewCatInput) {
    add(newCat: $newCat) {
      id
      adaptability
      affection_level
      child_friendliness
      country_code
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
export type AddNewCatMutationFn = Apollo.MutationFunction<
  AddNewCatMutation,
  AddNewCatMutationVariables
>;

/**
 * __useAddNewCatMutation__
 *
 * To run a mutation, you first call `useAddNewCatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewCatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewCatMutation, { data, loading, error }] = useAddNewCatMutation({
 *   variables: {
 *      newCat: // value for 'newCat'
 *   },
 * });
 */
export function useAddNewCatMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddNewCatMutation,
    AddNewCatMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddNewCatMutation, AddNewCatMutationVariables>(
    AddNewCatDocument,
    options
  );
}
export type AddNewCatMutationHookResult = ReturnType<
  typeof useAddNewCatMutation
>;
export type AddNewCatMutationResult = Apollo.MutationResult<AddNewCatMutation>;
export type AddNewCatMutationOptions = Apollo.BaseMutationOptions<
  AddNewCatMutation,
  AddNewCatMutationVariables
>;
