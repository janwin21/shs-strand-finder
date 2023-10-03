import strand1 from "../../asset/strand/strand1.jpg";
import subject1 from "../../asset/subject/subject1.jpg";

const resultData = {
  // access token
  accessToken: "access-token",

  // user
  user: {
    id: "id123",
    email: "user1234@email.com",
  },

  // predicted strand
  predictedStrand: {
    id: "id123",
    name: "Strand Name 3",
    description:
      "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagePath: strand1,
  },

  // subjects
  subjects: [
    {
      id: "subjectId123",
      name: "Subject 1",
      description: "This is subject description.",
      imagePath: subject1,
      correctScore: 75,
      wrongScore: 25,
      noOfUnvisit: 3,
      totalItems: 75 + 25,
      duration: 800,
      associatedStrands: [
        {
          id: "strandId123",
          name: "Strand Name 1",
        },
        {
          id: "strandId456",
          name: "Strand Name 2",
        },
      ],
    },
  ],

  // personal engagements
  personalEngagements: [
    {
      strandID: "peId123",
      yesCount: 3,
      noCount: 2,
    },
  ],

  // subjects
  subjects: [
    {
      id: "subjectId123",
      name: "Subject 1",
      description: "This is subject description.",
      imagePath: subject1,
      score: 78,
      totalScore: 100,
      duration: 1000,
    },
    {
      id: "subjectId101",
      name: "Subject 4",
      description: "This is subject description.",
      imagePath: subject1,
      score: 60,
      totalScore: 79,
      duration: 790,
    },
  ],
};

export { resultData };
