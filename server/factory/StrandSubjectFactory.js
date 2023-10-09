class StrandSubjectFactory {
  constructor(strandSubject) {
    this.strandSubject = strandSubject;
  }

  async make(strand, subject) {
    // INIT
    this.strandSubject.strand = strand;
    this.strandSubject.subject = subject;

    // SAVE
    await this.strandSubject.save();
  }
}

module.exports = StrandSubjectFactory;
