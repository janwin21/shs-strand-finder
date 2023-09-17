import RouteLink from "./RouteLink";

// elements
import Index from "../feature/index/Index";
import Register from "../feature/register/Register";
import Dashboard from "../feature/dashboard/Dashboard";
import DashboardBurger from "../feature/dashboard/DashboardBurger";
import PersonalEngagement from "../feature/personal-engagement/PersonalEngagement";
import Assessment from "../feature/assessment/Assessment";
import AssessmentBurger from "../feature/assessment/AssessmentBurger";
import Subject from "../feature/subject/Subject";

const indexRoute = new RouteLink("/", <Index />);
const registerRoute = new RouteLink("/register", <Register />);
const dashboardRoute = new RouteLink("/dashboard", <Dashboard />);
const dashboardBurgerRoute = new RouteLink(
  "/dashboard-burger",
  <DashboardBurger />
);
const personalEngagementRoute = new RouteLink(
  "/personal-engagement",
  <PersonalEngagement />
);
const assessmentRoute = new RouteLink("/assessment", <Assessment />);
const assessmentBurgerRoute = new RouteLink(
  "/assessment-burger",
  <AssessmentBurger />
);
const subjectRoute = new RouteLink("/subject", <Subject />);

export {
  indexRoute,
  registerRoute,
  dashboardRoute,
  dashboardBurgerRoute,
  personalEngagementRoute,
  assessmentRoute,
  assessmentBurgerRoute,
  subjectRoute,
};
