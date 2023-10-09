// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const User = require("../../model/users");

// FACTORY
const UserFactory = require("../../factory/UserFactory");

const user_rollback = async () => {
  await User.deleteMany({});
};

const user_migrate = async () => {
  const size = 15;

  for (let i = 0; i < size; i++) {
    // MIGRATE
    await new UserFactory(new User()).make(
      Faker.email(),
      "password",
      Faker.boolean()
    );
  }
};

module.exports = { user_rollback, user_migrate };
