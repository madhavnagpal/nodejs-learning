const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/msg", (req, res) => {
  res.send("<ul><li>Hey there</li></ul>");
});

app.listen(PORT, () => {
  console.log(`Listening ${PORT}...`);
});
