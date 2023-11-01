import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardStrandType from "./DashboardStrandType";
import PEResult from "../layout/PEResult";
import DashboardD from "../../js/model/Dashboard";
import Localhost from "../../js/model/LocalHost";
import SelectedStrand from "../../js/model/SelectedStrand";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dashboardData } from "../../js/json-structure/dashboard";
import { indexRoute } from "../../route/routes";
import { action } from "../../redux/action";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
  };
};

function Dashboard({ viewableSidebar, viewablePE, loginUser }) {
  const navigate = useNavigate();

  // FETCH
  const [data, setData] = useState(dashboardData);

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
    const fetchData = async () => {
      const token = Localhost.sessionKey("user");
      const dataD = await new DashboardD().read(token);

      if (dataD?.response?.data?.error) {
        navigate(indexRoute.path);
      } else {
        loginUser(dataD.user);
        setData({
          ...data,
          user: dataD.user,
          preferredStrand: dataD.preferredStrand,
          personalEngagements: dataD.personalEngagements,
          subjects: dataD.subjects,
          pendingSubjects: dataD.pendingSubjects,
          strandTypes: dataD.strandTypes,
        });
        setSelectedStrand(dataD.selectedStrand);
        /*
        console.log(
          dataD.pendingSubjects.length,
          dataD.personalEngagements.length,
          dataD.pendingSubjects.length == 0,
          dataD.personalEngagements.length != 0,
          dataD.pendingSubjects.length == 0 &&
            dataD.personalEngagements.length != 0
        );
        */
      }
    };

    fetchData();
  }, []);

  // UPDATE dashboard data
  useEffect(() => {}, [data]);

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
                  <DashboardHeader
                    user={data.user}
                    finish={
                      data.pendingSubjects.length == 0 &&
                      data.personalEngagements.length != 0
                    }
                  />
                  {data.strandTypes.map((strandType, i) => (
                    <DashboardStrandType
                      key={i}
                      strandType={strandType}
                      strandCb={async (strand) => {
                        const selectedStrand = new SelectedStrand();
                        await selectedStrand.create(data.user.id, strand._id);
                        setSelectedStrand({
                          ...strand,
                          userID: data.user.id,
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
                className={`col-9 h-100 position-relative ${
                  !viewablePE ? "auto-overflow pb-4 px-5" : "p-0"
                }`}
              >
                {!viewablePE ? (
                  <>
                    <DashboardHeader
                      user={data.user}
                      finish={data.pendingSubjects.length == 0}
                    />
                    {data.strandTypes.map((strandType, i) => (
                      <DashboardStrandType
                        key={i}
                        strandType={strandType}
                        strandCb={async (strand) => {
                          const selectedStrand = new SelectedStrand();
                          await selectedStrand.create(data.user.id, strand._id);
                          setSelectedStrand({
                            ...strand,
                            userID: data.user.id,
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
