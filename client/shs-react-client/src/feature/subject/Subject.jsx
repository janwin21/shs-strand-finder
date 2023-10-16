import SubjectType from "./SubjectType";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import SubjectP from "../../js/model/SubjectP";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { subjectData } from "../../js/json-structure/subject";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

function Subject({ viewableSidebar, viewablePE }) {
  // FETCH
  const [data, setData] = useState(subjectData);

  useEffect(() => {
    const fetchData = async () => {
      const dataD = await new SubjectP().read();
      console.log("TRIGGER11", dataD.subjectTypes);
      setData({
        ...data,
        subjectTypes: dataD.subjectTypes,
      });
      // console.log(databaseData);
    };

    fetchData();
  }, []);

  // UPDATE subject data
  useEffect(() => {}, [data]);

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
                  {data.subjectTypes.map((subjectType, i) => {
                    return <SubjectType key={i} subjectType={subjectType} />;
                  })}
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
                    {data.subjectTypes.map((subjectType, i) => {
                      return <SubjectType key={i} subjectType={subjectType} />;
                    })}
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
