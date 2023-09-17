import { connect } from "react-redux";
import { useState } from "react";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";
import SubjectC from "./SubjectC";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubjectType: (subjectType) =>
      dispatch({
        type: action.DELETE_SUBJECT_TYPE,
        subjectTypeForDeletion: subjectType,
      }),
  };
};

function SubjectType({ deleteSubjectType }) {
  const [subjectType] = useState({ name: "COMMUNICATION" });

  return (
    <>
      {/*-- SUBJECT TYPE CONTAINER --*/}
      <section className="subject-type-container position-relative mt-5">
        <a
          onClick={(event) => {
            event.preventDefault();
            deleteSubjectType(subjectType);
          }}
          data-bs-toggle="modal"
          data-bs-target={"#" + modalType.SUBJECT_TYPE_DELETION}
          className="nav-link"
        >
          <i className="fa-solid fa-rectangle-xmark text-danger fs-3 position-absolute top-0 end-0"></i>
        </a>
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          SUBJECT TYPE NAME
        </h5>
        <section className="row">
          <SubjectC />
          <SubjectC />
        </section>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(SubjectType);
