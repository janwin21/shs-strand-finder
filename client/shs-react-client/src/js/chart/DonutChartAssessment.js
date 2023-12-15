/*class DonutChartAssessment {
  display(elementID, index) {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawDonutChart);

    function drawDonutChart() {
      var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        ["Correct", 11],
        ["Wrong", 2],
      ]);

      var options = {
        width: "100%",
        height: "100%",
        pieHole: 0.4,
        legend: { position: "none" },
      };

      var chart = new google.visualization.PieChart(
        document.getElementById(elementID + index)
      );
      chart.draw(data, options);
    }
  }
}*/
class DonutChartAssessment {
  table = [
    ["Task", "Hours per Day"],
    ["Correct", 11],
    ["Wrong", 2],
  ];

  data() {
    return this.table;
  }

  option() {
    return {
      width: "100%",
      height: "100%",
      pieHole: 0.4,
      legend: { position: "none" },
      colors: ["rgb(4, 214, 60)", "rgb(245, 159, 159)"],
    };
  }
}

export default DonutChartAssessment;
