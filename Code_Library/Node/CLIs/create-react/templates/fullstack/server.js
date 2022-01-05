// Require and assign installed modules
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// Load environmental variables
const serverPort = process.env.PORT_SERVER;
const clientPort = process.env.PORT_CLIENT;

// Use within Express middleware
app.use(cookieParser());
app.use(cors({ credentials: true, origin: `http://localhost:${clientPort}` }));
app.use(express.json());

// Runs mongoose.connect with a Model
database = require("./server/config/database");

// Instance of Express Router
// Requires routes function and runs it with app as input parameter
routes = require("./server/config/routes")(app);

// Listen on the server port and log to console
app.listen(serverPort, () => {
	console.log(`Backend running on ${serverPort}`);
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
