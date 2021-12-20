const express = require("express"); // Fast minimal web framework
const pino = require('pino'); // Very low overhead js logger
const expressPino = require('express-pino-logger'); // Express middleware to log with pino
                                                    // Also works without express

// console.log("Hello")
// console.log(process.env.LOG_LEVEL || 'info')
const logger = pino({level: process.env.LOG_LEVEL || 'info'});
const expressLogger = expressPino({ logger });

const randomId = require('./random-id'); // Random ID generator with debug()

const PORT = process.env.PORT || 3000;
const app = express();

// Middelware
app.use(expressLogger)

// Middleware
// app.use((req, res, next) => {
//   console.log("%s", req);
//   next();
// });

// GET Request
app.get("/", (req, res) => {
  logger.debug('Calling res.send');
  const id = randomId.getRandomId();
  res.send(`Hello World [${id}]`);
  // res.send("Hello from the server!");
});

// Listening for connections on PORT
app.listen(PORT, () => {
  logger.info("Server running on port %d", PORT);
});
