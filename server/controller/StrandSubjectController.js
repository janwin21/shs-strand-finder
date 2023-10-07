const StrandSubject = require("../model/strand_subjects");

class StrandSubjectController {
  async create(req, res) {
    const { strand, subject } = req.body;

    // INIT
    const newStrandSubject = new StrandSubject({ strand, subject });

    // SAVE
    newStrandSubject.save();

    // RESPONSE
    res.json({ strand, subject });
  }
}

module.exports = StrandSubjectController;
