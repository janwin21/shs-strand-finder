// import { assessmentData } from "../../js/json-structure/assessment";
// import PEPanel from "./PEPanel";
// import DashboardSidebar from "../dashboard/DashboardSidebar";
// import PEResult from "../layout/PEResult";
import { PENoSidebar, PEWithSidebar } from "./PELayout";
import PEP from "../../js/model/PEP";
import Localhost from "../../js/model/LocalHost";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { indexRoute, dashboardRoute } from "../../route/routes";
import { action } from "../../redux/action";
import Loading from "../loading/Loading";
import $ from "jquery";
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
    setNotif: (message) =>
      dispatch({
        type: action.SET_NOTIF,
        notifMessage: message,
      }),
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

function _Assessment({
  viewableSidebar,
  viewablePE,
  loginUser,
  fastData,
  selectedStrand,
  tutorialCount,
  setNotif,
  fastAccess,
  setSelectedStrand,
  viewTutorial,
}) {
  console.log("RENDER TRIGGER: _PE");
  const navigate = useNavigate();

  // UML
  const [loading, load] = useState(true);
  const [currentPE, setCurrentPE] = useState(null);
  const [currentIndex, nextIndex] = useState(0);
  const [choice, setChoice] = useState("");
  const [pep] = useState(new PEP());

  const popupNotif = () => {
    setNotif({
      title: "Assessment Finished",
      body: "This assessment was already answered. You can now check your result at your sidebar. After receiving this notification, you will be redirect to your Dashboard.",
    });
    $("#notif-modal").click();
  };

  // FAST ACCESS
  const fast = async () => {
    const token = Localhost.sessionKey("user");
    const fastDataD = await pep.fastAssess(token);
    fastAccess({ ...fastData, filteredPes: fastDataD.filteredPes });

    if (!fastDataD?.filteredPes) {
      popupNotif();
      return navigate(dashboardRoute.path);
    }

    setCurrentPE(fastDataD.filteredPes[currentIndex]);
    setSelectedStrand(fastDataD.selectedStrand);
    if (tutorialCount != 0) viewTutorial(true);
  };

  // INITIAL ACCESS
  const init = async () => {
    const token = Localhost.sessionKey("user");
    const dataD = await pep.assess(token);

    if (dataD?.error) {
      popupNotif();
      return navigate(dashboardRoute.path);
    }

    if (dataD?.response?.data?.error) {
      setNotif({
        title: "Server Problem Detected",
        body: dataD?.response?.data?.error,
      });
      $("#notif-modal").click();
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      fastAccess(dataD);
      setCurrentPE(dataD.filteredPes[currentIndex]);
      setSelectedStrand(dataD.selectedStrand);
    }
  };

  const fetchData = async () => {
    if (!Localhost.has("user")) {
      navigate(indexRoute.path);
      return;
    }

    load(true);
    if (fastData) await fast();
    else await init();
    load(false);
  };

  useEffect(() => {
    TimeWatch.cancel();
    fetchData();
  }, []);

  // FUNCTION
  const answer = async () => {
    await new PEP().answer({
      user: fastData.user.id,
      pe: currentPE._id,
      yes: choice === "a",
    });
  };

  const nextCall = async () => {
    if (choice.length != 0) {
      await answer();
      setCurrentPE(fastData?.filteredPes[currentIndex + 1]);
      nextIndex(currentIndex + 1);
      setChoice("");
    }
  };

  const submit = async () => {
    if (choice.length != 0) {
      await answer();
      setCurrentPE(null);
      nextIndex(0);
      setChoice("");
      navigate(dashboardRoute.path);
    }
  };

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
          <PENoSidebar
            currentPE={currentPE}
            choice={choice}
            setChoice={setChoice}
            cb={() =>
              currentIndex < fastData.filteredPes.length - 1
                ? nextCall()
                : submit()
            }
            isLast={currentIndex < fastData.filteredPes.length - 1}
          />
        ) : (
          <PEWithSidebar
            viewablePE={viewablePE}
            pe={fastData}
            currentPE={currentPE}
            choice={choice}
            setChoice={setChoice}
            cb={() =>
              currentIndex < fastData.filteredPes.length - 1
                ? nextCall()
                : submit()
            }
            isLast={currentIndex < fastData.filteredPes.length - 1}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(_Assessment);
