const PE = require("../model/personal_engagements");

class PEController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { strandID, question } = req.body;

    // INIT
    const newPE = new PE({ strand: strandID, question });

    // SAVE
    newPE.save();

    // RESPONSE
    res.json({ strand: strandID, question });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const pes = await PE.find({}).exec();

    // RESPONSE
    res.json(pes);
  }

  // READ BY ID
  async findById(req, res) {
    const { peID } = req.params;

    // FIND SINGLE DATA
    const pe = await PE.findById(peID).exec();

    // RESPONSE
    res.json(pe);
  }

  // UPDATE
  async put(req, res) {
    const { peID } = req.params;
    const { strand, question } = req.body;

    // FIND SINGLE DATA
    const pe = await PE.findById(peID).exec();

    // UPDATE
    pe.strand = strand || pe.strand;
    pe.question = question || pe.question;

    // SAVE
    await pe.save();

    // RESPONSE
    res.json(pe);
  }

  // DELETE
  async delete(req, res) {
    const { peID } = req.params;

    // DELETE SINGLE DATA
    const pe = await PE.deleteOne({ _id: peID });

    // RESPONSE
    res.json(pe);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedPE = await PE.deleteMany({});

    // RESPONSE
    res.json(deletedPE);
  }
}

module.exports = PEController;
