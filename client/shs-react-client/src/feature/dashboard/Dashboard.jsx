// import DashboardHeader from "./DashboardHeader";
// import DashboardSidebar from "./DashboardSidebar";
// import DashboardStrandType from "./DashboardStrandType";
// import PEResult from "../layout/PEResult";
// import { dashboardData } from "../../js/json-structure/dashboard";
import Loading from "../loading/Loading";
import { DashboardNoSideBar, DashboardWithSidebar } from "./DashboardLayout";
import DashboardD from "../../js/model/Dashboard";
import Localhost from "../../js/model/LocalHost";
import SelectedStrand from "../../js/model/SelectedStrand";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { indexRoute } from "../../route/routes";
import { action } from "../../redux/action";
import $ from "jquery";
import TimeWatch from "../../js/TimeWatch";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    isWelcome: state.store.isWelcome,
    fastData: state.store.fastData,
    selectedStrand: state.store.selectedStrand,
    tutorialCount: state.store.tutorialCount,
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
    welcome: (isWelcome) => dispatch({ type: action.SET_WELCOME, isWelcome }),
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

function Dashboard({
  viewableSidebar,
  viewablePE,
  isWelcome,
  fastData,
  selectedStrand,
  tutorialCount,
  loginUser,
  setNotif,
  welcome,
  fastAccess,
  setSelectedStrand,
  viewTutorial,
}) {
  console.log("RENDER TRIGGER: DASHBOARD");
  const navigate = useNavigate();

  // UML
  const [loading, load] = useState(true);
  const [isFinish, finish] = useState(false);
  const [notifBtn, setNotifBtn] = useState(null);
  const [dashboardD] = useState(new DashboardD());

  // FUNCTION
  const setStrand = async (strand) => {
    // VALIDATION
    const user = fastData?.user;

    if (user.isAdmin) {
      setNotif({
        title: "For Student Use",
        body: "Student can only use this feature!",
      });
      notifBtn.click();
    } else {
      const newSelectedStrand = new SelectedStrand();
      await newSelectedStrand.create(fastData.user.id, strand._id);
      setSelectedStrand({
        ...strand,
        userID: fastData.user.id,
      });
    }
  };

  // FAST ACCESS
  const fast = async () => {
    const fastDataD = await dashboardD.fastRead();
    fastAccess({
      ...fastData,
      strandTypes: fastDataD.strandTypes,
    });
    finish(
      fastData.pendingSubjects.length == 0 &&
        fastData.personalEngagements.length != 0
    );
    if (tutorialCount != 0) viewTutorial(true);
  };

  // INITIAL ACCESS
  const init = async () => {
    if (!Localhost.has("user")) navigate(indexRoute.path);
    const token = Localhost.sessionKey("user");
    const dataD = await dashboardD.read(token);

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      await update();

      // SET WELCOME NOTIF IN FIRST VISIT
      if (isWelcome == true) {
        $(() => {
          $("#welcome-modal").click();
        });
        welcome(false);
      }
    }
  };

  const update = async () => {
    if (!Localhost.has("user")) navigate(indexRoute.path);
    console.log("UPDATE!!!");

    const token = Localhost.sessionKey("user");
    const dataD = await dashboardD.read(token);

    if (!dataD?.response?.data?.error) {
      loginUser(dataD.user);
      fastAccess(dataD);
      setSelectedStrand(dataD.selectedStrand);
      finish(
        dataD.pendingSubjects.length == 0 &&
          dataD.personalEngagements.length != 0
      );
    }
  };

  const fetchData = async () => {
    load(true);
    if (fastData) await fast();
    else await init();
    TimeWatch.start(update);
    load(false);
  };

  useEffect(() => {
    TimeWatch.cancel();
    $(() => {
      setNotifBtn($("#notif-modal"));
      fetchData();
    });
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
          <DashboardNoSideBar
            data={fastData}
            isFinish={isFinish}
            cb={setStrand}
          />
        ) : (
          <DashboardWithSidebar
            viewablePE={viewablePE}
            data={fastData}
            selectedStrand={selectedStrand}
            isFinish={isFinish}
            cb={setStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
