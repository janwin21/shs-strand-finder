import ResultAssessment from "./ResultAssessment";
import ResultPE from "./ResultPE";
import ResultHeader from "./ResultHeader";
import ResultSidebar from "./ResultSidebar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

function Result({ viewableSidebar }) {
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
                  <ResultHeader />
                  <ResultAssessment />
                  <ResultPE />
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
                <ResultHeader />
                <ResultAssessment />
                <ResultPE />
              </section>
              <section
                className="col-3 auto-overflow position-sticky top-0 end-0 justify-content-end bg-dark m-0 p-0"
                style={{ height: "94vh" }}
              >
                <ResultSidebar />
              </section>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(Result);
