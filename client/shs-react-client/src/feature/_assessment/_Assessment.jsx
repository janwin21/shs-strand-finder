import AssessmentPanel from "./AssessmentPanel";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import Localhost from "../../js/model/LocalHost";
import SubjectP from "../../js/model/SubjectP";
import AnswerP from "../../js/model/Answer";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assessmentData } from "../../js/json-structure/assessment";
import {
  indexRoute,
  dashboardRoute,
  viewSubjectRoute,
} from "../../route/routes";
import { action } from "../../redux/action";
import Loading from "../loading/Loading";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    subjectForPreparation: state.store.subjectForPreparation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
  };
};

function _Assessment({
  viewableSidebar,
  viewablePE,
  subjectForPreparation,
  loginUser,
}) {
  const navigate = useNavigate();

  // FETCH
  const [data, setData] = useState(assessmentData);
  const [leaveCount, setLeaveCount] = useState(0);
  const [subjectID, setSubjectID] = useState(subjectForPreparation._id);

  // UML
  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });
  const [loading, load] = useState(true);

  const [choice, setChoice] = useState({
    user: "",
    answerKey: "",
    correct: true,
    noOfUnVisit: leaveCount,
  });

  const callAccess = async () => {
    load(true);
    setLeaveCount(0);
    const token = Localhost.sessionKey("user");
    const dataD = await new SubjectP().readAssessment(subjectID, token);

    if (dataD?.error) {
      console.log(dataD.error);
      return navigate(dashboardRoute.path);
    }

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      setData({
        ...data,
        user: dataD.user,
        isLast: dataD.isLast,
        subject: dataD.subject,
        question: dataD.question,
        preferredStrand: dataD.preferredStrand,
        personalEngagements: dataD.personalEngagements,
        subjects: dataD.subjects,
        pendingSubjects: dataD.pendingSubjects,
        strandTypes: dataD.strandTypes,
      });
      setSelectedStrand(dataD.selectedStrand);
      load(false);
    }
  };

  useEffect(() => {
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
            leaveCount
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
  useEffect(() => {}, [data]);

  // FUNCTION
  const select = (user, answerKey, correct, leaveCount) => {
    setChoice({ user, answerKey, correct, noOfUnVisit: leaveCount });
  };

  const submit = async () => {
    await new AnswerP().create(choice);
    await callAccess();
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
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="container">
              <div className="row">
                <section className="col-12 pb-4">
                  <AssessmentPanel
                    user={data.user}
                    subject={data.subject}
                    question={data.question}
                    cb={(user, answerKey, correct, noOfUnVisit) =>
                      select(user, answerKey, correct, noOfUnVisit)
                    }
                  />
                  {/*-- NEXT --*/}
                  <button
                    className="btn btn-dark float-end roboto px-4"
                    onClick={submit}
                  >
                    {!data?.isLast ? "NEXT" : "SUBMIT"}
                  </button>
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
                className={`col-9 h-100 position-relative ${
                  !viewablePE ? "auto-overflow pb-4 px-5" : "p-0"
                }`}
              >
                {!viewablePE ? (
                  <>
                    {/*-- NO SIDEBAR --*/}
                    <div className="container">
                      <div className="row">
                        <section className="col-12 pb-4">
                          <AssessmentPanel
                            user={data.user}
                            subject={data.subject}
                            question={data.question}
                            cb={(user, answerKey, correct) =>
                              select(user, answerKey, correct, leaveCount)
                            }
                          />
                          {/*-- NEXT --*/}
                          <button
                            className="btn btn-dark float-end roboto px-4"
                            onClick={submit}
                          >
                            {!data?.isLast ? "NEXT" : "SUBMIT"}
                          </button>
                        </section>
                        {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
                      </div>
                    </div>
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
                selectedStrand={selectedStrand}
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

export default connect(mapStateToProps, mapDispatchToProps)(_Assessment);
