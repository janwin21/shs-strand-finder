const PE = require("../model/personal_engagements");
const Strand = require("../model/strands");
const SelectedPE = require("../model/selected_personal_engagements");

class PEController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { strandID, question } = req.body;

    // Check if 'question' is missing
    if (!question) {
      throw new Error("Question field should be fill up!");
    }

    // Check if 'strand' is missing
    if (!strandID) {
      throw new Error("Select a strand first!");
    }

    // INIT
    const newPE = new PE({ strand: strandID, question });

    // SAVE
    newPE.save();

    // RESPONSE
    res.json({ strand: strandID, question });
  }

  // AUTH
  async auth(req, res) {
    const strands = await Strand.find({}).exec();

    res.json({
      user: req.user,
      strands,
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

  // READ BY ID w/ PREV & NEXT
  async findByIdNav(req, res) {
    const { peID } = req.params;

    // FIND SINGLE DATA
    let currentPE;

    if (peID !== "none") {
      // Find the current document by ID
      currentPE = await PE.findById(peID).exec();
    } else {
      // If no ID is provided, find the first PE document
      currentPE = await PE.findOne().sort({ _id: 1 }).exec();
    }

    const user = req.user;
    const pes = await PE.find().sort({ _id: 1 }).exec();
    const selectedPEs = await SelectedPE.find({
      user: user.id.toString(),
    }).exec();

    // VALIDATION IF USER ALREADY ANSWERED
    const answeredSize = selectedPEs.length;
    const questionSize = pes.length;

    if (answeredSize >= questionSize) {
      return res.json({
        user: req.user,
        error: "Already answered!",
        selectedStrand: req.selectedStrand,
        preferredStrand: req.preferredStrand,
        personalEngagements: req.pes,
        subjects: req.subjects,
        pendingSubjects: req.pendingSubjects,
      });
    }

    if (answeredSize != 0) {
      currentPE = pes[answeredSize];
    }

    const currentIndex = pes.findIndex((pe) => pe._id.equals(currentPE._id));

    // Find the previous and next documents based on _id
    const prevPE = await PE.findOne({ _id: { $lt: currentPE._id } })
      .sort({ _id: -1 })
      .exec();
    const nextPE = await PE.findOne({ _id: { $gt: currentPE._id } })
      .sort({ _id: 1 })
      .exec();

    const result = {
      user: req.user,
      prev: prevPE ? prevPE._id : null,
      next: nextPE ? nextPE._id : null,
      ...currentPE.toObject(),
      index: currentIndex + 1,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    };

    // RESPONSE
    res.json(result);
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
    const dataToDelete = await SelectedPE.find({ pe: peID });
    let deleteResult = null;

    // Delete the found data
    if (dataToDelete.length !== 0) {
      deleteResult = await SelectedPE.deleteMany({ pe: peID });
    }

    // RESPONSE
    res.json({ pe, deleteResult });
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
