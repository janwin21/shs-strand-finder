import tutorial1 from "../../../asset/tutorial/tutorial1.jpg";
import tutorial2 from "../../../asset/tutorial/tutorial2.webp";
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

function TutorialModal2({ tutorialCount, viewTutorial, setTutorialCount }) {
  return (
    <div className="tutorial w-100 h-100 position-absolute top-50 start-50 translate-middle">
      <div className="tutorial-2 w-100 shadow bg-light position-absolute top-50 start-50 translate-middle d-flex flex-row justify-content-center align-items-center">
        <section className="tutorial-design h-100 position-absolute top-50 start-0 translate-middle-y">
          <img className="w-100 h-100" src={tutorial1} alt="tutorial img" />
          <span className="bg-img design-1 w-100 h-100 position-absolute top-50 start-0 translate-middle-y"></span>
        </section>
        <section className="tutorial-design h-100 position-absolute top-50 end-0 translate-middle-y">
          <img className="w-100 h-100" src={tutorial2} alt="tutorial img" />
          <span className="bg-img design-2 w-100 h-100 position-absolute top-50 end-0 translate-middle-y"></span>
        </section>
        <section className="w-25">
          <h4 className="poppins border-bottom border-dark pb-2">
            1. Personal Engagement
          </h4>
          <ul className="mt-3">
            <li>
              <h5 className="roboto fw-light">
                Answer questions about your personal knowledge, abilities, and
                more.
              </h5>
            </li>
            <li>
              <h5 className="roboto fw-light">
                Remember, there are no right or wrong answers here; it's about
                gathering important data. This information will assist the
                system in finding your preferred strand based on your personal
                engagement.
              </h5>
            </li>
          </ul>
          <h4 className="poppins border-bottom border-dark mt-5 pb-2">
            2. Assessment
          </h4>
          <ul className="mt-3">
            <li>
              <h5 className="roboto fw-light">
                Think of this as an exam or quiz designed to assess your current
                knowledge.
              </h5>
            </li>
            <li>
              <h5 className="roboto fw-light">
                Your responses will provide insight into your existing skills
                and understanding.
              </h5>
            </li>
          </ul>
          {/* BUTTONS */}
          <section className="d-flex justify-content-end mt-5">
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
        </section>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialModal2);
