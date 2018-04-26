import UtilService from "../../services/UtilService";
import {
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  TASK_CREATED,
  TASK_UPDATED
} from "./tasksConstants";

const defaultState = {
  fetching: false,
  error: false,
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
    case TASK_CREATED:
      return { ...state, data: state.data.concat(action.task) };
    case TASK_UPDATED:
      return { ...state, data: UtilService.merge(state.data, action.task) };
    default:
      return state;
  }
}
