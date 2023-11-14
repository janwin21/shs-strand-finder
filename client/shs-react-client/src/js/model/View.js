import axios from "axios";
import Localhost from "./LocalHost";

class ViewD {
  // API endpoint
  static peEndPoint = Localhost.mainPath + "view/personal-engagement";
  static subjectEndPoint = Localhost.mainPath + "view/subject";

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
