const Answer = require("../model/answers");

class AnswerController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { user, answerKey, correct, noOfUnVisit } = req.body;

    // INIT
    const newAnswer = new Answer({ user, answerKey, correct, noOfUnVisit });

    // SAVE
    newAnswer.save();

    // RESPONSE
    res.json({ user, answerKey, correct, noOfUnVisit });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const answers = await Answer.find({}).exec();

    // RESPONSE
    res.json(answers);
  }

  // READ BY ID
  async findById(req, res) {
    const { answerID } = req.params;

    // FIND SINGLE DATA
    const answer = await Answer.findById(answerID).exec();

    // RESPONSE
    res.json(answer);
  }

  // UPDATE
  async put(req, res) {
    const { answerID } = req.params;
    const { user, answerKey, correct, noOfUnVisit } = req.body;

    // FIND SINGLE DATA
    const answer = await Answer.findById(answerID).exec();

    // UPDATE
    answer.user = user || answer.user;
    answer.answerKey = answerKey || answer.answerKey;
    answer.correct = correct != null ? correct : answer.correct;
    answer.noOfUnVisit = noOfUnVisit || answer.noOfUnVisit;

    // SAVE
    await answer.save();

    // RESPONSE
    res.json(answer);
  }

  // DELETE
  async delete(req, res) {
    const { answerID } = req.params;

    // DELETE SINGLE DATA
    const answer = await Answer.deleteOne({ _id: answerID });

    // RESPONSE
    res.json(answer);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedAnswer = await Answer.deleteMany({});

    // RESPONSE
    res.json(deletedAnswer);
  }
}

module.exports = AnswerController;
