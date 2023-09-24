import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import {
  indexRoute,
  registerRoute,
  dashboardRoute,
  dashboardBurgerRoute,
  personalEngagementRoute,
  assessmentRoute,
  assessmentBurgerRoute,
  subjectRoute,
  accessRoute,
  resultRoute,

  /* FORM */
  formStrandTypeRoute,
  formStrandRoute,
  formSubjectTypeRoute,
  formSubjectRoute,
  formPersonalEngagementRoute,
  formAssessmentRoute,
} from "./route/routes";
import { action } from "./redux/action";
import { modalType } from "./feature/modal/modalType";
import Nav from "./feature/nav/Nav.jsx";
import SimpleModal from "./feature/modal/SimpleModal";
import AssessmentModal from "./feature/modal/AssessmentModal";

const mapStateToProps = (state) => {
  return {
    strandTypeForDeletion: state.store.strandTypeForDeletion,
    strandForDeletion: state.store.strandForDeletion,
    subjectTypeForDeletion: state.store.subjectTypeForDeletion,
    subjectForDeletion: state.store.subjectForDeletion,
    peQuestionForDeletion: state.store.peQuestionForDeletion,
    assessmentQuestionForDeletion: state.store.assessmentQuestionForDeletion,
    subjectForPreparation: state.store.subjectForPreparation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch({ type: action.LOGOUT_USER }),
  };
};

function App({
  strandTypeForDeletion,
  strandForDeletion,
  subjectTypeForDeletion,
  subjectForDeletion,
  peQuestionForDeletion,
  assessmentQuestionForDeletion,
  subjectForPreparation,
  logoutUser,
}) {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path={indexRoute.path} element={indexRoute.element} />
        <Route path={registerRoute.path} element={registerRoute.element} />
        <Route path={dashboardRoute.path} element={dashboardRoute.element} />
        <Route
          path={dashboardBurgerRoute.path}
          element={dashboardBurgerRoute.element}
        />
        <Route
          path={personalEngagementRoute.path}
          element={personalEngagementRoute.element}
        />
        <Route path={assessmentRoute.path} element={assessmentRoute.element} />
        <Route
          path={assessmentBurgerRoute.path}
          element={assessmentBurgerRoute.element}
        />
        <Route path={subjectRoute.path} element={subjectRoute.element} />
        <Route exact path={accessRoute.path} element={accessRoute.element} />
        <Route exact path={resultRoute.path} element={resultRoute.element} />

        {/*-- FORM --*/}
        <Route
          path={formStrandTypeRoute.path}
          element={formStrandTypeRoute.element}
        />
        <Route path={formStrandRoute.path} element={formStrandRoute.element} />
        <Route
          path={formSubjectTypeRoute.path}
          element={formSubjectTypeRoute.element}
        />
        <Route
          path={formSubjectRoute.path}
          element={formSubjectRoute.element}
        />
        <Route
          path={formPersonalEngagementRoute.path}
          element={formPersonalEngagementRoute.element}
        />
        <Route
          path={formAssessmentRoute.path}
          element={formAssessmentRoute.element}
        />
      </Routes>

      {/* LOGOUT */}
      <SimpleModal
        id={modalType.LOGOUT}
        path={indexRoute.path}
        title="Logout Account"
        body="Do you want to logout your account?"
        yes="YES"
        no="CANCEL"
        cb={() => logoutUser()}
      />

      {/* STRAND TYPE DELETION */}
      <SimpleModal
        id={modalType.STRAND_TYPE_DELETION}
        path={dashboardRoute.path}
        title={`Delete Strand Type ${
          strandTypeForDeletion ? strandTypeForDeletion.name : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          strandTypeForDeletion ? strandTypeForDeletion.name : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={() =>
          console.log(strandTypeForDeletion.name + " has been deleted...")
        }
      />

      {/* STRAND DELETION */}
      <SimpleModal
        id={modalType.STRAND_DELETION}
        path={dashboardRoute.path}
        title={`Delete Strand ${
          strandForDeletion ? strandForDeletion.name : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          strandForDeletion ? strandForDeletion.name : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={() => console.log(strandForDeletion.name + " has been deleted...")}
      />

      {/* SUBJECT TYPE DELETION */}
      <SimpleModal
        id={modalType.SUBJECT_TYPE_DELETION}
        path={subjectRoute.path}
        title={`Delete Subject Type ${
          subjectTypeForDeletion ? subjectTypeForDeletion.name : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          subjectTypeForDeletion ? subjectTypeForDeletion.name : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={() =>
          console.log(subjectTypeForDeletion.name + " has been deleted...")
        }
      />

      {/* STRAND DELETION */}
      <SimpleModal
        id={modalType.SUBJECT_DELETION}
        path={subjectRoute.path}
        title={`Delete Subject ${
          subjectForDeletion ? subjectForDeletion.name : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          subjectForDeletion ? subjectForDeletion.name : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={() => console.log(subjectForDeletion.name + " has been deleted...")}
      />

      {/* PERSONAL ENGAGEMENT QUESTION DELETION */}
      <SimpleModal
        id={modalType.PE_QUESTION_DELETION}
        path={personalEngagementRoute.path}
        title={`Delete Personal Engagement Question ${
          peQuestionForDeletion ? peQuestionForDeletion.id : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          peQuestionForDeletion ? peQuestionForDeletion.id : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={() =>
          console.log(peQuestionForDeletion.id + " has been deleted...")
        }
      />

      {/* ASSESSMENT QUESTION DELETION */}
      <SimpleModal
        id={modalType.ASSESSMENT_QUESTION_DELETION}
        path={assessmentRoute.path}
        title={`Delete Assessment Question ${
          assessmentQuestionForDeletion
            ? assessmentQuestionForDeletion.id
            : "UNKNOWN"
        }`}
        body={`Do you want to delete ${
          assessmentQuestionForDeletion
            ? assessmentQuestionForDeletion.id
            : "UNKNOWN"
        }? This will not be recover once deleted.`}
        yes="DELETE"
        no="CANCEL"
        cb={() =>
          console.log(assessmentQuestionForDeletion.id + " has been deleted...")
        }
      />

      {/* ASSESSMENT QUESTION DELETION */}
      <AssessmentModal
        id={modalType.ASSESSMENT_PREPARATION}
        path={assessmentRoute.path}
        subjectName={
          subjectForPreparation ? subjectForPreparation.name : "UNKNOWN"
        }
        cb={() => {}}
      />
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
