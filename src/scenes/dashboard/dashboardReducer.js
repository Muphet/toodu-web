import { combineReducers } from "redux";
import { OPEN_MODAL, CLOSE_MODAL } from "./dashboardConstants";
import newProjectFormReducer from "./components/newProjectForm/newProjectFormReducer";

function activeModalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  activeModal: activeModalReducer,
  newProjectForm: newProjectFormReducer
});
