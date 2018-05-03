import UtilService from "../../services/UtilService";
import {
  GET_PROJECTS,
  GET_PROJECT,
  PROJECT_CREATED
} from "./projectsConstants";

const defaultState = [];

export default function projectsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects;
    case GET_PROJECT:
      return UtilService.merge(state, action.project);
    case PROJECT_CREATED:
      return state.data.concat(action.project);
    default:
      return state;
  }
}
