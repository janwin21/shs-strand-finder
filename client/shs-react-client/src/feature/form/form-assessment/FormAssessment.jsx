// import FormHeader from "../component/FormHeader";
// import Form from "./Form";
// import DashboardSidebar from "../../dashboard/DashboardSidebar";
// import PEResult from "../../layout/PEResult";
// import { formData } from "../../../js/json-structure/form";
import Localhost from "../../../js/model/LocalHost";
import FormAuth from "../../../js/model/FormAuth";
import Loading from "../../loading/Loading";
import Subject from "../../../js/model/Subject";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { indexRoute } from "../../../route/routes";
import { action } from "../../../redux/action";
import { AssessmentNoSidebar, AssessmentWithSidebar } from "./AssessmentLayout";
import TimeWatch from "../../../js/TimeWatch";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    fastData: state.store.fastData,
    selectedStrand: state.store.selectedStrand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
    fastAccess: (fastData) =>
      dispatch({ type: action.SET_FAST_DATA, fastData }),
    setSelectedStrand: (selectedStrand) =>
      dispatch({ type: action.SET_SELECTED_STRAND, selectedStrand }),
  };
};

function FormAssessment({
  viewableSidebar,
  viewablePE,
  fastData,
  selectedStrand,
  loginUser,
  fastAccess,
  setSelectedStrand,
}) {
  const navigate = useNavigate();

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
  const [loading, load] = useState(true);

  // FAST ACCESS
  const fast = async () => {
    const subjects = await new Subject().read();
    fastAccess({ ...fastData, subjects });
  };

  // INIT ACCESS
  const init = async () => {
    if (!Localhost.has("user")) navigate(indexRoute.path);
    const token = Localhost.sessionKey("user");
    const dataD = await new FormAuth().questionAuth(token);

    if (dataD?.response?.data?.error) {
      navigate(indexRoute.path);
    } else {
      loginUser(dataD.user);
      fastAccess(dataD);
      setSelectedStrand(dataD.selectedStrand);
    }
  };

  const fetchData = async () => {
    load(true);
    if (fastData) await fast();
    else await init();
    load(false);
  };

  useEffect(() => {
    TimeWatch.cancel();
    fetchData();
  }, []);

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
          <AssessmentNoSidebar
            data={fastData}
            question={question}
            setQuestion={setQuestion}
          />
        ) : (
          <AssessmentWithSidebar
            viewablePE={viewablePE}
            data={fastData}
            question={question}
            setQuestion={setQuestion}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAssessment);
