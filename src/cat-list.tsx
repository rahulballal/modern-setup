import { FC } from "react";
import { useCatsQuery, Cat } from "./__generated__/hooks";
import {
  ListItem,
  List,
  CircularProgress,
  Alert,
  ListDivider,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/joy";

const CatCard: FC<Cat> = (props) => {
  const { name, life_span, origin, indoor } = props;
  const minLifeSpan = life_span?.at(0);
  const maxLifeSpan = life_span?.at(life_span?.length - 1);
  const indoorOutdoorNode =
    indoor === true ? (
      <Box>
        <Chip color="info" size="sm">
          Indoor
        </Chip>
      </Box>
    ) : (
      <Box>
        <Chip color="warning" size="sm">
          Outdoor
        </Chip>
      </Box>
    );
  return (
    <Card sx={{ width: "500px" }}>
      <CardContent>
        {indoorOutdoorNode}
        <Typography level="h2">{name}</Typography>
        <Typography level="h6">Developed in {origin}</Typography>
        <Typography level="body">{`Life Span is ${minLifeSpan ?? ""} to ${
          maxLifeSpan ?? ""
        } years`}</Typography>
      </CardContent>
    </Card>
  );
};

export const CatList: FC = () => {
  const { data, loading, error } = useCatsQuery();

  if (loading) {
    return <CircularProgress />;
  }

  if (error || !data) {
    return (
      <Alert color="danger" size="sm">
        Cats decided to not come to party...bad kitties
      </Alert>
    );
  }

  const items = data.cats.map((cat: Cat) => (
    <ListItem key={cat.id}>
      <CatCard {...cat} />
    </ListItem>
  ));

  return <List>{items}</List>;
};
