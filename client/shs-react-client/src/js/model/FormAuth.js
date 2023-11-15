import axios from "axios";
import Localhost from "./LocalHost";

class FormAuth {
  // API endpoint
  static strandTypeEndPoint = Localhost.mainPath() + "strandType/auth/user";
  static strandEndPoint = Localhost.mainPath() + "strand/auth/user";
  static subjectTypeEndPoint = Localhost.mainPath() + "subjectType/auth/user";
  static subjectEndPoint = Localhost.mainPath() + "subject/auth/user";
  static peEndPoint = Localhost.mainPath() + "pe/auth/user";
  static questionEndPoint = Localhost.mainPath() + "question/auth/user";
  static adminEndPoint = Localhost.mainPath() + "admin/auth";
  static authAccessEndPoint = Localhost.mainPath() + "admin/auth/access";
  static accessEndPoint = Localhost.mainPath() + "admin/access";

  // STRAND TYPE
  async strandTypeAuth(token) {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(FormAuth.strandTypeEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  // STRAND
  async strandAuth(token) {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(FormAuth.strandEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  // SUBJECT TYPE
  async subjectTypeAuth(token) {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(FormAuth.subjectTypeEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  // SUBJECT
  async subjectAuth(token) {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(FormAuth.subjectEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  // PE
  async peAuth(token) {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(FormAuth.peEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  // QUESTION
  async questionAuth(token) {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(FormAuth.questionEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  // ADMIN
  async adminAuth(token) {
    try {
      // Send a POST request to create the Dashboard
      const response = await axios.get(FormAuth.adminEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  // USER AUTH
  async authAccess(token) {
    try {
      // Send a GET request for Authrization
      const response = await axios.get(FormAuth.authAccessEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token as a bearer token
        },
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  // ACCESS
  async setAccess(userID, isAccess) {
    console.log(userID, isAccess);
    try {
      // Send a PATCH to update User access
      const response = await axios.patch(
        FormAuth.accessEndPoint + "/" + userID,
        { isAccess }
      );
      console.log(response);
      console.log("User access successfully updated.");
      return response.data;
    } catch (error) {
      console.log("error: ", error);
      return error.response.data;
    }
  }
}

export default FormAuth;
