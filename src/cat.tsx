import React from "react";
import {Cat} from "./__generated__/graphql";
import {useCatQuery} from "./__generated__/hooks";
import {Alert, Box, CircularProgress, Sheet, Stack, Typography} from "@mui/joy";
import {Link} from "wouter";

const toDisplayLabel = (key: string) => {
    const [first, second] = key.split('_');
    if (!second) {
        return first.toUpperCase();
    }
    return `${first.toUpperCase()} ${second.toUpperCase()}`
}

export const CatDetail: React.FC<{ id: Cat["id"] }> = (props) => {
    const {loading, data, error} = useCatQuery({
        variables: {catId: props.id},
    });
    if (loading) {
        return <CircularProgress/>;
    }

    if (error || !data) {
        return (
            <Alert color="danger" size="sm">
                Cat decided to not come to party...bad kitty
            </Alert>
        );
    }

    const nodes = []

    for (let [key, value] of Object.entries(data?.cat)) {
        if (key === '__typename') {
            continue;
        }
        nodes.push(<div style={{paddingBottom: '10px'}}>
            <Typography level="body2">{toDisplayLabel(key)}:</Typography>{String(value)}</div>)
    }

    return (<Sheet style={{paddingLeft: '20px'}}><Box>
        <Typography level="h2">Cat Detail</Typography>
        <Link href="/">Back to home</Link>
        <br/>
        <br/>
        <Stack>
            {nodes}
        </Stack>
    </Box></Sheet>)
};
