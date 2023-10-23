import PEPanel from "./PEPanel";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { assessmentData } from "../../js/json-structure/assessment";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

function _Assessment({ viewableSidebar, viewablePE }) {
  // FETCH
  const [data, setData] = useState(assessmentData);

  // UML
  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });

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
                  <PEPanel />
                  {/*-- NEXT --*/}
                  <button className="btn btn-dark float-end roboto px-4">
                    NEXT
                  </button>
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
              </div>
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
              <section
                className={`col-9 h-100 auto-overflow position-relative ${
                  !viewablePE ? "pb-4 px-5" : "p-0"
                }`}
              >
                {!viewablePE ? (
                  <>
                    {/*-- NO SIDEBAR --*/}
                    <div className="container">
                      <div className="row">
                        <section className="col-12 pb-4">
                          <PEPanel />
                          {/*-- NEXT --*/}
                          <button className="btn btn-dark float-end roboto px-4">
                            NEXT
                          </button>
                        </section>
                        {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <PEResult
                      preferredStrand={data.preferredStrand}
                      personalEngagements={data.personalEngagements}
                    />
                    ;
                  </>
                )}
              </section>
              <DashboardSidebar
                user={data.user}
                selectedStrand={selectedStrand}
                subjects={data.subjects}
                pendingSubjects={data.pendingSubjects}
              />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(_Assessment);
