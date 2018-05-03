import teamsApi from "./teamsApi";

import { GET_TEAM } from "./teamsConstants";

export function getTeam() {
  return dispatch => {
    return teamsApi.getOne("current").then(res => {
      dispatch({ type: GET_TEAM, team: res.data });
      return res.data;
    });
  };
}
