// import Form from "./Form";
// import Image from "./Image";
// import DashboardSidebar from "../dashboard/DashboardSidebar";
// import PEResult from "../layout/PEResult";
// import FormAuth from "../../js/model/FormAuth";
// import { formData } from "../../js/json-structure/form";
import Localhost from "../../js/model/LocalHost";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { indexRoute } from "../../route/routes";
import { action } from "../../redux/action";
import Loading from "../loading/Loading";
import ResetD from "../../js/model/Reset";
import { ResetNoSidebar, ResetWithSidebar } from "./ResetLayout";
import TimeWatch from "../../js/TimeWatch";

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

function Reset({
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
  const [loading, load] = useState(true);

  // FAST ACCESS
  const fast = async () => {};

  // INITIAL ACCESS
  const init = async () => {
    if (!Localhost.has("user")) navigate(indexRoute.path);

    const token = Localhost.sessionKey("user");
    const dataD = await new ResetD().auth(token);

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
        className={`login d-lg-flex align-items-center px-0 ${
          !viewableSidebar
            ? "auto-overflow container"
            : "position-relative container-fluid"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <ResetNoSidebar />
        ) : (
          <ResetWithSidebar
            viewablePE={viewablePE}
            data={fastData}
            selectedStrand={selectedStrand}
          />
        )}
      </main>

      {/*-- DESIGN --*/}
      <span className="shs-design verticalOval-1"></span>
      <span className="shs-design verticalOval-2"></span>
      <span className="shs-design verticalOval-3"></span>
      <span className="shs-design verticalOval-4"></span>
      <span className="shs-design verticalOval-6"></span>
      <span className="shs-design verticalOval-5"></span>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
