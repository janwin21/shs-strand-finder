import PEAnswered from "./PEAnswered";
import PEUnanswer from "./PEUnanswer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    viewableSidebar: state.store.viewableSidebar,
  };
};

function PersonalEngagement() {
  return (
    <>
      {/*-- MAIN - NO FLEX --*/}
      <main
        className="login container-fluid auto-overflow"
        style={{ height: "94vh" }}
      >
        <div className="container">
          <div className="row">
            <section className="col-12 pb-4">
              {/*-- STRAND TYPE CONTAINER --*/}
              <section className="strand-type-container mt-5">
                <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                  PERSONAL ENGAGEMENT
                </h5>
                <section className="row" style={{ gap: "0.75rem" }}>
                  <PEUnanswer />
                  <PEAnswered />
                </section>
              </section>
            </section>
            {/*-- 
            <section className="col-4 d-flex justify-content-end bg-danger">D</section> 
          --*/}
          </div>
        </div>
      </main>
    </>
  );
}

export default connect(mapStateToProps, null)(PersonalEngagement);
