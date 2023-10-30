import Localhost from "../../js/model/LocalHost";

function AssessmentQuestion({ question }) {
  return (
    <>
      {/*-- QUESTION --*/}
      <section
        className={`roboto d-flex flex-column justify-content-center align-items-${
          question?.questionImagePath ? "center" : "start"
        }`}
      >
        {question?.questionImagePath ? (
          <img
            className="mb-3"
            src={Localhost.path() + question?.questionImagePath}
            alt="answer key image"
            style={{ maxWidth: "250px" }}
          />
        ) : (
          <></>
        )}
        <p>
          <strong>{question ? question?.index : 0}) </strong>
          {question
            ? question.question
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit?"}
        </p>
      </section>
    </>
  );
}

export default AssessmentQuestion;
