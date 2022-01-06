// Require and assign express
const express = require("express");
const app = express();

// Test url
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = {
  app: app,
  express: express,
};
