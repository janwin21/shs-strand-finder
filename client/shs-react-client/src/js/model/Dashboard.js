import axios from "axios";

class DashboardD {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/dashboard";

  async read() {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(DashboardD.endPoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default DashboardD;
