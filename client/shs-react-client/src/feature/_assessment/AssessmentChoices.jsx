import Localhost from "../../js/model/LocalHost";

function AssessmentChoices({ user, answerKey, cb }) {
  return (
    <>
      {/*-- CHOICES --*/}
      <button
        className="btn btn-light w-100 p-3 my-2 d-flex flex-column"
        onClick={() => cb(user.id, answerKey._id, answerKey.correct, 0)}
      >
        {answerKey?.imagePath ? (
          <img
            className="mb-3"
            src={Localhost.path() + answerKey.imagePath}
            alt="answer key image"
            style={{ maxWidth: "250px" }}
          />
        ) : (
          <></>
        )}
        <p className="m-0 text-start">
          <strong>A.</strong> {answerKey.value}
        </p>
      </button>
    </>
  );
}

export default AssessmentChoices;
