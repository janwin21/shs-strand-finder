import { connect } from "react-redux";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStrand: (strand) =>
      dispatch({
        type: action.DELETE_STRAND,
        strandForDeletion: strand,
      }),
    viewSidebar: (bool) =>
      dispatch({ type: action.VIEW_SIDEBAR, viewableSidebar: bool }),
  };
};

function DashboardStrand({
  deleteStrand,
  viewSidebar,
  strand,
  strandCb = null,
}) {
  return (
    <>
      {/*-- STRAND CONTAINER --*/}
      <div
        onClick={() => {
          if (strandCb) {
            strandCb();
          }
          viewSidebar(true);
          console.log("SELECTED STRAND : ", strand);
        }}
        className="card col-2 position-relative text-bg-dark p-0 m-3"
        style={{ height: "350px", cursor: "pointer" }}
      >
        <img
          src={strand.imagePath}
          className="card-img h-100"
          alt="strand img"
        />
        <a
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            deleteStrand(strand);
          }}
          data-bs-toggle="modal"
          data-bs-target={"#" + modalType.STRAND_DELETION}
          className="nav-link"
        >
          <i className="fa-solid fa-rectangle-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
        </a>
        <div className="bg-dark position-absolute p-2 bottom-0 w-100">
          <h5 className="card-title roboto">{strand.name}</h5>
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(DashboardStrand);
