const Subject = require("../model/subjects");

class SubjectController {
  async create(req, res) {
    const { subjectType, name, description, imagePath } = req.body;

    // INIT
    const newSubject = new Subject({
      subjectType,
      name,
      description,
      imagePath,
    });

    // SAVE
    newSubject.save();

    // RESPONSE
    res.json({ subjectType, name, description, imagePath });
  }
}

module.exports = SubjectController;
