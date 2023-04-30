/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: 'Cat';
  adaptability?: Maybe<Scalars['Int']>;
  affection_level?: Maybe<Scalars['Int']>;
  child_friendliness?: Maybe<Scalars['Int']>;
  country_code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dog_friendliness?: Maybe<Scalars['Int']>;
  energy_level?: Maybe<Scalars['Int']>;
  experimental?: Maybe<Scalars['Boolean']>;
  grooming?: Maybe<Scalars['Int']>;
  hairless?: Maybe<Scalars['Boolean']>;
  health_issues?: Maybe<Scalars['Int']>;
  hypoallergenic?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  indoor?: Maybe<Scalars['Boolean']>;
  intelligence?: Maybe<Scalars['Int']>;
  lap?: Maybe<Scalars['Boolean']>;
  life_span?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  natural?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<Scalars['String']>;
  rare?: Maybe<Scalars['Boolean']>;
  rex?: Maybe<Scalars['Boolean']>;
  shedding_level?: Maybe<Scalars['Int']>;
  short_legs?: Maybe<Scalars['Boolean']>;
  social_needs?: Maybe<Scalars['Int']>;
  stranger_friendly?: Maybe<Scalars['Int']>;
  suppressed_tail?: Maybe<Scalars['Boolean']>;
  temperament?: Maybe<Array<Maybe<Scalars['String']>>>;
  vocalisation?: Maybe<Scalars['Int']>;
  weight?: Maybe<Array<Maybe<Scalars['Int']>>>;
  wikipedia_url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  add: Cat;
};


export type MutationAddArgs = {
  newCat?: InputMaybe<NewCatInput>;
};

export type NewCatInput = {
  adaptability?: InputMaybe<Scalars['Int']>;
  affection_level?: InputMaybe<Scalars['Int']>;
  child_friendliness?: InputMaybe<Scalars['Int']>;
  country_code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dog_friendliness?: InputMaybe<Scalars['Int']>;
  energy_level?: InputMaybe<Scalars['Int']>;
  experimental?: InputMaybe<Scalars['Boolean']>;
  grooming?: InputMaybe<Scalars['Int']>;
  hairless?: InputMaybe<Scalars['Boolean']>;
  health_issues?: InputMaybe<Scalars['Int']>;
  hypoallergenic?: InputMaybe<Scalars['Boolean']>;
  indoor?: InputMaybe<Scalars['Boolean']>;
  intelligence?: InputMaybe<Scalars['Int']>;
  lap?: InputMaybe<Scalars['Boolean']>;
  life_span?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  name?: InputMaybe<Scalars['String']>;
  natural?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<Scalars['String']>;
  rare?: InputMaybe<Scalars['Boolean']>;
  rex?: InputMaybe<Scalars['Boolean']>;
  shedding_level?: InputMaybe<Scalars['Int']>;
  short_legs?: InputMaybe<Scalars['Boolean']>;
  social_needs?: InputMaybe<Scalars['Int']>;
  stranger_friendly?: InputMaybe<Scalars['Int']>;
  suppressed_tail?: InputMaybe<Scalars['Boolean']>;
  temperament?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  vocalisation?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  wikipedia_url?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  cat: Cat;
  cats: Array<Cat>;
};


export type QueryCatArgs = {
  id: Scalars['String'];
};

export type CatsQueryVariables = Exact<{ [key: string]: never; }>;


export type CatsQuery = { __typename?: 'Query', cats: Array<{ __typename?: 'Cat', id: string, adaptability?: number | null, affection_level?: number | null, child_friendliness?: number | null, country_code?: string | null, description?: string | null, hypoallergenic?: boolean | null, indoor?: boolean | null, intelligence?: number | null, name?: string | null, origin?: string | null, shedding_level?: number | null, weight?: Array<number | null> | null, life_span?: Array<number | null> | null }> };

export type CatQueryVariables = Exact<{
  catId: Scalars['String'];
}>;


export type CatQuery = { __typename?: 'Query', cat: { __typename?: 'Cat', id: string, adaptability?: number | null, affection_level?: number | null, child_friendliness?: number | null, country_code?: string | null, description?: string | null, hypoallergenic?: boolean | null, indoor?: boolean | null, intelligence?: number | null, name?: string | null, origin?: string | null, shedding_level?: number | null, weight?: Array<number | null> | null, life_span?: Array<number | null> | null } };

export type AddNewCatMutationVariables = Exact<{
  newCat?: InputMaybe<NewCatInput>;
}>;


export type AddNewCatMutation = { __typename?: 'Mutation', add: { __typename?: 'Cat', id: string, adaptability?: number | null, affection_level?: number | null, child_friendliness?: number | null, country_code?: string | null, description?: string | null, hypoallergenic?: boolean | null, indoor?: boolean | null, intelligence?: number | null, name?: string | null, origin?: string | null, shedding_level?: number | null, weight?: Array<number | null> | null, life_span?: Array<number | null> | null } };


export const CatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adaptability"}},{"kind":"Field","name":{"kind":"Name","value":"affection_level"}},{"kind":"Field","name":{"kind":"Name","value":"child_friendliness"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hypoallergenic"}},{"kind":"Field","name":{"kind":"Name","value":"indoor"}},{"kind":"Field","name":{"kind":"Name","value":"intelligence"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"shedding_level"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"life_span"}}]}}]}}]} as unknown as DocumentNode<CatsQuery, CatsQueryVariables>;
export const CatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"catId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"catId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adaptability"}},{"kind":"Field","name":{"kind":"Name","value":"affection_level"}},{"kind":"Field","name":{"kind":"Name","value":"child_friendliness"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hypoallergenic"}},{"kind":"Field","name":{"kind":"Name","value":"indoor"}},{"kind":"Field","name":{"kind":"Name","value":"intelligence"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"shedding_level"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"life_span"}}]}}]}}]} as unknown as DocumentNode<CatQuery, CatQueryVariables>;
export const AddNewCatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNewCat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newCat"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NewCatInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newCat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newCat"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adaptability"}},{"kind":"Field","name":{"kind":"Name","value":"affection_level"}},{"kind":"Field","name":{"kind":"Name","value":"child_friendliness"}},{"kind":"Field","name":{"kind":"Name","value":"country_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hypoallergenic"}},{"kind":"Field","name":{"kind":"Name","value":"indoor"}},{"kind":"Field","name":{"kind":"Name","value":"intelligence"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"shedding_level"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"life_span"}}]}}]}}]} as unknown as DocumentNode<AddNewCatMutation, AddNewCatMutationVariables>;