import PEPanel from "./PEPanel";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import PEP from "../../js/model/PEP";
import Localhost from "../../js/model/LocalHost";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assessmentData } from "../../js/json-structure/assessment";
import { indexRoute, dashboardRoute } from "../../route/routes";
import { action } from "../../redux/action";
import Loading from "../loading/Loading";

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

function _Assessment({ viewableSidebar, viewablePE, loginUser }) {
  const navigate = useNavigate();

  // FETCH
  const [data, setData] = useState(assessmentData);
  const [pe, setPE] = useState({});
  const [error, setError] = useState(true);

  // UML
  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });
  const [loading, load] = useState(true);

  const [choice, setChoice] = useState("");

  useEffect(() => {
    async function fetchData() {
      load(true);
      const token = Localhost.sessionKey("user");
      const dataD = await new PEP().findByIdNav("none", token);
      console.log(dataD);

      if (dataD?.error) {
        console.log(dataD.error);
        return navigate(dashboardRoute.path);
      }

      if (dataD?.response?.data?.error) {
        navigate(indexRoute.path);
      } else {
        loginUser(dataD.user);
        setPE({
          ...dataD,
          user: dataD.user,
          preferredStrand: dataD.preferredStrand,
          personalEngagements: dataD.personalEngagements,
          subjects: dataD.subjects,
          pendingSubjects: dataD.pendingSubjects,
          strandTypes: dataD.strandTypes,
        });
        setSelectedStrand(dataD.selectedStrand);
        load(false);
      }
      // console.log(pe);
    }

    fetchData();
  }, []);

  useEffect(() => {}, [pe, choice]);

  // FUNCTION
  const prevCall = async () => {
    load(true);
    const token = Localhost.sessionKey("user");
    const dataD = await new PEP().findByIdNav(pe.prev, token);

    setPE({
      ...dataD,
      user: dataD.user,
      preferredStrand: dataD.preferredStrand,
      personalEngagements: dataD.personalEngagements,
      subjects: dataD.subjects,
      pendingSubjects: dataD.pendingSubjects,
      strandTypes: dataD.strandTypes,
    });

    setSelectedStrand(dataD.selectedStrand);
    load(false);
  };

  const nextCall = async () => {
    // ANSWER
    load(true);
    const pep = new PEP();

    if (choice.length != 0) {
      await pep.answer({
        user: pe.user.id,
        pe: pe._id,
        yes: choice === "a",
      });
    }

    setChoice("");

    // GO TO NEXT QUESTION
    const token = Localhost.sessionKey("user");
    const dataD = await pep.findByIdNav(pe.next, token);

    setPE({
      ...dataD,
      user: dataD.user,
      preferredStrand: dataD.preferredStrand,
      personalEngagements: dataD.personalEngagements,
      subjects: dataD.subjects,
      pendingSubjects: dataD.pendingSubjects,
      strandTypes: dataD.strandTypes,
    });

    setSelectedStrand(dataD.selectedStrand);
    load(false);
  };

  const submit = async () => {
    // ANSWER
    if (choice.length != 0) {
      await new PEP().answer({
        user: pe.user.id,
        pe: pe._id,
        yes: choice === "a",
      });
    }

    setChoice("");
    navigate(dashboardRoute.path);
  };

  return loading ? (
    <Loading />
  ) : (
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
                  <PEPanel
                    pe={pe}
                    choice={choice}
                    cb1={() => setChoice("a")}
                    cb2={() => setChoice("b")}
                  />
                  {/*-- NEXT --*/}
                  {choice.length != 0 ? (
                    <button
                      className="btn btn-dark float-end roboto px-4"
                      onClick={() => (pe.next ? nextCall() : submit())}
                    >
                      {pe.next ? "NEXT" : "SUBMIT"}
                    </button>
                  ) : (
                    <></>
                  )}
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
                    {/*-- NO SIDEBAR --*/}
                    <div className="container">
                      <div className="row">
                        <section className="col-12 pb-4">
                          <PEPanel
                            pe={pe}
                            choice={choice}
                            cb1={() => setChoice("a")}
                            cb2={() => setChoice("b")}
                          />
                          {/*-- NEXT --*/}
                          {choice.length != 0 ? (
                            <button
                              className="btn btn-dark float-end roboto px-4"
                              onClick={() => (pe.next ? nextCall() : submit())}
                            >
                              {pe.next ? "NEXT" : "SUBMIT"}
                            </button>
                          ) : (
                            <></>
                          )}
                        </section>
                        {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <PEResult
                      preferredStrand={pe?.preferredStrand}
                      personalEngagements={pe.personalEngagements}
                    />
                    ;
                  </>
                )}
              </section>
              <DashboardSidebar
                user={pe.user}
                selectedStrand={selectedStrand}
                subjects={pe.subjects}
                pendingSubjects={pe.pendingSubjects}
              />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(_Assessment);
