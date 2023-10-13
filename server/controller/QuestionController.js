const Question = require("../model/questions");
const AnswerKey = require("../model/answer_keys");

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
    const answerKeys = await AnswerKey.find({}).populate("question").exec();

    // Create a mapping of group.no to their corresponding values
    const groupMap = new Map();
    const mappedQuestions = new Map();
    const newQuestions = [];

    answerKeys.forEach((answerKey) => {
      const questionID = answerKey.question._id.toString();
      const question = answerKey.question;

      if (!groupMap.has(questionID)) {
        groupMap.set(questionID, []);
        mappedQuestions.set(questionID, question);
      }

      groupMap.get(questionID).push({
        _id: answerKey._id,
        value: answerKey.value,
        imagePath: answerKey.imagePath,
        correct: answerKey.correct,
        createdAt: answerKey.createdAt,
        updatedAt: answerKey.updatedAt,
      });
    });

    // Convert the mapping into the desired format
    groupMap.forEach((values, questionID) => {
      newQuestions.push({
        ...mappedQuestions.get(questionID).toObject(),
        answerKeys: values,
      });
    });

    // RESPONSE
    res.json(newQuestions);
  }

  // READ BY ID
  async findById(req, res) {
    const { questionID } = req.params;

    // FIND SINGLE DATA
    const question = await Question.findById(questionID).exec();

    if (question) {
      const answerKeys = await AnswerKey.find({
        question: question._id,
      }).exec();

      // RESPONSE
      return res.json({ ...question.toObject(), answerKeys });
    }

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
