const mongoose = require("mongoose");
const Item = mongoose.model("Model");

module.exports = {
  getAllItems: (req, res) => {
    Item.find().then((items) => {
      console.log("looking for all models");
      res.json(items);
    });
  },

  createItem: (req, res) => {
    Item.create(req.body)
      .then((item) => {
        console.log("Creating Model", item);
      })
      .then(() =>{
        console.log("Model Created")
        res.send("Model Created!")
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Item.findByIdAndDelete
  // Item.findById
};
