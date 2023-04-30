import { FC } from "react";
import { useCatsQuery, Cat } from "./__generated__/hooks";
import {
  ListItem,
  List,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/joy";
import { Link } from "wouter";

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
  const lifesspanText = `Life Span is ${minLifeSpan ?? ""} to ${
    maxLifeSpan ?? ""
  } years`;
  return (
    <Card sx={{ width: "500px" }}>
      <CardContent>
        {indoorOutdoorNode}
        <Typography level="h2">
          <Link href={`/cat/${props.id}`}>{name}</Link>
        </Typography>
        <Typography level="h6">Developed in {origin}</Typography>
        <Typography level="body1">
          <p>{lifesspanText}</p>
        </Typography>
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
