function Form() {
  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        <div className="row">
          <section className="col-12">
            {/*-- STRAND FORM --*/}
            <form className="w-100">
              {/*-- QUESTION --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Type your question here"
                ></textarea>
              </div>
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT STRAND
              </h5>
              {/*-- STRAND SELECTION --*/}
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
                CREATE QUESTION
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default Form;
