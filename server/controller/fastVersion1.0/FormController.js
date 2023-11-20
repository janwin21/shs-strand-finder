const SubjectType = require("../../model/subject_types");
const Strand = require("../../model/strands");

class SubjectController {
  // FAST
  async findAll(req, res) {
    const strandTypes = await SubjectType.find({}).exec();
    const strands = await Strand.find({}).exec();

    res.json({
      strandTypes,
      strands,
    });
  }
}

module.exports = SubjectController;
