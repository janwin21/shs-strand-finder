function AssessmentUnanswer() {
  return (
    <>
      {/*-- UNANSWER --*/}
      <div
        className="card bg-dark position-relative col-3 p-2 g-3"
        style={{ height: "500px" }}
      >
        <div className="card-body position-relative">
          <a className="nav-link" href="#">
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
          <div className="position-absolute top-50 start-50 translate-middle w-100 p-3">
            <button className="btn btn-dark roboto w-100 p-4 fs-6 fw-semibold">
              VIEW QUESTION
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentUnanswer;
