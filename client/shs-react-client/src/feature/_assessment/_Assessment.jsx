import AssessmentPanel from "./AssessmentPanel";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import Localhost from "../../js/model/LocalHost";
import SubjectP from "../../js/model/SubjectP";
import AnswerKey from "../../js/model/AnswerKey";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assessmentData } from "../../js/json-structure/assessment";
import { indexRoute, dashboardRoute } from "../../route/routes";
import { action } from "../../redux/action";

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
  const [subjectID, setSubjectID] = useState(subjectForPreparation._id);

  // UML
  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });

  const [choice, setChoice] = useState({
    user: "123",
    answerKey: "321",
    correct: true,
    noOfUnVisit: 6,
  });

  useEffect(() => {
    const fetchData = async () => {
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
      }
    };

    fetchData();
  }, []);

  // UPDATE assessment data
  useEffect(() => {}, [data]);

  // FUNCTION
  const select = (user, answerKey, correct, noOfUnVisit) => {
    setChoice({ user, answerKey, correct, noOfUnVisit });
  };

  const submit = async () => {
    await new AnswerKey().create(choice);
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
    }
  };

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
                className={`col-9 h-100 auto-overflow position-relative ${
                  !viewablePE ? "pb-4 px-5" : "p-0"
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
