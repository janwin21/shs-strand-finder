// import AssessmentPanel from "./AssessmentPanel";
// import DashboardSidebar from "../dashboard/DashboardSidebar";
// import PEResult from "../layout/PEResult";
// import { assessmentData } from "../../js/json-structure/assessment";
import Localhost from "../../js/model/LocalHost";
import SubjectP from "../../js/model/SubjectP";
import AnswerP from "../../js/model/Answer";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  indexRoute,
  dashboardRoute,
  _assessmentRoute,
  // viewSubjectRoute,
} from "../../route/routes";
import { action } from "../../redux/action";
import { AssessmentNoSidebar, AssessmentWithSidebar } from "./AssessmentLayout";
import Loading from "../loading/Loading";
import $ from "jquery";
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
    setNotif: (message) =>
      dispatch({
        type: action.SET_NOTIF,
        notifMessage: message,
      }),
    fastAccess: (fastData) =>
      dispatch({ type: action.SET_FAST_DATA, fastData }),
    setSelectedStrand: (selectedStrand) =>
      dispatch({ type: action.SET_SELECTED_STRAND, selectedStrand }),
  };
};

function _Assessment({
  viewableSidebar,
  viewablePE,
  fastData,
  selectedStrand,
  loginUser,
  setNotif,
  fastAccess,
  setSelectedStrand,
}) {
  console.log("RENDER TRIGGER: _ASSESSMENT");
  const navigate = useNavigate();
  const { subjectID } = useParams();

  // UML
  const [loading, load] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentIndex, nextIndex] = useState(0);
  const [leaveCount, setLeaveCount] = useState(0);
  const [choice, setChoice] = useState(null);
  const [subjectP] = useState(new SubjectP());

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
    const fastDataD = await subjectP.fastReadAssessment(subjectID, token);
    fastAccess({
      ...fastData,
      isLast: fastDataD.isLast,
      subject: fastDataD.subject,
      questions: fastDataD.questions,
    });

    if (!fastDataD?.questions) {
      popupNotif();
      return navigate(dashboardRoute.path);
    }

    setCurrentQuestion(fastDataD?.questions[currentIndex]);
  };

  // INITIAL ACCESS
  const init = async () => {
    const token = Localhost.sessionKey("user");
    const dataD = await subjectP.readAssessment(subjectID, token);

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
      setCurrentQuestion(dataD.questions[currentIndex]);
      setSelectedStrand(dataD.selectedStrand);
    }
  };

  const callAccess = async () => {
    if (!Localhost.has("user")) {
      navigate(indexRoute.path);
      return;
    }

    load(true);
    setLeaveCount(0);
    if (fastData) await fast();
    else await init();
    load(false);
  };

  useEffect(() => {
    TimeWatch.cancel();
    callAccess();
  }, []);

  // UPDATE assessment data
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User has switched to a different tab or performed an action outside the tab
        // Place your code here to handle the user's inactivity
        setLeaveCount(leaveCount + 1);
        console.log(
          "USER WAS DETECTED OUTSIDE THE SYSTEM WHILE DOING AN ASSESSMENT: " +
            (leaveCount + 1)
        );
      } else {
        // User has returned to the tab
        // Place your code here to handle the user's return
        console.log("USER IS DOING AN ASSESSMENT");
      }
    };

    // Add event listener for visibility change
    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
      false
    );

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
        false
      );
    };
  }, [leaveCount]);

  // FUNCTION
  const select = (user, answerKey, correct, letter) => {
    setChoice({ user, answerKey, correct, noOfUnVisit: leaveCount, letter });
  };

  const submit = async (ev, next) => {
    if (choice.length != 0) {
      await new AnswerP().create(choice);
      setCurrentQuestion(fastData.questions[currentIndex + 1]);
      nextIndex(currentIndex + 1);
      setChoice(null);
      setLeaveCount(0);

      if (currentIndex >= fastData.questions.length - 1) {
        const pendingSubjects = fastData.pendingSubjects;
        pendingSubjects.shift();
        fastAccess({ ...fastData, pendingSubjects });

        if (next && pendingSubjects.length != 0) {
          load(true);
          navigate(
            _assessmentRoute.replace("subjectID", pendingSubjects[0]._id)
          );
          window.location.reload();
          return;
        }

        navigate(dashboardRoute.path);
        window.location.reload();
        return;
      }

      $(() => {
        $(!viewableSidebar ? "main" : ".scrollable-section").animate({
          scrollTop: 0,
        });
      });
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
          <AssessmentNoSidebar
            data={fastData}
            choice={choice}
            currentQuestion={currentQuestion}
            select={select}
            submit={submit}
            currentIndex={currentIndex}
          />
        ) : (
          <AssessmentWithSidebar
            viewablePE={viewablePE}
            data={fastData}
            choice={choice}
            currentQuestion={currentQuestion}
            select={select}
            submit={submit}
            currentIndex={currentIndex}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(_Assessment);
