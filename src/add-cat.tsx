import {
  Box,
  Button,
  Card,
  CircularProgress,
  Switch,
  Textarea,
  Typography,
} from "@mui/joy";
import { NewCatInput } from "./__generated__/graphql";
import {
  AddNewCatMutationVariables,
  useAddNewCatMutation,
} from "./__generated__/hooks";
import { QUERY_CATS } from "./gql-operations";
import { ChangeEventHandler, FC, useReducer } from "react";

const AddCatButton: React.FC<AddNewCatMutationVariables> = ({ newCat }) => {
  const [addNewCatMutation, { data, loading, error }] = useAddNewCatMutation({
    variables: {
      newCat,
    },
    awaitRefetchQueries: true,
  });
  if (loading) {
    return (
      <Button color="neutral" disabled>
        <CircularProgress />
      </Button>
    );
  }
  if (error) {
    <Button color="danger">Retry</Button>;
  }
  return (
    <Button
      color="primary"
      onClick={() =>
        addNewCatMutation({
          variables: {
            newCat,
          },
          refetchQueries: [
            { query: QUERY_CATS },
          ],
        })
      }
    >
      Submit
    </Button>
  );
};

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
    return csvStr.split(",");
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
        [payload.fieldName]: payload.value === "on" ? true : false,
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

export const AddCat: FC = () => {
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
  const handleTextChange: (
    fieldName: keyof NewCatFormState
  ) => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =
    (fieldName) => (event) => {
      dispatch({ fieldName, value: event.target.value });
    };
  return (
    <Card style={{ width: "50%" }}>
      <Typography level="h2">Add Cat</Typography>
      <Box style={{ paddingBottom: "12px" }}>
        <label style={{ paddingRight: "5px" }}>NAME</label>
        <br />
        <input
          type="text"
          onChange={handleTextChange("name")}
          value={name ?? ""}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>DESCRIPTION</label>
        <br />
        <Textarea
          minRows="3"
          value={description ?? ""}
          onChange={handleTextChange("description")}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>ORIGIN</label>
        <br />
        <input
          type="text"
          value={origin ?? ""}
          onChange={handleTextChange("origin")}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>ADAPTABILITY</label>
        <br />
        <input
          type="number"
          value={adaptability ?? 0}
          onChange={handleTextChange("adaptability")}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>AFFECTION LEVEL</label>
        <br />
        <input
          type="number"
          value={affection_level ?? 0}
          onChange={handleTextChange("affection_level")}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>CHILD FRIENDLINESS</label>
        <br />
        <input
          type="number"
          value={child_friendliness ?? 0}
          onChange={handleTextChange("child_friendliness")}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>HYPOALLERGENIC</label>
        <br />
        <input
          type="checkbox"
          checked={hypoallergenic ?? false}
          onChange={(event) =>
            dispatch({
              fieldName: "hypoallergenic",
              value: event.target.checked ? "on" : "off",
            })
          }
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>INDOOR</label>
        <br />
        {/* <Switch
          checked={indoor ?? false}
          onChange={(event) =>
            dispatch({
              fieldName: "indoor",
              value: event.target.checked ? "on" : "off",
            })
          }
        /> */}
        <input
          type="checkbox"
          checked={indoor ?? false}
          onChange={(event) =>
            dispatch({
              fieldName: "indoor",
              value: event.target.checked ? "on" : "off",
            })
          }
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>INTELLIGENCE</label>
        <br />
        <input
          type="number"
          value={intelligence ?? 0}
          onChange={handleTextChange("intelligence")}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>SHEDDING LEVEL</label>
        <br />
        <input
          type="number"
          value={shedding_level ?? 0}
          onChange={handleTextChange("shedding_level")}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>WEIGHT (min,max kgs)</label>
        <br />
        <input
          type="text"
          value={weight?.length ? weight.join(",") : ""}
          onChange={handleTextChange("weight")}
        />
      </Box>
      <Box style={{ paddingBottom: "12px" }}>
        <label>LIFE SPAN (min,max years) </label>
        <br />
        <input
          type="text"
          value={life_span?.length ? life_span.join(",") : ""}
          onChange={handleTextChange("life_span")}
        />
      </Box>
      <AddCatButton newCat={state} />
    </Card>
  );
};
