// import FormHeader from "../component/FormHeader";
// import Form from "./Form";
// import DashboardSidebar from "../../dashboard/DashboardSidebar";
// import PEResult from "../../layout/PEResult";
// import { formData } from "../../../js/json-structure/form";
import Localhost from "../../../js/model/LocalHost";
import FormAuth from "../../../js/model/FormAuth";
import Loading from "../../loading/Loading";
import StrandType from "../../../js/model/StrandType";
import TimeWatch from "../../../js/TimeWatch";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { indexRoute } from "../../../route/routes";
import { action } from "../../../redux/action";
import { FormStrandNoSidebar, FormStrandWithSidebar } from "./FormStrandLayout";

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

function FormStrand({
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
  const [strand, setStrand] = useState({
    strandTypeID: null,
    name: "",
    description: "",
    image: null,
    display: null,
  });
  const [loading, load] = useState(true);

  // FAST ACCESS
  const fast = async () => {
    const data = await new StrandType().read();
    fastAccess({ ...fastData, strandTypes: data.strandTypes });
  };

  // INITIAL ACCESS
  const init = async () => {
    if (!Localhost.has("user")) navigate(indexRoute.path);
    const token = Localhost.sessionKey("user");
    const dataD = await new FormAuth().strandAuth(token);

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
          <FormStrandNoSidebar
            data={fastData}
            strand={strand}
            change={setStrand}
          />
        ) : (
          <FormStrandWithSidebar
            viewablePE={viewablePE}
            data={fastData}
            strand={strand}
            change={setStrand}
            selectedStrand={selectedStrand}
          />
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FormStrand);
