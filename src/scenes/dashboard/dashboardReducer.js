import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CHANGE_PROJECT,
  CHANGE_TASK
} from "./dashboardConstants";

const defaultState = {
  activeModal: null,
  activeProject: null,
  activeTask: null
};

export default function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, activeModal: action.modal };
    case CLOSE_MODAL:
      return { ...state, activeModal: null };
    case CHANGE_PROJECT:
      return { ...state, activeProject: action.projectId, activeTask: null };
    case CHANGE_TASK:
      return { ...state, activeTask: action.taskId };
    default:
      return state;
  }
}
