import { connect } from "react-redux";
import { action } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import { personalEngagementRoute } from "../../route/routes";
import PEAnswered from "../result/PEAnswered";
import Localhost from "../../js/model/LocalHost";

const mapDispatchToProps = (dispatch) => {
  return {
    viewPE: (bool) => dispatch({ type: action.VIEW_PE, viewablePE: bool }),
  };
};

function PEResult({ viewPE, preferredStrand, personalEngagements }) {
  const navigate = useNavigate();

  return (
    <>
      {/*-- SIDEBAR --*/}
      <section
        className="w-100 auto-overflow position-sticky top-0 end-0 justify-content-end bg-dark m-0 p-0"
        style={{ height: "94vh" }}
      >
        <h6 className="roboto border-bottom border-light text-light position-relative px-4 py-3">
          Personal Engagement Result
          <a
            onClick={(event) => {
              event.preventDefault();
              viewPE(false);
            }}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
        </h6>
        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
          {/*-- PREFERRED PERSONAL ENGAGEMENT CARD --*/}
          <div className="card w-100 bg-dark rounded-0 border-bottom border-light border-top-0 border-start-0 border-end-0 p-5">
            <div className="row g-0">
              <div className="col-md-2">
                <img
                  src={Localhost.path() + preferredStrand.imagePath}
                  className="img-fluid rounded"
                  style={{ minHeight: "300px" }}
                  alt="pending strand image"
                />
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title poppins text-light text-uppercase">
                    {preferredStrand.name}
                  </h5>
                  <p className="card-text text-light fs-5 my-4">
                    {preferredStrand.description}
                  </p>
                  <a
                    onClick={(ev) => {
                      ev.preventDefault();
                      viewPE(false);
                      navigate(personalEngagementRoute.path);
                    }}
                    className="nav-link d-inline"
                  >
                    <button className="btn btn-secondary roboto px-4 fs-6">
                      RETAKE PERSONAL ENGAGEMENT
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*-- CONTAINER --*/}
          <section className="row w-100 p-4">
            {personalEngagements.map((pe, index) => (
              <PEAnswered key={pe._id} peNo={index + 1} pe={pe} />
            ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(PEResult);
