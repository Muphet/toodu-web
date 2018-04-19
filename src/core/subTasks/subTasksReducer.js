import UtilService from "../../services/UtilService";
import {
  GET_SUB_TASKS_FOR_TASK_START,
  GET_SUB_TASKS_FOR_TASK_SUCCESS,
  GET_SUB_TASKS_FOR_TASK_ERROR,
  SUB_TASK_CREATED
} from "./subTasksConstants";

const defaultState = {
  fetching: false,
  error: false,
  data: []
};

export default function tasksReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_SUB_TASKS_FOR_TASK_START:
      return { ...state, fetching: true, error: false };
    case GET_SUB_TASKS_FOR_TASK_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: UtilService.merge(state.data, action.subTasks)
      };
    case GET_SUB_TASKS_FOR_TASK_ERROR:
      return { ...state, fetching: false, error: true };
    case SUB_TASK_CREATED:
      return { ...state, data: state.data.concat(action.subTask) };
    default:
      return state;
  }
}
