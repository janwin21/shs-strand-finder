const SelectedPE = require("../model/selected_personal_engagements");

class SelectedPEController {
  async create(req, res) {
    const { user, pe, yes } = req.body;

    // INIT
    const newSelectedPE = new SelectedPE({ user, pe, yes });

    // SAVE
    newSelectedPE.save();

    // RESPONSE
    res.json({ user, pe, yes });
  }
}

module.exports = SelectedPEController;
