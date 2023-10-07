const Strand = require("../model/strands");

class StrandController {
  async create(req, res) {
    const { strandType, name, description, imagePath } = req.body;

    // INIT
    const newStrand = new Strand({
      strandType,
      name,
      description,
      imagePath,
    });

    // SAVE
    newStrand.save();

    // RESPONSE
    res.json({ strandType, name, description, imagePath });
  }
}

module.exports = StrandController;
