import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import { chartEvents } from "../../js/chart/chart-event";
import BarChartSubject from "../../js/chart/BarChartSubject";
import BarChartStrand from "../../js/chart/BarChartStrand";

function ResultHeader({ subjects, strands }) {
  // BAR CHART
  const [barChartSubject] = useState(new BarChartSubject());
  const [barChartStrand] = useState(new BarChartStrand());

  // TABLES
  const subjectHeader = ["Subject", "Distance", { role: "style" }];
  const strandHeader = ["Strand", "Score", { role: "style" }];
  const [subjectTable, setSubjectTable] = useState([]);
  const [strandTable, setStrandTable] = useState([]);

  // INIT
  useEffect(() => {
    // SUBJECT TABLE
    let table = [subjectHeader];

    subjects?.map((subject) => {
      table.push([subject.name, subject.distance, "#4d4848"]);
    });

    setSubjectTable(table);
    barChartSubject.table = table;

    // STRAND TABLE
    table = [strandHeader];

    strands?.map((strand) => {
      table.push([strand.name, strand.sum, "#4d4848"]);
    });

    setStrandTable(table);
    barChartStrand.table = table;
  }, []);

  useEffect(() => {}, [subjectTable, strandTable]);

  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">Your Assessment Result</h2>
          <p className="card-text my-4 roboto">
            Hello, email! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/*-- HEADER ASSESSMENT RESULT --*/}
          <section className="row mt-5">
            <section className="col-6">
              <h6 className="roboto fw-semibold mb-3">
                Ranking Points by Subject
              </h6>
              {subjectTable.length > 1 ? (
                <Chart
                  chartType="ColumnChart"
                  data={barChartSubject.data()}
                  options={barChartSubject.option()}
                  graph_id="UNIQUEID123"
                  width={"100%"}
                  height={"400px"}
                  chartEvents={chartEvents(barChartSubject)}
                  legend_toggle
                />
              ) : (
                <></>
              )}
            </section>
            <section className="col-6">
              <h6 className="roboto fw-semibold mb-3">
                Ranking Points by Strand
              </h6>
              {strandTable.length > 1 ? (
                <Chart
                  chartType="ColumnChart"
                  data={barChartStrand.data()}
                  options={barChartStrand.option()}
                  graph_id="UNIQUEID456"
                  width={"100%"}
                  height={"400px"}
                  chartEvents={chartEvents(barChartStrand)}
                  legend_toggle
                />
              ) : (
                <></>
              )}
            </section>
          </section>
        </div>
      </header>
    </>
  );
}

export default ResultHeader;
