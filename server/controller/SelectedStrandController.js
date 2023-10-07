const SelectedStrand = require("../model/selected_strands");

class SelectedStrandController {
  async create(req, res) {
    const { user, strand } = req.body;

    // INIT
    const newSelectedStrand = new SelectedStrand({ user, strand });

    // SAVE
    newSelectedStrand.save();

    // RESPONSE
    res.json({ user, strand });
  }
}

module.exports = SelectedStrandController;
