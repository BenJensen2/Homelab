const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/Fundamentals", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to Fundamentals Database"))
  .catch((err) =>
    console.log("Something went wrong connecting with the database", err)
  );

require("../models/Lesson");
