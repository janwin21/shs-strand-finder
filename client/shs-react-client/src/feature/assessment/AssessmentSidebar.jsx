import { action } from "../../redux/action";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
  };
};

function AssessmentSidebar({ viewSidebar }) {
  return (
    <>
      {/*-- ASSESSMENT SIDEBAR --*/}
      <section
        className="col-3 auto-overflow position-sticky top-0 end-0 justify-content-end bg-dark m-0 p-0"
        style={{ height: "94vh" }}
      >
        {/*-- QUESTION BODY --*/}
        <h6 className="roboto text-light position-relative border-bottom border-light px-4 py-3">
          <i className="fa-solid fa-question me-3"></i>Question 1
          <a
            onClick={(event) => {
              event.preventDefault();
              viewSidebar(false);
            }}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
        </h6>
        <div className="w-100 border-bottom border-light d-flex flex-column align-items-center justify-content-center py-3">
          <p className="roboto text-light px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua?
          </p>
          <section className="w-100 p-4">
            <img
              className="w-100 rounded shadow"
              src="../asset/strand/strand1.jpg"
              alt="strand image display"
              style={{ height: "175px" }}
            />
          </section>
        </div>
        {/*-- CHOICES --*/}
        <section className="p-4">
          {/*-- QUESTION W/ IMAGE --*/}
          <button className="btn btn-secondary roboto text-start w-100 mb-2 p-3 fs-6 fw-semibold">
            A. Choice A
            <img
              className="w-100 rounded shadow mt-2"
              src="../asset/strand/strand1.jpg"
              alt="strand image display"
              style={{ height: "175px" }}
            />
          </button>
          {/*-- QUESTION W/O IMAGE --*/}
          <button className="btn btn-secondary roboto w-100 mb-2 px-4 fs-6 fw-semibold">
            B. Choice B
          </button>
          <button className="btn btn-secondary roboto w-100 mb-2 px-4 fs-6 fw-semibold">
            C. Choice C
          </button>
          <button className="btn btn-secondary roboto w-100 mb-2 px-4 fs-6 fw-semibold">
            D. Choice D
          </button>
          <button
            className="btn btn-dark roboto w-100 p-4 fs-6 fw-semibold mt-4"
            disabled={true}
          >
            SUBMIT
          </button>
        </section>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(AssessmentSidebar);
