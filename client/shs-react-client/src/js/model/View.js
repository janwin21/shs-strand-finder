import axios from "axios";

class ViewD {
  // API endpoint
  static peEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/view/personal-engagement";
  static subjectEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/view/subject";

  async viewPE(token) {
    try {
      // Send a GET request to create the View
      const response = await axios.get(ViewD.peEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async viewSubject(token) {
    try {
      // Send a GET request to create the View
      const response = await axios.get(ViewD.subjectEndPoint, {
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

export default ViewD;
