class Faker {
  static characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  static domains = ["email", "example", "gmail", "yahoo", "facebook"];
  static words = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
    "A",
    "bird",
    "in",
    "the",
    "hand",
    "is",
    "worth",
    "two",
    "in",
    "the",
    "bush",
    "An",
    "apple",
    "a",
    "day",
    "keeps",
    "the",
    "doctor",
    "away",
  ];

  // GENERATE RANDOM STRING
  static generateRandomString(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * Faker.characters.length);
      result += Faker.characters.charAt(randomIndex);
    }
    return result;
  }

  // GENERATE RANDOM NUMBER
  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // CREATE RANDOM EMAIL
  static email() {
    const randomUsername = Faker.generateRandomString(8);
    const domain =
      Faker.domains[Faker.generateRandomNumber(0, Faker.domains.length)];
    return `${randomUsername}@${domain}.com`;
  }

  // CREATE RANDOM BOOLEAN
  static boolean() {
    return Faker.generateRandomNumber(0, 1) == 1;
  }

  // CREATE RANDOM WORD
  static word(charLength) {
    return Faker.generateRandomString(charLength);
  }

  // CREATE RANDOM SENTENCE
  static sentence() {
    const sentenceLength = Math.floor(Math.random() * 10) + 3; // Random length from 3 to 12 words
    const sentence = [];

    for (let i = 0; i < sentenceLength; i++) {
      const randomIndex = Math.floor(Math.random() * Faker.words.length);
      sentence.push(Faker.words[randomIndex]);
    }

    return sentence.join(" ");
  }
}

module.exports = Faker;
