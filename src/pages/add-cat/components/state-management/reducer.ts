import { NewCatInput } from "../../../../__generated__/hooks";
import { useReducer } from "react";

export type NewCatFormState = Pick<
  NewCatInput,
  | "name"
  | "description"
  | "origin"
  | "adaptability"
  | "affection_level"
  | "child_friendliness"
  | "hypoallergenic"
  | "indoor"
  | "intelligence"
  | "shedding_level"
  | "weight"
  | "life_span"
>;

export const defaultState: NewCatFormState = {
  name: "",
  adaptability: 0,
  affection_level: 0,
  child_friendliness: 0,
  description: "",
  hypoallergenic: false,
  indoor: false,
  intelligence: 0,
  life_span: [],
  origin: "",
  shedding_level: 0,
  weight: [],
};
export const csvToArray = (csvStr?: string) => {
  if (csvStr) {
    if (csvStr.length === 0) {
      return [];
    }
    return csvStr
      .split(",")
      .map((value) => Number.parseInt(value))
      .filter(Boolean);
  }
  return [];
};

export type NewCatAction = { fieldName: keyof NewCatFormState; value: string };

export const newCatReducer = (
  currentState: NewCatFormState,
  payload: NewCatAction
): NewCatFormState => {
  let nextState = currentState;
  switch (payload.fieldName) {
    case "name":
    case "description":
    case "origin":
      nextState = { ...currentState, [payload.fieldName]: payload.value };

      break;

    case "affection_level":
    case "child_friendliness":
    case "intelligence":
    case "shedding_level":
    case "adaptability":
      nextState = {
        ...currentState,
        [payload.fieldName]: Number(payload.value),
      };

      break;

    case "hypoallergenic":
    case "indoor":
      nextState = {
        ...currentState,
        [payload.fieldName]: payload.value === "on",
      };

      break;

    case "weight":
    case "life_span":
      nextState = {
        ...currentState,
        [payload.fieldName]: csvToArray(payload.value),
      };
      break;

    default:
      break;
  }
  // console.info({ payload, currentState, nextState });
  return nextState;
};

export function useNewCatReducer() {
  return useReducer(newCatReducer, defaultState);
}
