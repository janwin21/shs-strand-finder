import { Link } from "react-router-dom";
import { personalEngagementRoute, subjectRoute } from "../../route/routes";

function DashboardHeader() {
  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">Welcome to SHS Strand Finder</h2>
          <p className="card-text my-4 roboto">
            Hello, email! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to={personalEngagementRoute.path} className="nav-link d-inline">
            <button className="btn btn-dark roboto px-4 fs-6 fw-semibold">
              PERSONAL ENGAGEMENT
            </button>
          </Link>
          <Link to={subjectRoute.path} className="nav-link d-inline">
            <button className="btn btn-primary text-light roboto px-4 ms-3 fs-6 fw-semibold">
              TAKE ASSESSMENT
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default DashboardHeader;
