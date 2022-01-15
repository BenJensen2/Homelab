// Require and assign installed modules
const app = require('./web')
const database = require("./config/database");
require("dotenv").config();

// Load environmental variables
const serverPort = process.env.PORT_SERVER;

// Instance of Express Router
// Requires routes function and runs it with app as input parameter
routes = require("./config/routes")(app);

// Listen on the server port, test database connection and log port to console
app.listen(serverPort, () => {
  database.connectToClient();
  // console.log(`Backend running on ${serverPort}`);
});