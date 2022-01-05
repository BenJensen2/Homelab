const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const serverPort = process.env.PORT_SERVER;
const clientPort = process.env.PORT_CLIENT;
const cors = require("cors");

app.use(cookieParser());
// app.use(cors());
app.use(cors({ credentials: true, origin: `http://localhost:${clientPort}` }));

app.use(express.json());

database = require("./server/config/database");
routes = require("./server/config/routes")(app);

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
