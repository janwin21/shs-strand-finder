const subjectTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const subject_types = mongoose.model("subject_types", subjectTypeSchema);

module.exports = subject_types;
