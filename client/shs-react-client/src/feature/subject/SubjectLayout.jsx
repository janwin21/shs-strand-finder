import SubjectHeader from "./SubjectHeader";
import SubjectType from "./SubjectType";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "../dashboard/DashboardSidebar";

function SubjectNoSidebar({ data }) {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <SubjectHeader user={data?.user} />
            {data?.subjectTypes.map((subjectType, i) => {
              return (
                <SubjectType
                  key={i}
                  user={data.user}
                  subjectType={subjectType}
                />
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}

function SubjectWithSidebar({ viewablePE, data, selectedStrand }) {
  return (
    <>
      {/*-- W/ SIDEBAR --*/}
      <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
        <section
          className={`col-9 h-100 position-relative ${
            !viewablePE ? "auto-overflow pb-4 px-5" : "p-0"
          }`}
        >
          {!viewablePE ? (
            <>
              <SubjectHeader user={data?.user} />
              {data?.user?.isAdmin == true ? (
                <a
                  onClick={(ev) => {
                    ev.preventDefault();
                    navigate(viewSubjectRoute.path);
                  }}
                  className="nav-link d-inline"
                >
                  <button className="btn btn-dark text-light roboto px-4 mt-3 fs-6 fw-semibold">
                    VIEWABLE QUESTIONS
                  </button>
                </a>
              ) : (
                <></>
              )}
              {data.subjectTypes.map((subjectType, i) => {
                return (
                  <SubjectType
                    key={i}
                    user={data.user}
                    subjectType={subjectType}
                  />
                );
              })}
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

export { SubjectNoSidebar, SubjectWithSidebar };
