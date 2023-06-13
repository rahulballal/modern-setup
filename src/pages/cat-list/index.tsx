import type { FC } from "react";
import type { Cat } from "../../__generated__/hooks";
import { useCatsQuery } from "../../__generated__/hooks";
import { CatListItem } from "./components/cat-list-item";
import { Loader, Alert, Stack } from "@mantine/core";

export const CatList: FC = () => {
  const { data, loading, error } = useCatsQuery();

  if (loading) {
    return <Loader variant={"dots"} />;
  }

  if (error || !data) {
    return (
      <Alert color={"red"}>
        Cats decided to not come to party...bad kitties
      </Alert>
    );
  }

  if (data.cats.length === 0) {
    return <Alert color="blue">No cats returned!!!! Meeaaaaooowwww</Alert>;
  }

  const items = data.cats.map((cat: Cat) => (
    <CatListItem {...cat} key={cat.id} />
  ));

  return <Stack>{items}</Stack>;
};
