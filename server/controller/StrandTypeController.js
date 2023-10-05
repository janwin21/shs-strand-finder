class StrandTypeController {
  async create(req, res) {
    const { name } = req.body;

    // RESPONSE
    res.json({ name });
  }
}
