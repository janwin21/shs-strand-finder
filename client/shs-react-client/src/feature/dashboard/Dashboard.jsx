import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardStrandType from "./DashboardStrandType";
import { connect } from "react-redux";
import { useState } from "react";
import { dashboardData } from "../../js/json-structure/dashboard";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

function Dashboard({ viewableSidebar }) {
  // FETCH
  const [data, fetchData] = useState(dashboardData);

  return (
    <>
      {/*-- MAIN --*/}
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
                  <DashboardHeader />
                  <DashboardStrandType />
                  <DashboardStrandType />
                  <DashboardStrandType />
                  <DashboardStrandType />
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
              </div>
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className="row h-100">
              <section className="col-9 h-100 auto-overflow position-relative pb-4 px-5">
                <DashboardHeader />
                <DashboardStrandType />
              </section>
              <DashboardSidebar />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(Dashboard);
