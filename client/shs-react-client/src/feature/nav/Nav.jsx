import { Link, useLocation } from "react-router-dom";
import { indexRoute, registerRoute, dashboardRoute } from "../../route/routes";
import { connect } from "react-redux";
import { action } from "../../redux/action";
import { useEffect } from "react";

const mapStateToProps = (state) => {
  return {
    user: state.store.user,
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    test: state.store.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
    viewPE: (bool) => dispatch({ type: action.VIEW_PE, viewablePE: bool }),
    setTest: (bool) => dispatch({ type: action.TEST, test: bool }),
  };
};

function Nav({
  user,
  viewableSidebar,
  viewablePE,
  viewSidebar,
  viewPE,
  setTest,
}) {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <>
      {/*-- NAV SECTION --*/}
      <nav
        className="navbar navbar-expand-lg grd-pri-sec"
        style={{ height: "6vh" }}
      >
        <div className="container">
          <Link
            to={dashboardRoute.path}
            className="navbar-brand poppins text-light fs-5"
            href="#"
          >
            SHS Strand Finder
          </Link>
          <div
            className="nav-responsive d-lg-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-lg-flex align-items-center">
              {!user ? (
                <>
                  <Link
                    to={indexRoute.path}
                    onClick={() => setTest(false)}
                    className="nav-link-responsive nav-link roboto text-uppercase text-light fw-semibold fs-6"
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
                    id="tutorial-btn-3"
                    className="nav-link-responsive nav-link roboto text-uppercase text-light fw-semibold fs-6"
                  >
                    DASHBOARD
                  </Link>
                  <a
                    to={dashboardRoute.path}
                    onClick={(event) => {
                      event.preventDefault();
                      viewSidebar(!viewableSidebar);
                      viewPE(viewableSidebar && !viewablePE);
                    }}
                    className="nav-link roboto text-uppercase text-light fw-semibold fs-6"
                  >
                    <i
                      className="fa-solid fa-bars"
                      style={{ cursor: "pointer" }}
                    ></i>
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
