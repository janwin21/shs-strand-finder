const STEM = require("../strand/STEM");
const HUMSS = require("../strand/STEM");
const ABM = require("../strand/ABM");

const English = {
  associatedSubjects: [STEM.name, HUMSS.name, ABM.name],

  name: "English",
  description:
    "Encompasses a wide range of topics and skills related to the English language, literature, and communication. It is a core subject in most educational systems and is typically divided into various components, including language arts, literature, writing, and communication skills.",
  imagePath: "uploads\\sample\\img10.jpg",

  questions: [
    // question no. 1
    {
      question:
        'What is the verb tense of the sentence: "She will write a novel"?',
      answerKeys: [
        {
          value: "Present",
          correct: false,
        },
        {
          value: "Past",
          correct: false,
        },
        {
          value: "Future",
          correct: true,
        },
        {
          value: "Present Continuous",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question: "Which of the following is an example of a preposition?",
      answerKeys: [
        {
          value: "Run",
          correct: false,
        },
        {
          value: "In",
          correct: true,
        },
        {
          value: "Quickly",
          correct: false,
        },
        {
          value: "Jump",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: 'What is a synonym for "vivid"?',
      answerKeys: [
        {
          value: "Dull",
          correct: false,
        },
        {
          value: "Bright",
          correct: true,
        },
        {
          value: "Quiet",
          correct: false,
        },
        {
          value: "Slow",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        'What part of speech is the word "happily" in the sentence: "She sang happily"?',
      answerKeys: [
        {
          value: "Noun",
          correct: false,
        },
        {
          value: "Verb",
          correct: false,
        },
        {
          value: "Adjective",
          correct: false,
        },
        {
          value: "Adverb",
          correct: true,
        },
      ],
    },
    // question no. 5
    {
      question: 'Identify the type of sentence: "Close the door."',
      answerKeys: [
        {
          value: "Declarative",
          correct: false,
        },
        {
          value: "Interrogative",
          correct: false,
        },
        {
          value: "Imperative",
          correct: true,
        },
        {
          value: "Exclamatory",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: 'What is the plural form of "child"?',
      answerKeys: [
        {
          value: "Childs",
          correct: false,
        },
        {
          value: "Childen",
          correct: false,
        },
        {
          value: "Children",
          correct: true,
        },
        {
          value: "Child's",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "What is a group of words that contains a subject and a predicate and expresses a complete thought called?",
      answerKeys: [
        {
          value: "Phrase",
          correct: false,
        },
        {
          value: "Clause",
          correct: false,
        },
        {
          value: "Sentence",
          correct: true,
        },
        {
          value: "Paragraph",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        'What literary device is used in the sentence: "The stars danced in the night sky"?',
      answerKeys: [
        {
          value: "Metaphor",
          correct: false,
        },
        {
          value: "Simile",
          correct: false,
        },
        {
          value: "Personification",
          correct: false,
        },
        {
          value: "Irony",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question:
        "In a play, what is a list of the characters and when they appear on stage called?",
      answerKeys: [
        {
          value: "Script",
          correct: false,
        },
        {
          value: "Scene",
          correct: false,
        },
        {
          value: "Cast",
          correct: true,
        },
        {
          value: "Prologue",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question:
        'What is the name for a word or phrase that sounds like what it describes, such as "buzz" for the sound of bees?',
      answerKeys: [
        {
          value: "Antonym",
          correct: false,
        },
        {
          value: "Homonym",
          correct: false,
        },
        {
          value: "Onomatopoeia",
          correct: true,
        },
        {
          value: "Homophone",
          correct: false,
        },
      ],
    },
    // question no. 11
    {
      question:
        'What is the verb tense of the sentence: "She will write a novel"?',
      answerKeys: [
        {
          value: "Present",
          correct: false,
        },
        {
          value: "Past",
          correct: false,
        },
        {
          value: "Future",
          correct: true,
        },
        {
          value: "Present Continuous",
          correct: false,
        },
      ],
    },
    // question no. 12
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 13
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 14
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 15
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 16
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 17
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 18
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 19
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 20
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 21
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 22
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 23
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 24
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
    // question no. 25
    {
      question: "",
      answerKeys: [
        {
          value: "",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = English;
