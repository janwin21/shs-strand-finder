const StrandType = require("../model/strand_types");

class StrandTypeController {
  async create(req, res) {
    const { name } = req.body;

    // INIT
    const newStrandType = new StrandType({ name });

    // SAVE
    newStrandType.save();

    // RESPONSE
    res.json({ name });
  }
}

module.exports = StrandTypeController;
