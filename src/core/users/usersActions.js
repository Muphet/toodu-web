import usersApi from "./usersApi";

import { GET_USERS } from "./usersConstants";

export function getUsers() {
  return dispatch => {
    return usersApi.get().then(res => {
      dispatch({ type: GET_USERS, users: res.data });
      return res.data;
    });
  };
}
