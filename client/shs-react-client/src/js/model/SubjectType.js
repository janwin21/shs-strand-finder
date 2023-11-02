import axios from "axios";

class SubjectType {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/subjectType";

  async create(data) {
    try {
      // Send a POST request to create the SubjectType
      const response = await axios.post(SubjectType.endPoint, data);
      console.log("SubjectType created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating SubjectType:", error.message);
      return error.response.data;
    }
  }

  async read() {
    try {
      // Send a POST request to create the SubjectType
      const response = await axios.get(SubjectType.endPoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default SubjectType;
