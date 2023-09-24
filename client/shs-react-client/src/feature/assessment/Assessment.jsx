import AssessmentUnanswer from "./AssessmentUnanswer";
import AssessmentAnswered from "./AsessmentAnswered";
import AssessmentSidebar from "./AssessmentSidebar";
import { connect } from "react-redux";
import { useState } from "react";
import { assessmentData } from "../../js/json-structure/assessment";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

function Assessment({ viewableSidebar }) {
  // FETCH
  const [data, fetchData] = useState(assessmentData);

  return (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login container-fluid ${
          !viewableSidebar ? "auto-overflow" : "position-relative"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="container">
              <div className="row">
                <section className="col-12 pb-4">
                  {/*-- SUBJECT CONTAINER --*/}
                  <section className="strand-type-container mt-5">
                    <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                      SUBJECT NAME ASSESSMENT
                    </h5>
                    <section className="row" style={{ gap: "0.75rem" }}>
                      <AssessmentUnanswer />
                      <AssessmentAnswered />
                    </section>
                  </section>
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
              </div>
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className="row h-100">
              <section className="col-9 h-100 auto-overflow position-relative pb-4 px-5">
                {/*-- STRAND TYPE CONTAINER --*/}
                <section className="strand-type-container mt-5">
                  <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                    SUBJECT NAME ASSESSMENT
                  </h5>
                  <section className="row" style={{ gap: "0.75rem" }}>
                    <AssessmentUnanswer />
                    <AssessmentAnswered />
                  </section>
                </section>
              </section>
              <AssessmentSidebar />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(Assessment);
