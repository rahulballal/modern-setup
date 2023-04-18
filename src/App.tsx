import { Sheet, Typography } from "@mui/joy";
import { CatList } from "./cat-list";

function App() {
  return (
    <Sheet sx={{ p: 4 }} color="neutral">
      <Typography variant="outlined" level="h1">
        Cat List
      </Typography>
      <CatList />
    </Sheet>
  );
}

export default App;
