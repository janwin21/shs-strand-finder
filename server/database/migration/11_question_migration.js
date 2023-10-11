// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const Question = require("../../model/questions");
const Subject = require("../../model/subjects");

// FACTORY
const QuestionFactory = require("../../factory/QuestionFactory");

const pe_rollback = async () => {
  await Question.deleteMany({});
};

const pe_migrate = async () => {
  const minItem = 20;
  const maxItem = 40;
  const subjects = await Subject.find({}).exec();

  console.log("\n\nTEST PE TO STRAND RELATIONSHIP");

  await strands.forEach(async (strand, i) => {
    // INIT
    const randomLength = Faker.generateRandomNumber(minItem, maxItem);

    console.log("STRAND " + i + " (" + randomLength + "): " + strand.name);

    for (let i = 0; i < randomLength; i++) {
      console.log(
        "\tPE QUESTION " + i + " Associate by " + "STRAND " + strand.name
      );

      // MIGRATE
      await new PEFactory(new PE()).make(
        strand._id.toString(),
        `PE Question ${Faker.word(4)} ${i + 1}?`
      );
    }
  });
};

module.exports = { pe_rollback, pe_migrate };
