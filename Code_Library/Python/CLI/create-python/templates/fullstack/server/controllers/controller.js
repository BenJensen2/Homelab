// Require ande assign Database
const currentDatabase = require("../config/database");

// This will convert the id from a string to a Mongodb ObjectId
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  // Index for testing
  index: (req, res) => {
    console.log("Index");
    res.send("Index");
  },

  // Read a single document by Id
  read: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    // Collection name passed through url /:type/
    let collectionName = req.params.type + "s";
    // Document id passed through url /:id/
    let query = { _id: ObjectId(req.params.id) };
    connectedDatabase
      .collection(collectionName)
      .findOne(query, function (err, dbResponse) {
        if (err) throw err;
        res.json(dbResponse);
      });
  },

  // Read all documents in a specific collection
  readAll: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    // Collection name passed through url /:type/
    let collectionName = req.params.type + "s";
    connectedDatabase
      .collection(collectionName)
      .find({})
      .toArray(function (err, dbResponse) {
        if (err) throw err;
        res.json(dbResponse);
      });
  },

  // Create a single document in a specific collection
  create: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    // Collection name passed through url /:type/
    let collectionName = req.params.type + "s";
    connectedDatabase
      .collection(collectionName)
      .insertOne(req.body, function (err, dbResponse) {
        if (err) throw err;
        res.json(dbResponse);
      });
  },

  // Update a single document in a specific collection
  update: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    // Collection name passed through url /:type/
    let collectionName = req.params.type + "s";
    // Document id passed through url /:id/
    let query = { _id: ObjectId(req.params.id) };
    let updatedValues = { $set: req.body };
    connectedDatabase
      .collection(collectionName)
      .updateOne(query, updatedValues, function (err, dbResponse) {
        if (err) throw err;
        console.log("1 document updated");
        res.json(dbResponse);
      });
  },

  delete: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    // Collection name passed through url /:type/
    let collectionName = req.params.type + "s";
    // Document id passed through url /:id/
    let query = { _id: ObjectId(req.params.id) };
    connectedDatabase
      .collection(collectionName)
      .deleteOne(query, function (err, dbResponse) {
        if (err) throw err;
        console.log("1 document deleted");
        res.json(dbResponse);
      });
  },
};
