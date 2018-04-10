import projectsApi from "../../../../core/projects/projectsApi.js";
import { closeModal } from "../../dashboardActions";
import {
  UPDATE_FIELD,
  NEW_PROJECT_START,
  NEW_PROJECT_SUCCESS,
  NEW_PROJECT_ERROR
} from "./newProjectFormConstants";

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field,
    value
  };
}

export function createProject(project) {
  return dispatch => {
    dispatch({ type: NEW_PROJECT_START });
    projectsApi.create(project)
      .then(res => {
        dispatch(closeModal());
        dispatch({ type: NEW_PROJECT_SUCCESS });
      })
      .catch(err => {
        dispatch({
          type: NEW_PROJECT_ERROR,
          errors: err.response.data.errors.full_messages
        });
      });
  };
}
