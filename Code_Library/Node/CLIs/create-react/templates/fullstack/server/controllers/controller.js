// Require ande assign Database
const currentDatabase = require("../config/database");

// This will convert the id from a string to a Mongodb ObjectId
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  index: (req, res) => {
    console.log("Index");
    res.send("Index");
  },

  read: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    let collectionName = req.params.type + "s";
    let query = { _id: ObjectId(req.params.id) };
    connectedDatabase
      .collection(collectionName)
      .findOne(query, function (err, dbResponse) {
        if (err) throw err;
        res.json(dbResponse);
      });
  },
  readAll: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    let collectionName = req.params.type + "s";
    connectedDatabase
      .collection(collectionName)
      .find({})
      .toArray(function (err, dbResponse) {
        if (err) throw err;
        res.json(dbResponse);
      });
  },

  create: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    let collectionName = req.params.type + "s";
    connectedDatabase
      .collection(collectionName)
      .insertOne(req.body, function (err, dbResponse) {
        if (err) throw err;
        res.json(dbResponse);
      });
  },

  update: (req, res) => {
    let connectedDatabase = currentDatabase.getDatabase();
    let collectionName = req.params.type + "s";
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
    let collectionName = req.params.type + "s";
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
