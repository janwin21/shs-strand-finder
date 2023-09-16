import { Link, useLocation } from "react-router-dom";
import { indexRoute, registerRoute, dashboardRoute } from "../../route/routes";
import { connect } from "react-redux";
import { action } from "../../redux/action";
import { useEffect } from "react";

const mapStateToProps = (state) => {
  return {
    user: state.store.user,
    viewableSidebar: state.store.viewableSidebar,
    test: state.store.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
    setTest: (bool) => dispatch({ type: action.TEST, test: bool }),
  };
};

function Nav({ test, user, viewableSidebar, viewSidebar, setTest }) {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [test, user]);

  return (
    <>
      {/*-- NAV SECTION --*/}
      <nav
        className="navbar navbar-expand-lg grd-pri-sec"
        style={{ height: "6vh" }}
      >
        <div className="container">
          <a className="navbar-brand poppins text-light fs-5" href="#">
            SHS Strand Finder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-lg-flex align-items-center">
              {!user ? (
                <>
                  <Link
                    to={indexRoute.path}
                    onClick={() => setTest(false)}
                    className="nav-link roboto text-uppercase text-light fw-semibold fs-6"
                  >
                    LOGIN
                  </Link>
                  <Link
                    to={registerRoute.path}
                    onClick={() => setTest(true)}
                    className="nav-link ms-lg-3"
                  >
                    <button className="btn btn-light roboto px-4">
                      Register
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={dashboardRoute.path}
                    className="nav-link roboto text-uppercase text-light fw-semibold fs-6"
                  >
                    DASHBOARD
                  </Link>
                  <a
                    to={dashboardRoute.path}
                    onClick={(event) => {
                      event.preventDefault();
                      viewSidebar(!viewableSidebar);
                    }}
                    className="nav-link roboto text-uppercase text-light fw-semibold fs-6"
                  >
                    <i className="fa-solid fa-bars"></i>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
