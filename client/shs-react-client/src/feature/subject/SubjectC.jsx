import { connect } from "react-redux";
import { useState } from "react";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";
import Localhost from "../../js/model/LocalHost";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubject: (subject) =>
      dispatch({
        type: action.DELETE_SUBJECT,
        subjectForDeletion: subject,
      }),
    prepareSubject: (preparedSubject) =>
      dispatch({
        type: action.PREPARE_SUBJECT,
        subjectForPreparation: preparedSubject,
      }),
  };
};

function SubjectC({ deleteSubject, prepareSubject, subject }) {
  return (
    <>
      {/*-- SUBJECT CONTAINER --*/}
      <div
        data-bs-toggle="modal"
        data-bs-target={"#" + modalType.ASSESSMENT_PREPARATION}
        className="card col-2 position-relative text-bg-dark p-0 m-3"
        style={{ height: "350px", cursor: "pointer" }}
        onClick={(event) => {
          event.preventDefault();
          prepareSubject(subject);
        }}
      >
        <img
          src={Localhost.path() + subject.imagePath}
          className="card-img h-100"
          alt="subject img"
        />
        <a
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            deleteSubject(subject);
          }}
          data-bs-toggle="modal"
          data-bs-target={"#" + modalType.SUBJECT_DELETION}
          className="nav-link"
        >
          <i className="fa-solid fa-rectangle-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
        </a>
        <div className="bg-dark position-absolute p-2 bottom-0 w-100">
          <h6 className="card-title roboto">{subject.name}</h6>
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(SubjectC);
