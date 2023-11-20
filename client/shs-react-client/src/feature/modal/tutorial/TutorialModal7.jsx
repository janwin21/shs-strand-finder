import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { subjectRoute } from "../../../route/routes";

const mapStateToProps = (state) => {
  return {
    tutorialCount: state.store.tutorialCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewTutorial: (viewableTutorial) =>
      dispatch({
        type: action.VIEW_TUTORIAL,
        viewableTutorial,
      }),
    setTutorialCount: (tutorialCount) =>
      dispatch({
        type: action.SET_TUTORIAL_COUNT,
        tutorialCount,
      }),
  };
};

function TutorialModal7({ tutorialCount, viewTutorial, setTutorialCount }) {
  const navigate = useNavigate();
  const [tutorialBtn2, setTutorialBtn2] = useState(null);
  const [btn2, setBtn2] = useState(null);
  const [instruction2, setInstruction2] = useState(null);

  useEffect(() => {
    $(() => {
      const tempTutorialBtn2 = $("#tutorial-btn-2");
      const tempBtn2 = $("#btn2");
      const instruction2 = $("#instruction2");

      const offset2 = tempTutorialBtn2.offset();

      tempBtn2.css(
        "transform",
        `translate(${offset2.left}px, ${offset2.top}px)`
      );

      instruction2.css(
        "transform",
        `translate(${offset2.left}px, ${offset2.top}px)`
      );

      setTutorialBtn2(tempTutorialBtn2);
      setBtn2(tempBtn2);
    });
  }, []);

  return (
    <div className="tutorial w-100 h-100 position-absolute top-50 start-50 translate-middle">
      {/* BUTTONS */}
      <button
        onClick={() => {
          viewTutorial(false);
          setTutorialCount(tutorialCount + 1);
          navigate(subjectRoute.path);
        }}
        id="btn2"
        className="btn btn-primary position-absolute shadow text-light roboto px-4 me-3 fs-6 fw-semibold"
      >
        TAKE ASSESSMENT
      </button>
      <span
        id="instruction2"
        className="instruction position-absolute bg-dark text-light rounded p-3"
      >
        Click Take Assessment button.
      </span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialModal7);
