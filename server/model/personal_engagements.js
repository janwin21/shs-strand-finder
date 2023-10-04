const mongoose = require("mongoose");

const personalEngagementSchema = new mongoose.Schema({
  question: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const selected_personal_engagements = mongoose.model(
  "selected_personal_engagements",
  personalEngagementSchema
);

module.exports = selected_personal_engagements;
