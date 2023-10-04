const mongoose = require("mongoose");

const blocklistTokenSchema = new mongoose.Schema({
  accessToken: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const blocklistTokens = mongoose.model("blocklistTokens", blocklistTokenSchema);

module.exports = blocklistTokens;
