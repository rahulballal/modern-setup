import {
  Center,
  MantineProvider,
  AppShell,
} from "@mantine/core";
import { Switch, Route } from "wouter";
import { AddCat } from "./pages/add-cat";
import { CatDetail } from "./pages/cat";
import { CatList } from "./pages/cat-list";
import AppHeader from "./components/header";

const AppWithRoutes = () => {
  return (
    <MantineProvider theme={{ colorScheme: "light" }}>
      <AppShell padding={"md"} header={<AppHeader />}>
        <Center>
          <Switch>
            <Route path="/" component={CatList} />
            <Route path="/cat/:id">
              {(params) => {
                return <CatDetail id={params.id || ""} />;
              }}
            </Route>
            <Route path="/new-cat">
              <AddCat />
            </Route>
          </Switch>
        </Center>
      </AppShell>
    </MantineProvider>
  );
};

export default AppWithRoutes;
