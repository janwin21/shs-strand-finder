import { createStore, combineReducers } from "redux";
import { dataStructure } from "./structure";
import { action } from "./action";

const reducer = (state = dataStructure, { type, user, viewableSidebar }) => {
  switch (type) {
    case action.LOGIN_USER:
      return { ...state, user: user };
    case action.LOGOUT_USER:
      return { ...state, user: null };
    case action.LOGOUT_USER:
      return { ...state, user: null };
    case action.VIEW_SIDEBAR:
      return { ...state, viewableSidebar };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  store: reducer,
});

const store = createStore(rootReducer);

export { store };
