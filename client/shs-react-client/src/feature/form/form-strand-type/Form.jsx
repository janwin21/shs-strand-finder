import { useState } from "react";

function Form() {
  // UML
  const [strandtType, setStrandType] = useState({
    name: "Strand Name 1",
  });

  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        {/*-- STRAND TYPE FORM --*/}
        <form className="w-100">
          {/*-- NAME --*/}
          <div className="mb-4 w-100">
            <input
              type="text"
              className="form-control shs-input shadow"
              id="text"
              autoComplete="off"
              placeholder="Strand Group Name"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
          >
            CREATE STRAND TYPE
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
