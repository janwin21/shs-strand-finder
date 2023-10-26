import axios from "axios";

class Login {
  // API endpoint
  static endPoint = "http://localhost:3000/shs-strand-finder/api/V1.0.0/login";
  static logoutEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/logout";

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
