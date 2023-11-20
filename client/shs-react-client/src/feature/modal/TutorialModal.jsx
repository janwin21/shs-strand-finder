import { useState } from "react";
import { connect } from "react-redux";
import TutorialModal1 from "./tutorial/TutorialModal1";
import TutorialModal2 from "./tutorial/TutorialModal2";
import TutorialModal3 from "./tutorial/TutorialModal3";
import TutorialModal4 from "./tutorial/TutorialModal4";
import TutorialModal5 from "./tutorial/TutorialModal5";
import TutorialModal6 from "./tutorial/TutorialModal6";
import TutorialModal7 from "./tutorial/TutorialModal7";
import TutorialModal8 from "./tutorial/TutorialModal8";
import TutorialModal9 from "./tutorial/TutorialModal9";
import TutorialModal10 from "./tutorial/TutorialModal10";
import TutorialModal11 from "./tutorial/TutorialModal11";

const mapStateToProps = (state) => {
  return {
    viewableTutorial: state.store.viewableTutorial,
    tutorialCount: state.store.tutorialCount,
  };
};

function TutorialModal({ viewableTutorial, tutorialCount }) {
  const [modalArr] = useState([
    <TutorialModal1 />,
    <TutorialModal2 />,
    <TutorialModal3 />,
    <TutorialModal4 />,
    <TutorialModal5 />,
    <TutorialModal6 />,
    <TutorialModal7 />,
    <TutorialModal8 />,
    <TutorialModal9 />,
    <TutorialModal10 />,
    <TutorialModal11 />,
  ]);

  return viewableTutorial ? modalArr[tutorialCount] : "";
}

export default connect(mapStateToProps, null)(TutorialModal);
