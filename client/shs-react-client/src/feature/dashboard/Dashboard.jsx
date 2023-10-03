import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardStrandType from "./DashboardStrandType";
import PEResult from "../layout/PEResult";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { dashboardData } from "../../js/json-structure/dashboard";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

function Dashboard({ viewableSidebar, viewablePE }) {
  // FETCH
  const [data, fetchData] = useState(dashboardData);

  // UML
  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });

  const [logoutUser, setLogoutUser] = useState({
    accessToken: "access-token",
  });

  useEffect(() => {
    setSelectedStrand({ ...data.selectedStrand });
  }, []);

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
                  {data.strandTypes.map((strandType) => (
                    <DashboardStrandType
                      key={strandType.id}
                      strandType={strandType}
                      strandCb={(strand) => {
                        setSelectedStrand({
                          ...strand,
                          userID: data.user.email,
                        });
                      }}
                    />
                  ))}
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
              </div>
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
              <section
                className={`col-9 h-100 auto-overflow position-relative ${
                  !viewablePE ? "pb-4 px-5" : "p-0"
                }`}
              >
                {!viewablePE ? (
                  <>
                    <DashboardHeader />
                    {data.strandTypes.map((strandType) => (
                      <DashboardStrandType
                        key={strandType.id}
                        strandType={strandType}
                        strandCb={(strand) => {
                          setSelectedStrand({
                            ...strand,
                            userID: data.user.email,
                          });
                        }}
                      />
                    ))}
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
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(Dashboard);
