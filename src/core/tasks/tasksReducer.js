import UtilService from "../../services/UtilService";
import {
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_FOR_PROJECT_START,
  GET_TASKS_FOR_PROJECT_SUCCESS,
  GET_TASKS_FOR_PROJECT_ERROR,
  TASK_CREATED
} from "./tasksConstants";

const defaultState = {
  fetchingAll: false,
  fetchingProject: false,
  errorAll: false,
  errorProject: false,
  data: []
};

export default function tasksReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TASKS_START:
      return { ...state, fetchingAll: true, errorAll: false };
    case GET_TASKS_SUCCESS:
      return { ...state, fetchingAll: false, data: action.tasks };
    case GET_TASKS_ERROR:
      return { ...state, fetchingAll: false, errorAll: true };
    case GET_TASKS_FOR_PROJECT_START:
      return { ...state, fetchingProject: action.projectId, errorAll: false };
    case GET_TASKS_FOR_PROJECT_SUCCESS:
      return {
        ...state,
        fetchingAll: false,
        data: UtilService.merge(state.data, action.tasks)
      };
    case GET_TASKS_FOR_PROJECT_ERROR:
      return { ...state, fetchingProject: false, errorProject: true };
    case TASK_CREATED:
      return { ...state, data: state.data.concat(action.task) };
    default:
      return state;
  }
}
