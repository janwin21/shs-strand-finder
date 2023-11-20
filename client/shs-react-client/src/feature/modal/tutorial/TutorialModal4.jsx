import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { action } from "../../../redux/action";
import { _personalEngagementRoute } from "../../../route/routes";

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

function TutorialModal4({ tutorialCount, viewTutorial, setTutorialCount }) {
  const navigate = useNavigate();
  const [tutorialBtn1, setTutorialBtn1] = useState(null);
  const [btn1, setBtn1] = useState(null);
  const [instruction1, setInstruction1] = useState(null);

  useEffect(() => {
    $(() => {
      const tempTutorialBtn1 = $("#tutorial-btn-1");
      const tempBtn1 = $("#btn1");
      const instruction1 = $("#instruction1");

      const offset1 = tempTutorialBtn1.offset();

      tempBtn1.css(
        "transform",
        `translate(${offset1.left}px, ${offset1.top}px)`
      );

      instruction1.css(
        "transform",
        `translate(${offset1.left}px, ${offset1.top}px)`
      );

      setTutorialBtn1(tempTutorialBtn1);
      setBtn1(tempBtn1);
    });
  }, []);

  return (
    <div className="tutorial w-100 h-100 position-absolute top-50 start-50 translate-middle">
      {/* BUTTONS */}
      <button
        onClick={() => {
          viewTutorial(false);
          setTutorialCount(tutorialCount + 1);
          navigate(_personalEngagementRoute.path);
        }}
        id="btn1"
        className="btn btn-dark position-absolute shadow roboto px-4 me-3 fs-6 fw-semibold"
      >
        PERSONAL ENGAGEMENTS
      </button>
      <span
        id="instruction1"
        className="instruction position-absolute bg-dark text-light rounded p-3"
      >
        Click Personal Engagement button.
      </span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialModal4);
