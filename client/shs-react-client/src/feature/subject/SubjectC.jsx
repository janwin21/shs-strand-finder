import { connect } from "react-redux";
import { useState } from "react";
import { action } from "../../redux/action";
import { modalType } from "../modal/modalType";
import { assessmentRoute } from "../../route/routes";
import { useNavigate } from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSubject: (subject) =>
      dispatch({
        type: action.DELETE_SUBJECT,
        subjectForDeletion: subject,
      }),
  };
};

function SubjectC({ deleteSubject }) {
  const navigate = useNavigate();
  const [subject] = useState({ name: "ONLINE COMMUNICATION" });

  return (
    <>
      {/*-- SUBJECT CONTAINER --*/}
      <div
        onClick={() => navigate(assessmentRoute.path)}
        className="card col-2 position-relative text-bg-dark p-0 m-3"
        style={{ height: "350px", cursor: "pointer" }}
      >
        <img
          src="../asset/subject/subject1.jpg"
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
          <h5 className="card-title roboto">Subject Name</h5>
        </div>
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(SubjectC);
