import axios from "axios";

class ResultD {
  // API endpoint
  static endPoint = "http://localhost:3000/shs-strand-finder/api/V1.0.0/result";

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
}

export default ResultD;
