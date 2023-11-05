import { connect } from "react-redux";
import { action } from "../../../redux/action";

const mapDispatchToProps = (dispatch) => {
  return {
    deletePEQuestion: (peQuestion) =>
      dispatch({
        type: action.DELETE_PE_QUESTION,
        peQuestionForDeletion: peQuestion,
      }),
  };
};

function ViewPEAnswered({ pe, peNo }) {
  return (
    <>
      {/*-- ANSWERED --*/}
      <div className="card bg-dark position-relative col-3 p-2 g-3">
        <div className="card-body position-relative">
          <h6 className="card-subtitle poppins mb-3 text-light">
            Question No. {peNo}
          </h6>
          <p
            className="card-text roboto text-light"
            style={{ height: "200px", overflowY: "auto" }}
          >
            {pe.question}
          </p>
          <button
            className={`btn btn-danger roboto w-100 mb-2 px-4 fs-6 fw-semibold`}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(ViewPEAnswered);
