// Require and assign installed modules
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// Load environmental variables
const clientPort = process.env.PORT_CLIENT;

// Use within Express middleware
app.use(cookieParser());
app.use(cors({ credentials: true, origin: `http://localhost:${clientPort}` }));
app.use(express.json());

// Simple Test
app.get("/server", (req, res) => {
  res.status(200).send("Hello from the Server!");
});

// Environmental Variable Test
app.get("/env", (req, res) => {
  let test_secret_key = process.env.TEST_SECRET_KEY;
  res.status(200).send(`This is the: ${test_secret_key}`);
});

// Cookie Test
// Production: Only send over HTTPS
app.get("/cookie", (req, res) => {
  res.status(200).cookie("my test cookie", "cookie data", { httpOnly: true }).json({
    message: "This response has a cookie",
  });
});

// Testing Exports
module.exports = app;