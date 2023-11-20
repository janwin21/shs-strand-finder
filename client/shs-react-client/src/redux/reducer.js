import { dataStructure } from "./structure";
import { action } from "./action";

const reducer = (
  state = dataStructure,
  {
    type,
    user,
    test,
    loading,

    // SIDEBAR
    viewableSidebar,

    // PERSONAL ENGAGEMENT VIEWABLE SIDEBAR
    viewablePE,

    // VIEWABLE TUTORIAL
    viewableTutorial,
    tutorialCount,

    // STRANDS
    strandTypeForDeletion,
    strandForDeletion,

    // SUBJECTS
    subjectTypeForDeletion,
    subjectForDeletion,

    // QUESTIONS
    peQuestionForDeletion,
    assessmentQuestionForDeletion,

    // PREPARE SUBJECT
    subjectForPreparation,

    // CURRENT ANSWER KEY
    currentQuestion,

    // NOTIF
    notifMessage,
    isWelcome,

    // SET USER DATA
    fastData,

    // SET SELECTED STRAND
    selectedStrand,
  }
) => {
  switch (type) {
    case action.LOGIN_USER:
      return { ...state, user: user };
    case action.LOGOUT_USER:
      return { ...state, user: null };
    case action.LOAD:
      return { ...state, loading };

    // SIDEBAR
    case action.VIEW_SIDEBAR:
      return { ...state, viewableSidebar };

    // PERSONAL ENGAGEMENT VIEWABLE SIDEBAR
    case action.VIEW_PE:
      return { ...state, viewablePE };

    // VIEWABLE TUTORIAL
    case action.VIEW_TUTORIAL:
      return { ...state, viewableTutorial };
    case action.SET_TUTORIAL_COUNT:
      return { ...state, tutorialCount };

    // STRANDS
    case action.DELETE_STRAND_TYPE:
      return { ...state, strandTypeForDeletion };
    case action.DELETE_STRAND:
      return { ...state, strandForDeletion };

    // SUBJECTS
    case action.DELETE_SUBJECT_TYPE:
      return { ...state, subjectTypeForDeletion };
    case action.DELETE_SUBJECT:
      return { ...state, subjectForDeletion };

    // QUESTIONS
    case action.DELETE_PE_QUESTION:
      return { ...state, peQuestionForDeletion };
    case action.DELETE_ASSESSMENT_QUESTION:
      return { ...state, assessmentQuestionForDeletion };

    // PREPARE SUBJECT
    case action.PREPARE_SUBJECT:
      return { ...state, subjectForPreparation };

    // CURRENT QUESTION
    case action.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion };

    // NOTIF
    case action.SET_NOTIF:
      return { ...state, notifMessage };
    case action.SET_WELCOME:
      return { ...state, isWelcome };

    // SET FAST DATA
    case action.SET_FAST_DATA:
      return { ...state, fastData };

    // SET SELECTED STRAND
    case action.SET_SELECTED_STRAND:
      return { ...state, selectedStrand };

    // TEST
    case action.TEST:
      return { ...state, test: !test };

    default:
      return state;
  }
};

export { reducer };
