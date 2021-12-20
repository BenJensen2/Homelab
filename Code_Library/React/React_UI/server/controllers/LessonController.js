// const mongoose = require("mongoose");

module.exports = {
  index: (req, res) => {
    console.log("Lesson Index");
    res.json({
      message: "Hello Lessons",
    });
  },
};
