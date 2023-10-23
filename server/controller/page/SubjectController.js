// MODEL
const SubjectType = require("../../model/subject_types");
const Subject = require("../../model/subjects");

// LODASH
const _ = require("lodash");

class SubjectController {
  // GET ALL STRAND TYPES
  async readAll(req, res) {
    // Find all SubjectType documents
    const subjectTypes = await SubjectType.find({}).exec();
    const subjects = await Subject.find({}).exec();

    const mappedSubjects = subjects.map((subject) => {
      return {
        ...subject.toObject(),
        subjectType: subject.subjectType.toString(),
      };
    });

    // Populate the 'subjects' field for each SubjectType
    const resultSubjectTypes = subjectTypes.map((subjectType) => {
      return {
        id: subjectType._id.toString(),
        name: subjectType.name,
        subjects: _.filter(
          mappedSubjects,
          (mappedSubject) =>
            mappedSubject.subjectType === subjectType._id.toString()
        ),
      };
    });

    res.json({
      user: req.user,
      subjectTypes: resultSubjectTypes,
      selectedStrand: req.selectedStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
    });
  }
}

module.exports = SubjectController;
