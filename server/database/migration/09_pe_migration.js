// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const PE = require("../../model/personal_engagements");
const Strand = require("../../model/strands");

// FACTORY
const PEFactory = require("../../factory/PEFactory");

const pe_rollback = async () => {
  await PE.deleteMany({});
};

const pe_migrate = async () => {
  const size = 4;
  const strands = await Strand.find({}).exec();

  strands.forEach(async (strand) => {
    // INIT
    const randomLength = Faker.generateRandomNumber(1, size);

    for (let i = 0; i < randomLength; i++) {
      // MIGRATE
      await new PEFactory(new PE()).make(
        strand._id.toString(),
        `PE Question ${Faker.word(4)} ${i + 1}?`
      );
    }
  });
};

module.exports = { pe_rollback, pe_migrate };
