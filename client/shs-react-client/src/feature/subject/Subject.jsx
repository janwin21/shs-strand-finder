import SubjectType from "./SubjectType";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import PEResult from "../layout/PEResult";
import SubjectP from "../../js/model/SubjectP";
import Localhost from "../../js/model/LocalHost";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { subjectData } from "../../js/json-structure/subject";
import { indexRoute, viewSubjectRoute } from "../../route/routes";
import { action } from "../../redux/action";
import { SubjectNoSidebar, SubjectWithSidebar } from "./SubjectLayout";
import Loading from "../loading/Loading";
import SubjectHeader from "./SubjectHeader";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
    viewablePE: state.store.viewablePE,
    subjectTypeForDeletion: state.store.subjectTypeForDeletion,
    subjectForDeletion: state.store.subjectForDeletion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
  };
};

function Subject({
  viewableSidebar,
  viewablePE,
  subjectTypeForDeletion,
  subjectForDeletion,
  loginUser,
}) {
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
  const [loading, load] = useState(true);

  const fetchData = async () => {
    load(true);
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

  useEffect(() => {
    fetchData();
  }, []);

  // UPDATE subject data
  useEffect(() => {}, [data]);
  useEffect(() => {
    if (subjectTypeForDeletion == null) {
      fetchData();
    }
  }, [subjectTypeForDeletion]);
  useEffect(() => {
    if (subjectForDeletion == null) {
      fetchData();
    }
  }, [subjectForDeletion]);

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
          <SubjectNoSidebar data={data} />
        ) : (
          <SubjectWithSidebar
            viewablePE={viewablePE}
            data={data}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
