// import ResultAssessment from "./ResultAssessment";
// import ResultPE from "./ResultPE";
// import ResultHeader from "./ResultHeader";
// import ResultSidebar from "./ResultSidebar";
// import PEResult from "../layout/PEResult";
// import { resultData } from "../../js/json-structure/result/";
// import Localhost from "../../js/model/LocalHost";
import ResultD from "../../js/model/Result";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { accessRoute, indexRoute, resultAdminRoute } from "../../route/routes";
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
    setNotif: (message) =>
      dispatch({
        type: action.SET_NOTIF,
        notifMessage: message,
      }),
  };
};

function ResultAdmin({ viewableSidebar, viewablePE, loginUser, setNotif }) {
  const navigate = useNavigate();
  const { userID } = useParams();
  const [fastData, fastAccess] = useState(null);

  // UML
  const [loading, load] = useState(true);
  const [resultD] = useState(new ResultD());

  const popupNotif = () => {
    setNotif({
      title: "Unfinished Assessment",
      body: "The selected user is still not finish from his / her assessment.",
    });
    $("#notif-modal").click();
  };

  // FAST ACCESS
  const fast = async () => {};

  // INITIAL ACCESS
  const init = async () => {
    const dataD = await resultD.fastFindResult(userID);

    if (dataD?.response?.data?.error) {
      popupNotif();
      navigate(accessRoute.path);
    } else {
      loginUser({
        ...dataD.user,
        orderedFinalResult: dataD.orderedFinalResult,
      });
      fastAccess(dataD);

      $(() => {
        $("#result-modal").click();
      });
    }
  };

  const fetchData = async () => {
    load(true);
    await init();
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultAdmin);
