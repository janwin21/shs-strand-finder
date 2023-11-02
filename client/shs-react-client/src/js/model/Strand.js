import axios from "axios";

class Strand {
  // API endpoint
  static endPoint = "http://localhost:3000/shs-strand-finder/api/V1.0.0/strand";

  async create(data) {
    try {
      // Send a POST request to create the Strand
      const response = await axios.post(Strand.endPoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Strand created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating Strand:", error.message);
      return error.response.data;
    }
  }

  async read() {
    try {
      // Send a POST request to create the Strand
      const response = await axios.get(Strand.endPoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default Strand;
