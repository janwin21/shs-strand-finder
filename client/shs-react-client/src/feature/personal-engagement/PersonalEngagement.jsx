import PEAnswered from "./PEAnswered";
import PEUnanswer from "./PEUnanswer";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { connect } from "react-redux";
import { useState } from "react";
import { personalEngagementData } from "../../js/json-structure/personal-engagement";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

function PersonalEngagement({ viewableSidebar }) {
  // FETCH
  const [data, fetchData] = useState(personalEngagementData);

  // UML
  const [personalEngagement, setPersonalEngagement] = useState({
    userID: "user123",
    personalEngagementID: "PE123",
    yes: true,
  });

  return (
    <>
      {/*-- MAIN - NO FLEX --*/}
      <main
        className={`login container-fluid ${
          !viewableSidebar ? "auto-overflow" : "position-relative"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="container">
              <div className="row">
                <section className="col-12 pb-4">
                  {/*-- STRAND TYPE CONTAINER --*/}
                  <section className="strand-type-container mt-5">
                    <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                      PERSONAL ENGAGEMENT
                    </h5>
                    <section className="row" style={{ gap: "0.75rem" }}>
                      <PEUnanswer />
                      <PEAnswered />
                    </section>
                  </section>
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section>  --*/}
              </div>
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className="row h-100">
              <section className="col-9 h-100 auto-overflow position-relative pb-4 px-5">
                {/*-- STRAND TYPE CONTAINER --*/}
                <section className="strand-type-container mt-5">
                  <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                    PERSONAL ENGAGEMENT
                  </h5>
                  <section className="row" style={{ gap: "0.75rem" }}>
                    <PEUnanswer />
                    <PEAnswered />
                  </section>
                </section>
              </section>
              <DashboardSidebar />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(PersonalEngagement);
