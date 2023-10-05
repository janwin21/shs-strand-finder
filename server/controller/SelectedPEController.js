class SelectedPEController {
  async create(req, res) {
    const { userID, peID, yes } = req.body;

    // RESPONSE
    res.json({ userID, peID, yes });
  }
}
