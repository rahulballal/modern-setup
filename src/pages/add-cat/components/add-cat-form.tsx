import {
  Card,
  Textarea,
  Title,
  TextInput,
  Stack,
  NumberInput,
  Checkbox,
} from "@mantine/core";
import { ChangeEvent, FC, PropsWithChildren, useReducer } from "react";
import { NewCatInput } from "../../../__generated__/hooks";
import { AddCatButtonType } from "./add-cat-button";

type NewCatFormState = Pick<
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

const defaultState: NewCatFormState = {
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

const csvToArray = (csvStr?: string) => {
  if (csvStr) {
    if (csvStr.length === 0) {
      return [];
    }
    return csvStr.split(",").map((value) => Number.parseInt(value));
  }
  return [];
};

const newCatReducer = (
  currentState: NewCatFormState,
  payload: { fieldName: keyof NewCatFormState; value: string }
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
  console.info({ payload, currentState, nextState });
  return nextState;
};

export const AddCatForm: FC<{ AddButtonNode: AddCatButtonType }> = ({
  AddButtonNode,
}) => {
  const [state, dispatch] = useReducer(newCatReducer, defaultState);
  const {
    name,
    description,
    origin,
    adaptability,
    affection_level,
    child_friendliness,
    hypoallergenic,
    indoor,
    intelligence,
    shedding_level,
    weight,
    life_span,
  } = state;
  const handleChange =
    (fieldName: keyof NewCatFormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      dispatch({
        fieldName,
        value: e.currentTarget.value,
      });
  return (
    <Card style={{ width: "50%" }}>
      <Title order={2}>Add Cat</Title>
      <Stack spacing="xs">
        <TextInput
          label="Name"
          onChange={handleChange("name")}
          value={name ?? ""}
        />
        <Textarea
          label="Description"
          value={description ?? ""}
          minRows={3}
          onChange={handleChange("description")}
        />
        <TextInput
          label="Origin"
          value={origin ?? ""}
          onChange={handleChange("origin")}
        />
        <TextInput
          label="Weight"
          description="(min, max kgs)"
          value={weight?.length ? weight.join(",") : ""}
          onChange={handleChange("weight")}
        />
        <TextInput
          label="Lifespan"
          value={life_span?.length ? life_span.join(",") : ""}
          onBlur={handleChange("life_span")}
        />
        <NumberInput
          label="Adaptability"
          value={adaptability ?? 0}
          onChange={(val) =>
            dispatch({ fieldName: "adaptability", value: val.toString() })
          }
        />
        <NumberInput
          label="Affection Level"
          value={affection_level ?? 0}
          onChange={(val) =>
            dispatch({ fieldName: "affection_level", value: val.toString() })
          }
        />
        <NumberInput
          label="Child Friendliness"
          value={child_friendliness ?? 0}
          onChange={(val) =>
            dispatch({ fieldName: "child_friendliness", value: val.toString() })
          }
        />
        <NumberInput
          label="Intelligence"
          value={intelligence ?? 0}
          onChange={(val) =>
            dispatch({ fieldName: "intelligence", value: val.toString() })
          }
        />
        <NumberInput
          label="Shedding Level"
          value={shedding_level ?? 0}
          onChange={(val) =>
            dispatch({ fieldName: "shedding_level", value: val.toString() })
          }
        />
        <Checkbox
          label="Hypoallergenic"
          checked={hypoallergenic ?? false}
          onChange={(evt) => {
            dispatch({
              fieldName: "hypoallergenic",
              value: evt.currentTarget.value,
            });
          }}
        />
        <Checkbox
          label="Indoor"
          checked={indoor ?? false}
          onChange={(evt) => {
            dispatch({ fieldName: "indoor", value: evt.currentTarget.value });
          }}
        />
      </Stack>
      <AddButtonNode newCat={state} />
    </Card>
  );
};
