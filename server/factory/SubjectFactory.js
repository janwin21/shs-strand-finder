// FAKER
const Faker = require("../facade/Faker");

class SubjectFactory {
  constructor(subject) {
    this.subject = subject;
  }

  setSubjectTypes(subjectTypes) {
    this.subjectTypes = subjectTypes;
    return this;
  }

  async make(name, description, imagePath) {
    // INIT
    this.subject.subjectType =
      this.subjectTypes[
        Faker.generateRandomNumber(0, this.subjectTypes.length)
      ];
    this.subject.name = name;
    this.subject.description = description;
    this.subject.imagePath = imagePath;

    // SAVE
    await this.subject.save();
  }
}

module.exports = SubjectFactory;
