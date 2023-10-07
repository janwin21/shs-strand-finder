const User = require("../model/users");

class UserController {
  async create(req, res) {
    const { email, password, isAdmin } = req.body;

    // INIT
    const newUser = new User({ email, password, isAdmin });

    // SAVE
    newUser.save();

    // RESPONSE
    res.json({ message: "USER SUCCESSFULLY SAVED!", email, password, isAdmin });
  }
}

module.exports = UserController;
