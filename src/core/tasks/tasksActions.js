import tasksApi from "./tasksApi";

import {
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR
} from "./tasksConstants";

export function getTasksForProject(projectId) {
  return dispatch => {
    dispatch({ type: GET_TASKS_START });
    return tasksApi
      .get({ project_id: projectId })
      .then(res => {
        dispatch({ type: GET_TASKS_SUCCESS, tasks: res.data });
        return res.data;
      })
      .catch(err => {
        dispatch({ type: GET_TASKS_ERROR });
      });
  };
}
