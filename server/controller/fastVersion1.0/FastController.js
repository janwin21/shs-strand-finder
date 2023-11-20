class FastController {
  // GET ALL STRAND TYPES
  async fastAccess(req, res) {
    res.json({
      user: req.user,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }
}

module.exports = FastController;
