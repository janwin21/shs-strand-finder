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
}

export default RadarChart;
