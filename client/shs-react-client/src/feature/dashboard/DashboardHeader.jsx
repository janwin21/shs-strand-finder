import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  // personalEngagementRoute,
  _personalEngagementRoute,
  subjectRoute,
  resultRoute,
  viewPERoute,
} from "../../route/routes";
import { action } from "../../redux/action";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    viewTutorial: (viewableTutorial) =>
      dispatch({
        type: action.VIEW_TUTORIAL,
        viewableTutorial,
      }),
  };
};

function DashboardHeader({ viewTutorial, user, finish }) {
  const navigate = useNavigate();

  const showTutorial = (ev) => {
    ev.preventDefault();
    viewTutorial(true);
  };

  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-3 p-md-4 p-lg-5">
          <h2 className="card-title poppins">
            Welcome to SHS Strand Finder
            <button
              className="btn btn-info ms-3 rounded-circle d-inline"
              onClick={showTutorial}
            >
              <i class="fa-solid fa-question"></i>
            </button>
          </h2>
          <p className="card-text my-4 roboto">
            Hello, {user.email}! SHS Strand Finder is a website use to aid your
            SHS career by providing recomendaded strand that commonly take by a
            SHS student. All you have to do is to answer two assessments:
            Personal Engagement and Assessment on each subject. After answering
            all the assessment, the result button will be display for you to see
            all the results and a graph for data analysis.{" "}
            <span className="text-primary">
              Click the question icon above for more help!
            </span>
          </p>
          <a
            onClick={(ev) => {
              ev.preventDefault();
              if (user.isAdmin) navigate(viewPERoute.path);
              else navigate(_personalEngagementRoute.path);
            }}
            className="nav-link d-inline"
          >
            <button
              id="tutorial-btn-1"
              className="responsive-btn btn btn-dark roboto px-4 me-3 fs-6 fw-semibold"
            >
              PERSONAL ENGAGEMENTS
            </button>
          </a>
          <Link to={subjectRoute.path} className="nav-link d-inline">
            <button
              id="tutorial-btn-2"
              className="responsive-btn btn btn-primary text-light roboto px-4 me-3 fs-6 fw-semibold"
            >
              TAKE ASSESSMENT
            </button>
          </Link>
          {finish ? (
            <Link to={resultRoute.path} className="nav-link d-inline">
              <button className="responsive-btn btn btn-success text-light roboto px-4 me-3 fs-6 fw-semibold">
                SEE RESULTS
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
}

export default connect(null, mapDispatchToProps)(DashboardHeader);
