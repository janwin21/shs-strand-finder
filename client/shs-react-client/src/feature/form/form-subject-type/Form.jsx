import { useState } from "react";
import SubjectType from "../../../js/model/SubjectType";

function Form() {
  // UML
  const [subjectType, setSubjectType] = useState({
    name: "Subject Name 1",
  });

  const submit = async (ev) => {
    ev.preventDefault();
    const subjectTypeModel = new SubjectType();
    await subjectTypeModel.create(subjectType);
    // console.log("ADD NEW SUBJECT TYPE : ", subjectType);
  };

  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        {/*-- SUBJECT TYPE FORM --*/}
        <form onSubmit={submit} className="w-100">
          {/*-- NAME --*/}
          <div className="mb-4 w-100">
            <input
              type="text"
              className="form-control shs-input shadow"
              id="text"
              autoComplete="off"
              placeholder="Subject Group Name"
              onChange={(ev) => {
                setSubjectType({ name: ev.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
          >
            CREATE SUBJECT TYPE
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
