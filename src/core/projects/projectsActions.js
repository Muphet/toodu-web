import projectsApi from "./projectsApi";

import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  GET_PROJECT_START,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR
} from "./projectsConstants";

export function getProjects() {
  return dispatch => {
    dispatch({ type: GET_PROJECTS_START });
    return projectsApi
      .get()
      .then(res => {
        dispatch({ type: GET_PROJECTS_SUCCESS, projects: res.data });
        return res.data;
      })
      .catch(err => {
        dispatch({ type: GET_PROJECTS_ERROR });
      });
  };
}

export function getProject(id) {
  return dispatch => {
    dispatch({ type: GET_PROJECT_START });
    return projectsApi
      .getOne(id)
      .then(res => {
        dispatch({ type: GET_PROJECT_SUCCESS, project: res.data });
        return res.data;
      })
      .catch(err => {
        dispatch({ type: GET_PROJECT_ERROR });
      });
  };
}
