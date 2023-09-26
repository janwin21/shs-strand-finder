import { useState } from "react";

function Form() {
  // UML
  const [strand, setStrand] = useState({
    strandTypeID: ["strandTypeID123", "strandTypeID456"],
    name: "Subject Name",
    description: "This is subject description",
    image: null,
    // (server) subjectID: string
  });

  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        <div className="row">
          <section className="col-3">
            <img
              className="w-100 rounded-top"
              src="../../asset/strand/strand1.jpg"
              alt="file img input"
            />
            <button className="btn btn-dark w-100 fs-6 px-4 rounded-0 rounded-bottom text-uppercase text-light fw-semibold fs-6">
              UPLOAD FILE
            </button>
          </section>
          <section className="col-9">
            {/*-- STRAND FORM --*/}
            <form className="w-100">
              {/*-- NAME --*/}
              <div className="mb-4 w-100">
                <input
                  type="text"
                  className="form-control shs-input shadow"
                  id="text"
                  autoComplete="off"
                  placeholder="Strand Name"
                />
              </div>
              {/*-- Description --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Description"
                ></textarea>
              </div>
              {/*-- IMAGE FILE --*/}
              <input className="d-none" type="file" id="file" />
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT STRAND TYPES
              </h5>
              {/*-- STRAND TYPE SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck1"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  Checkbox 1
                </label>

                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck2"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">
                  Checkbox 2
                </label>
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btncheck3"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">
                  Checkbox 3
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                CREATE STRAND
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default Form;
