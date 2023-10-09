const Subject = require("../model/subjects");

class SubjectController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
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

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const subjects = await Subject.find({}).exec();

    // RESPONSE
    res.json(subjects);
  }

  // READ BY ID
  async findById(req, res) {
    const { subjectID } = req.params;

    // FIND SINGLE DATA
    const subject = await Subject.findById(subjectID).exec();

    // RESPONSE
    res.json(subject);
  }

  // UPDATE
  async put(req, res) {
    const { subjectID } = req.params;
    const { subjectType, name, description, imagePath } = req.body;

    // FIND SINGLE DATA
    const subject = await Subject.findById(subjectID).exec();

    // UPDATE
    subject.subjectType = subjectType || subject.subjectType;
    subject.name = name || subject.name;
    subject.description = description || subject.description;
    subject.imagePath = imagePath || subject.imagePath;

    // SAVE
    await subject.save();

    // RESPONSE
    res.json(subject);
  }

  // DELETE
  async delete(req, res) {
    const { subjectID } = req.params;

    // DELETE SINGLE DATA
    const subject = await Subject.deleteOne({ _id: subjectID });

    // RESPONSE
    res.json(subject);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedSubject = await Subject.deleteMany({});

    // RESPONSE
    res.json(deletedSubject);
  }
}

module.exports = SubjectController;
