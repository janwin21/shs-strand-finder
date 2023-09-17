import { connect } from "react-redux";
import { useState } from "react";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
    deleteAssessmentQuestion: (assessmentQuestion) =>
      dispatch({
        type: action.DELETE_ASSESSMENT_QUESTION,
        assessmentQuestionForDeletion: assessmentQuestion,
      }),
  };
};

function AssessmentUnanswer({
  viewableSidebar,
  viewSidebar,
  deleteAssessmentQuestion,
}) {
  const [assessmentQuestion] = useState({ id: "object321" });

  return (
    <>
      {/*-- UNANSWER --*/}
      <div
        onClick={() => {
          viewSidebar(!viewableSidebar);
        }}
        className="card bg-dark position-relative col-3 p-2 g-3"
        style={{ height: "500px", cursor: "pointer" }}
      >
        <div className="card-body position-relative">
          <a
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              deleteAssessmentQuestion(assessmentQuestion);
            }}
            data-bs-toggle="modal"
            data-bs-target={"#" + modalType.ASSESSMENT_QUESTION_DELETION}
            className="nav-link"
          >
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
          <div className="position-absolute top-50 start-50 translate-middle w-100 p-3">
            <h6 className="roboto text-light text-center w-100 p-4 fs-6 fw-semibold">
              VIEW QUESTION
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentUnanswer);
