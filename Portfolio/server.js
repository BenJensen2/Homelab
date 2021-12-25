const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require('path');

// Specifics
const port = 8000;


// Express Use
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
// Static Files
app.use(express.static(path.join(__dirname,'static')));
app.get('/calendar', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/calendar.html'));
});

// Database & Routes
database = require("./server/config/database");
routes = require("./server/config/routes")(app);

// Initial Listen
app.listen(port, () => {
	console.log(`App running on ${port}`);
});

// Server Test
app.get("/server", (req, res) => {
	res.send("Hello from the Server!");
});

// Environmental Variable Test
app.get("/env", (req, res) => {
	let test_secret_key = process.env.TEST_SECRET_KEY;
	res.send(`This is the: ${test_secret_key}`);
});

// Cookie Test, Production: Only send over HTTPS
app.get("/cookie", (req, res) => {
	res.cookie("my test cookie", "cookie data", { httpOnly: true }).json({
		message: "This response has a cookie",
	});
});