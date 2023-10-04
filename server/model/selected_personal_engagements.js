const mongoose = require("mongoose");

const selectedPESchema = new mongoose.Schema({
  yes: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const selected_personal_engagements = mongoose.model(
  "selected_personal_engagements",
  selectedPESchema
);

module.exports = selected_personal_engagements;
