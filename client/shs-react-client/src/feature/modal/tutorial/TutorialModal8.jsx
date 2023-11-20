import tutorial4 from "../../../asset/tutorial/tutorial4.jpg";
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

function TutorialModal8({ tutorialCount, viewTutorial, setTutorialCount }) {
  return (
    <div className="tutorial w-100 h-100 position-absolute top-50 start-50 translate-middle">
      <div className=" tutorial-2 w-100 shadow bg-light position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center">
        <h4 className="w-50 poppins text-center border-bottom border-dark pb-2">
          Dashboard Result
        </h4>
        <h5 className="w-50 mt-4 mb-5 text-center roboto fw-light">
          You can select any subjects here to choose what assessment do you want
          to take first. After clicking a specific subject, a modal will appear
          to make sure you are ready for a chosen subject.
        </h5>
        <img className="w-25 mb-5" src={tutorial4} alt="tutorial img" />
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
            Next
            <span className="ms-2">
              <i class="fa-solid fa-angle-right"></i>
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialModal8);
