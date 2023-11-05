import SubjectType from "./SubjectType";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import SubjectP from "../../js/model/SubjectP";
import Localhost from "../../js/model/LocalHost";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { subjectData } from "../../js/json-structure/subject";
import { indexRoute } from "../../route/routes";
import { action } from "../../redux/action";
import Loading from "../loading/Loading";

const mapStateToProps = (state) => {
  return {
    loading: state.store.loading,
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
    load: (loading) => dispatch({ type: action.LOAD, loading }),
  };
};

function Subject({ loading, viewableSidebar, viewablePE, loginUser, load }) {
  const navigate = useNavigate();

  // FETCH
  const [data, setData] = useState(subjectData);

  // UML
  const [selectedStrand, setSelectedStrand] = useState({
    userID: "user123",
    id: "strand123",
    imagePath: null,
    accessToken: "access-token",
  });

  useEffect(() => {
    load(true);

    const fetchData = async () => {
      const token = Localhost.sessionKey("user");
      const dataD = await new SubjectP().read(token);

      if (dataD?.response?.data?.error) {
        navigate(indexRoute.path);
      } else {
        loginUser(dataD.user);
        setData({
          ...data,
          user: dataD.user,
          subjectTypes: dataD.subjectTypes,
          preferredStrand: dataD.preferredStrand,
          personalEngagements: dataD.personalEngagements,
          subjects: dataD.subjects,
          pendingSubjects: dataD.pendingSubjects,
          strandTypes: dataD.strandTypes,
        });
        setSelectedStrand(dataD.selectedStrand);
        load(false);
      }
    };

    fetchData();
  }, []);

  // UPDATE subject data
  useEffect(() => {}, [data]);

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
                  {data.subjectTypes.map((subjectType, i) => {
                    return <SubjectType key={i} subjectType={subjectType} />;
                  })}
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
                    {data.subjectTypes.map((subjectType, i) => {
                      return <SubjectType key={i} subjectType={subjectType} />;
                    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
