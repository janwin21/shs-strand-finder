import axios from "axios";

class SelectedStrand {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/selectedStrand/user/";

  async create(userID, strandID) {
    try {
      // Send a POST request to create the SelectedStrand
      const response = await axios.post(SelectedStrand.endPoint + userID, {
        strand: strandID,
      });

      console.log("SelectedStrand created successfully");
      console.log("SelectedStrand data:", response.data);
    } catch (error) {
      console.error("Error creating SelectedStrand:", error.message);
    }
  }
}

export default SelectedStrand;
