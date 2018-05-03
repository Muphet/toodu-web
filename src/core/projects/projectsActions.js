import projectsApi from "./projectsApi";

import { GET_PROJECTS, GET_PROJECT } from "./projectsConstants";

export function getProjects() {
  return dispatch => {
    return projectsApi.get().then(res => {
      dispatch({ type: GET_PROJECTS, projects: res.data });
      return res.data;
    });
  };
}

export function getProject(id) {
  return dispatch => {
    return projectsApi.getOne(id).then(res => {
      dispatch({ type: GET_PROJECT, project: res.data });
      return res.data;
    });
  };
}
