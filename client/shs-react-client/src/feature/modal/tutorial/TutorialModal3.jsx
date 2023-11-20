import { connect } from "react-redux";
import { action } from "../../../redux/action";

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

function TutorialModal3({ tutorialCount, viewTutorial, setTutorialCount }) {
  return (
    <div className="tutorial w-100 h-100 position-absolute top-50 start-50 translate-middle">
      <div className=" tutorial-1 w-100 shadow bg-light position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center">
        <h4 className="w-50 poppins text-center border-bottom border-dark pb-2">
          Lets Start!
        </h4>
        <h5 className="w-50 mt-4 mb-5 roboto text-center fw-light">
          Both Personal Engagement and Assessments are crucial steps in the
          process. Let's start by exploring your personal insights and then move
          on to the assessment phase. Your journey to discovering your preferred
          strand and career begins now!
        </h5>
        {/* BUTTONS */}
        <section className="d-flex justify-content-center">
          <button
            onClick={() => {
              viewTutorial(false);
              setTutorialCount(0);
            }}
            className="btn btn-danger text-light roboto fs-5 me-2"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
          <button
            onClick={() => {
              setTutorialCount(tutorialCount + 1);
            }}
            className="btn btn-dark text-light roboto fs-5"
          >
            Start
            <span className="ms-2">
              <i class="fa-solid fa-angle-right"></i>
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialModal3);
