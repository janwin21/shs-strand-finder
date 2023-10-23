import AssessmentQuestion from "./AssessmentQuestion";
import AssessmentChoices from "./AssessmentChoices";

function AssessmentPanel() {
  return (
    <>
      {/*-- STRAND TYPE CONTAINER --*/}
      <section className="strand-type-container mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          SUBJECT NAME ASSESSMENT
        </h5>
      </section>
      <AssessmentQuestion />
      <AssessmentChoices />
    </>
  );
}

export default AssessmentPanel;
