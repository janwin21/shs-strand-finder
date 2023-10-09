const Strand = require("../model/strands");

class StrandController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
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

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const strands = await Strand.find({}).exec();

    // RESPONSE
    res.json(strands);
  }

  // READ BY ID
  async findById(req, res) {
    const { strandID } = req.params;

    // FIND SINGLE DATA
    const strand = await Strand.findById(strandID).exec();

    // RESPONSE
    res.json(strand);
  }

  // UPDATE
  async put(req, res) {
    const { strandID } = req.params;
    const { strandType, name, description, imagePath } = req.body;

    // FIND SINGLE DATA
    const strand = await Strand.findById(strandID).exec();

    // UPDATE
    strand.strandType = strandType || strand.strandType;
    strand.name = name || strand.name;
    strand.description = description || strand.description;
    strand.imagePath = imagePath || strand.imagePath;

    // SAVE
    await strand.save();

    // RESPONSE
    res.json(strand);
  }

  // DELETE
  async delete(req, res) {
    const { strandID } = req.params;

    // DELETE SINGLE DATA
    const strand = await Strand.deleteOne({ _id: strandID });

    // RESPONSE
    res.json(strand);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedStrand = await Strand.deleteMany({});

    // RESPONSE
    res.json(deletedStrand);
  }
}

module.exports = StrandController;
