const User = require("../../../model/users");

class AdminController {
  // auth
  async auth(req, res) {
    const users = await User.find({}, { password: 0 });
    res.json({ users });
  }
}

module.exports = AdminController;
