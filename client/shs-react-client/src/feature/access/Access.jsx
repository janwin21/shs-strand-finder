import AccessHeader from "./AccessHeader";
import AccessTable from "./AccessTable";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { formData } from "../../js/json-structure/form";
import { accessData } from "../../js/json-structure/access";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

function Access({ viewableSidebar, viewablePE }) {
  // FETCH
  const [data, fetchData] = useState(formData);
  const [access, fetchAccess] = useState(accessData);

  // UML
  const { otherUser, setOtherUser } = useState({
    userID: "user456",
    isAdmin: true,
  });
  const { targetUser, setTargetUser } = useState({
    email: "user@email.com",
  });

  useEffect(() => {
    fetchAccess(accessData);
  }, []);

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

export default connect(mapStateToProps, null)(Access);
