import Image from "./Image";
import Form from "./Form";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "../dashboard/DashboardSidebar";

function ResetNoSidebar() {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="row w-100">
        <section className="col-8">
          <Form />
        </section>
        <Image />
      </div>
    </>
  );
}

function ResetWithSidebar({ viewablePE, data, selectedStrand }) {
  return (
    <>
      {/*-- W/ SIDEBAR --*/}
      <div
        className={`row align-items-center w-100 m-0 ${
          viewablePE ? "bg-dark" : ""
        } h-100`}
      >
        <section
          className={`col-12 col-md-6 col-lg-9 h-100 position-relative ${
            !viewablePE
              ? "auto-overflow pb-4 pb-4 px-3 px-md-4 px-lg-5 d-flex flex-column justify-content-center"
              : "p-0"
          }`}
        >
          {!viewablePE ? (
            <>
              <Form />
            </>
          ) : (
            <>
              <PEResult
                preferredStrand={data?.preferredStrand}
                personalEngagements={data?.personalEngagements}
              />
              ;
            </>
          )}
        </section>
        <DashboardSidebar
          user={data?.user}
          selectedStrand={selectedStrand}
          subjects={data?.subjects}
          pendingSubjects={data?.pendingSubjects}
        />
      </div>
    </>
  );
}

export { ResetNoSidebar, ResetWithSidebar };
