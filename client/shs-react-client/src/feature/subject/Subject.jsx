import SubjectType from "./SubjectType";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { connect } from "react-redux";
import { useState } from "react";
import { subjectData } from "../../js/json-structure/subject";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

function Subject({ viewableSidebar }) {
  // FETCH
  const [data, fetchData] = useState(subjectData);

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
                  {data.subjectTypes.map((subjectType) => {
                    return (
                      <SubjectType
                        key={subjectType.id}
                        subjectType={subjectType}
                      />
                    );
                  })}
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
                {data.subjectTypes.map((subjectType) => {
                  return (
                    <SubjectType
                      key={subjectType.id}
                      subjectType={subjectType}
                    />
                  );
                })}
              </section>
              <DashboardSidebar
                user={data.user}
                selectedStrand={data.selectedStrand}
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

export default connect(mapStateToProps, null)(Subject);
