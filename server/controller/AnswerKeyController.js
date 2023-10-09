const AnswerKey = require("../model/answer_keys");

class AnswerKeyController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { question, value, imagePath, correct } = req.body;

    // INIT
    const newAnswerKey = new AnswerKey({ question, value, imagePath, correct });

    // SAVE
    newAnswerKey.save();

    // RESPONSE
    res.json({ question, value, imagePath, correct });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const answerKeys = await AnswerKey.find({}).exec();

    // RESPONSE
    res.json(answerKeys);
  }

  // READ BY ID
  async findById(req, res) {
    const { answerKeyID } = req.params;

    // FIND SINGLE DATA
    const answerKey = await AnswerKey.findById(answerKeyID).exec();

    // RESPONSE
    res.json(answerKey);
  }

  // UPDATE
  async put(req, res) {
    const { answerKeyID } = req.params;
    const { question, value, imagePath, correct } = req.body;

    // FIND SINGLE DATA
    const answerKey = await AnswerKey.findById(answerKeyID).exec();

    // UPDATE
    answerKey.question = question || answerKey.question;
    answerKey.value = value || answerKey.value;
    answerKey.imagePath = imagePath || answerKey.imagePath;
    answerKey.correct = correct != null ? correct : answerKey.correct;

    // SAVE
    await answerKey.save();

    // RESPONSE
    res.json(answerKey);
  }

  // DELETE
  async delete(req, res) {
    const { answerKeyID } = req.params;

    // DELETE SINGLE DATA
    const answerKey = await AnswerKey.deleteOne({ _id: answerKeyID });

    // RESPONSE
    res.json(answerKey);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedAnswerKey = await AnswerKey.deleteMany({});

    // RESPONSE
    res.json(deletedAnswerKey);
  }
}

module.exports = AnswerKeyController;
