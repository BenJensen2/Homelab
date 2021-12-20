const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/Homelab", {
  })
  .then(() => console.log("Connected to the Homelab Database"))
  .catch((err) =>
    console.log("Something went wrong connecting with the database", err)
  );

// require("../models/User");