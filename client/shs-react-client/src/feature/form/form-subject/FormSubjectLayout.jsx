import FormHeader from "../component/FormHeader";
import Form from "./Form";
import PEResult from "../../layout/PEResult";
import DashboardSidebar from "../../dashboard/DashboardSidebar";

function FormSubjectNoSidebar({ data, subject, change }) {
  return (
    <>
      {/*-- W/O SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <FormHeader
              title="Create New Subject"
              instruction={`Hello, ${data?.user?.email}! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            />
            <Form
              subject={subject}
              cb={change}
              strandTypes={data?.strandTypes}
              strands={data?.strands}
            />
          </section>
        </div>
      </div>
    </>
  );
}

function FormSubjectWithSidebar({
  viewablePE,
  data,
  subject,
  change,
  selectedStrand,
}) {
  return (
    <>
      {/*-- W/ SIDEBAR --*/}
      <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
        <section
          className={`col-12 col-md-6 col-lg-9 h-100 position-relative ${
            !viewablePE ? "auto-overflow pb-4 px-5" : "p-0"
          }`}
        >
          {!viewablePE ? (
            <>
              <FormHeader
                title="Create New Subject"
                instruction={`Hello, ${data?.user?.email}! Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
              />
              <Form
                subject={subject}
                cb={change}
                strandTypes={data?.strandTypes}
                strands={data?.strands}
              />
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

export { FormSubjectNoSidebar, FormSubjectWithSidebar };
