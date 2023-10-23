import PEQuestion from "./PEQuestion";
import PEChoices from "./PEChoices";

function PEPanel() {
  return (
    <>
      {/*-- STRAND TYPE CONTAINER --*/}
      <section className="strand-type-container mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          PERSONAL ENGAGEMENT ASSESSMENT
        </h5>
      </section>
      <PEQuestion />
      <PEChoices />
    </>
  );
}

export default PEPanel;
