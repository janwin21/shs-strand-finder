import subject1 from "../../asset/subject/subject1.jpg";

const assessmentData = {
  // access token
  accessToken: "access-token",

  // user
  user: {
    id: "id123",
    email: "user@email.com",
  },

  // subject
  subject: {
    id: "subjectId123",
    name: "Subject Name 1",
    description: "This is a subject description.",
    imagePath: subject1,
    questions: [
      {
        id: "quesId123",
        question: "This is assessment question 1?",
        questionImagePath: null,
        answerKeys: [
          {
            id: "keyId123",
            value: "This is the correct answer 1",
            imagePath: null,
            correct: false,
          },
          {
            id: "keyId456",
            value: "This is the correct answer 2",
            imagePath: null,
            correct: true,
          },
          {
            id: "keyId789",
            value: "This is the correct answer 3",
            imagePath: null,
            correct: false,
          },
        ],
      },
      {
        id: "quesId456",
        question: "This is assessment question 2?",
        questionImagePath: null,
        answerKeys: [
          {
            id: "keyId101",
            value: "This is the correct answer 1",
            imagePath: null,
            correct: true,
          },
          {
            id: "keyId112",
            value: "This is the correct answer 2",
            imagePath: null,
            correct: false,
          },
          {
            id: "keyId113",
            value: "This is the correct answer 3",
            imagePath: null,
            correct: false,
          },
        ],
      },
      {
        id: "quesId789",
        question: "This is assessment question 3?",
        questionImagePath: null,
        answerKeys: [
          {
            id: "keyId114",
            value: "This is the correct answer 1",
            imagePath: null,
            correct: false,
          },
          {
            id: "keyId115",
            value: "This is the correct answer 2",
            imagePath: null,
            correct: false,
          },
          {
            id: "keyId116",
            value: "This is the correct answer 3",
            imagePath: null,
            correct: true,
          },
        ],
      },
    ],
  },
};

export { assessmentData };
