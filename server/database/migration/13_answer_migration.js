// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const Answer = require("../../model/answers");
const User = require("../../model/users");
const AnswerKey = require("../../model/answer_keys");

// FACTORY
const AnswerFactory = require("../../factory/AnswerFactory");

const answer_rollback = async () => {
  await Answer.deleteMany({});
};
