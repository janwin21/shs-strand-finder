class AnswerKeyController {
  async create(req, res) {
    const { question, value, imagePath, correct } = req.body;

    // RESPONSE
    res.json({ question, value, imagePath, correct });
  }
}

module.exports = AnswerKeyController;
