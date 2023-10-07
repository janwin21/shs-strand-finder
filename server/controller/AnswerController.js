const Answer = require("../model/answers");

class AnswerController {
  async create(req, res) {
    const { user, answerKey, correct, noOfUnVisit } = req.body;

    // INIT
    const newAnswer = new Answer({ user, answerKey, correct, noOfUnVisit });

    // SAVE
    newAnswer.save();

    // RESPONSE
    res.json({ user, answerKey, correct, noOfUnVisit });
  }
}

module.exports = AnswerController;
