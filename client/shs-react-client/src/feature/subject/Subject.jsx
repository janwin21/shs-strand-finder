import SubjectType from "./SubjectType";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

function Subject({ viewableSidebar }) {
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
                  <SubjectType />
                  <SubjectType />
                </section>
                {/*-- <section className="col-4 d-flex justify-content-end bg-danger">D</section> --*/}
              </div>
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className="row h-100">
              <section className="col-9 h-100 auto-overflow position-relative pb-4 px-5">
                <SubjectType />
                <SubjectType />
              </section>
              <DashboardSidebar />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(Subject);