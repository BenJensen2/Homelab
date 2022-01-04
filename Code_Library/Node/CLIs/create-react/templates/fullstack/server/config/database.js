const mongoose = require("mongoose");
let databaseName = process.env.DATABASE_NAME


mongoose
  .connect(`mongodb://localhost/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connected to the ${databaseName} Database`))
  .catch((err) =>
    console.log(`Something went wrong connecting with the ${databaseName} database`, err)
  );

require("../models/Model");