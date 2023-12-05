import ViewSubjectC from "./component/ViewSubjectC";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { subjectRoute } from "../../route/routes";
import { Link } from "react-router-dom";

function ViewSubjectNoSidebar({ data }) {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <h6 className="roboto border-bottom border-light text-light position-relative px-4 py-3">
              Personal Engagement Result
            </h6>
            <Link to={subjectRoute.path} className="nav-link d-inline">
              <button className="btn btn-info mt-2 roboto text-light">
                Back to Assessments
              </button>
            </Link>

            {/*-- SUBJECT CONTAINER --*/}
            <ViewSubjectC subjects={data.viewableSubjects} />
          </section>
          {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
        </div>
      </div>
    </>
  );
}

function ViewSubjectWithSidebar({ viewablePE, data, selectedStrand }) {
  return (
    <>
      {/*-- W/ SIDEBAR --*/}
      <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
        <section
          className={`col-12 col-md-6 col-lg-9 h-100 position-relative ${
            !viewablePE ? "auto-overflow pb-4 pb-4 px-3 px-md-4 px-lg-5" : "p-0"
          }`}
        >
          {!viewablePE ? (
            <>
              <h6 className="roboto border-bottom border-light text-light position-relative px-4 py-3">
                Personal Engagement Result
              </h6>
              <Link to={subjectRoute.path} className="nav-link d-inline">
                <button className="btn btn-info mt-2 roboto text-light">
                  Back to Assessments
                </button>
              </Link>

              {/*-- SUBJECT CONTAINER --*/}
              <ViewSubjectC subjects={data.viewableSubjects} />
            </>
          ) : (
            <>
              <PEResult
                preferredStrand={data.preferredStrand}
                personalEngagements={data.personalEngagements}
              />
              ;
            </>
          )}
        </section>
        <DashboardSidebar
          user={data.user}
          selectedStrand={selectedStrand}
          subjects={data.subjects}
          pendingSubjects={data.pendingSubjects}
        />
      </div>
    </>
  );
}

export { ViewSubjectNoSidebar, ViewSubjectWithSidebar };
