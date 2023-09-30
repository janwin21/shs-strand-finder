import subject1 from "../../asset/subject/subject1.jpg";

const resultData = {
  // access token
  accessToken: "access-token",

  // user
  user: {
    id: "id123",
    email: "user1234@email.com",
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
};

export { resultData };
