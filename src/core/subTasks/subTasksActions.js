import subTasksApi from "./subTasksApi";

import { GET_SUB_TASKS_FOR_TASK } from "./subTasksConstants";

export function getSubTasksForTask(taskId) {
  return dispatch => {
    return subTasksApi.get({ taskId }).then(res => {
      dispatch({ type: GET_SUB_TASKS_FOR_TASK, subTasks: res.data });
      return res.data;
    });
  };
}
