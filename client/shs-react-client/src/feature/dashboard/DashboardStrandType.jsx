import { connect } from "react-redux";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";
import DashboardStrand from "./DashboardStrand";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStrandType: (strandType) =>
      dispatch({
        type: action.DELETE_STRAND_TYPE,
        strandTypeForDeletion: strandType,
      }),
  };
};

function DashboardStrandType({
  deleteStrandType,
  strandType,
  strandCb = null,
}) {
  return (
    <>
      {/*-- STRAND TYPE CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <a
          onClick={(event) => {
            event.preventDefault();
            deleteStrandType(strandType);
          }}
          data-bs-toggle="modal"
          data-bs-target={"#" + modalType.STRAND_TYPE_DELETION}
          className="nav-link"
        >
          {strandType.strands.length == 0 ? (
            <i className="fa-solid fa-rectangle-xmark text-dark fs-3 position-absolute top-0 end-0"></i>
          ) : (
            <></>
          )}
        </a>
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          {strandType.name}
        </h5>
        <section className="row">
          {strandType.strands.map((strand, i) => (
            <DashboardStrand
              key={i}
              strand={strand}
              strandCb={() => strandCb(strand)}
            />
          ))}
        </section>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(DashboardStrandType);
