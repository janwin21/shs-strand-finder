import axios from "axios";

class SubjectP {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/subjectP";

  async read() {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(SubjectP.endPoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default SubjectP;
