import Form from "./Form";
import Image from "./Image";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import { useState } from "react";
import { connect } from "react-redux";
import { formData } from "../../js/json-structure/form";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

function Reset({ viewableSidebar, viewablePE }) {
  // FETCH
  const [data, fetchAccess] = useState(formData);

  return (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login d-lg-flex align-items-center ${
          !viewableSidebar
            ? "auto-overflow container"
            : "position-relative container-fluid"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="row w-100">
              <section className="col-8">
                <Form />
              </section>
              <Image />
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div
              className={`row align-items-center ${
                viewablePE ? "bg-dark" : ""
              }`}
            >
              <section
                className={`col-9 h-100 auto-overflow position-relative ${
                  !viewablePE ? "pb-4 px-5" : "p-0"
                }`}
              >
                {!viewablePE ? (
                  <>
                    <Form />
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
                selectedStrand={data.preferredStrand}
                subjects={data.subjects}
                pendingSubjects={data.pendingSubjects}
              />
            </div>
          </>
        )}
      </main>

      {/*-- DESIGN --*/}
      <span className="shs-design verticalOval-1"></span>
      <span className="shs-design verticalOval-2"></span>
      <span className="shs-design verticalOval-3"></span>
      <span className="shs-design verticalOval-4"></span>
      <span className="shs-design verticalOval-6"></span>
      <span className="shs-design verticalOval-5"></span>
    </>
  );
}

export default connect(mapStateToProps, null)(Reset);
