import tasksApi from "./tasksApi";

import { GET_TASKS, GET_TASK } from "./tasksConstants";

export function getTasksForProject(projectId) {
  return dispatch => {
    return tasksApi.get({ projectId }).then(res => {
      dispatch({ type: GET_TASKS, tasks: res.data });
      return res.data;
    });
  };
}

export function getTask(taskId) {
  return dispatch => {
    return tasksApi.getOne(taskId).then(res => {
      dispatch({ type: GET_TASK, task: res.data });
      return res.data;
    });
  };
}
