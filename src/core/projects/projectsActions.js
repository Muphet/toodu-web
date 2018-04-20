import projectsApi from "./projectsApi";

import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR
} from "./projectsConstants";

export function getProjects() {
  return dispatch => {
    dispatch({ type: GET_PROJECTS_START });
    projectsApi
      .getAll()
      .then(res => {
        dispatch({ type: GET_PROJECTS_SUCCESS, projects: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_PROJECTS_ERROR });
      });
  };
}
