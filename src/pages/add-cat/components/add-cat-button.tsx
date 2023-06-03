import { Button, Loader } from "@mantine/core";
import { FC } from "react";
import {
  AddNewCatMutationVariables,
  useAddNewCatMutation,
  CatsDocument,
} from "../../../__generated__/hooks";

export const AddCatButton: FC<AddNewCatMutationVariables> = ({ newCat }) => {
  const [addNewCatMutation, { error, loading, data }] = useAddNewCatMutation({
    awaitRefetchQueries: true,
  });
  const handleClick = () =>
    addNewCatMutation({
      variables: {
        newCat,
      },
      refetchQueries: [{ query: CatsDocument }],
    });
  if (loading) {
    return (
      <Button>
        <Loader variant="dots" data-testid="saving-cat" />
      </Button>
    );
  }
  if (data) {
    return (
      <>
        <Button onClick={handleClick} data-testid="save-completed">
          Submit
        </Button>
        <p>Saved!!!</p>
      </>
    );
  }
  if (error) {
    return (
      <Button onClick={handleClick} data-testid="retry-cat-save">
        Retry
      </Button>
    );
  }
  return <Button onClick={handleClick} data-testid="newcat">Submit</Button>;
};

export type AddCatButtonType = typeof AddCatButton;
