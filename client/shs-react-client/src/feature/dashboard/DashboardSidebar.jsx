import { action } from "../../redux/action";
import { connect } from "react-redux";
import SidebarButton from "./component/SidebarButton";

const mapDispatchToProps = (dispatch) => {
  return {
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
  };
};

function DashboardSidebar({ viewSidebar }) {
  return (
    <>
      {/*-- SIDEBAR --*/}
      <section
        className="col-3 auto-overflow position-sticky top-0 end-0 justify-content-end bg-dark m-0 p-0"
        style={{ height: "94vh" }}
      >
        <h6 className="roboto text-light position-relative border-bottom border-light px-4 py-3">
          <i className="fa-solid fa-user me-3"></i>email@email.com
          <a
            onClick={(event) => {
              event.preventDefault();
              viewSidebar(false);
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
          <img
            src="../asset/strand/strand1.jpg"
            alt="strand image display"
            style={{ height: "175px" }}
          />
          <h6 className="roboto text-light my-3 px-4 py-3">Strand Name</h6>
          <p className="roboto text-light px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <SidebarButton
          label="Personal Engagement"
          icon1="fa-regular fa-note-sticky"
          icon2="fa-solid fa-angle-left"
        />
        <h6 className="roboto text-light border-bottom border-light px-4 py-3">
          <i className="fa-solid fa-clipboard-question me-3"></i>Assessments
        </h6>

        {/*-- SUBJECT SECTION --*/}
        <section>
          {/*-- SUBJECT CARD --*/}
          <div
            className="card bg-dark rounded-0 border-bottom border-light border-top-0 border-start-0 border-end-0 p-4"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="../asset/subject/subject1.jpg"
                  className="img-fluid rounded-0"
                  alt="subject image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title poppins text-light text-uppercase mb-3">
                    Subject Name
                  </h6>
                  <p className="card-text text-light mb-0">
                    score: <strong>100</strong> / 100
                  </p>
                  <p className="card-text text-light mb-0">duration: 1 hr</p>
                  <p className="card-text text-light mb-0">leave count: 3</p>
                </div>
              </div>
            </div>
          </div>
          {/*-- SUBJECT CARD --*/}
          <div
            className="card bg-dark rounded-0 border-bottom border-light border-top-0 border-start-0 border-end-0 p-4"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="../asset/subject/subject1.jpg"
                  className="img-fluid rounded-0"
                  alt="subject image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title poppins text-light text-uppercase mb-3">
                    Subject Name
                  </h6>
                  <a className="nav-link d-inline" href="#">
                    <button className="btn btn-secondary roboto px-4 fs-6">
                      TAKE ASSESSMENT
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SidebarButton
          label="New Strand Type"
          icon1="fa-brands fa-firstdraft"
          icon2="fa-solid fa-computer-mouse"
        />
        <SidebarButton
          label="New Strand"
          icon1="fa-solid fa-person-booth"
          icon2="fa-solid fa-computer-mouse"
        />
        <SidebarButton
          label="New Subject Type"
          icon1="fa-solid fa-book"
          icon2="fa-solid fa-computer-mouse"
        />
        <SidebarButton
          label="New Subject"
          icon1="fa-solid fa-note-sticky"
          icon2="fa-solid fa-computer-mouse"
        />
        <SidebarButton
          label="New Personal Engagement"
          icon1="fa-solid fa-id-badge"
          icon2="fa-solid fa-computer-mouse"
        />
        <SidebarButton
          label="New Assessment Question"
          icon1="fa-solid fa-circle-question"
          icon2="fa-solid fa-computer-mouse"
        />
        <SidebarButton
          label="Authorize Access"
          icon1="fa-solid fa-gamepad"
          icon2="fa-solid fa-computer-mouse"
          color="text-danger"
        />
        <SidebarButton
          label="Logout"
          icon1="fa-solid fa-right-from-bracket"
          icon2="fa-solid fa-computer-mouse"
          color="text-danger"
          toggle={true}
          target="logout"
        />
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(DashboardSidebar);
