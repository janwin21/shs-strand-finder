import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import {
  indexRoute,
  registerRoute,
  dashboardRoute,
  dashboardBurgerRoute,
  personalEngagementRoute,
  assessmentRoute,
  assessmentBurgerRoute,
} from "./route/routes";
import { action } from "./redux/action";
import Nav from "./feature/nav/Nav.jsx";
import SimpleModal from "./feature/modal/SimpleModal";

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch({ type: action.LOGOUT_USER }),
  };
};

function App({ logoutUser }) {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path={indexRoute.path} element={indexRoute.element} />
        <Route path={registerRoute.path} element={registerRoute.element} />
        <Route path={dashboardRoute.path} element={dashboardRoute.element} />
        <Route
          path={dashboardBurgerRoute.path}
          element={dashboardBurgerRoute.element}
        />
        <Route
          path={personalEngagementRoute.path}
          element={personalEngagementRoute.element}
        />
        <Route path={assessmentRoute.path} element={assessmentRoute.element} />
        <Route
          path={assessmentBurgerRoute.path}
          element={assessmentBurgerRoute.element}
        />
      </Routes>
      <SimpleModal id="logout" path={indexRoute.path} cb={() => logoutUser()} />
    </Router>
  );
}

export default connect(null, mapDispatchToProps)(App);
