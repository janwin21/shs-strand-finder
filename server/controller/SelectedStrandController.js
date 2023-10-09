const SelectedStrand = require("../model/selected_strands");

class SelectedStrandController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { user, strand } = req.body;

    // INIT
    const newSelectedStrand = new SelectedStrand({ user, strand });

    // SAVE
    newSelectedStrand.save();

    // RESPONSE
    res.json({ user, strand });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const selectedStrands = await SelectedStrand.find({}).exec();

    // RESPONSE
    res.json(selectedStrands);
  }

  // READ BY ID
  async findById(req, res) {
    const { selectedStrandID } = req.params;

    // FIND SINGLE DATA
    const selectedStrand = await SelectedStrand.findById(
      selectedStrandID
    ).exec();

    // RESPONSE
    res.json(selectedStrand);
  }

  // UPDATE
  async put(req, res) {
    const { selectedStrandID } = req.params;
    const { user, strand } = req.body;

    // FIND SINGLE DATA
    const selectedStrand = await SelectedStrand.findById(
      selectedStrandID
    ).exec();

    // UPDATE
    selectedStrand.user = user || selectedStrand.user;
    selectedStrand.strand = strand || selectedStrand.strand;

    // SAVE
    await selectedStrand.save();

    // RESPONSE
    res.json(selectedStrand);
  }

  // DELETE
  async delete(req, res) {
    const { selectedStrandID } = req.params;

    // DELETE SINGLE DATA
    const selectedStrand = await SelectedStrand.deleteOne({
      _id: selectedStrandID,
    });

    // RESPONSE
    res.json(selectedStrand);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedSelectedStrand = await SelectedStrand.deleteMany({});

    // RESPONSE
    res.json(deletedSelectedStrand);
  }
}

module.exports = SelectedStrandController;
