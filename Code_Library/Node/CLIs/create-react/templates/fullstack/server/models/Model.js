const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
  label: {
    type: String,
    required: [true, "Label is required"],
  },
  type: {
    type: String,
    required: [true, "Type is required"],
  },
  source: {
    type: String,
    required: [true, "Source is required"],
  },
  references: {
    type: mongoose.Schema.Types.Mixed,
  },
});

mongoose.model("Model",ModelSchema);