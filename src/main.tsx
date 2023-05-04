import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: { fetchPolicy: "cache-first", errorPolicy: "all" },
    mutate: { errorPolicy: "all" },
  },
});

const ApplicationRoot = () => (
  <StrictMode>
    <ApolloProvider client={client}>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <App />
      </MantineProvider>
    </ApolloProvider>
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApplicationRoot />
);
