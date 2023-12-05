import AccessHeader from "./AccessHeader";
import AccessTable from "./AccessTable";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "../dashboard/DashboardSidebar";

function AccessNoSidebar({ data, allow }) {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <AccessHeader email={data?.user?.email} />
            <AccessTable mainUser={data?.user} accessData={data} cb={allow} />
          </section>
        </div>
      </div>
    </>
  );
}

function AccessWithSidebar({ viewablePE, data, allow, selectedStrand }) {
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
              <AccessHeader email={data?.user?.email} />
              <AccessTable mainUser={data?.user} accessData={data} cb={allow} />
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

export { AccessNoSidebar, AccessWithSidebar };
