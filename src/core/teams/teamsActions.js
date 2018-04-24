import teamsApi from "./teamsApi";

import {
  GET_TEAM_START,
  GET_TEAM_SUCCESS,
  GET_TEAM_ERROR
} from "./teamsConstants";

export function getTeam() {
  return dispatch => {
    dispatch({ type: GET_TEAM_START });
    teamsApi
      .get()
      .then(res => {
        dispatch({ type: GET_TEAM_SUCCESS, team: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_TEAM_ERROR });
      });
  };
}
