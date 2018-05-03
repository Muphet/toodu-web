import { GET_TEAM, TEAM_UPDATED } from "./teamsConstants";

const defaultState = null;

export default function teamsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TEAM:
      return action.team;
    case TEAM_UPDATED:
      return action.team;
    default:
      return state;
  }
}
