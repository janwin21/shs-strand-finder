class SelectedStrandController {
  async create(req, res) {
    const { userID, strandID } = req.body;

    // RESPONSE
    res.json({ userID, strandID });
  }
}
