import axios from "axios";
import Localhost from "./LocalHost";

class PEP {
  // API endpoint
  static endPoint = Localhost.mainPath() + "pe";
  static selectedPEendPoint = Localhost.mainPath() + "selectedPE";

  // FAST
  static fastEndPoint = Localhost.mainPath() + "fast/pe";

  async assess(token) {
    try {
      // Send a GET request to create the PE
      const response = await axios.get(PEP.endPoint + "/nav/assess", {
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
      return response.data;
    } catch (error) {
      console.error("Error creating PE:", error.message);
      return error.response.data;
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

  async delete(peID) {
    try {
      // Send a DELETE request to delete the Personla Engagement
      const response = await axios.delete(PEP.endPoint + "/" + peID);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  // Fast Assess
  async fastAssess(token) {
    try {
      // Send a GET request to create the PE
      const response = await axios.get(PEP.fastEndPoint + "/nav/assess", {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating PE:", error.message);
    }
  }
}

export default PEP;
