const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.send("HELLO WORLD");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running at", PORT);
});

async function run() {
  const database = require("./database");
  try {
    let url = await database.connectToDB();
    console.log("Connected to DB at ", url );
  } catch (error) {
    console.log("Failed to connect to DB at ", error);
    process.exit();
  }

  const router = require("./router");
  router.route(app);
}

run();