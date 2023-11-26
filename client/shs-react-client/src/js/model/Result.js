import axios from "axios";
import Localhost from "./LocalHost";

class ResultD {
  // API endpoint
  static endPoint = Localhost.mainPath() + "result";

  // FAST
  static fastEndPoint = Localhost.mainPath() + "fast/result";

  async read(token) {
    try {
      // Send a GET request to create the Dashboard
      const response = await axios.get(ResultD.endPoint, {
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
  async fastRead(token) {
    try {
      // Send a GET request in Fast Access
      const response = await axios.get(ResultD.fastEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async fastFindResult(userID) {
    try {
      // Send a GET request to Find Specific Result
      const response = await axios.get(ResultD.fastEndPoint + "/" + userID);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default ResultD;
