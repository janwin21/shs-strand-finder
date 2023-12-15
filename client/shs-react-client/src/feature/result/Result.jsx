// import ResultAssessment from "./ResultAssessment";
// import ResultPE from "./ResultPE";
// import ResultHeader from "./ResultHeader";
// import ResultSidebar from "./ResultSidebar";
// import PEResult from "../layout/PEResult";
// import { resultData } from "../../js/json-structure/result/";
import ResultD from "../../js/model/Result";
import Localhost from "../../js/model/LocalHost";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { indexRoute } from "../../route/routes";
import { action } from "../../redux/action";
import Loading from "../loading/Loading";
import "../../js/result";
import $ from "jquery";
import { ResultNoSidebar, ResultWithSidebar } from "./ResultLayout";
import TimeWatch from "../../js/TimeWatch";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    fastData: state.store.fastData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
    fastAccess: (fastData) =>
      dispatch({ type: action.SET_FAST_DATA, fastData }),
    setSelectedStrand: (selectedStrand) =>
      dispatch({ type: action.SET_SELECTED_STRAND, selectedStrand }),
  };
};

function Result({
  viewableSidebar,
  viewablePE,
  fastData,
  loginUser,
  fastAccess,
  setSelectedStrand,
}) {
  const navigate = useNavigate();

  // UML
  const [loading, load] = useState(true);
  const [resultD] = useState(new ResultD());

  // FAST ACCESS
  const fast = async () => {
    const token = Localhost.sessionKey("user");
    const fastDataD = await resultD.fastRead(token);
    fastAccess({
      ...fastData,
      count: fastDataD.count,
      orderedSubjects: fastDataD.orderedSubjects,
      orderedFinalResult: fastDataD.orderedFinalResult,
      subjectTypeResults: fastDataD.subjectTypeResults,
      predictedStrand: fastDataD.predictedStrand,
      peStrandResults: fastDataD.peStrandResults,
    });
    loginUser({ orderedFinalResult: fastDataD.orderedFinalResult });
  };

  // INITIAL ACCESS
  const init = async () => {
    const token = Localhost.sessionKey("user");
    const dataD = await resultD.read(token);

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      loginUser({
        ...dataD.user,
        orderedFinalResult: dataD.orderedFinalResult,
      });
      fastAccess(dataD);
      setSelectedStrand(dataD.selectedStrand);

      $(() => {
        $("#result-modal").click();
      });
    }
  };

  const fetchData = async () => {
    load(true);
    if (!Localhost.has("user")) navigate(indexRoute.path);
    if (fastData) await fast();
    else await init();
    load(false);
  };

  useEffect(() => {
    TimeWatch.cancel();
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login container-fluid ${
          !viewableSidebar ? "auto-overflow" : "position-relative"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <ResultNoSidebar data={fastData} />
        ) : (
          <ResultWithSidebar viewablePE={viewablePE} data={fastData} />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
