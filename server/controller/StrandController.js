const Strand = require("../model/strands");
const StrandType = require("../model/strand_types");
const fs = require("fs");
const path = require("path");

class StrandController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { strandTypeID, name, description } = req.body;
    const imagePath = req.file.path;

    // Check if 'name' is missing
    if (!name) {
      throw new Error("Name field should be fill up!");
    }

    // Check if 'strand type' is missing
    if (!strandTypeID) {
      throw new Error("Select a strand type first!");
    }

    // Check if 'name' already exists in the database
    const existingStrand = await Strand.findOne({ name });

    if (existingStrand) {
      throw new Error("This strand has already existed!");
    }

    // INIT
    const newStrand = new Strand({
      strandType: strandTypeID,
      name,
      description,
      imagePath,
    });

    // SAVE
    newStrand.save();

    // RESPONSE
    res.json({ strandType: strandTypeID, name, description, imagePath });
  }

  // AUTH
  async auth(req, res) {
    const strandTypes = await StrandType.find({}).exec();

    res.json({
      user: req.user,
      strandTypes,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const strands = await Strand.find({}).exec();

    // RESPONSE
    res.json({ strands });
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

    // Find the Strand data first to get the imagePath
    const strand = await Strand.findById(strandID);

    if (!strand) {
      throw new Error("Strand not found.");
    }

    // DELETE IMAGE
    if (strand.imagePath) {
      const imagePath = path.join(__dirname, "../", strand.imagePath);
      fs.unlinkSync(imagePath);
    }

    // DELETE SINGLE DATA
    const deletedStrand = await Strand.deleteOne({ _id: strandID });

    // RESPONSE
    res.json(deletedStrand);
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
