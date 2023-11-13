import { viewSubjectRoute } from "../../route/routes";
import { Link } from "react-router-dom";

function SubjectHeader({ user, setType }) {
  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">Subject Assessments</h2>
          <p className="card-text my-4 roboto">
            Hello, {user.email}! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          {user?.isAdmin == true ? (
            <Link
              to={viewSubjectRoute.path}
              className="btn btn-primary text-light roboto px-4 fs-6 fw-semibold"
            >
              VIEWABLE QUESTIONS
            </Link>
          ) : (
            <>
              <a
                onClick={(ev) => {
                  ev.preventDefault();
                  setType("subject-type");
                }}
                className="nav-link d-inline"
              >
                <button className="btn btn-dark roboto px-4 me-3 fs-6 fw-semibold">
                  BY SUBJECT TYPE
                </button>
              </a>
              <a
                onClick={(ev) => {
                  ev.preventDefault();
                  setType("strand");
                }}
                className="nav-link d-inline"
              >
                <button className="btn btn-dark text-light roboto px-4 me-3 fs-6 fw-semibold">
                  BY STRAND
                </button>
              </a>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default SubjectHeader;
