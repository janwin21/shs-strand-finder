class StrandSubjectController {
  async create(req, res) {
    const { strandID, subjectID } = req.body;

    // RESPONSE
    res.json({ strandID, subjectID });
  }
}
