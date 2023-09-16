import RouteLink from "./RouteLink";

// elements
import Index from "../feature/index/Index";
import Register from "../feature/register/Register";
import Dashboard from "../feature/dashboard/Dashboard";
import DashboardBurger from "../feature/dashboard/DashboardBurger";
import PersonalEngement from "../feature/personal-engagement/PersonalEngagement";

const indexRoute = new RouteLink("/", <Index />);
const registerRoute = new RouteLink("/register", <Register />);
const dashboardRoute = new RouteLink("/dashboard", <Dashboard />);
const dashboardBurgerRoute = new RouteLink(
  "/dashboard-burger",
  <DashboardBurger />
);
const personalEngagementRoute = new RouteLink(
  "/personal-engagement",
  <PersonalEngement />
);

export {
  indexRoute,
  registerRoute,
  dashboardRoute,
  dashboardBurgerRoute,
  personalEngagementRoute,
};
