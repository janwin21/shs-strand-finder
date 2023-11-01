import ResultAssessment from "./ResultAssessment";
import ResultPE from "./ResultPE";
import ResultHeader from "./ResultHeader";
import ResultSidebar from "./ResultSidebar";
import PEResult from "../layout/PEResult";
import ResultD from "../../js/model/Result";
import Localhost from "../../js/model/LocalHost";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resultData } from "../../js/json-structure/result/";
import { indexRoute } from "../../route/routes";
import { action } from "../../redux/action";
import "../../js/result";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
  };
};

function Result({ viewableSidebar, viewablePE, loginUser }) {
  const navigate = useNavigate();

  // FETCH
  const [data, setData] = useState(resultData);

  // UML
  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = Localhost.sessionKey("user");
      const dataD = await new ResultD().read(token);

      if (dataD?.response?.data?.error) {
        navigate(indexRoute.path);
      } else {
        loginUser(dataD.user);
        setData({
          ...data,
          user: dataD.user,
          count: dataD.count,
          orderedSubjects: dataD.orderedSubjects,
          orderedFinalResult: dataD.orderedFinalResult,
          peStrandResults: dataD.peStrandResults,
          subjectTypeResults: dataD.subjectTypeResults,
          preferredStrand: dataD.predictedStrand, // PREDICTED STRAND
          personalEngagements: dataD.personalEngagements,
          subjects: dataD.subjects,
          pendingSubjects: dataD.pendingSubjects,
          strandTypes: dataD.strandTypes,
        });
        setSelectedStrand(dataD.selectedStrand);
      }
    };

    fetchData();
  }, []);

  // UPDATE dashboard data
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
                  {data ? (
                    <ResultHeader
                      subjects={data.orderedSubjects}
                      strands={data.orderedFinalResult}
                    />
                  ) : (
                    <></>
                  )}
                  <ResultAssessment subjectTypes={data?.subjectTypeResults} />
                  <ResultPE strands={data?.peStrandResults} />
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
                    {data ? (
                      <ResultHeader
                        subjects={data.orderedSubjects}
                        strands={data.orderedFinalResult}
                      />
                    ) : (
                      <></>
                    )}
                    <ResultAssessment subjectTypes={data?.subjectTypeResults} />
                    <ResultPE strands={data?.peStrandResults} />
                  </>
                ) : (
                  <>
                    <PEResult
                      preferredStrand={data?.preferredStrand}
                      personalEngagements={data?.personalEngagements}
                    />
                    ;
                  </>
                )}
              </section>
              <ResultSidebar
                user={data?.user}
                subjects={data?.subjects}
                predictedStrand={data?.preferredStrand}
              />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
