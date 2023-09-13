const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("<h1>hello 1st</h1>");
});

app.listen(port, () => {
  console.log("app is running on port", port);
});
