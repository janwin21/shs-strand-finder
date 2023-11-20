// import PEResult from "../layout/PEResult";
// import ViewSubjectC from "./component/ViewSubjectC";
// import DashboardSidebar from "../dashboard/DashboardSidebar";
import Localhost from "../../js/model/LocalHost";
import ViewD from "../../js/model/View";
import Loading from "../loading/Loading";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { indexRoute } from "../../route/routes";
import { dashboardData } from "../../js/json-structure/dashboard";
import { action } from "../../redux/action";
import {
  ViewSubjectNoSidebar,
  ViewSubjectWithSidebar,
} from "./ViewSubjectLayout";
import TimeWatch from "../../js/TimeWatch";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    fastData: state.store.fastData,
    selectedStrand: state.store.selectedStrand,
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

function ViewSubject({
  viewableSidebar,
  viewablePE,
  fastData,
  selectedStrand,
  loginUser,
  fastAccess,
  setSelectedStrand,
}) {
  const navigate = useNavigate();

  // UML
  const [loading, load] = useState(true);
  const [viewSubjectD] = useState(new ViewD());

  // FAST ACCESS
  const fast = async () => {
    const fastDataD = await viewSubjectD.fastViewSubject();
    fastAccess({ ...fastData, viewableSubjects: fastDataD.viewableSubjects });
  };

  // INITIAL ACCESS
  const init = async () => {
    if (!Localhost.has("user")) navigate(indexRoute.path);

    const token = Localhost.sessionKey("user");
    const dataD = await viewSubjectD.viewSubject(token);

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      fastAccess(dataD);
      setSelectedStrand(dataD.selectedStrand);
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
        className={`login bg-dark container-fluid ${
          !viewableSidebar ? "auto-overflow" : "position-relative"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <ViewSubjectNoSidebar data={fastData} />
        ) : (
          <ViewSubjectWithSidebar
            viewablePE={viewablePE}
            data={fastData}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSubject);
