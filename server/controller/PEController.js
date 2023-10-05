class PEController {
  async create(req, res) {
    const { strandID, question } = req.body;

    // RESPONSE
    res.json({ strandID, question });
  }
}
