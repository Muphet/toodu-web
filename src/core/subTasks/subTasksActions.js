import subTasksApi from "./subTasksApi";

import {
  GET_SUB_TASKS_FOR_TASK_START,
  GET_SUB_TASKS_FOR_TASK_SUCCESS,
  GET_SUB_TASKS_FOR_TASK_ERROR
} from "./subTasksConstants";

export function getSubTasksForTask(taskId) {
  return dispatch => {
    dispatch({ type: GET_SUB_TASKS_FOR_TASK_START });
    subTasksApi
      .getForTask(taskId)
      .then(res => {
        dispatch({ type: GET_SUB_TASKS_FOR_TASK_SUCCESS, tasks: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_SUB_TASKS_FOR_TASK_ERROR });
      });
  };
}
