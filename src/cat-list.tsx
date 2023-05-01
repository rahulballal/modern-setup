import type {FC} from "react";
import type {Cat} from "./__generated__/hooks"
import {useCatsQuery} from "./__generated__/hooks";
import {Link} from "wouter";
import {Loader, Alert, Box, Badge, Text, Stack, Card, Title} from "@mantine/core";

const CatCard: FC<Cat> = (props) => {
    const {name, life_span, origin, indoor} = props;
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
                <Text size={"sm"}>Developed in {origin} <br/> {lifesspanText}</Text>
            </Stack>
        </Card>

    );
};

export const CatList: FC = () => {
    const {data, loading, error} = useCatsQuery();

    if (loading) {
        return <Loader variant={"dots"}/>;
    }

    if (error || !data) {
        return (
            <Alert color={"red"}>
                Cats decided to not come to party...bad kitties
            </Alert>
        );
    }

    const items = data.cats.map((cat: Cat) => (
        <CatCard {...cat} key={cat.id} />
    ));

    return <Stack>{items}</Stack>;
};
