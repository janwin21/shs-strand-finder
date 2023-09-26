import { Chart } from "react-google-charts";
import { useState } from "react";
import { chartEvents } from "../../js/chart/chart-event";
import DonutChartPersonal from "../../js/chart/DonutChartPersonal";

function ResultAssessment() {
  const [donutChartPersonal1] = useState(new DonutChartPersonal());

  return (
    <>
      {/*-- PERSONAL ENGAGEMENT CONTAINER --*/}
      <section className="strand-type-container mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          PERSONAL ENGAGEMENTS
        </h5>
        <section className="row mt-3 g-2">
          {/*-- USE MODULUS FOR ORGANIZATION --*/}
          {/*-- COL-1 --*/}
          <section className="col-2">
            {/*-- PROBABILITY CARD  --*/}
            <div className="card bg-light p-2 mt-2">
              {/*-- CHART DISPLAY --*/}
              <Chart
                chartType="PieChart"
                data={donutChartPersonal1.data()}
                options={donutChartPersonal1.option()}
                graph_id="UNIQIEID111"
                width={"100%"}
                height={"300px"}
                chartEvents={chartEvents(donutChartPersonal1)}
                legend_toggle
              />
              <div className="card-body text-center">
                <h6 className="card-title poppins text-uppercase mb-3">
                  Strand Name
                </h6>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default ResultAssessment;
