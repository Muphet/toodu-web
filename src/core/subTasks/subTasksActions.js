import subTasksApi from "./subTasksApi";

import {
  GET_SUB_TASKS_FOR_TASK_START,
  GET_SUB_TASKS_FOR_TASK_SUCCESS,
  GET_SUB_TASKS_FOR_TASK_ERROR
} from "./subTasksConstants";

export function getSubTasksForTask(taskId) {
  return dispatch => {
    dispatch({ type: GET_SUB_TASKS_FOR_TASK_START });
    return subTasksApi
      .get({ taskId })
      .then(res => {
        dispatch({ type: GET_SUB_TASKS_FOR_TASK_SUCCESS, subTasks: res.data });
        return res.data;
      })
      .catch(err => {
        dispatch({ type: GET_SUB_TASKS_FOR_TASK_ERROR });
      });
  };
}
