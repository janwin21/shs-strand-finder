import AccessHeader from "./AccessHeader";
import AccessTable from "./AccessTable";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import Localhost from "../../js/model/LocalHost";
import FormAuth from "../../js/model/FormAuth";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { formData } from "../../js/json-structure/form";
import { accessData } from "../../js/json-structure/access";
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

function Access({ viewableSidebar, viewablePE, loginUser }) {
  const navigate = useNavigate();

  // FETCH
  const [data, fetchAuth] = useState(formData);
  const [access, fetchAccess] = useState(accessData);

  // UML
  const { otherUser, setOtherUser } = useState({
    userID: "user456",
    isAdmin: true,
  });

  const { targetUser, setTargetUser } = useState({
    email: "user@email.com",
  });

  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = Localhost.sessionKey("user");
      const dataD = await new FormAuth().adminAuth(token);

      if (dataD?.response?.data?.error) {
        navigate(indexRoute.path);
      } else {
        loginUser(dataD.user);
        fetchAccess(accessData);
        fetchAuth({
          ...data,
          user: dataD.user,
          preferredStrand: dataD.preferredStrand,
          personalEngagements: dataD.personalEngagements,
          subjects: dataD.subjects,
          pendingSubjects: dataD.pendingSubjects,
          strandTypes: dataD.strandTypes,
        });
        setSelectedStrand(dataD.selectedStrand);
      }
    };

    fetchData();
  }, []);

  // UPDATE dashboard data
  useEffect(() => {}, [data]);

  const allow = (i) => {
    access.users[i].isAdmin = !access.users[i].isAdmin;
    fetchAccess({ ...access });
  };

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
                  <AccessHeader />
                  <AccessTable accessData={access} cb={(i) => allow(i)} />
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
                    <AccessHeader />
                    <AccessTable accessData={access} cb={(i) => allow(i)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Access);
