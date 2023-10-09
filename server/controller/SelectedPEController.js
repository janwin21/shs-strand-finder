const SelectedPE = require("../model/selected_personal_engagements");

class SelectedPEController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { user, pe, yes } = req.body;

    // INIT
    const newSelectedPE = new SelectedPE({ user, pe, yes });

    // SAVE
    newSelectedPE.save();

    // RESPONSE
    res.json({ user, pe, yes });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const selectedPEs = await SelectedPE.find({}).exec();

    // RESPONSE
    res.json(selectedPEs);
  }

  // READ BY ID
  async findById(req, res) {
    const { selectedPEID } = req.params;

    // FIND SINGLE DATA
    const selectedPE = await SelectedPE.findById(selectedPEID).exec();

    // RESPONSE
    res.json(selectedPE);
  }

  // UPDATE
  async put(req, res) {
    const { selectedPEID } = req.params;
    const { user, pe, yes } = req.body;

    // FIND SINGLE DATA
    const selectedPE = await SelectedPE.findById(selectedPEID).exec();

    // UPDATE
    selectedPE.user = user || selectedPE.user;
    selectedPE.pe = pe || selectedPE.pe;
    selectedPE.yes = yes != null ? yes : selectedPE.yes;

    // SAVE
    await selectedPE.save();

    // RESPONSE
    res.json(selectedPE);
  }

  // DELETE
  async delete(req, res) {
    const { selectedPEID } = req.params;

    // DELETE SINGLE DATA
    const selectedPE = await SelectedPE.deleteOne({ _id: selectedPEID });

    // RESPONSE
    res.json(selectedPE);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedSelectedPE = await SelectedPE.deleteMany({});

    // RESPONSE
    res.json(deletedSelectedPE);
  }
}

module.exports = SelectedPEController;
