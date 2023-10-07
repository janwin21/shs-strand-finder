const SubjectType = require("../model/subject_types");

class SubjectTypeController {
  async create(req, res) {
    const { name } = req.body;

    // INIT
    const newSubjectType = new SubjectType({ name });

    // SAVE
    newSubjectType.save();

    // RESPONSE
    res.json({ name });
  }
}

module.exports = SubjectTypeController;
