import { action } from "../../redux/action";
import { connect } from "react-redux";
import { resetRoute } from "../../route/routes";
import { Link } from "react-router-dom";
import { modalType } from "../modal/modalType";
import SidebarButton from "./component/SidebarButton";
import SidebarGroup from "../layout/SidebarGroup";
import SidebarSubject from "./component/SidebarSubject";
import SidebarPendingSubject from "./component/SidebarPendingSubject";
import Localhost from "../../js/model/LocalHost";

const mapStateToProps = (state) => {
  return {
    viewablePE: state.store.viewablePE,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
    viewPE: (bool) => dispatch({ type: action.VIEW_PE, viewablePE: bool }),
  };
};

function DashboardSidebar({
  viewablePE,
  viewSidebar,
  viewPE,
  user,
  selectedStrand,
  personalEngagements,
  subjects,
  pendingSubjects,
}) {
  return (
    <>
      {/*-- SIDEBAR --*/}
      <section
        className="col-3 auto-overflow position-sticky top-0 end-0 justify-content-end bg-dark m-0 p-0"
        style={{ height: "94vh" }}
      >
        <h6 className="roboto text-light position-relative border-bottom border-light px-4 py-3">
          <Link
            to={resetRoute.path}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-user me-3"></i>
            {user?.email}
          </Link>
          <a
            onClick={(event) => {
              event.preventDefault();
              viewSidebar(false);
              viewPE(false);
            }}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
          </a>
        </h6>
        <h6 className="roboto text-light px-4 py-3">
          Preferred Strand (Selected)
        </h6>
        <div className="w-100 border-bottom border-light d-flex flex-column align-items-center justify-content-center py-3">
          {selectedStrand ? (
            <img
              src={Localhost.path() + selectedStrand.imagePath}
              alt="strand image display"
              style={{ height: "175px" }}
            />
          ) : (
            <></>
          )}
          <h6 className="roboto text-light my-3 px-4 py-3">
            {selectedStrand ? selectedStrand.name : "No Selected Strand"}
          </h6>
          <p className="roboto text-light px-4">
            {selectedStrand
              ? selectedStrand.description
              : "If you have already preferred STRAND to take, just CLICK any strand at the DASHBOARD PAGE. (TAKE NOTE that this is optional)"}
          </p>
          {/* 
          {selectedStrand ? (
            <>
              <img
                src={Localhost.path() + selectedStrand.imagePath}
                alt="strand image display"
                style={{ height: "175px" }}
              />
              <h6 className="roboto text-light my-3 px-4 py-3">
                {selectedStrand.name}
              </h6>
              <p className="roboto text-light px-4">
                {selectedStrand.description}
              </p>
            </>
          ) : (
            <>
              <h6 className="roboto text-light my-3 px-4 py-3">
                No Selected Strand
              </h6>
              <p className="roboto text-light px-4">
                To complete the assessment, one of the requirements should
                select ONE (1) Strand that you like. Just CLICK any strand at
                the DASHBOARD PAGE.
              </p>
            </>
          )}
          */}
        </div>
        <SidebarButton
          label="Personal Engagement"
          icon1="fa-regular fa-note-sticky"
          icon2="fa-solid fa-angle-left"
          cb={() => viewPE(!viewablePE)}
          toggle={false}
          target={modalType.LOGOUT}
        />
        <h6 className="roboto text-light border-bottom border-light px-4 py-3">
          <i className="fa-solid fa-clipboard-question me-3"></i>Assessments
        </h6>
        {/*-- SUBJECT SECTION --*/}
        <section>
          {/*-- ASSESSED SUBJECT --*/}
          {subjects?.map((subject, index) => (
            <SidebarSubject key={index} subject={subject} />
          ))}
          {/*-- PENDING SUBJECT --*/}
          {pendingSubjects?.map((pendingSubject) => {
            return (
              <SidebarPendingSubject
                key={pendingSubject._id}
                pendingSubject={pendingSubject}
              />
            );
          })}
        </section>
        <SidebarGroup user={user} />
      </section>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
