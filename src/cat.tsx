import React from "react";
import {useCatQuery, Cat} from "./__generated__/hooks";
import {
    Alert,
    Card,
    Checkbox,
    Loader,
    NumberInput,
    Stack,
    Textarea,
    TextInput
} from "@mantine/core"

const toNormalCase = (txt?: string) => {
        if(txt) {
                return txt[0].toUpperCase() + txt.substr(1, txt.length).toLowerCase();
            }
        return '';
    }

export const toDisplayLabel = (key: string) => {
    const [first, second] = key.split('_');
    
    if (!second) {
        return toNormalCase(first);
    }
    return `${toNormalCase(first)} ${toNormalCase(second)}`.trimEnd();
}

export const CatDetail: React.FC<{ id: Cat["id"] }> = (props) => {
    const {loading, data, error} = useCatQuery({
        variables: {catId: props.id},
    });
    if (loading) {
        return <Loader variant="dots"/>;
    }

    if (error || !data) {
        return (
            <Alert color={"red"}>
                Cat decided to not come to party...bad kitty
            </Alert>
        );
    }

    const nodes = []

    for (let [key, value] of Object.entries(data?.cat)) {
        if (key === '__typename') {
            continue;
        }
        nodes.push(
            <TextInput label={toDisplayLabel(key)} value={String(value)} readOnly/>)
    }

    return (
        <Card style={{width: "50%"}}>
            <Stack spacing="xs">
                <TextInput label="Id" value={data?.cat.id} disabled />
                <TextInput label="Name"
                           value={data?.cat.name ?? ''} disabled/>
                <Textarea
                    label="Description"
                    value={data?.cat.description ?? ""}
                    minRows={3}
                    disabled
                />
                <TextInput
                    label="Origin"
                    value={data?.cat.origin ?? ""}
                    disabled/>
                <TextInput
                    label="Weight"
                    description="(min, max kgs)"
                    value={data?.cat.weight?.length ? data?.cat.weight.join(",") : ""}
                    disabled
                />
                <TextInput
                    label="Lifespan"
                    value={data?.cat.life_span?.length ? data?.cat.life_span.join(",") : ""}
                    disabled
                />
                <NumberInput
                    label="Adaptability"
                    value={data?.cat.adaptability ?? 0}
                    disabled
                />
                <NumberInput
                    label="Affection Level"
                    value={data?.cat.affection_level ?? 0}
                    disabled
                />
                <NumberInput
                    label="Child Friendliness"
                    value={data?.cat.child_friendliness ?? 0}
                    disabled
                />
                <NumberInput
                    label="Intelligence"
                    value={data?.cat.intelligence ?? 0}
                    disabled
                />
                <NumberInput
                    label="Shedding Level"
                    value={data?.cat.shedding_level ?? 0}
                    disabled
                />
                <Checkbox
                    label="Hypoallergenic"
                    checked={data?.cat.hypoallergenic ?? false}
                    readOnly
                />
                <Checkbox
                    label="Indoor"
                    checked={data?.cat.indoor ?? false}
                    readOnly
                />
            </Stack>
        </Card>
    );
};
