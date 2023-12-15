import { useEffect, useState } from "react";
import DonutChartAssessment from "../../js/chart/DonutChartAssessment";
import ResultCard from "./ResultCard";

function ResultAssessment({ subjectTypes = [] }) {
  // DONUT CHART
  const [donutChartAssessments, setDonutChartAssessments] = useState([]);
  const [btns, setBtns] = useState([]);

  // TABLES
  const assessmentHeader = ["Answer", "Ticks"];
  const [assessmentTable, setAssessmentTable] = useState([]);

  useEffect(() => {
    const donutChartArr = [];

    subjectTypes?.forEach((st) => {
      st.subjects.forEach((s) => {
        // ASSESSMENT TABLE
        const table = [assessmentHeader];
        const newDonutChartAssessment = new DonutChartAssessment();

        table.push(["Correct", s.score]);
        table.push(["Wrong", s.mistakes]);

        setAssessmentTable(table);
        newDonutChartAssessment.table = table;
        donutChartArr.push(newDonutChartAssessment);
        setDonutChartAssessments(donutChartArr);
      });

      setBtns[[...btns, false]];
    });
  }, [subjectTypes]);

  useEffect(() => {}, [assessmentTable]);

  // DISPLAY FUNCTION
  const displayAssessmentChart = () => {
    let positionCounter = 0;

    const outputSt = subjectTypes.map((st, index) => (
      <>
        {/*-- COL --*/}
        <section
          key={st._id}
          className="col-6 col-md-12 col-lg-4 pt-3 g-2 justify-content-center align-items-center"
        >
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id={"flush-headingOne" + index}>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#flush-collapseOne" + index}
                  aria-expanded="true"
                  aria-controls={"flush-collapseOne" + index}
                >
                  <h5 className="text-center poppins text-uppercase fw-semibold">
                    {st.name}
                  </h5>
                </button>
              </h2>
              <div
                id={"flush-collapseOne" + index}
                class="accordion-collapse collapse show"
                aria-labelledby={"flush-headingOne" + index}
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body p-0">
                  {st.subjects.map((s) => (
                    <ResultCard
                      key={s._id}
                      subject={s}
                      donutChart={donutChartAssessments[positionCounter++]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    ));

    return outputSt;
  };

  return (
    <>
      {/*-- ASSESSMENT SCORE CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h4 className="w-100 text-primary poppins border-bottom border-dark text-uppercase fw-semibold">
          ASSESSMENT SCORES
        </h4>
        <section className="row mt-3 g-2">
          {/*-- USE MODULUS FOR ORGANIZATION --*/}
          {displayAssessmentChart()}
        </section>
      </section>
    </>
  );
}

export default ResultAssessment;
