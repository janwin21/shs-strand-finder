import axios from "axios";

class SubjectP {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/subjectP";

  async read(token) {
    try {
      // Send a GET request to create the Subject
      const response = await axios.get(SubjectP.endPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async readAssessment(subjectID, token) {
    try {
      // Send a GET request to create the Subject
      const response = await axios.get(SubjectP.endPoint + "/" + subjectID, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default SubjectP;
