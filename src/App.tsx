import { Sheet, Typography } from "@mui/joy";
import { CatList } from "./cat-list";
import {Link} from "wouter";

function App() {
  return (
    <Sheet sx={{ p: 4 }} color="neutral">
      <Typography variant="outlined" level="h1">
        Cat List
      </Typography>
        <Link href="/new-cat">Add</Link>
      <CatList />
    </Sheet>
  );
}

export default App;
