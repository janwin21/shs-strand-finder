import ViewPEAnswered from "./component/ViewPEAnswered";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "../dashboard/DashboardSidebar";

function ViewPENoSidebar({ data }) {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <h6 className="roboto border-bottom border-light text-light position-relative px-4 py-3">
              Personal Engagement Result
            </h6>

            {/*-- PE CONTAINER --*/}
            <section className="row w-100 p-4">
              {data?.pes?.map((pe, index) => (
                <ViewPEAnswered key={index} peNo={index + 1} pe={pe} />
              ))}
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

function ViewPEWithSidebar({ viewablePE, data, selectedStrand }) {
  return (
    <>
      {/*-- W/ SIDEBAR --*/}
      <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
        <section
          className={`col-12 col-md-6 col-lg-9 h-100 position-relative p-0 ${
            !viewablePE ? "auto-overflow" : ""
          }`}
        >
          {!viewablePE ? (
            <>
              <h6 className="roboto border-bottom border-light text-light position-relative px-4 py-3">
                Personal Engagement Result
              </h6>

              {/*-- PE CONTAINER --*/}
              <section className="row w-100 p-4">
                {data?.pes?.map((pe, index) => (
                  <ViewPEAnswered key={index} peNo={index + 1} pe={pe} />
                ))}
              </section>
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

export { ViewPENoSidebar, ViewPEWithSidebar };
