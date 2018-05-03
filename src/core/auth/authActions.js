import usersApi from "../users/usersApi";
import { CHANGE_AUTHENTICATED, GET_CURRENT_USER } from "./authConstants";

export function changeAuthenticated(authenticated) {
  return {
    type: CHANGE_AUTHENTICATED,
    authenticated
  };
}

export function getCurrentUser() {
  return dispatch => {
    return usersApi.getOne("current").then(res => {
      dispatch({ type: GET_CURRENT_USER, user: res.data });
      return res.data;
    });
  };
}
