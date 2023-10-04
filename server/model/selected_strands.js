const mongoose = require("mongoose");

const selectedStrandSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const selected_strands = mongoose.model(
  "selected_strands",
  selectedStrandSchema
);

module.exports = selected_strands;
