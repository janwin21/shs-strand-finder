import axios from "axios";
import Localhost from "./LocalHost";

class Forgot {
  // API endpoint
  static endPoint = Localhost.mainPath() + "forgot";

  async forgot(data) {
    try {
      // Send a PUT request to create the new password
      const response = await axios.put(Forgot.endPoint, data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Forgot;
