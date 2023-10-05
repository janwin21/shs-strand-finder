class AnswerController {
  async create(req, res) {
    const { userID, questionID, correct, noOfUnVisit } = req.body;

    // RESPONSE
    res.json({ userID, questionID, correct, noOfUnVisit });
  }
}
