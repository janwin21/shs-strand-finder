import Form from "./Form";
import Image from "./Image";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

function Reset({ viewableSidebar }) {
  return (
    <>
      {/*-- MAIN --*/}
      <main
        className={`login d-lg-flex align-items-center ${
          !viewableSidebar
            ? "auto-overflow container"
            : "position-relative container-fluid"
        }`}
        style={{ height: "94vh" }}
      >
        {!viewableSidebar ? (
          <>
            {/*-- NO SIDEBAR --*/}
            <div className="row w-100">
              <section className="col-8">
                <Form />
              </section>
              <Image />
            </div>
          </>
        ) : (
          <>
            {/*-- W/ SIDEBAR --*/}
            <div className="row align-items-center">
              <section className="col-9 h-100 auto-overflow position-relative px-5">
                <Form />
              </section>
              <DashboardSidebar />
            </div>
          </>
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

export default connect(mapStateToProps, null)(Reset);
