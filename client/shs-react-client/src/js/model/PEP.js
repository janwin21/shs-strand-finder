import axios from "axios";

class PEP {
  // API endpoint
  static endPoint = "http://localhost:3000/shs-strand-finder/api/V1.0.0/pe";
  static selectedPEendPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/selectedPE";

  async findByIdNav(id = "none", token) {
    try {
      // Send a GET request to create the PE
      const response = await axios.get(PEP.endPoint + "/nav/" + id, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating PE:", error.message);
    }
  }

  // create PE
  async create(data) {
    try {
      // Send a POST request to create the PE
      const response = await axios.post(PEP.endPoint, data);

      console.log("PE created successfully");
      console.log("PE data:", response.data);
    } catch (error) {
      console.error("Error creating PE:", error.message);
    }
  }

  // create Selected PE
  async answer(data) {
    try {
      // Send a POST request to create the PE
      const response = await axios.post(PEP.selectedPEendPoint, data);

      console.log("PE created successfully");
      console.log("PE data:", response.data);
    } catch (error) {
      console.error("Error creating PE:", error.message);
    }
  }
}

export default PEP;
