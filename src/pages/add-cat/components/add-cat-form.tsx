import {
  Card,
  Textarea,
  Title,
  TextInput,
  Stack,
  NumberInput,
  Checkbox,
} from "@mantine/core";
import {ChangeEvent, FC, useReducer} from "react";
import {AddCatButtonType} from "./add-cat-button";
import {defaultState, NewCatFormState, newCatReducer, useNewCatReducer} from "./state-management/reducer";


export const AddCatForm: FC<{ AddButtonNode: AddCatButtonType }> = (props) => {
  const [state, dispatch] = useNewCatReducer();
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
      <Card style={{width: "50%"}}>
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
                  dispatch({fieldName: "adaptability", value: val.toString()})
              }
          />
          <NumberInput
              label="Affection Level"
              value={affection_level ?? 0}
              onChange={(val) =>
                  dispatch({fieldName: "affection_level", value: val.toString()})
              }
          />
          <NumberInput
              label="Child Friendliness"
              value={child_friendliness ?? 0}
              onChange={(val) =>
                  dispatch({fieldName: "child_friendliness", value: val.toString()})
              }
          />
          <NumberInput
              label="Intelligence"
              value={intelligence ?? 0}
              onChange={(val) =>
                  dispatch({fieldName: "intelligence", value: val.toString()})
              }
          />
          <NumberInput
              label="Shedding Level"
              value={shedding_level ?? 0}
              onChange={(val) =>
                  dispatch({fieldName: "shedding_level", value: val.toString()})
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
                dispatch({fieldName: "indoor", value: evt.currentTarget.value});
              }}
          />
        </Stack>
        <props.AddButtonNode newCat={state}/>
      </Card>
  );
};
