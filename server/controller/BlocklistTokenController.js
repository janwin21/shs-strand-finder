class BlocklistTokenController {
  async create(req, res) {
    const { accessToken } = req.body;

    // RESPONSE
    res.json({ accessToken });
  }
}
