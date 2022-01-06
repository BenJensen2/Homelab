// Require and assign installed modules
const cookieParser = require("cookie-parser");
const cors = require("cors");
const database = require("./config/database");
require("dotenv").config();

// Require & assign express functionality
const web = require("./express")
const app = web.app
const express = web.express

// Load environmental variables
const serverPort = process.env.PORT_SERVER;
const clientPort = process.env.PORT_CLIENT;

// Use within Express middleware
app.use(cookieParser());
app.use(cors({ credentials: true, origin: `http://localhost:${clientPort}` }));
app.use(express.json());

// Instance of Express Router
// Requires routes function and runs it with app as input parameter
routes = require("./config/routes")(app);

// Listen on the server port, test database connection and log port to console
app.listen(serverPort, () => {
  database.connectToClient();
  // console.log(`Backend running on ${serverPort}`);
});

// Simple Test
app.get("/server", (req, res) => {
  res.send("Hello from the Server!");
});

// Environmental Variable Test
app.get("/env", (req, res) => {
  let test_secret_key = process.env.TEST_SECRET_KEY;
  res.send(`This is the: ${test_secret_key}`);
});

// Cookie Test
// Production: Only send over HTTPS
app.get("/cookie", (req, res) => {
  res.cookie("my test cookie", "cookie data", { httpOnly: true }).json({
    message: "This response has a cookie",
  });
});

// Testing Exports
module.exports = {clientPort};