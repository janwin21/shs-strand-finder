class UserController {
  async create(req, res) {
    const { email, password, isAdmin } = req.body;

    // RESPONSE
    res.json({ email, password, isAdmin });
  }
}
