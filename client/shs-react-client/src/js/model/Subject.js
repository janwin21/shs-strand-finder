import axios from "axios";

class Subject {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/subject";

  async create(data) {
    try {
      // Send a POST request to create the Subject
      console.log("CALLLLLLL!", data);
      const response = await axios.post(Subject.endPoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Subject created successfully");
      return response.data.subjectID;
    } catch (error) {
      console.error("Error creating Subject:", error.message);
    }
  }
}

export default Subject;
