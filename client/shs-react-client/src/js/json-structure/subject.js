import subject1 from "../../asset/subject/subject1.jpg";

const subjectData = {
  // access token
  accessToken: "access-token",

  // user
  user: {
    id: "id123",
    email: "user@email.com",
  },

  // subject types
  subjectTypes: [
    {
      id: "subjectTypeId123",
      name: "Subject Type Name 1",
      subjects: [
        {
          id: "subjectId123",
          name: "Subject Name 1",
          description: "This is a subject description.",
          imagePath: subject1,
        },
      ],
      subjects: [
        {
          id: "subjectId456",
          name: "Subject Name 2",
          description: "This is a subject description.",
          imagePath: subject1,
        },
      ],
    },
    {
      id: "SubjectTypeId456",
      name: "subject Type Name 2",
      subjects: [
        {
          id: "subjectId789",
          name: "Subject Name 3",
          description: "This is a subject description.",
          imagePath: subject1,
        },
      ],
    },
  ],
};

export { subjectData };
