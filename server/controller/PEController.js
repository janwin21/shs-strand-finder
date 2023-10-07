const PE = require("../model/personal_engagements");

class PEController {
  async create(req, res) {
    const { strand, question } = req.body;

    // INIT
    const newPE = newPE({ strand, question });

    // SAVE
    newPE.save();

    // RESPONSE
    res.json({ strand, question });
  }
}

module.exports = PEController;
