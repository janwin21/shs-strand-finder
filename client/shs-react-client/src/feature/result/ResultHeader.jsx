import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import { chartEvents } from "../../js/chart/chart-event";
import { modalType } from "../modal/modalType";
// import { draw3DSphere } from "./3DSphere";
import BarChartSubject from "../../js/chart/BarChartSubject";
import BarChartStrand from "../../js/chart/BarChartStrand";
import PieChartSubject from "../../js/chart/PieChartSubject";
import React from "react";
import { Radar } from "react-chartjs-2";
import RadarChart from "../../js/chart/RadarChart";

function ResultHeader({
  subjects,
  strands,
  subjectTypeResults,
  setSubjectTypeResults,
}) {
  // BAR CHART
  const [barChartSubject] = useState(new BarChartSubject());
  const [barChartStrand] = useState(new BarChartStrand());
  const [pieChartSubject] = useState(new PieChartSubject());
  const [radarChart] = useState(new RadarChart());

  // TABLES
  const subjectHeader = ["Subject", "Distance", { role: "style" }];
  const strandHeader = ["Strand", "Score", { role: "style" }];
  const pieHeader = ["Strand", "Points"];
  const [subjectTable, setSubjectTable] = useState([]);
  const [strandTable, setStrandTable] = useState([]);
  const [pieTable, setPieTable] = useState([]);

  // 5 is a DEFAULT value
  const DEFAULT_ROW = 5;
  const [subjectRow, setSubjectRow] = useState(DEFAULT_ROW);
  const [strandRow, setStrandRow] = useState(DEFAULT_ROW);

  // expand formation
  const [formationNum, setFormationNum] = useState(0);
  const colorCode = [
    "rgb(135, 245, 164)",
    "rgb(88, 225, 237)",
    "rgb(242, 177, 177)",
    "rgb(240, 240, 96)",
    "rgb(132, 252, 124)",
    "rgb(94, 235, 83)",
    "rgb(92, 182, 255)",
    "rgb(133, 92, 255)",
    "rgb(92, 220, 255)",
    "rgb(112, 255, 186)",
    "rgb(252, 124, 134)",
    "rgb(124, 252, 233)",
    "rgb(252, 132, 124)",
    "rgb(252, 182, 124)",
    "rgb(252, 240, 124)",
    "rgb(189, 100, 100)",
    "rgb(152, 100, 189)",
    "rgb(134, 189, 100)",
    "rgb(189, 119, 100)",
    "rgb(189, 162, 100)",
    "rgb(167, 189, 100)",
    "rgb(100, 189, 125)",
    "rgb(156, 189, 100)",
    "rgb(161, 201, 73)",
    "rgb(73, 201, 115)",
    "rgb(167, 90, 176)",
    "rgb(35, 168, 159)",
    "rgb(42, 168, 35)",
    "rgb(168, 93, 35)",
    "rgb(44, 201, 139)",
    "rgb(133, 44, 201)",
    "rgb(44, 180, 201)",
    "rgb(44, 201, 110)",
    "rgb(165, 201, 44)",
    "rgb(107, 44, 201)",
    "rgb(201, 44, 154)",
  ];

  const setChart = (
    headerType,
    arr,
    key1,
    key2,
    rowNum,
    cbTable,
    barChartType,
    isColorEditable
  ) => {
    let table = [headerType];

    arr?.forEach((el, i) => {
      if (i < rowNum) {
        if (isColorEditable) table.push([el[key1], el[key2], colorCode[i]]);
        else table.push([el[key1], el[key2], el["_id"]]);
      }
    });

    cbTable(table);
    barChartType.table = table;
  };

  // INIT
  useEffect(() => {
    setChart(
      subjectHeader,
      subjects,
      "name",
      "distance",
      subjectRow,
      setSubjectTable,
      barChartSubject,
      true
    ); // SUBJECT TABLE

    setChart(
      strandHeader,
      strands,
      "name",
      "sum",
      strandRow,
      setStrandTable,
      barChartStrand,
      true
    ); // STRAND TABLE

    setChart(
      pieHeader,
      strands,
      "name",
      "sum",
      strands.length,
      setPieTable,
      pieChartSubject,
      false
    ); // PIE CHART
  }, [subjectRow, strandRow]);

  useEffect(() => {}, []);

  useEffect(() => {
    // draw3DSphere();
  }, [subjectTable, strandTable, pieTable]);

  // FUNCTION
  // chart expandable
  const expandBarChart1 = (expanded) => {
    return (
      <section className={`col-12 col-lg-${expanded ? "12" : "6"} mt-5`}>
        <h6 className="roboto fw-semibold mb-4">Ranking Points by Subject</h6>

        {/*-- FILTER SECTION --*/}
        <form>
          <div className="form-group">
            <input
              type="number"
              className="form-control d-inline w-25"
              id="rowNumber1"
              aria-describedby="emailHelp"
              placeholder="Row"
              max={subjects.length}
              min={1}
              value={subjectRow}
              onChange={(ev) => {
                ev.preventDefault();
                setSubjectRow(ev.target.value);

                setChart(
                  subjectHeader,
                  subjects,
                  "name",
                  "distance",
                  ev.target.value,
                  setSubjectTable,
                  barChartSubject,
                  true
                ); // SUBJECT TABLE
              }}
            />

            {expanded ? (
              <button
                type="button"
                className="btn btn-dark text-light roboto px-4 ms-2 mb-1 fs-6 fw-semibold"
                onClick={() => {
                  setSubjectRow(DEFAULT_ROW);
                  setStrandRow(DEFAULT_ROW);
                  setFormationNum(0);
                }}
              >
                Scale Down
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary text-light roboto px-4 ms-2 mb-1 fs-6 fw-semibold"
                onClick={() => {
                  setSubjectRow(subjects.length);
                  setStrandRow(DEFAULT_ROW);
                  setFormationNum(1);
                }}
              >
                View Overall
              </button>
            )}

            <br />
            <small id="emailHelp" className="form-text text-muted">
              Type any number of row you only want to display
            </small>
          </div>
        </form>

        {subjectTable.length > 1 ? (
          <Chart
            chartType="ColumnChart"
            data={barChartSubject.data()}
            options={barChartSubject.option()}
            graph_id="UNIQUEID1"
            width={"100%"}
            height={"400px"}
            chartEvents={chartEvents(barChartSubject)}
            legend_toggle
          />
        ) : (
          <></>
        )}
      </section>
    );
  };

  const expandBarChart2 = (expanded) => {
    return (
      <section className={`col-12 col-lg-${expanded ? "12" : "6"} mt-5`}>
        <h6 className="roboto fw-semibold mb-4">Ranking Points by Strand</h6>

        {/*-- FILTER SECTION --*/}
        <form>
          <div className="form-group">
            <input
              type="number"
              className="form-control d-inline w-25"
              id="rowNumber2"
              aria-describedby="emailHelp"
              placeholder="Row"
              max={strands.length}
              min={1}
              value={strandRow}
              onChange={(ev) => {
                ev.preventDefault();
                setStrandRow(ev.target.value);

                setChart(
                  strandHeader,
                  strands,
                  "name",
                  "sum",
                  strandRow,
                  setStrandTable,
                  barChartStrand,
                  true
                ); // STRAND TABLE
              }}
            />

            {expanded ? (
              <button
                type="button"
                className="btn btn-dark text-light roboto px-4 ms-2 mb-1 fs-6 fw-semibold"
                onClick={() => {
                  setSubjectRow(DEFAULT_ROW);
                  setStrandRow(DEFAULT_ROW);
                  setFormationNum(0);
                }}
              >
                Scale Down
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary text-light roboto px-4 ms-2 mb-1 fs-6 fw-semibold"
                onClick={() => {
                  setStrandRow(strands.length);
                  setSubjectRow(DEFAULT_ROW);
                  setFormationNum(2);
                }}
              >
                View Overall
              </button>
            )}

            <br />
            <small id="emailHelp" className="form-text text-muted">
              Type any number of row you only want to display
            </small>
          </div>
        </form>

        {strandTable.length > 1 ? (
          <Chart
            chartType="ColumnChart"
            data={barChartStrand.data()}
            options={barChartStrand.option()}
            graph_id="UNIQUEID2"
            width={"100%"}
            height={"400px"}
            chartEvents={chartEvents(barChartStrand)}
            legend_toggle
          />
        ) : (
          <></>
        )}
      </section>
    );
  };

  const expandPieChart = (expanded) => {
    return (
      <section className={`col-12 col-lg-${expanded ? "12" : "6"} mt-5`}>
        <h6 className="roboto fw-semibold mb-3">Strand Ranking points by %</h6>
        {pieTable.length > 1 ? (
          <div className="w-100" style={{ height: "auto" }}>
            {pieTable.length != 0 ? (
              <Radar
                data={radarChart.data(pieTable)}
                options={{
                  ...radarChart.option(),
                  onClick: (ev, elements) =>
                    radarChart.onClickListener(
                      ev,
                      elements,
                      pieTable,
                      subjectTypeResults,
                      setSubjectTypeResults
                    ),
                }}
              />
            ) : (
              <></>
            )}

            {/* 
            <Chart
              chartType="PieChart"
              data={pieChartSubject.data()}
              options={pieChartSubject.option()}
              graph_id="UNIQUEID3"
              width={"100%"}
              height={"800px"}
              chartEvents={chartEvents(pieChartSubject)}
              legend_toggle
            />
            */}
          </div>
        ) : (
          <></>
        )}
      </section>
    );
  };

  // expand formation
  const expandFormation = (num) => {
    switch (num) {
      case 1:
        return (
          <>
            {expandBarChart1(true)}
            {expandBarChart2(false)}
            {expandPieChart(false)}
          </>
        );
      case 2:
        return (
          <>
            {expandBarChart2(true)}
            {expandBarChart1(false)}
            {expandPieChart(false)}
          </>
        );
      default:
        return (
          <>
            {expandBarChart1(false)}
            {expandBarChart2(false)}
            {expandPieChart(true)}
          </>
        );
    }
  };

  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-3 p-md-4 p-lg-5">
          <h2 className="card-title poppins">Your Assessment Result</h2>
          <p className="card-text my-4 roboto">
            Thank you for completing all the assessments. Your dedication to
            this process is truly appreciated. We are excited to present your
            comprehensive results, which encapsulate a detailed overview of your
            academic journey. Within this report, you will find a graphical
            representation of your performance across various subjects and
            strands. This visualization aims to provide you with valuable
            insights and analysis, helping you identify preferences and
            strengths. It encompasses not only subjects but also the diverse
            strands available for exploration. Feel free to delve into the data,
            explore the connections, and discover the wealth of information at
            your fingertips. We believe that understanding your results in this
            holistic manner will empower you to make informed decisions about
            your academic path. Once again, thank you for your participation,
            and we wish you continued success on your educational journey.
          </p>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#" + modalType.RESULT}
            className="btn btn-dark roboto px-4 fs-6 fw-semibold"
          >
            TOP 3 Recomended Strands
          </button>

          {/*-- HEADER ASSESSMENT RESULT --*/}
          <section className="row">
            {expandFormation(formationNum)}
            {/* 
            <section className="col-6 mt-5" id="3DWebGL-cont">
              <h6 className="roboto fw-semibold mb-3">KNN by 3D Coordinates</h6>
              <canvas
                id="3DWebGL"
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "black",
                }}
              ></canvas>
            </section>
            */}
          </section>
        </div>
      </header>
    </>
  );
}

export default ResultHeader;
