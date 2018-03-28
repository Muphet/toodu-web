import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR
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
    default:
      return state;
  }
}
