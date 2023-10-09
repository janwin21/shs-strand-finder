const Question = require("../model/questions");

class QuestionController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { subject, question, questionImagePath } = req.body;

    // INIT
    const newQuestion = new Question({ subject, question, questionImagePath });

    // SAVE
    newQuestion.save();

    // RESPONSE
    res.json({ subject, question, questionImagePath });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const questions = await Question.find({}).exec();

    // RESPONSE
    res.json(questions);
  }

  // READ BY ID
  async findById(req, res) {
    const { questionID } = req.params;

    // FIND SINGLE DATA
    const question = await Question.findById(questionID).exec();

    // RESPONSE
    res.json(question);
  }

  // UPDATE
  async put(req, res) {
    const { questionID } = req.params;
    const { subject, question, questionImagePath } = req.body;

    // FIND SINGLE DATA
    const cQuestion = await Question.findById(questionID).exec();

    // UPDATE
    cQuestion.subject = subject || cQuestion.subject;
    cQuestion.question = question || cQuestion.question;
    cQuestion.questionImagePath =
      questionImagePath || cQuestion.questionImagePath;

    // SAVE
    await cQuestion.save();

    // RESPONSE
    res.json(cQuestion);
  }

  // DELETE
  async delete(req, res) {
    const { questionID } = req.params;

    // DELETE SINGLE DATA
    const cQuestion = await Question.deleteOne({ _id: questionID });

    // RESPONSE
    res.json(cQuestion);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedQuestion = await Question.deleteMany({});

    // RESPONSE
    res.json(deletedQuestion);
  }
}

module.exports = QuestionController;
