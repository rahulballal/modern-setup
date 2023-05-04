import { Center, Group, Title, Button, Header } from "@mantine/core";
import { Link, useLocation } from "wouter";

export default function AppHeader() {
  const [_, setLocation] = useLocation();
  return (
    <Header height={60} p={"xs"}>
      <Center>
        <Group>
          <Title>
            <Link href={"/"}>Cats World</Link>
          </Title>
          <Button variant={"default"} onClick={() => setLocation("/new-cat")}>
            Add Cat
          </Button>
        </Group>
      </Center>
    </Header>
  );
}
