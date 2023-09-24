function ResultSidebar() {
  return (
    <>
      <h6 className="roboto text-light position-relative border-bottom border-light px-4 py-3">
        <i className="fa-solid fa-user me-3"></i>email@email.com
        <a className="nav-link" href="#">
          <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
        </a>
      </h6>
      <h6 className="roboto text-secondary px-4 py-3">Predicted Strand</h6>
      <div className="w-100 border-bottom border-light d-flex flex-column align-items-center justify-content-center py-3">
        <img
          src="../asset/strand/strand1.jpg"
          alt="strand image display"
          style={{ height: "175px" }}
        />
        <h6 className="roboto text-light my-3 px-4 py-3">Strand Name</h6>
        <p className="roboto text-light px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <h6 className="roboto w-100 position-relative text-light border-bottom border-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-regular fa-note-sticky me-3"></i>Personal Engagement
          <i className="fa-solid fa-angle-left text-secondary fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
      <h6 className="roboto text-light border-bottom border-light px-4 py-3">
        <i className="fa-solid fa-clipboard-question me-3"></i>Assessments
      </h6>

      {/*-- SUBJECT SECTION --*/}
      <section>
        {/*-- SUBJECT CARD --*/}
        <div
          className="card bg-dark rounded-0 border-bottom border-light border-top-0 border-start-0 border-end-0 p-4"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="../asset/subject/subject1.jpg"
                className="img-fluid rounded-0"
                alt="subject image"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title poppins text-light text-uppercase mb-3">
                  Subject Name
                </h6>
                <p className="card-text text-light mb-0">
                  score: <strong>100</strong> / 100
                </p>
                <p className="card-text text-light mb-0">duration: 1 hr</p>
                <p className="card-text text-light mb-0">leave count: 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h6 className="roboto text-light border-bottom border-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-brands fa-firstdraft me-3"></i>New Strand Type
          <i className="fa-solid fa-computer-mouse text-secondary fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
      <h6 className="roboto text-light border-bottom border-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-solid fa-person-booth me-3"></i>New Strand
          <i className="fa-solid fa-computer-mouse text-secondary fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
      <h6 className="roboto text-light border-bottom border-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-solid fa-book me-3"></i>New Subject Type
          <i className="fa-solid fa-computer-mouse text-secondary fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
      <h6 className="roboto text-light border-bottom border-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-solid fa-note-sticky me-3"></i>New Subject
          <i className="fa-solid fa-computer-mouse text-secondary fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
      <h6 className="roboto text-light border-bottom border-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-solid fa-id-badge me-3"></i>New Personal Engagement
          <i className="fa-solid fa-computer-mouse text-secondary fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
      <h6 className="roboto text-light border-bottom border-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-solid fa-circle-question me-3"></i>New Assessment
          Question
          <i className="fa-solid fa-computer-mouse text-secondary fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
      <h6 className="roboto text-light border-bottom border-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-solid fa-gamepad me-3"></i>Authorize Access
          <i className="fa-solid fa-computer-mouse text-danger fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
      <h6 className="roboto text-light px-4 py-3">
        <a className="nav-link d-inline" href="#">
          <i className="fa-solid fa-right-from-bracket me-3"></i>Logout
          <i className="fa-solid fa-computer-mouse text-danger fs-5 position-absolute end-0 me-4"></i>
        </a>
      </h6>
    </>
  );
}

export default ResultSidebar;
