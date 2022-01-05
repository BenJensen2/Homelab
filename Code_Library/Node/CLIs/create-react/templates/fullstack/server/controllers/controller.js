// Require ande assign Database
const currentDatabase = require("../config/database");

module.exports = {
  index: (request, response) => {
    console.log("Index");
    response.send("Index");
  },
  getAll: (request, response) => {
    let connectedDatabase = currentDatabase.getDatabase();
    let collectionName = request.params.type + "s";
    console.log(collectionName)
    connectedDatabase
      .collection("models")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        response.json(result);
      });
  },

  create: (request, response) => {
    let connectedDatabase = currentDatabase.getDatabase();
    let collectionName = request.params.type + "s";
    connectedDatabase
      .collection(collectionName)
      .insertOne(request.body, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
  },
};
