import FormHeader from "../component/FormHeader";
import Form from "./Form";
import PEResult from "../../layout/PEResult";
import DashboardSidebar from "../../dashboard/DashboardSidebar";

function FormStrandNoSidebar({ data, strand, change }) {
  return (
    <>
      {/*-- W/O SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            <FormHeader
              title="Create New Strand"
              instruction={`Hello, ${data?.user?.email}! We wanted to inform you that you now have the authority to create and manage data within this system. Additionally, you have the ability to assign privileges to other students, empowering them to become administrators as well.`}
            />
            <Form strand={strand} cb={change} strandTypes={data?.strandTypes} />
          </section>
        </div>
      </div>
    </>
  );
}

function FormStrandWithSidebar({
  viewablePE,
  data,
  strand,
  change,
  selectedStrand,
}) {
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
              <FormHeader
                title="Create New Strand"
                instruction={`Hello, ${data?.user?.email}! We wanted to inform you that you now have the authority to create and manage data within this system. Additionally, you have the ability to assign privileges to other students, empowering them to become administrators as well.`}
              />
              <Form
                strand={strand}
                cb={change}
                strandTypes={data?.strandTypes}
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

export { FormStrandNoSidebar, FormStrandWithSidebar };
