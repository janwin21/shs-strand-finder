// import { strandData } from "../../../js/json-structure/form/strand";
// import Strand from "../../../js/model/Strand";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dashboardRoute } from "../../../route/routes";
import PEP from "../../../js/model/PEP";
import FormRadioBtn from "../component/FormRadioBtn";

function Form({ strands }) {
  const navigate = useNavigate();

  // UML
  const [personalEngagement, setPersonalEngagement] = useState({});

  const submit = async (ev) => {
    ev.preventDefault();
    const data = await new PEP().create(personalEngagement);

    if (data?.error) {
      console.log(data.error);
    } else {
      navigate(dashboardRoute.path);
    }
  };

  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        <div className="row">
          <section className="col-12">
            {/*-- PERSONAL ENGAGEMENT FORM --*/}
            <form onSubmit={submit} className="w-100">
              {/*-- QUESTION --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Type your question here"
                  onChange={(ev) => {
                    setPersonalEngagement({
                      ...personalEngagement,
                      question: ev.target.value,
                    });
                  }}
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
                {strands?.map((strand, i) => {
                  return (
                    <FormRadioBtn
                      key={i}
                      onChangeCb={(ev) => {
                        setPersonalEngagement({
                          ...personalEngagement,
                          strandID: ev.target.id,
                        });
                      }}
                      name={"strand"}
                      subjectType={strand}
                    />
                  );
                })}
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
