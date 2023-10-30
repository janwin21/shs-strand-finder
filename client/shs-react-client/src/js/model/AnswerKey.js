import axios from "axios";

class AnswerKey {
  // API endpoint
  static endPoint = "http://localhost:3000/shs-strand-finder/api/V1.0.0/answer";

  // create PE
  async create(data) {
    try {
      // Send a POST request to create the PE
      const response = await axios.post(AnswerKey.endPoint, data);

      console.log("Answer Key created successfully");
      console.log("Answer Key data:", response.data);
    } catch (error) {
      console.error("Error creating Answer Key:", error.message);
    }
  }
}

export default AnswerKey;
