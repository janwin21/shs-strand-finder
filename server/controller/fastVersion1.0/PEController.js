const PE = require("../../model/personal_engagements");
const Strand = require("../../model/strands");
const SelectedPE = require("../../model/selected_personal_engagements");

class PEController {
  // READ BY ID w/ PREV & NEXT
  async findByIdNav(req, res) {
    const user = req.user;
    let pes = await PE.find().sort({ _id: 1 }).exec();
    const selectedPEs = await SelectedPE.find({
      user: user.id.toString(),
    }).exec();

    // VALIDATION IF USER ALREADY ANSWERED
    const answeredSize = selectedPEs.length;
    const questionSize = pes.length;

    if (answeredSize >= questionSize) {
      return res.json({
        user,
        error: "Already answered!",
      });
    }

    pes = pes.map((mp, index) => ({
      ...mp.toObject(),
      index: index + 1,
    }));
    const uniquePEs = selectedPEs.map((sp) => sp.pe.toString());
    const filteredPes = pes.filter(
      (pe) => !uniquePEs.includes(pe._id.toString())
    );

    // RESPONSE
    res.json({ filteredPes });
  }
}

module.exports = PEController;
