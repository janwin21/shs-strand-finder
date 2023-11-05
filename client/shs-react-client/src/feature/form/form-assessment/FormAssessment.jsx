import FormHeader from "../component/FormHeader";
import Form from "./Form";
import DashboardSidebar from "../../dashboard/DashboardSidebar";
import PEResult from "../../layout/PEResult";
import Localhost from "../../../js/model/LocalHost";
import FormAuth from "../../../js/model/FormAuth";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { formData } from "../../../js/json-structure/form";
import { indexRoute } from "../../../route/routes";
import { action } from "../../../redux/action";
import Loading from "../../loading/Loading";

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

function FormAssessment({
  loading,
  viewableSidebar,
  viewablePE,
  loginUser,
  load,
}) {
  const navigate = useNavigate();

  // FETCH
  const [data, fetchAccess] = useState(formData);

  // UML
  const [question, setQuestion] = useState({
    subjectID: "",
    question: "",
    questionImage: null,
    answerKeys: [
      {
        value: ".",
        image: null,
        correct: true,
      },
    ],
  });

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
      const dataD = await new FormAuth().questionAuth(token);

      if (dataD?.response?.data?.error) {
        navigate(indexRoute.path);
      } else {
        loginUser(dataD.user);
        fetchAccess({
          ...data,
          user: dataD.user,
          subjects: dataD.subjects,
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

  // UPDATE dashboard data
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
            {/*-- W/O SIDEBAR --*/}
            <div className="container">
              <div className="row">
                <section className="col-12 pb-4">
                  <FormHeader
                    title="Create New Assessment Question"
                    instruction={`Hello, ${data?.user?.email}! Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                  />
                  <Form
                    question={question}
                    cb={setQuestion}
                    subjects={data?.subjects}
                  />
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
                    <FormHeader
                      title="Create New Assessment Question"
                      instruction={`Hello, ${data?.user?.email}! Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                    />
                    <Form
                      question={question}
                      cb={setQuestion}
                      subjects={data?.subjects}
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
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAssessment);
