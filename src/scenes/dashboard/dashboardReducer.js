import { CHANGE_PROJECT, CHANGE_TASK } from "./dashboardConstants";

const defaultState = {
  activeProject: null,
  activeTask: null
};

export default function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_PROJECT:
      return { ...state, activeProject: action.projectId, activeTask: null };
    case CHANGE_TASK:
      return { ...state, activeTask: action.taskId };
    default:
      return state;
  }
}
