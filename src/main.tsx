import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "@fontsource/public-sans";
import { Route, Switch } from "wouter";
import { CatDetail } from "./cat";
import { AddCat } from "./add-cat";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: { fetchPolicy: "cache-first", errorPolicy: "all" },
    mutate: { errorPolicy: "all" },
  },
});

const AppWithRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={App} />
      <Route path="/cat/:id">
        {(params) => {
          return <CatDetail id={params.id || ''} />
        }}
      </Route>
        <Route path="/new-cat"><AddCat/></Route>
    </Switch>
  );
};

function ApplicationRoot() {
  return (
    <StrictMode>
      <ApolloProvider client={client}>
        <AppWithRoutes />
      </ApolloProvider>
    </StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApplicationRoot />
);
