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
import Access from "../feature/access/Access";
import Result from "../feature/result/Result";

/* FORM */
import FormStrandType from "../feature/form/form-strand-type/FormStrandType";
import FormStrand from "../feature/form/form-strand/FormStrand";
import FormSubjectType from "../feature/form/form-subject-type/FormSubjectType";
import FormSubject from "../feature/form/form-subject/FormSubject";
import FormPersonalEngagement from "../feature/form/form-personal-engagement/FormPersonalEngagement";
import FormAssessment from "../feature/form/form-assessment/FormAssessment";

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
const resultRoute = new RouteLink("/result", <Result />);

/* FORM */
const formStrandTypeRoute = new RouteLink(
  "/form/strand-type",
  <FormStrandType />
);
const formStrandRoute = new RouteLink("/form/strand", <FormStrand />);
const formSubjectTypeRoute = new RouteLink(
  "/form/subject-type",
  <FormSubjectType />
);
const formSubjectRoute = new RouteLink("/form/subject", <FormSubject />);
const formPersonalEngagementRoute = new RouteLink(
  "/form/personal-engagement",
  <FormPersonalEngagement />
);
const formAssessmentRoute = new RouteLink(
  "/form/assessment",
  <FormAssessment />
);
const accessRoute = new RouteLink("/admin/access", <Access />);

export {
  indexRoute,
  registerRoute,
  dashboardRoute,
  dashboardBurgerRoute,
  personalEngagementRoute,
  assessmentRoute,
  assessmentBurgerRoute,
  subjectRoute,
  accessRoute,
  resultRoute,

  /* FORM */
  formStrandTypeRoute,
  formStrandRoute,
  formSubjectTypeRoute,
  formSubjectRoute,
  formPersonalEngagementRoute,
  formAssessmentRoute,
};
