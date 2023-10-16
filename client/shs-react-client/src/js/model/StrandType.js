import axios from "axios";

class StrandType {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/strandType";

  async create(data) {
    try {
      // Send a POST request to create the StrandType
      const response = await axios.post(StrandType.endPoint, data);

      console.log("StrandType created successfully");
      console.log("StrandType data:", response.data);
    } catch (error) {
      console.error("Error creating StrandType:", error.message);
    }
  }

  async read() {
    try {
      // Send a POST request to create the StrandType
      const response = await axios.get(StrandType.endPoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default StrandType;
