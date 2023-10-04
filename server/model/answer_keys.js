const mongoose = require("mongoose");

const answeyKeySchema = new mongoose.Schema({
  value: { type: String, required: true },
  imagePath: { type: String },
  correct: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const answer_keys = mongoose.model("answer_keys", answeyKeySchema);

module.exports = answer_keys;
