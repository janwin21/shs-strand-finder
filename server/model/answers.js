const mongoose = require("mongoose");

const strandSchema = new mongoose.Schema({
  correct: { type: Boolean, required: true },
  noOfUnvisit: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const strands = mongoose.model("strands", strandSchema);

module.exports = strands;
