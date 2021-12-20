const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/CurrentMERNStructure", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to the MERN Database"))
  .catch((err) =>
    console.log("Something went wrong connecting with the database", err)
  );

// require("../models/User");