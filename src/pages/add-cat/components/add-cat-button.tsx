import { Button, Loader } from "@mantine/core";
import { FC } from "react";
import { AddNewCatMutationVariables, useAddNewCatMutation } from "../../../__generated__/hooks";
import { QUERY_CATS } from "../../../gql-operations";

export const AddCatButton: FC<AddNewCatMutationVariables> = ({ newCat }) => {
    const [addNewCatMutation, { error, loading }] = useAddNewCatMutation({
      awaitRefetchQueries: true,
    });
    const handleClick = () =>
      addNewCatMutation({
        variables: {
          newCat,
        },
        refetchQueries: [{ query: QUERY_CATS }],
      });
    if (loading) {
      return (
        <Button>
          <Loader variant="dots" />
        </Button>
      );
    }
    if (error) {
      return <Button onClick={handleClick}>Retry</Button>;
    }
    return <Button onClick={handleClick}>Submit</Button>;
  };

  export type AddCatButtonType = typeof AddCatButton
