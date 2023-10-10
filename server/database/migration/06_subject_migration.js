// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const Subject = require("../../model/subjects");
const SubjectType = require("../../model/subject_types");

// FACTORY
const SubjectFactory = require("../../factory/SubjectFactory");

const subject_rollback = async () => {
  await Subject.deleteMany({});
};

const subject_migrate = async () => {
  const size = 8;
  const subjectTypes = await SubjectType.find({}).exec();

  for (let i = 0; i < size; i++) {
    // MIGRATE
    await new SubjectFactory(new Subject())
      .setSubjectTypes(
        subjectTypes.map((subjectType) => subjectType._id.toString())
      )
      .make(
        `Subject ${Faker.word(4)} ${i + 1}`,
        Faker.sentence(),
        `Subject image ${i + 1}`
      );
  }
};

module.exports = { subject_rollback, subject_migrate };
