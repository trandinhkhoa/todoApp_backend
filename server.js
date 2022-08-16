const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.send("HELLO WORLD");
})

const router = require("./router");
router.route(app);

const PORT = 3000;
app.listen(PORT, ()=> {
  console.log("server is running at", PORT);
});