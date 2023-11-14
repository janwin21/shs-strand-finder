import axios from "axios";
import Localhost from "./LocalHost";

class SubjectP {
  // API endpoint
  static endPoint = Localhost.mainPath + "subjectP";

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
