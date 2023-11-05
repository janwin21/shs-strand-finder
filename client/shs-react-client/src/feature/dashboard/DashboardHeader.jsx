import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  // personalEngagementRoute,
  _personalEngagementRoute,
  subjectRoute,
  resultRoute,
  viewPERoute,
  viewSubjectRoute,
} from "../../route/routes";

function DashboardHeader({ user, finish }) {
  const navigate = useNavigate();

  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">Welcome to SHS Strand Finder</h2>
          <p className="card-text my-4 roboto">
            Hello, {user.email}! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <a
            onClick={(ev) => {
              ev.preventDefault();
              if (user.isAdmin) navigate(viewPERoute.path);
              else navigate(_personalEngagementRoute.path);
            }}
            className="nav-link d-inline"
          >
            <button className="btn btn-dark roboto px-4 fs-6 fw-semibold">
              PERSONAL ENGAGEMENT
            </button>
          </a>
          <a
            onClick={(ev) => {
              ev.preventDefault();
              if (user.isAdmin) navigate(viewSubjectRoute.path);
              else navigate(subjectRoute.path);
            }}
            className="nav-link d-inline"
          >
            <button className="btn btn-primary text-light roboto px-4 ms-3 fs-6 fw-semibold">
              TAKE ASSESSMENT
            </button>
          </a>
          {finish ? (
            <Link to={resultRoute.path} className="nav-link d-inline">
              <button className="btn btn-success text-light roboto px-4 ms-3 fs-6 fw-semibold">
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

export default DashboardHeader;
