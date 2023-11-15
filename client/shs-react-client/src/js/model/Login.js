import axios from "axios";
import Localhost from "./LocalHost";

class Login {
  // API endpoint
  static endPoint = Localhost.mainPath() + "login";
  static logoutEndPoint = Localhost.mainPath() + "logout";

  async auth(data) {
    try {
      // Send a POST request to create the Login
      const response = await axios.post(Login.endPoint, data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async forgot(data) {
    try {
      // Send a PUT request to create the new password
      const response = await axios.put(Login.endPoint + "/forgot", data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async logout() {
    try {
      // Send a POST request to create the Login
      const response = await axios.get(Login.logoutEndPoint);

      console.log("User updated successfully");
      console.log("User data:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Login;
