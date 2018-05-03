import UtilService from "../../services/UtilService";
import {
  GET_SUB_TASKS_FOR_TASK,
  SUB_TASK_CREATED,
  SUB_TASK_UPDATED
} from "./subTasksConstants";

const defaultState = [];

export default function subTasksReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_SUB_TASKS_FOR_TASK:
      return UtilService.merge(state, action.subTasks);
    case SUB_TASK_CREATED:
      return state.concat(action.subTask);
    case SUB_TASK_UPDATED:
      return UtilService.merge(state, action.subTask);
    default:
      return state;
  }
}
