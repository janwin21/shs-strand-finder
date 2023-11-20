import tutorial5 from "../../../asset/tutorial/tutorial5.jpg";
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

function TutorialModal10({ tutorialCount, viewTutorial, setTutorialCount }) {
  return (
    <div className="tutorial w-100 h-100 position-absolute top-50 start-50 translate-middle">
      <div className=" tutorial-2 w-100 shadow bg-light position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center">
        <h4 className="w-50 poppins text-center border-bottom border-dark pb-2">
          Check the Result
        </h4>
        <h5 className="w-50 mt-4 mb-5 text-center roboto fw-light">
          After answering all the questions from Personal Engagement & Subject
          Assessment, result button will appear. This is where you can find all
          the results of your assessment and BEST TOP 3 strands that a system
          Recommends to you.
        </h5>
        <img className="w-50 mb-5" src={tutorial5} alt="tutorial img" />
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

export default connect(mapStateToProps, mapDispatchToProps)(TutorialModal10);
