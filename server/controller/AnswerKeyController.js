class AnswerKeyController {
  async create(req, res) {
    const { questionID, value, imagePath, correct } = req.body;

    // RESPONSE
    res.json({ questionID, value, imagePath, correct });
  }
}
