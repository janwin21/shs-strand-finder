import { useEffect, useState } from "react";
import { strandTypeData } from "../../../js/json-structure/form/strand-type";
import { subjectTypeData } from "../../../js/json-structure/form/subject-type";
import FormCheckBox from "../component/FormCheckBox";
import FormRadioBtn from "../component/FormRadioBtn";
import subject1 from "../../../asset/subject/subject1.jpg";
import $ from "jquery";

function Form() {
  // UML
  const [subject, setSubject] = useState({
    strandTypeIDs: [],
    subjectTypeID: null,
    name: "Subject Name",
    description: "This is subject description",
    image: null,
    // (server) subjectID: string
  });

  const [uploadBtn, setUploadBtn] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSubject({ ...subject, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log("RELOAD STRAND TYPE : ", strandTypeData);
    console.log("RELOAD SUBJECT TYPE : ", subjectTypeData);

    $(() => {
      setUploadBtn($("#uploadBtn"));
    });
  }, []);

  const onStrandChange = (ev) => {
    const { id, checked } = ev.target;
    const tempStrandTypeIDs = [...subject.strandTypeIDs];

    if (checked) {
      tempStrandTypeIDs.push(id);
      setSubject({ ...subject, strandTypeIDs: tempStrandTypeIDs });
    } else {
      const updatedValues = subject.strandTypeIDs.filter((item) => item !== id);
      setSubject({ ...subject, strandTypeIDs: updatedValues });
    }
  };

  const submit = (ev) => {
    ev.preventDefault();
    console.log("ADD NEW STRAND : ", subject);
  };

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
              src={subject.image ? subject.image : subject1}
              alt="file img input"
            />
            <button
              onClick={() => uploadBtn.click()}
              className="btn btn-dark w-100 fs-6 px-4 rounded-0 rounded-bottom text-uppercase text-light fw-semibold fs-6"
            >
              UPLOAD FILE
            </button>
          </section>
          <section className="col-9">
            {/*-- SUBJECT FORM --*/}
            <form onSubmit={submit} className="w-100">
              {/*-- NAME --*/}
              <div className="mb-4 w-100">
                <input
                  type="text"
                  className="form-control shs-input shadow"
                  id="text"
                  autoComplete="off"
                  placeholder="Subject Name"
                  onChange={(ev) => {
                    setSubject({ ...subject, name: ev.target.value });
                  }}
                />
              </div>

              {/*-- Description --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Description"
                  onChange={(ev) => {
                    setSubject({ ...subject, description: ev.target.value });
                  }}
                ></textarea>
              </div>

              {/*-- IMAGE FILE --*/}
              <input
                className="d-none"
                type="file"
                id="uploadBtn"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT STRAND TYPES
              </h5>

              {/*-- SUBJECT TYPE SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                {subjectTypeData.subjectTypes.map((subjectType, i) => {
                  return (
                    <FormRadioBtn
                      key={i}
                      onChangeCb={() =>
                        setSubject({
                          ...subject,
                          subjectTypeID: subjectType.id,
                        })
                      }
                      name={"subjectType"}
                      subjectType={subjectType}
                    />
                  );
                })}
              </div>
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT ASSOCIATED STRANDS
              </h5>

              {/*-- STRAND SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                {strandTypeData.strandTypes.map((strandType, i) => {
                  return (
                    <FormCheckBox
                      key={i}
                      onChangeCb={onStrandChange}
                      strandType={strandType}
                    />
                  );
                })}
              </div>
              <button
                type="submit"
                className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                CREATE SUBJECT
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default Form;
