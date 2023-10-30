import PEQuestion from "./PEQuestion";

function PEPanel({ pe, choice, cb1, cb2 }) {
  return (
    <>
      {/*-- STRAND TYPE CONTAINER --*/}
      <section className="strand-type-container mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          PERSONAL ENGAGEMENT ASSESSMENT
        </h5>
      </section>
      <PEQuestion index={pe?.index} question={pe?.question} />

      {/*-- CHOICES --*/}
      <button
        className={`btn btn-${
          choice === "a" ? "dark" : "light"
        } w-100 p-3 my-2 d-flex flex-column`}
        onClick={cb1}
      >
        <p className="m-0 text-start">
          <strong>A. </strong> YES
        </p>
      </button>
      <button
        className={`btn btn-${
          choice === "b" ? "dark" : "light"
        } w-100 p-3 my-2 d-flex flex-column`}
        onClick={cb2}
      >
        <p className="m-0 text-start">
          <strong>B. </strong> NO
        </p>
      </button>
    </>
  );
}

export default PEPanel;
