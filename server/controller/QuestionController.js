const Question = require("../model/questions");

class QuestionController {
  async create(req, res) {
    const { subject, question, questionImagePath } = req.body;

    // INIT
    const newQuestion = new Question({ subject, question, questionImagePath });

    // SAVE
    newQuestion.save();

    // RESPONSE
    res.json({ subject, question, questionImagePath });
  }
}

module.exports = QuestionController;
