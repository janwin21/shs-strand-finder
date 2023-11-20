// import SubjectType from "./SubjectType";
// import DashboardSidebar from "../dashboard/DashboardSidebar";
// import PEResult from "../layout/PEResult";
// import SubjectHeader from "./SubjectHeader";
// import { subjectData } from "../../js/json-structure/subject";
import SubjectP from "../../js/model/SubjectP";
import Localhost from "../../js/model/LocalHost";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { indexRoute, viewSubjectRoute } from "../../route/routes";
import { action } from "../../redux/action";
import { SubjectNoSidebar, SubjectWithSidebar } from "./SubjectLayout";
import Loading from "../loading/Loading";
import TimeWatch from "../../js/TimeWatch";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    fastData: state.store.fastData,
    selectedStrand: state.store.selectedStrand,
    tutorialCount: state.store.tutorialCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
    fastAccess: (fastData) =>
      dispatch({ type: action.SET_FAST_DATA, fastData }),
    setSelectedStrand: (selectedStrand) =>
      dispatch({ type: action.SET_SELECTED_STRAND, selectedStrand }),
    viewTutorial: (viewableTutorial) =>
      dispatch({
        type: action.VIEW_TUTORIAL,
        viewableTutorial,
      }),
  };
};

function Subject({
  viewableSidebar,
  viewablePE,
  fastData,
  selectedStrand,
  tutorialCount,
  loginUser,
  fastAccess,
  setSelectedStrand,
  viewTutorial,
}) {
  const navigate = useNavigate();

  // UML
  const [type, setType] = useState("subject-type");
  const [loading, load] = useState(true);
  const [subjectP] = useState(new SubjectP());

  // FAST ACCESS
  const fast = async () => {
    const fastDataD = await subjectP.fastRead();
    fastAccess({
      ...fastData,
      subjectTypes: fastDataD.subjectTypes,
      strands: fastDataD.strands,
    });
    if (tutorialCount != 0) viewTutorial(true);
  };

  // INITIAL ACCESS
  const init = async () => {
    if (!Localhost.has("user")) navigate(indexRoute.path);

    const token = Localhost.sessionKey("user");
    const dataD = await subjectP.read(token);
    console.log(dataD);

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      fastAccess(dataD);
      setSelectedStrand(dataD.selectedStrand);
      load(false);
    }
  };

  const fetchData = async () => {
    load(true);
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
          <SubjectNoSidebar data={fastData} type={type} setType={setType} />
        ) : (
          <SubjectWithSidebar
            viewablePE={viewablePE}
            data={fastData}
            type={type}
            setType={setType}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
