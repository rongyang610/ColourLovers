const express = require("express");
const fetch = require("node-fetch");
const app = express(),
  port = 8080;

app.get("/api", async (req, res) => {
  await fetch("http://www.colourlovers.com/api/palettes/new?format=json", {
    headers: { "User-Agent": "something" },
  })
    .then((response) => response.json())
    .then((response) => res.json(response));
});

app.get("/", (req, res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
