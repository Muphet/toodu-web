import UtilService from "../../services/UtilService";
import {
  GET_TASKS,
  GET_TASK,
  TASK_CREATED,
  TASK_UPDATED
} from "./tasksConstants";

const defaultState = [];

export default function tasksReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TASKS:
      return action.tasks;
    case GET_TASK:
      return UtilService.merge(state, action.task);
    case TASK_CREATED:
      return state.concat(action.task);
    case TASK_UPDATED:
      return UtilService.merge(state, action.task);
    default:
      return state;
  }
}
