import $ from "jquery";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AssessmentModal({ id, path, subjectName, cb = () => {} }) {
  const navigate = useNavigate();
  const [closeBtn, setCloseBtn] = useState(null);

  useEffect(() => {
    $(() => {
      setCloseBtn($(".btn-close"));
    });
  }, []);
  return (
    <>
      {/*-- 
        Modal 
        data-bs-toggle="modal"
        data-bs-target="#id"
      --*/}
      <div
        class="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title w-100 fs-5 text-center" id={`${id}Label`}>
                Take {subjectName} Assessment
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/*-- SUBJECT CARD --*/}
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="../../asset/subject/subject1.jpg"
                    class="img-fluid rounded-0"
                    alt="subject image"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body ps-3">
                    <h6 class="card-title poppins fw-bold text-uppercase mb-3">
                      {subjectName}
                    </h6>
                    <p class="card-text mb-3">
                      Before taking an assessment, you should read first all the
                      rules while taking assessments. Click the button below to
                      read all the rules during the assessment.
                    </p>
                    <button
                      type="button"
                      class="roboto fw-semibold btn btn-dark w-100"
                      data-bs-dismiss="modal"
                    >
                      READ ASSESSMENT RULES
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer w-100">
              <div class="row w-100">
                <div class="col-6 p-2">
                  <button
                    type="button"
                    onClick={() => {
                      cb();
                      navigate(path);
                    }}
                    class="roboto fw-semibold btn btn-dark w-100"
                    data-bs-dismiss="modal"
                  >
                    YES
                  </button>
                </div>
                <div class="col-6 p-2">
                  <button
                    type="button"
                    onClick={() => closeBtn.click()}
                    class="roboto fw-semibold btn btn-dark w-100"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentModal;
