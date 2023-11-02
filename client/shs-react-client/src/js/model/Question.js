import axios from "axios";

class QuestionP {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/question";

  // create Question
  async create(data) {
    try {
      // Send a POST request to create the Question
      const response = await axios.post(QuestionP.endPoint, data);
      console.log("Question created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating Question:", error.message);
      return error.response.data;
    }
  }
}

export default QuestionP;
