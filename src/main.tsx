import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {AppShell, Button, Center, Group, Header, MantineProvider, Title} from '@mantine/core'
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import App from "./App";
import {Link, Route, Switch, useLocation} from "wouter";
import {CatDetail} from "./cat";
import {AddCat} from "./add-cat";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {fetchPolicy: "cache-first", errorPolicy: "all"},
        mutate: {errorPolicy: "all"},
    },
});

const AppWithRoutes = () => {
    const [loc, setLocation] = useLocation()

    const AppHeader = <Header height={60} p={"xs"}>
        <Center>
            <Group>
                <Title><Link href={"/"}>Cats World</Link></Title>
                <Button variant={"default"} onClick={() => setLocation('/new-cat')}>
                    Add Cat
                </Button>
            </Group>
        </Center>
    </Header>
    return (
        <MantineProvider theme={{colorScheme: "light"}}>
            <AppShell padding={"md"} header={AppHeader} sx={{minWidth: "80%"}}>
                <Center>
                    <Switch>
                        <Route path="/" component={App}/>
                        <Route path="/cat/:id">
                            {(params) => {
                                return <CatDetail id={params.id || ''}/>
                            }}
                        </Route>
                        <Route path="/new-cat"><AddCat/></Route>
                    </Switch>

                </Center>
            </AppShell>
        </MantineProvider>

    );
};

function ApplicationRoot() {
    return (
        <StrictMode>
            <ApolloProvider client={client}>
                <MantineProvider withNormalizeCSS withGlobalStyles>
                    <AppWithRoutes/>
                </MantineProvider>
            </ApolloProvider>
        </StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ApplicationRoot/>
);
