function AssessmentAnswered() {
  return (
    <>
      {/*-- ANSWERED --*/}
      <div
        className="card grd-pri-sec_ position-relative col-3 p-2 g-3"
        style={{ height: "500px" }}
      >
        <span className="shs-glass grd-none-inf_"></span>
        <div className="card-body position-relative">
          <a className="nav-link" href="#">
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
          <h6 className="roboto w-100 text-center position-absolute top-50 start-50 translate-middle fw-semibold">
            SUBMIT YOUR ANSWER
          </h6>
        </div>
      </div>
    </>
  );
}

export default AssessmentAnswered;
