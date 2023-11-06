import AssessmentQuestion from "./AssessmentQuestion";
import AssessmentChoices from "./AssessmentChoices";

function AssessmentPanel({ user, subject, question, cb }) {
  return (
    <>
      {/*-- STRAND TYPE CONTAINER --*/}
      <section className="strand-type-container mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          {subject ? subject.name : "SUBJECT NAME"} ASSESSMENT
        </h5>
      </section>
      <AssessmentQuestion question={question} />
      {question?.answerKeys?.map((answerKey, i) => (
        <AssessmentChoices
          key={answerKey._id}
          user={user}
          answerKey={answerKey}
          index={i}
          cb={cb}
        />
      ))}
    </>
  );
}

export default AssessmentPanel;
