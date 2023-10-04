const mongoose = require("mongoose");

const strandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const strands = mongoose.model("strands", strandSchema);

module.exports = strands;
