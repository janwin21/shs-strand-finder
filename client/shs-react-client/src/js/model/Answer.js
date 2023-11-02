import axios from "axios";

class AnswerP {
  // API endpoint
  static endPoint = "http://localhost:3000/shs-strand-finder/api/V1.0.0/answer";

  // create Answer
  async create(data) {
    try {
      // Send a POST request to create the Answer
      const response = await axios.post(AnswerP.endPoint, data);
      console.log("Answer created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating Answer:", error.message);
    }
  }
}

export default AnswerP;
