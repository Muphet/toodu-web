import {
  GET_TEAM_START,
  GET_TEAM_SUCCESS,
  GET_TEAM_ERROR,
} from "./teamsConstants";

const defaultState = {
  fetching: false,
  error: false,
  data: []
};

export default function teamsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TEAM_START:
      return { ...state, fetching: true, error: false };
    case GET_TEAM_SUCCESS:
      return { ...state, fetching: false, data: action.team };
    case GET_TEAM_ERROR:
      return { ...state, fetching: false, error: true };
    default:
      return state;
  }
}
