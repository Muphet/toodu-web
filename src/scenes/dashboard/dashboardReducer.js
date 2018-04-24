import { OPEN_MODAL, CLOSE_MODAL } from "./dashboardConstants";
import projectReducer from "./scenes/project/projectReducer";
import taskReducer from "./scenes/task/taskReducer";

const defaultState = {
  activeModal: null
};

export default function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, activeModal: action.modal };
    case CLOSE_MODAL:
      return { ...state, activeModal: null };
    default:
      return {
        ...state,
        project: projectReducer(state.project, action),
        task: taskReducer(state.task, action)
      };
  }
}
