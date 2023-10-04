const strandTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const strand_types = mongoose.model("strand_types", strandTypeSchema);

module.exports = strand_types;