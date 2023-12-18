import React from "react";
import { Radar } from "react-chartjs-2";

class ClickableRadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      selectedPoint: null,
    };
  }

  handlePointClick = (event, elements) => {
    if (elements.length > 0) {
      const clickedElement = elements[0];
      const datasetIndex = clickedElement._datasetIndex;
      const index = clickedElement._index;

      // Access the data using the index
      const dataset = this.chartInstance.data.datasets[datasetIndex];
      const selectedData = dataset.data[index];

      // Do something with the selectedData
      console.log("Selected Data:", selectedData);
    }
  };

  render() {
    const { data, options } = this.props;

    return (
      <div className="w-100" style={{ height: "auto" }}>
        <Radar
          data={data}
          options={{ ...options, onClick: this.handlePointClick }}
          ref={(ref) => (this.chartInstance = ref && ref.chartInstance)}
        />
      </div>
    );
  }
}

export default ClickableRadarChart;
