import axios from "axios";

class FormAuth {
  // API endpoint
  static strandTypeEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/strandType/auth/user";
  static strandEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/strand/auth/user";
  static subjectTypeEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/subjectType/auth/user";
  static subjectEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/subject/auth/user";
  static peEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/pe/auth/user";
  static questionEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/question/auth/user";
  static adminEndPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/admin/auth";

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
      return error;
    }
  }
}

export default FormAuth;
