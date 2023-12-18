import $ from "jquery";

class RadarChart {
  data(table) {
    const newTable = table.slice(1);
    const labels = newTable.map((subarray) => subarray[0]);
    const dataset = newTable.map((subarray) => subarray[1]);

    return {
      labels: [...labels],
      datasets: [
        {
          label: "Strand Statistic Result",
          data: [...dataset],
          backgroundColor: "rgba(82, 215, 38, 0.5)", // fill color
          borderColor: "rgba(82, 215, 38)", // border color
          borderWidth: 2,
        },
      ],
    };
  }

  option() {
    return {
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    };
  }

  onClickListener(
    ev,
    elements,
    table,
    subjectTypeResults,
    setSubjectTypeResults
  ) {
    if (elements.length > 0) {
      const clickedElement = elements[0];
      const newTable = table.slice(1);
      const summation = newTable.reduce((sum, [, value]) => sum + value, 0);
      const [title, knnScore, strandID] = newTable[clickedElement.index];
      const percentage = (knnScore / summation) * 100 + "%";
      setSubjectTypeResults(
        subjectTypeResults
          .map((STR) => {
            const mappedSubjects = STR.subjects.filter((subject) => {
              return subject.strands.includes(strandID);
            });
            console.log(mappedSubjects);
            return { ...STR, subjects: mappedSubjects };
          })
          .filter((STR) => STR.subjects.length > 0)
      );
      console.log("CALL RADAR CHART!", percentage, title, knnScore, strandID);
    }
  }
}

export default RadarChart;
