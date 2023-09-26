import { Chart } from "react-google-charts";
import { useState } from "react";
import { chartEvents } from "../../js/chart/chart-event";
import DonutChartAssessment from "../../js/chart/DonutChartAssessment";

function ResultAssessment() {
  const [donutChartAssessment1] = useState(new DonutChartAssessment());

  return (
    <>
      {/*-- ASSESSMENT SCORE CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          ASSESSMENT SCORES
        </h5>
        <section className="row mt-3 g-2">
          {/*-- USE MODULUS FOR ORGANIZATION --*/}
          {/*-- COL-1 --*/}
          <section className="col-2 g-2">
            {/*-- ASSESSMENT RESULT CARD  --*/}
            <div className="card bg-light p-2 mt-2">
              {/*-- CHART DISPLAY --*/}
              <Chart
                chartType="PieChart"
                data={donutChartAssessment1.data()}
                options={donutChartAssessment1.option()}
                graph_id="UNIQIEID789"
                width={"100%"}
                height={"300px"}
                chartEvents={chartEvents(donutChartAssessment1)}
                legend_toggle
              />
              <div className="card-body text-center">
                <h6 className="card-title poppins text-uppercase mb-3">
                  Subject Name
                </h6>
                <p className="card-text mb-0">
                  score: <strong>100</strong> / 100
                </p>
                <p className="card-text mb-0">duration: 1 hr</p>
                <p className="card-text mb-0">leave count: 3</p>
              </div>
            </div>
          </section>
          {/*-- COL-2 --*/}
          <section className="col-2 g-2"></section>
          {/*-- COL-3 --*/}
          <section className="col-2 g-2"></section>
          {/*-- COL-4 --*/}
          <section className="col-2 g-2"></section>
          {/*-- COL-5 --*/}
          <section className="col-2 g-2"></section>
          {/*-- COL-6 --*/}
          <section className="col-2 g-2"></section>
        </section>
      </section>
    </>
  );
}

export default ResultAssessment;
