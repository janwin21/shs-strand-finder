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

function SubjectType({ deleteSubjectType, user, subjectType }) {
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
          {subjectType.subjects.length == 0 && user.isAdmin == true ? (
            <i className="fa-solid fa-rectangle-xmark text-dark fs-3 position-absolute top-0 end-0"></i>
          ) : (
            <></>
          )}
        </a>
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          {subjectType.name}
        </h5>
        <section className="row">
          {subjectType.subjects.map((subject, i) => {
            return <SubjectC key={i} user={user} subject={subject} />;
          })}
        </section>
      </section>
    </>
  );
}

export default connect(null, mapDispatchToProps)(SubjectType);
