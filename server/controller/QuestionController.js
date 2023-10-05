class QuestionController {
  async create(req, res) {
    const { subjectID, question, questionImagePath } = req.body;

    // RESPONSE
    res.json({ subjectID, question, questionImagePath });
  }
}
