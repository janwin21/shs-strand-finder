import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { modalType } from "../../modal/modalType";
import Localhost from "../../../js/model/LocalHost";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAssessmentQuestion: (question) =>
      dispatch({
        type: action.DELETE_ASSESSMENT_QUESTION,
        assessmentQuestionForDeletion: question,
      }),
  };
};

function ViewAssessment({ deleteAssessmentQuestion, question, quesNo }) {
  return (
    <>
      {/*-- ANSWERED --*/}
      <div className="card bg-dark position-relative col-4 p-2">
        <div
          className="card-body position-relative"
          style={{
            width: "100%",
            height: "400px",
            overflowY: "auto",
          }}
        >
          <a
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              deleteAssessmentQuestion(question);
            }}
            data-bs-toggle="modal"
            data-bs-target={"#" + modalType.ASSESSMENT_QUESTION_DELETION}
            className="nav-link"
          >
            <i className="fa-solid fa-rectangle-xmark text-danger fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
          {question?.questionImagePath ? (
            <img
              className="mb-3"
              src={Localhost.path() + question?.questionImagePath}
              alt="answer key image"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <></>
          )}
          <h6 className="card-subtitle poppins mb-3 text-light">
            Question No. {quesNo}
          </h6>
          <p className="card-text roboto text-light">{question.question}</p>

          {/*-- ANSWER KEYS --*/}
          {question?.answerKeys?.map((answerKey) => {
            return (
              <button
                key={answerKey._id}
                className={`btn btn-dark text-start roboto w-100 mb-2 px-2 fs-6 fw-semibold`}
              >
                {answerKey?.imagePath ? (
                  <img
                    className="mb-3"
                    src={Localhost.path() + answerKey?.imagePath}
                    alt="answer key image"
                    style={{ maxWidth: "100%" }}
                  />
                ) : (
                  <></>
                )}
                {answerKey.value}
              </button>
            );
          })}

          {/*-- DELETE QUESTIONS --*/}
          <button
            className={`btn btn-danger roboto w-100 mb-2 px-4 fs-6 fw-semibold`}
          >
            DELETE QUESTION
          </button>
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(ViewAssessment);
