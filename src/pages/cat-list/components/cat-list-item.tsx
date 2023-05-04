import { Box, Badge, Card, Stack, Title, Text } from "@mantine/core";
import { FC } from "react";
import { Link } from "wouter";
import { Cat } from "../../../__generated__/hooks";

export const CatListItem: FC<Cat> = (props) => {
  const { name, life_span, origin, indoor } = props;
  const minLifeSpan = life_span?.at(0);
  const maxLifeSpan = life_span?.at(life_span?.length - 1);
  const indoorOutdoorNode =
    indoor === true ? (
      <Box>
        <Badge size={"sm"} color={"grape"}>
          Indoor
        </Badge>
      </Box>
    ) : (
      <Box>
        <Badge size={"sm"} color={"indigo"}>
          Outdoor
        </Badge>
      </Box>
    );
  const lifesspanText = `Life Span is ${minLifeSpan ?? ""} to ${
    maxLifeSpan ?? ""
  } years`;
  return (
    <Card key={props.id} withBorder>
      <Stack spacing="xs">
        {indoorOutdoorNode}

        <Title order={3}>
          <Link href={`/cat/${props.id}`}>{name}</Link>
        </Title>
        <Text size={"sm"}>
          Developed in {origin} <br /> {lifesspanText}
        </Text>
      </Stack>
    </Card>
  );
};
