const data = require("./cats.json");
const { randomUUID } = require("crypto");

async function main() {
  const itemsWithId = data.map((item) => {
    return Object.assign({}, { id: String(randomUUID()) }, item);
  });
  console.info("Total items", data.length);
  console.info("Transformed items", itemsWithId.length);

  console.log(JSON.stringify(itemsWithId, null, 2));
}

main()
  .then(() => console.info("Done"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
