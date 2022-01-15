// Require and assign installed modules
const { MongoClient } = require("mongodb");
require("dotenv").config();

// Initialize database connection as global for use elsewhere
var connectedDatabase;

// Load environmental variables
const databaseName = process.env.DATABASE_NAME;

// Create a new MongoClient;
const client = new MongoClient(`mongodb://localhost`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  // Initial Connection to the client: To be used upon startup
  connectToClient: function () {
    client.connect(function (err, db) {
      if (db) {
        // Check to see if the connection is good
        // Assign for use in other functions
        connectedDatabase = db.db(`${databaseName}`);
        // console.log(`Connected to the ${databaseName} Database`);
      }
      // Error handling
      if (err) {
        console.log(
          `Something went wrong connecting with the ${databaseName} database`
        );
        console.log(err);
      }
    });
  },

  getDatabase: function () {
    return connectedDatabase;
  },
};
