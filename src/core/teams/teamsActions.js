import teamsApi from "./teamsApi";

import {
  GET_TEAM_START,
  GET_TEAM_SUCCESS,
  GET_TEAM_ERROR
} from "./teamsConstants";

export function getTeam() {
  return dispatch => {
    dispatch({ type: GET_TEAM_START });
    return teamsApi
      .getOne("current")
      .then(res => {
        dispatch({ type: GET_TEAM_SUCCESS, team: res.data });
        return res.data;
      })
      .catch(err => {
        dispatch({ type: GET_TEAM_ERROR });
      });
  };
}
