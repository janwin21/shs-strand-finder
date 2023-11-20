import { connect } from "react-redux";
import { action } from "../../../redux/action";

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
function TutorialModal11({ viewTutorial, setTutorialCount }) {
  return (
    <div className="tutorial w-100 h-100 position-absolute top-50 start-50 translate-middle">
      <div className=" tutorial-1 w-100 shadow bg-light position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center">
        <h4 className="w-50 poppins text-center border-bottom border-dark pb-2">
          End Tutorial
        </h4>
        <h5 className="w-50 mt-4 mb-5 roboto text-center fw-light">
          This is it for the tutorial. Hope you learn more before exploring the
          System. Good luck for your assessment.
        </h5>
        {/* BUTTONS */}
        <section className="d-flex justify-content-center">
          <button
            onClick={() => {
              viewTutorial(false);
              setTutorialCount(0);
            }}
            className="btn btn-dark text-light roboto fs-5"
          >
            Finish
          </button>
        </section>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(TutorialModal11);
