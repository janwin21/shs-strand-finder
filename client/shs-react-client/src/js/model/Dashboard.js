import axios from "axios";
import Localhost from "./LocalHost";

class DashboardD {
  // API endpoint
  static endPoint = Localhost.mainPath + "dashboard";

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
}

export default DashboardD;
