import tasksApi from "./tasksApi";

import {
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_FOR_PROJECT_START,
  GET_TASKS_FOR_PROJECT_SUCCESS,
  GET_TASKS_FOR_PROJECT_ERROR
} from "./tasksConstants";

export function getTasks() {
  return dispatch => {
    dispatch({ type: GET_TASKS_START });
    tasksApi
      .getAll()
      .then(res => {
        dispatch({ type: GET_TASKS_SUCCESS, tasks: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_TASKS_ERROR });
      });
  };
}

export function getTasksForProject(projectId) {
  return dispatch => {
    dispatch({ type: GET_TASKS_FOR_PROJECT_START });
    tasksApi
      .getForProject(projectId)
      .then(res => {
        dispatch({ type: GET_TASKS_FOR_PROJECT_SUCCESS, tasks: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_TASKS_FOR_PROJECT_ERROR });
      });
  };
}
