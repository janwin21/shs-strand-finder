import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  indexRoute,
  registerRoute,
  dashboardRoute,
  dashboardBurgerRoute,
  personalEngagementRoute,
} from "./route/routes";
import Nav from "./feature/nav/Nav.jsx";

function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
