class QuestionFactory {
  constructor(question) {
    this.question = question;
  }

  async make(subject, question, questionImagePath) {
    // INIT
    this.question.subject = subject;
    this.question.question = question;
    this.question.questionImagePath = questionImagePath;

    // SAVE
    await this.question.save();
  }
}

module.exports = QuestionFactory;
