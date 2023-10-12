// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const Question = require("../../model/questions");
const Subject = require("../../model/subjects");

// FACTORY
const QuestionFactory = require("../../factory/QuestionFactory");

const question_rollback = async () => {
  await Question.deleteMany({});
};

const question_migrate = async () => {
  const minItem = 20;
  const maxItem = 40;
  const subjects = await Subject.find({}).exec();

  console.log("\n\nTEST QUESTION TO SUBJECT RELATIONSHIP");

  await subjects.forEach(async (subject, i) => {
    // INIT
    const randomLength = Faker.generateRandomNumber(minItem, maxItem);

    console.log("SUBJECT " + i + " (" + randomLength + "): " + subject.name);

    for (let i = 0; i < randomLength; i++) {
      console.log(
        "\tASSESSMENT QUESTION " + i + " Associate by " + subject.name
      );

      // MIGRATE
      await new QuestionFactory(new Question()).make(
        subject._id.toString(),
        `Assessment Question ${Faker.word(4)} ${i + 1}?`,
        `Question image ${i + 1}`
      );
    }
  });
};

module.exports = { question_rollback, question_migrate };
