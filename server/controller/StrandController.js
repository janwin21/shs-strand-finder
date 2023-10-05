class StrandController {
  async create(req, res) {
    const { strandTypeID, name, description, imagePath } = req.body;

    // RESPONSE
    res.json({ strandTypeID, name, description, imagePath });
  }
}
