import axios from "axios";
import Localhost from "./LocalHost";

class DashboardD {
  // API endpoint
  static endPoint = Localhost.mainPath() + "dashboard";

  // FAST
  static fastEndPoint = Localhost.mainPath() + "fast/dashboard";

  async read(token) {
    try {
      // Send a GET request to create the Dashboard
      const response = await axios.get(DashboardD.endPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  // FAST
  async fastRead() {
    try {
      // Send a GET request in Fast Access
      const response = await axios.get(DashboardD.fastEndPoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default DashboardD;
