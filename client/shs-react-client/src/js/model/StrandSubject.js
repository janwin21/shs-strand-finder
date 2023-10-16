import axios from "axios";

class StrandSubject {
  // API endpoint
  static endPoint =
    "http://localhost:3000/shs-strand-finder/api/V1.0.0/strandSubject";

  async create(subjectID, dataArr) {
    try {
      // Send a POST request to create the StrandSubject
      dataArr.forEach(async (strandID) => {
        const response = await axios.post(StrandSubject.endPoint, {
          subjectID,
          strandID,
        });

        console.log("StrandSubject created successfully");
        console.log("StrandSubject data:", response.data);
      });
    } catch (error) {
      console.error("Error creating StrandSubject:", error.message);
    }
  }
}

export default StrandSubject;
