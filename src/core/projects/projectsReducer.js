import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  PROJECT_CREATED
} from "./projectsConstants";

const defaultState = {
  fetching: false,
  error: false,
  data: []
};

export default function projectsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PROJECTS_START:
      return { ...state, fetching: true, error: false };
    case GET_PROJECTS_SUCCESS:
      return { ...state, fetching: false, data: action.projects };
    case GET_PROJECTS_ERROR:
      return { ...state, fetching: false, error: true };
    case PROJECT_CREATED:
      return { ...state, data: state.data.concat(action.project) };
    default:
      return state;
  }
}
