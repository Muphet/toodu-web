import { GET_TEAM } from "./teamsConstants";

const defaultState = null;

export default function teamsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TEAM:
      return action.team;
    default:
      return state;
  }
}
