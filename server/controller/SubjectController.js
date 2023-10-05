class SubjectController {
  async create(req, res) {
    const { subjectTypeID, name, description, imagePath } = req.body;

    // RESPONSE
    res.json({ subjectTypeID, name, description, imagePath });
  }
}
