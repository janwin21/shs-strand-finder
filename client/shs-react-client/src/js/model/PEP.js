import axios from "axios";

class PEP {
  // API endpoint
  static endPoint = "http://localhost:3000/shs-strand-finder/api/V1.0.0/pe";

  async create(data) {
    try {
      // Send a POST request to create the Strand
      console.log(data);
      const response = await axios.post(PEP.endPoint, data);

      console.log("Strand created successfully");
      console.log("Strand data:", response.data);
    } catch (error) {
      console.error("Error creating Strand:", error.message);
    }
  }
}

export default PEP;
